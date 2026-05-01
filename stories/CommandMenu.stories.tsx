import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  AlertCircleIcon,
  FileIcon,
  FolderIcon,
  HomeIcon,
  PlusIcon,
  Settings2Icon,
  TargetIcon,
  UsersIcon,
} from 'lucide-react'
import * as React from 'react'
import { Button } from '../src/components/ui/button'
import { CommandMenu, type CommandMenuGroup } from '../src/components/command-menu'

const commandGroups: CommandMenuGroup[] = [
  {
    label: 'Navigation',
    items: [
      {
        id: 'goto-home',
        label: 'Go to Home',
        icon: HomeIcon,
        keywords: ['home', 'dashboard'],
        shortcut: 'G H',
        onSelect: () => alert('Navigate to Home'),
      },
      {
        id: 'goto-issues',
        label: 'Go to Issues',
        icon: AlertCircleIcon,
        keywords: ['issues', 'bugs', 'tasks'],
        shortcut: 'G I',
        onSelect: () => alert('Navigate to Issues'),
      },
      {
        id: 'goto-projects',
        label: 'Go to Projects',
        icon: FolderIcon,
        keywords: ['projects'],
        shortcut: 'G P',
        onSelect: () => alert('Navigate to Projects'),
      },
      {
        id: 'goto-cycles',
        label: 'Go to Cycles',
        icon: TargetIcon,
        keywords: ['cycles', 'sprints'],
        shortcut: 'G C',
        onSelect: () => alert('Navigate to Cycles'),
      },
      {
        id: 'goto-members',
        label: 'Go to Members',
        icon: UsersIcon,
        keywords: ['members', 'team', 'people'],
        shortcut: 'G M',
        onSelect: () => alert('Navigate to Members'),
      },
      {
        id: 'goto-settings',
        label: 'Go to Settings',
        icon: Settings2Icon,
        keywords: ['settings', 'preferences', 'config'],
        shortcut: 'G S',
        onSelect: () => alert('Navigate to Settings'),
      },
    ],
  },
  {
    label: 'Actions',
    items: [
      {
        id: 'create-issue',
        label: 'Create Issue',
        icon: PlusIcon,
        keywords: ['new', 'create', 'add', 'issue'],
        shortcut: 'C',
        onSelect: () => alert('Create Issue'),
      },
      {
        id: 'create-project',
        label: 'Create Project',
        icon: FolderIcon,
        keywords: ['new', 'create', 'project'],
        onSelect: () => alert('Create Project'),
      },
      {
        id: 'create-document',
        label: 'New Document',
        icon: FileIcon,
        keywords: ['new', 'document', 'doc', 'page'],
        onSelect: () => alert('New Document'),
      },
    ],
  },
]

function CommandMenuWrapper() {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-3">
        <Button
          variant="outline"
          onClick={() => setOpen(true)}
          className="gap-2"
        >
          <span>Open Command Menu</span>
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>K
          </kbd>
        </Button>
      </div>
      <p className="text-sm text-muted-foreground">
        Or press <kbd className="font-mono text-xs bg-muted border border-border px-1.5 py-0.5 rounded">⌘K</kbd> to open
      </p>
      <CommandMenu
        groups={commandGroups}
        open={open}
        onOpenChange={setOpen}
        triggerShortcut={true}
        placeholder="Type a command or search..."
      />
    </div>
  )
}

const meta: Meta = {
  title: 'Components/CommandMenu',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A Linear-style command palette that opens with ⌘K.',
      },
    },
  },
}

export default meta

export const Default: StoryObj = {
  render: () => <CommandMenuWrapper />,
}
