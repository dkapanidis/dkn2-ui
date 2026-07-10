import { ChevronRightIcon } from 'lucide-react'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { cn } from '@/lib/utils'
import type { RowAction } from './types'

interface ActionsDialogProps<TData> {
  open: boolean
  onOpenChange: (open: boolean) => void
  rowActions: RowAction<TData>[]
  actionPage: RowAction<TData> | null
  onSetActionPage: (page: RowAction<TData> | null) => void
  effectiveRows: TData[]
  actionsHeading: string
}

export function ActionsDialog<TData>({
  open,
  onOpenChange,
  rowActions,
  actionPage,
  onSetActionPage,
  effectiveRows,
  actionsHeading,
}: ActionsDialogProps<TData>) {
  return (
    <CommandDialog
      open={open}
      onOpenChange={onOpenChange}
      commandKey={actionPage?.label ?? 'root'}
      title="Row Actions"
      description="Choose an action to apply to selected rows"
    >
      <CommandInput
        autoFocus
        placeholder={actionPage ? `Search ${actionPage.label.toLowerCase()}...` : 'Type a command or search...'}
        onKeyDown={(e) => {
          if (e.key === 'Backspace' && (e.target as HTMLInputElement).value === '') {
            onSetActionPage(null)
          }
        }}
      />
      <CommandList>
        <CommandEmpty>No actions available.</CommandEmpty>
        {actionPage ? (
          <CommandGroup heading={
            <span className="flex items-center justify-between w-full">
              <span>{actionPage.label}</span>
              <span className="font-normal text-muted-foreground">{actionsHeading}</span>
            </span>
          }>
            {actionPage.subActions!.map((sub, i) => (
              <CommandItem
                key={i}
                onSelect={() => {
                  sub.onClick?.(effectiveRows)
                  onOpenChange(false)
                  onSetActionPage(null)
                }}
                className={cn(sub.destructive && 'text-destructive')}
              >
                {sub.icon}
                <span className="flex-1">{sub.label}</span>
                {sub.shortcut && (
                  <span className="flex items-center gap-0.5">
                    {sub.shortcut.split('').map((ch, j) => (
                      <kbd key={j} className="rounded border border-border bg-muted px-1 py-0.5 font-mono text-[10px] leading-none text-muted-foreground">{ch}</kbd>
                    ))}
                  </span>
                )}
              </CommandItem>
            ))}
          </CommandGroup>
        ) : (
          <CommandGroup heading={actionsHeading}>
            {rowActions.map((action, i) => (
              <CommandItem
                key={i}
                onSelect={() => {
                  if (action.subActions?.length) {
                    onSetActionPage(action)
                  } else {
                    action.onClick?.(effectiveRows)
                    onOpenChange(false)
                  }
                }}
                className={cn(action.destructive && 'text-destructive')}
              >
                {action.icon}
                <span className="flex-1">{action.label}</span>
                {action.shortcut && (
                  <kbd className="rounded border border-border bg-muted px-1 py-0.5 font-mono text-[10px] leading-none text-muted-foreground">
                    {action.shortcut}
                  </kbd>
                )}
                {action.subActions?.length ? (
                  <ChevronRightIcon className="h-3.5 w-3.5 text-muted-foreground" />
                ) : null}
              </CommandItem>
            ))}
          </CommandGroup>
        )}
      </CommandList>
    </CommandDialog>
  )
}
