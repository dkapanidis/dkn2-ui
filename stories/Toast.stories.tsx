import type { Meta, StoryObj } from '@storybook/react-vite'
import * as React from 'react'
import { toast } from 'sonner'
import { Button } from '../src/components/ui/button'
import { Toaster } from '../src/components/ui/sonner'

function ToastDemo() {
  return (
    <div className="space-y-4">
      <Toaster richColors />
      <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
        Toast Variants
      </h3>
      <div className="flex flex-wrap gap-3">
        <Button
          variant="outline"
          size="sm"
          onClick={() =>
            toast.success('Issue created', {
              description: 'ENG-1234 has been created successfully.',
            })
          }
        >
          Success
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={() =>
            toast.error('Failed to save', {
              description: 'There was an error saving your changes. Please try again.',
            })
          }
        >
          Error
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={() =>
            toast.info('Sync in progress', {
              description: 'Your workspace is syncing with the server.',
            })
          }
        >
          Info
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={() =>
            toast.warning('Storage limit', {
              description: "You're approaching your storage limit (85% used).",
            })
          }
        >
          Warning
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            const toastId = toast.loading('Updating issue...', {
              description: 'Please wait while we save your changes.',
            })
            setTimeout(() => {
              toast.success('Issue updated', {
                id: toastId,
                description: 'Your changes have been saved.',
              })
            }, 2000)
          }}
        >
          Loading → Success
        </Button>

        <Button
          variant="default"
          size="sm"
          onClick={() =>
            toast('New comment', {
              description: 'Alice commented on ENG-1234.',
              action: {
                label: 'View',
                onClick: () => alert('Navigate to issue'),
              },
            })
          }
        >
          With Action
        </Button>

        <Button
          variant="secondary"
          size="sm"
          onClick={() =>
            toast.promise(
              new Promise<{ name: string }>((resolve) =>
                setTimeout(() => resolve({ name: 'ENG-5678' }), 1500)
              ),
              {
                loading: 'Creating issue...',
                success: (data) => `Issue ${data.name} created!`,
                error: 'Failed to create issue',
              }
            )
          }
        >
          Promise Toast
        </Button>
      </div>
    </div>
  )
}

const meta: Meta = {
  title: 'Components/Toast',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Toast notifications using Sonner. Click the buttons to trigger different variants.',
      },
    },
  },
}

export default meta

export const AllVariants: StoryObj = {
  render: () => <ToastDemo />,
}
