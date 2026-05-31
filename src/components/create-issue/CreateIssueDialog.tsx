import * as DialogPrimitive from '@radix-ui/react-dialog'
import { EllipsisIcon, ExpandIcon, MinimizeIcon, XIcon } from 'lucide-react'
import * as React from 'react'
import { AttributeButton } from '@/components/attribute-button'
import { Button } from '@/components/ui/button'
import { Dialog, DialogOverlay, DialogPortal } from '@/components/ui/dialog'
import { cn } from '@/lib/utils'
import type { IssueCreateSchema, IssueCreateValues, IssuePriority, IssueStatus } from './types'

export interface CreateIssueDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  schema: IssueCreateSchema
  onCreate: (values: IssueCreateValues) => void
  defaultValues?: Partial<IssueCreateValues>
  header?: React.ReactNode
}

const defaultIssueValues: IssueCreateValues = {
  title: '',
  description: '',
  status: 'backlog',
  priority: undefined,
  labels: [],
  project: undefined,
}

export function CreateIssueDialog({
  open,
  onOpenChange,
  schema,
  onCreate,
  defaultValues,
  header = 'Create Issue',
}: CreateIssueDialogProps) {
  const [values, setValues] = React.useState<IssueCreateValues>({ ...defaultIssueValues, ...defaultValues })
  const [fullscreen, setFullscreen] = React.useState(false)
  const titleRef = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    if (open) {
      setValues({ ...defaultIssueValues, ...defaultValues })
      setFullscreen(false)
      setTimeout(() => titleRef.current?.focus(), 50)
    }
  }, [open])

  const handleCreate = () => {
    if (!values.title.trim()) return
    onCreate({ ...values, title: values.title.trim(), description: values.description.trim() })
    onOpenChange(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) handleCreate()
    if (e.key === 'Escape') onOpenChange(false)
  }

  const handleStatusSelect = (value: string) => setValues(v => ({ ...v, status: value as IssueStatus }))
  const handlePrioritySelect = (value: string) =>
    setValues(v => ({ ...v, priority: v.priority === value ? undefined : (value as IssuePriority) }))
  const handleProjectSelect = (value: string) =>
    setValues(v => ({ ...v, project: v.project === value ? undefined : value }))
  const handleLabelToggle = (value: string) =>
    setValues(v => ({
      ...v,
      labels: v.labels.includes(value) ? v.labels.filter(l => l !== value) : [...v.labels, value],
    }))

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay />
        <DialogPrimitive.Content
          onOpenAutoFocus={e => e.preventDefault()}
          className={cn(
            'fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-50 w-full border border-border bg-card shadow-2xl outline-none flex flex-col',
            'transition-[max-width,min-height,border-radius] duration-300 ease-out',
            'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
            'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
            fullscreen
              ? 'max-w-[100vw] min-h-screen rounded-none'
              : 'max-w-2xl min-h-0 rounded-xl',
          )}
          onKeyDown={handleKeyDown}
        >
          {/* Header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
            <div className="flex-1 text-sm font-medium text-foreground">{header}</div>
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon-sm"
                className="text-muted-foreground hover:text-foreground"
                onClick={() => setFullscreen(f => !f)}
                aria-label={fullscreen ? 'Exit fullscreen' : 'Expand'}
              >
                {fullscreen ? <MinimizeIcon /> : <ExpandIcon />}
              </Button>
              <Button
                variant="ghost"
                size="icon-sm"
                className="text-muted-foreground hover:text-foreground"
                onClick={() => onOpenChange(false)}
                aria-label="Close"
              >
                <XIcon />
              </Button>
            </div>
          </div>

          {/* Body */}
          <div className={cn('px-6 pt-5 pb-4 flex flex-col gap-3', fullscreen ? 'flex-1 min-h-0' : 'min-h-48')}>
            <input
              ref={titleRef}
              value={values.title}
              onChange={e => setValues(v => ({ ...v, title: e.target.value }))}
              placeholder="Issue title"
              className="w-full bg-transparent text-xl font-medium text-foreground placeholder:text-muted-foreground/40 outline-none border-none"
            />
            <textarea
              value={values.description}
              onChange={e => setValues(v => ({ ...v, description: e.target.value }))}
              placeholder="Add description..."
              rows={3}
              className={cn(
                'w-full bg-transparent text-sm text-muted-foreground placeholder:text-muted-foreground/40 outline-none border-none resize-none',
                fullscreen && 'flex-1',
              )}
            />
          </div>

          {/* Attributes row */}
          <div className="px-6 py-3 flex items-center gap-1.5 flex-wrap border-t border-border/50">
            {/* Status */}
            <AttributeButton
              options={schema.statuses}
              selected={[values.status]}
              onSelect={handleStatusSelect}
              placeholder="Backlog"
            />

            {/* Priority */}
            <AttributeButton
              options={schema.priorities}
              selected={values.priority ? [values.priority] : []}
              onSelect={handlePrioritySelect}
              placeholder="Priority"
              placeholderIcon={<EllipsisIcon className="h-3.5 w-3.5" />}
            />

            {/* Project */}
            <AttributeButton
              options={schema.projects}
              selected={values.project ? [values.project] : []}
              onSelect={handleProjectSelect}
              placeholder="Project"
              placeholderIcon={<span className="h-3.5 w-3.5 flex items-center justify-center text-[10px] font-bold border border-current rounded-sm">P</span>}
            />

            {/* Labels */}
            <AttributeButton
              options={schema.labels}
              selected={values.labels}
              multi
              onSelect={handleLabelToggle}
              placeholder="Labels"
              placeholderIcon={<span className="h-3.5 w-3.5 flex items-center justify-center text-[10px] font-bold border border-current rounded-sm">L</span>}
            />
          </div>

          {/* Footer */}
          <div className="flex items-center justify-end px-4 py-3 border-t border-border">
            <Button
              size="pill-lg"
              onClick={handleCreate}
              disabled={!values.title.trim()}
            >
              Create issue
            </Button>
          </div>
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  )
}
