import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync } from 'fs'
import { join, basename } from 'path'

const ROOT = join(import.meta.dir, '..')
const COMPONENTS_DIR = join(ROOT, 'src', 'components')
const UI_DIR = join(COMPONENTS_DIR, 'ui')
const PUBLIC_DIR = join(ROOT, 'public')
const PUBLIC_R_DIR = join(PUBLIC_DIR, 'r')

// Base URL where public/r/*.json is served from. registryDependencies use
// absolute URLs so consumers don't need any namespace config for transitive deps.
const REGISTRY_URL = process.env.REGISTRY_URL ?? 'https://dkapanidis.github.io/dkn2-ui/r'

mkdirSync(PUBLIC_R_DIR, { recursive: true })

const pkg = JSON.parse(readFileSync(join(ROOT, 'package.json'), 'utf-8'))
const pkgDeps: Record<string, string> = { ...pkg.dependencies, ...pkg.peerDependencies }

// Optional titles/descriptions; components without an entry get a generated title.
const meta: Record<string, { title: string; description: string }> = {
  'attribute-button': {
    title: 'Attribute Button',
    description: 'Compact attribute picker button used in issue forms.',
  },
  'color-picker': {
    title: 'Color Picker',
    description: 'Color swatch picker popover.',
  },
  'command-menu': {
    title: 'Command Menu',
    description: '⌘K command palette with grouped items and keyboard shortcuts.',
  },
  'create-issue': {
    title: 'Create Issue Dialog',
    description: 'Linear-style create issue dialog with configurable attribute schema.',
  },
  'data-table': {
    title: 'Data Table',
    description:
      'Linear-inspired data table with sorting, filtering, selection, drag-and-drop, and keyboard navigation.',
  },
  settings: {
    title: 'Settings Page',
    description: 'Settings page layout with sections and controls.',
  },
  'side-menu': {
    title: 'Side Menu',
    description: 'Collapsible sidebar navigation with icons and active states.',
  },
  theme: {
    title: 'Theme',
    description: 'ThemeProvider, useTheme hook, and ThemeToggle button.',
  },
}

interface RegistryFile {
  path: string
  content: string
  type: string
}

interface RegistryItem {
  name: string
  type: string
  title: string
  description: string
  dependencies: string[]
  registryDependencies: string[]
  files: RegistryFile[]
  cssVars?: Record<string, Record<string, string>>
}

const IMPORT_RE = /from\s+['"]([^'"]+)['"]/g
const EXCLUDED_PACKAGES = new Set(['react', 'react-dom'])

function packageName(specifier: string): string {
  const parts = specifier.split('/')
  return specifier.startsWith('@') ? parts.slice(0, 2).join('/') : parts[0]
}

function titleCase(slug: string): string {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

// Scan file contents for npm dependencies and internal registry dependencies.
function analyzeImports(files: RegistryFile[], selfName: string) {
  const dependencies = new Set<string>()
  const registryDependencies = new Set<string>()

  for (const file of files) {
    for (const match of file.content.matchAll(IMPORT_RE)) {
      const spec = match[1]
      if (spec.startsWith('.')) {
        // ui primitives are separate registry items, so a relative import
        // between them (e.g. command.tsx -> './dialog') is a cross-item dep.
        if (file.path.startsWith('components/ui/')) {
          const name = basename(spec)
          if (name !== selfName) registryDependencies.add(`${REGISTRY_URL}/${name}.json`)
        }
        continue
      }
      if (spec.startsWith('@/components/ui/')) {
        const name = spec.slice('@/components/ui/'.length)
        if (name !== selfName) registryDependencies.add(`${REGISTRY_URL}/${name}.json`)
      } else if (spec.startsWith('@/components/')) {
        const name = spec.slice('@/components/'.length).split('/')[0]
        if (name !== selfName) registryDependencies.add(`${REGISTRY_URL}/${name}.json`)
      } else if (spec === '@/lib/utils') {
        registryDependencies.add('utils')
      } else if (!spec.startsWith('@/')) {
        const name = packageName(spec)
        if (!EXCLUDED_PACKAGES.has(name)) {
          dependencies.add(pkgDeps[name] ? `${name}@${pkgDeps[name]}` : name)
        }
      }
    }
  }

  return {
    dependencies: [...dependencies].sort(),
    registryDependencies: [...registryDependencies].sort(),
  }
}

// --- Theme item: extract css variables from globals.css so consumers get the
// non-standard tokens (--selected, --sidebar-*, ...) merged into their css.
function parseCssBlock(css: string, selector: string): Record<string, string> {
  const start = css.indexOf(`${selector} {`)
  if (start === -1) return {}
  const end = css.indexOf('}', start)
  const block = css.slice(css.indexOf('{', start) + 1, end)
  const vars: Record<string, string> = {}
  for (const match of block.matchAll(/--([\w-]+):\s*([^;]+);/g)) {
    vars[match[1]] = match[2].trim()
  }
  return vars
}

const globalsCss = readFileSync(join(ROOT, 'src', 'styles', 'globals.css'), 'utf-8')
const themeItem: RegistryItem = {
  name: 'theme-css',
  type: 'registry:theme',
  title: 'dkn2 Theme Variables',
  description: 'CSS variables (light/dark) for dkn2-ui, including selected/sidebar tokens.',
  dependencies: [],
  registryDependencies: [],
  files: [],
  cssVars: {
    theme: {
      '--color-selected': 'var(--selected)',
      '--color-selected-foreground': 'var(--selected-foreground)',
    },
    light: parseCssBlock(globalsCss, ':root'),
    dark: parseCssBlock(globalsCss, '.dark'),
  },
}

// --- UI primitives (this repo customizes them, so ship our own versions) ---
const uiItems: RegistryItem[] = readdirSync(UI_DIR)
  .filter((f) => f.endsWith('.tsx'))
  .map((filename) => {
    const name = basename(filename, '.tsx')
    const content = readFileSync(join(UI_DIR, filename), 'utf-8')
    const files: RegistryFile[] = [
      { path: `components/ui/${filename}`, content, type: 'registry:ui' },
    ]
    const { dependencies, registryDependencies } = analyzeImports(files, name)
    registryDependencies.push(`${REGISTRY_URL}/theme-css.json`)
    return {
      name,
      type: 'registry:ui',
      title: titleCase(name),
      description: `dkn2-ui styled ${titleCase(name)} primitive.`,
      dependencies,
      registryDependencies,
      files,
    }
  })

// --- Composite components: every directory under src/components except ui ---
const componentItems: RegistryItem[] = readdirSync(COMPONENTS_DIR)
  .filter((d) => d !== 'ui' && statSync(join(COMPONENTS_DIR, d)).isDirectory())
  .map((dir) => {
    const fullDir = join(COMPONENTS_DIR, dir)
    const files: RegistryFile[] = readdirSync(fullDir)
      .filter((f) => /\.(tsx?|css)$/.test(f))
      .map((filename) => ({
        path: `components/${dir}/${filename}`,
        content: readFileSync(join(fullDir, filename), 'utf-8'),
        type: 'registry:component',
      }))
    const { dependencies, registryDependencies } = analyzeImports(files, dir)
    return {
      name: dir,
      type: 'registry:component',
      title: meta[dir]?.title ?? titleCase(dir),
      description: meta[dir]?.description ?? `dkn2-ui ${titleCase(dir)} component.`,
      dependencies,
      registryDependencies,
      files,
    }
  })

const registryItems = [themeItem, ...uiItems, ...componentItems]

// Generate public/registry.json (index)
const registryIndex = {
  $schema: 'https://ui.shadcn.com/schema/registry.json',
  name: 'dkn2',
  homepage: 'https://github.com/dkapanidis/dkn2-ui',
  items: registryItems.map((item) => ({
    name: item.name,
    type: item.type,
    title: item.title,
    description: item.description,
  })),
}

writeFileSync(join(PUBLIC_DIR, 'registry.json'), JSON.stringify(registryIndex, null, 2), 'utf-8')
console.log('Generated public/registry.json')

// Generate public/r/{name}.json for each item
for (const item of registryItems) {
  const registryItemJson = {
    $schema: 'https://ui.shadcn.com/schema/registry-item.json',
    ...item,
  }
  writeFileSync(
    join(PUBLIC_R_DIR, `${item.name}.json`),
    JSON.stringify(registryItemJson, null, 2),
    'utf-8'
  )
  console.log(`Generated public/r/${item.name}.json`)
}

console.log(`Registry build complete: ${registryItems.length} items.`)
