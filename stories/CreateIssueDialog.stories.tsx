import type { Meta, StoryObj } from '@storybook/react-vite'
import * as React from 'react'
import { CreateIssueDialog, defaultIssueSchema, type IssueCreateValues } from '../src/components/create-issue'
import { Toaster } from '../src/components/ui/sonner'
import { toast } from 'sonner'

function CreateIssueDialogDemo() {
  const [open, setOpen] = React.useState(false)

  const handleCreate = (values: IssueCreateValues) => {
    toast.success(`Issue created: "${values.title}"`, {
      description: [
        `Status: ${values.status}`,
        values.priority && `Priority: ${values.priority}`,
        values.labels.length > 0 && `Labels: ${values.labels.join(', ')}`,
        values.project && `Project: ${values.project}`,
      ].filter(Boolean).join(' · '),
    })
  }

  return (
    <div className="flex h-full w-full items-center justify-center bg-background">
      <Toaster richColors />
      <div className="flex flex-col items-center gap-4">
        <button
          onClick={() => setOpen(true)}
          className="px-4 py-2 rounded-md bg-violet-600 hover:bg-violet-500 text-sm font-medium text-white transition-colors"
        >
          Create issue
        </button>
        <p className="text-xs text-muted-foreground">or press <kbd className="px-1.5 py-0.5 rounded border border-border font-mono text-xs">C</kbd></p>
      </div>
      <CreateIssueDialog
        open={open}
        onOpenChange={setOpen}
        schema={defaultIssueSchema}
        onCreate={handleCreate}
      />
    </div>
  )
}

const meta: Meta = {
  title: 'Components/CreateIssueDialog',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A Linear-style issue creation dialog with status, priority, label, and project pickers.',
      },
    },
  },
}

export default meta

export const Default: StoryObj = {
  render: () => <CreateIssueDialogDemo />,
}

export const OpenByDefault: StoryObj = {
  render: () => {
    const [open, setOpen] = React.useState(true)
    return (
      <div className="h-screen bg-background">
        <Toaster richColors />
        <CreateIssueDialog
          open={open}
          onOpenChange={setOpen}
          schema={defaultIssueSchema}
          onCreate={(values) => toast.success(`Created: "${values.title}"`)}
        />
        {!open && (
          <div className="flex h-full items-center justify-center">
            <button
              onClick={() => setOpen(true)}
              className="px-4 py-2 rounded-md bg-violet-600 hover:bg-violet-500 text-sm font-medium text-white"
            >
              Reopen
            </button>
          </div>
        )}
      </div>
    )
  },
}
