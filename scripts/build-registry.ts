import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'fs'
import { join } from 'path'

const ROOT = join(import.meta.dir, '..')
const PUBLIC_DIR = join(ROOT, 'public')
const PUBLIC_R_DIR = join(PUBLIC_DIR, 'r')

mkdirSync(PUBLIC_R_DIR, { recursive: true })

interface RegistryFile {
  path: string
  content: string
  type: string
  target: string
}

interface RegistryItem {
  name: string
  type: string
  title: string
  description: string
  dependencies: string[]
  registryDependencies: string[]
  files: RegistryFile[]
}

interface RegistryIndexItem {
  name: string
  type: string
  title: string
  description: string
}

function readComponentFiles(_dir: string, componentDir: string): RegistryFile[] {
  const fullDir = join(ROOT, 'src', 'components', componentDir)
  const files = readdirSync(fullDir) as string[]
  return files.map((filename: string) => {
    const filePath = join(fullDir, filename)
    const content = readFileSync(filePath, 'utf-8')
    return {
      path: `components/${componentDir}/${filename}`,
      content,
      type: 'registry:component',
      target: '',
    }
  })
}

const registryItems: RegistryItem[] = [
  {
    name: 'data-table',
    type: 'registry:component',
    title: 'Data Table',
    description: 'Linear-inspired data table with sort, search, and pagination.',
    dependencies: ['@tanstack/react-table'],
    registryDependencies: ['table', 'input', 'button'],
    files: readComponentFiles(ROOT, 'data-table'),
  },
  {
    name: 'side-menu',
    type: 'registry:component',
    title: 'Side Menu',
    description: 'Collapsible sidebar navigation with icons and active states.',
    dependencies: [],
    registryDependencies: ['tooltip', 'separator', 'button', 'scroll-area'],
    files: readComponentFiles(ROOT, 'side-menu'),
  },
  {
    name: 'filter-bar',
    type: 'registry:component',
    title: 'Filter Bar',
    description: 'Filter chips bar with search and dropdown filter picker.',
    dependencies: [],
    registryDependencies: ['input', 'button', 'dropdown-menu', 'popover', 'badge'],
    files: readComponentFiles(ROOT, 'filter-bar'),
  },
  {
    name: 'command-menu',
    type: 'registry:component',
    title: 'Command Menu',
    description: '⌘K command palette with grouped items and keyboard shortcuts.',
    dependencies: ['cmdk'],
    registryDependencies: ['command', 'dialog'],
    files: readComponentFiles(ROOT, 'command-menu'),
  },
  {
    name: 'theme',
    type: 'registry:component',
    title: 'Theme',
    description: 'ThemeProvider, useTheme hook, and ThemeToggle button.',
    dependencies: [],
    registryDependencies: ['button'],
    files: readComponentFiles(ROOT, 'theme'),
  },
]

// Generate public/registry.json (index)
const registryIndex = {
  $schema: 'https://ui.shadcn.com/schema/registry.json',
  name: 'dkn2-ui',
  homepage: 'https://github.com/dkapanidis/dkn2-ui',
  items: registryItems.map((item): RegistryIndexItem => ({
    name: item.name,
    type: item.type,
    title: item.title,
    description: item.description,
  })),
}

writeFileSync(
  join(PUBLIC_DIR, 'registry.json'),
  JSON.stringify(registryIndex, null, 2),
  'utf-8'
)
console.log('Generated public/registry.json')

// Generate public/r/{name}.json for each component
for (const item of registryItems) {
  const outPath = join(PUBLIC_R_DIR, `${item.name}.json`)
  const registryItemJson = {
    $schema: 'https://ui.shadcn.com/schema/registry-item.json',
    name: item.name,
    type: item.type,
    title: item.title,
    description: item.description,
    dependencies: item.dependencies,
    registryDependencies: item.registryDependencies,
    files: item.files,
  }
  writeFileSync(outPath, JSON.stringify(registryItemJson, null, 2), 'utf-8')
  console.log(`Generated public/r/${item.name}.json`)
}

console.log('Registry build complete.')
