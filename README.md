# dkn2-ui

Linear-inspired React UI component library built on shadcn/ui.

## Install

### shadcn registry (per component)

Add the `@dkn2` registry namespace to your project's `components.json` once:

```json
{
  "registries": {
    "@dkn2": "https://dkapanidis.github.io/dkn2-ui/r/{name}.json"
  }
}
```

Then install components — shadcn copies the source files into your project and installs npm dependencies, dkn2-ui's styled primitives (button, dialog, ...), and the theme CSS variables automatically:

```bash
npx shadcn@latest add @dkn2/data-table
npx shadcn@latest add @dkn2/create-issue
npx shadcn@latest add @dkn2/side-menu
npx shadcn@latest add @dkn2/command-menu
npx shadcn@latest add @dkn2/theme
```

To pull the latest version of already-installed components (after dkn2-ui pushes to main), re-run with `--overwrite`:

```bash
npx shadcn@latest add @dkn2/data-table --overwrite --yes
```

> Direct URLs also work without the namespace config, e.g.
> `npx shadcn@latest add https://dkapanidis.github.io/dkn2-ui/r/data-table.json`

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

| Component | Description |
|-----------|-------------|
| `data-table` | Linear-inspired data table with sorting, filtering, selection, drag-and-drop, and keyboard navigation. |
| `create-issue` | Linear-style create issue dialog with configurable attribute schema. |
| `attribute-button` | Compact attribute picker button used in issue forms. |
| `color-picker` | Color swatch picker popover. |
| `side-menu` | Collapsible sidebar navigation with icons and active states. |
| `command-menu` | ⌘K command palette with grouped items and keyboard shortcuts. |
| `settings` | Settings page layout with sections and controls. |
| `theme` | ThemeProvider, useTheme hook, and ThemeToggle button. |

The registry also publishes dkn2-ui's customized shadcn primitives (`button`, `dialog`, `table`, ...) and a `theme-css` item with the library's CSS variables (light/dark, including the `selected` and `sidebar` tokens). These are declared as registry dependencies of the components above and are pulled in automatically — npm dependencies (pinned to this repo's versions) are installed automatically too.

The registry is rebuilt and deployed to GitHub Pages by CI on every push to `main` (`.github/workflows/pages.yml`), so publishing an update is just pushing a commit.

## Development

```bash
bun install
bun run dev        # Start Storybook on http://localhost:6006
bun run build      # Build dist/
bun run build:registry  # Generate public/registry.json and public/r/*.json
bun run build:all  # Build dist/ and registry
```
