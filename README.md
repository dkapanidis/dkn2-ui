# dkn2-ui

Linear-inspired React UI component library built on shadcn/ui.

## Install

### shadcn registry (per component)

Copy individual components directly into your project. shadcn will install dependencies automatically.

```bash
npx shadcn@latest add https://dkapanidis.github.io/dkn2-ui/r/data-table
npx shadcn@latest add https://dkapanidis.github.io/dkn2-ui/r/side-menu
npx shadcn@latest add https://dkapanidis.github.io/dkn2-ui/r/filter-bar
npx shadcn@latest add https://dkapanidis.github.io/dkn2-ui/r/command-menu
npx shadcn@latest add https://dkapanidis.github.io/dkn2-ui/r/theme
```

### GitHub package (full library)

Install the entire library as a package:

```bash
# Latest
bun add github:dkapanidis/dkn2-ui

# Pinned to a specific commit SHA (recommended for production)
bun add github:dkapanidis/dkn2-ui#<sha>
```

Then import the global CSS in your app entry point (e.g. `main.tsx` or `app/layout.tsx`):

```ts
import 'dkn2-ui/styles'
```

## Components

| Component | Description | Dependencies |
|-----------|-------------|--------------|
| `data-table` | Linear-inspired data table with sort, search, and pagination. | `@tanstack/react-table` |
| `side-menu` | Collapsible sidebar navigation with icons and active states. | — |
| `filter-bar` | Filter chips bar with search and dropdown filter picker. | — |
| `command-menu` | ⌘K command palette with grouped items and keyboard shortcuts. | `cmdk` |
| `theme` | ThemeProvider, useTheme hook, and ThemeToggle button. | — |

All components depend on shadcn/ui base components (button, badge, input, etc.) which are resolved automatically when using the registry method.

## Development

```bash
bun install
bun run dev        # Start Storybook on http://localhost:6006
bun run build      # Build dist/
bun run build:registry  # Generate public/registry.json and public/r/*.json
bun run build:all  # Build dist/ and registry
```
