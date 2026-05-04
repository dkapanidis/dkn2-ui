import { ChevronRightIcon } from 'lucide-react'
import * as React from 'react'
import { createPortal } from 'react-dom'
import { cn } from '@/lib/utils'
import type { RowAction } from './types'

interface ContextMenuProps<TData> {
  contextMenu: { x: number; y: number; rowIndex: number } | null
  contextSub: { action: RowAction<TData>; x: number; y: number } | null
  rowActions: RowAction<TData>[]
  onSetContextSub: (sub: { action: RowAction<TData>; x: number; y: number } | null) => void
  onClose: () => void
  getContextRows: () => TData[]
}

export function ContextMenu<TData>({
  contextMenu,
  contextSub,
  rowActions,
  onSetContextSub,
  onClose,
  getContextRows,
}: ContextMenuProps<TData>) {
  if (!contextMenu) return null
  return createPortal(
    <>
      <div
        style={{ top: contextMenu.y, left: contextMenu.x }}
        className="fixed z-50 min-w-[160px] overflow-hidden rounded-md border border-border bg-popover shadow-md py-1 [&_svg]:size-4 dark:text-primary"
        onClick={(e) => e.stopPropagation()}
      >
        {rowActions.map((action, i) => (
          <button
            key={i}
            className={cn(
              'flex w-full items-center gap-2 px-3 py-1.5 text-xs hover:bg-accent transition-colors text-left outline-none focus:bg-accent',
              action.destructive && 'text-destructive hover:text-destructive focus:text-destructive',
              contextSub?.action === action && 'bg-accent'
            )}
            onMouseEnter={(e) => {
              if (action.subActions?.length) {
                const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
                onSetContextSub({ action, x: rect.right + 4, y: rect.top })
              } else {
                onSetContextSub(null)
              }
            }}
            onClick={() => {
              if (!action.subActions?.length) {
                action.onClick?.(getContextRows())
                onClose()
              }
            }}
          >
            {action.icon}
            <span className="flex-1">{action.label}</span>
            {action.shortcut && (
              <kbd className="rounded border border-border bg-muted px-1 py-0.5 font-mono text-[10px] leading-none text-muted-foreground">
                {action.shortcut}
              </kbd>
            )}
            {action.subActions?.length ? <ChevronRightIcon className="h-3 w-3 opacity-50" /> : null}
          </button>
        ))}
      </div>
      {contextSub && (
        <div
          style={{ top: contextSub.y, left: contextSub.x }}
          className="fixed z-50 min-w-[140px] overflow-hidden rounded-md border border-border bg-popover shadow-md py-1 [&_svg]:size-4 dark:text-primary"
          onClick={(e) => e.stopPropagation()}
        >
          {contextSub.action.subActions!.map((sub, i) => (
            <button
              key={i}
              className={cn(
                'flex w-full items-center gap-2 px-3 py-1.5 text-xs hover:bg-accent transition-colors text-left outline-none focus:bg-accent',
                sub.destructive && 'text-destructive hover:text-destructive focus:text-destructive'
              )}
              onClick={() => {
                sub.onClick?.(getContextRows())
                onClose()
              }}
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
            </button>
          ))}
        </div>
      )}
    </>,
    document.body
  )
}
