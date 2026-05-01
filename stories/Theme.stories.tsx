import type { Meta, StoryObj } from '@storybook/react-vite'
import * as React from 'react'
import { Badge } from '../src/components/ui/badge'
import { Button } from '../src/components/ui/button'
import { Input } from '../src/components/ui/input'
import { Label } from '../src/components/ui/label'
import { Separator } from '../src/components/ui/separator'
import { ThemeProvider, ThemeToggle, useTheme } from '../src/components/theme'

function ThemeShowcase() {
  const { theme, resolvedTheme } = useTheme()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">Theme Demo</h2>
          <p className="text-sm text-muted-foreground">
            Current: <span className="font-mono">{theme}</span> (resolved:{' '}
            <span className="font-mono">{resolvedTheme}</span>)
          </p>
        </div>
        <ThemeToggle />
      </div>

      <Separator />

      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
          Color Palette
        </h3>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {[
            { name: 'Background', cls: 'bg-background border border-border' },
            { name: 'Card', cls: 'bg-card border border-border' },
            { name: 'Muted', cls: 'bg-muted' },
            { name: 'Accent', cls: 'bg-accent' },
            { name: 'Primary', cls: 'bg-primary' },
            { name: 'Secondary', cls: 'bg-secondary' },
            { name: 'Destructive', cls: 'bg-destructive' },
            { name: 'Border', cls: 'bg-border' },
          ].map((item) => (
            <div key={item.name} className="space-y-1">
              <div className={`h-10 rounded-md ${item.cls}`} />
              <p className="text-xs text-muted-foreground">{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
          Component Samples
        </h3>
        <div className="flex flex-wrap gap-2">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
        <div className="max-w-sm space-y-2">
          <Label htmlFor="demo-input">Label</Label>
          <Input id="demo-input" placeholder="Input placeholder..." />
        </div>
      </div>
    </div>
  )
}

function SelfContainedThemeDemo() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="story-theme">
      <div className="bg-background text-foreground p-6 rounded-lg border border-border">
        <ThemeShowcase />
      </div>
    </ThemeProvider>
  )
}

const meta: Meta = {
  title: 'Components/Theme',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Theme provider and toggle for light/dark/system theme switching.',
      },
    },
  },
}

export default meta

export const ThemeToggleDemo: StoryObj = {
  render: () => <SelfContainedThemeDemo />,
}

export const LightMode: StoryObj = {
  render: () => (
    <ThemeProvider defaultTheme="light" storageKey="story-light-theme">
      <div className="bg-background text-foreground p-6 rounded-lg border border-border">
        <ThemeShowcase />
      </div>
    </ThemeProvider>
  ),
}

export const DarkMode: StoryObj = {
  render: () => (
    <ThemeProvider defaultTheme="dark" storageKey="story-dark-theme">
      <div className="dark bg-background text-foreground p-6 rounded-lg border border-border">
        <ThemeShowcase />
      </div>
    </ThemeProvider>
  ),
}
