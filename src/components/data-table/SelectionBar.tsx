import { CommandIcon, XIcon } from 'lucide-react'
import * as React from 'react'
import { createPortal } from 'react-dom'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import type { RowAction } from './types'

interface SelectionBarProps<TData> {
  selectedCount: number
  rowActions?: RowAction<TData>[]
  onClearSelection: () => void
  onOpenActions: () => void
}

export function SelectionBar<TData>({
  selectedCount,
  rowActions,
  onClearSelection,
  onOpenActions,
}: SelectionBarProps<TData>) {
  if (selectedCount === 0) return null
  return createPortal(
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1 rounded-full border border-border bg-popover text-popover-foreground px-2 py-1.5 shadow-lg">
      <span className="px-2 text-sm font-medium">{selectedCount} selected</span>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              className="flex h-6 w-6 items-center justify-center rounded-full text-muted-foreground hover:bg-accent transition-colors outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
              onClick={onClearSelection}
            >
              <XIcon className="h-3.5 w-3.5" />
            </button>
          </TooltipTrigger>
          <TooltipContent className="flex items-center gap-1.5 border border-primary/20">
            Clear selected
            <kbd className="rounded border border-primary/30 bg-primary/10 px-1 py-0.5 font-mono text-[10px] leading-none">
              Esc
            </kbd>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      {rowActions?.length ? (
        <button
          className="ml-1 flex items-center gap-1.5 rounded-full bg-muted text-foreground px-3 py-1 text-sm hover:opacity-80 transition-opacity outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
          onClick={onOpenActions}
        >
          <CommandIcon className="h-3.5 w-3.5" />
          Actions
        </button>
      ) : null}
    </div>,
    document.body
  )
}
