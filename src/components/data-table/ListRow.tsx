import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { type Row, flexRender } from '@tanstack/react-table'
import * as React from 'react'
import { cn } from '@/lib/utils'
import type { SortableRowProps } from './SortableRow'

export function ListRow<TData>({
  row,
  displayIndex,
  activeRowIndex,
  activeRowSource,
  reorderable,
  customTranslateY,
  isDragGroup,
  justDropped,
  suppressTransform,
  onMeasureHeight,
  onRowClick,
  onRowMouseEnter,
  onContextMenu,
}: SortableRowProps<TData>) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: row.id,
    disabled: !reorderable,
  })

  const nodeRef = React.useCallback((node: HTMLDivElement | null) => {
    setNodeRef(node)
    if (node && onMeasureHeight) onMeasureHeight(node.offsetHeight)
  }, [setNodeRef, onMeasureHeight])

  const isSelected = row.getIsSelected()
  const isActive = activeRowIndex === displayIndex

  const style: React.CSSProperties =
    customTranslateY !== null
      ? { transform: `translateY(${customTranslateY}px)`, transition: 'none' }
      : justDropped || suppressTransform
        ? { transform: 'none', transition: 'none' }
        : { transform: CSS.Transform.toString(transform), transition }

  return (
    <div
      ref={nodeRef}
      {...(reorderable ? attributes : {})}
      {...(reorderable ? listeners : {})}
      tabIndex={-1}
      style={style}
      data-display-index={displayIndex}
      data-state={isSelected ? 'selected' : undefined}
      className={cn(
        'flex items-center gap-2 px-2 py-1.5 border-b border-border/40 select-none outline-none text-sm',
        reorderable ? 'cursor-grab active:cursor-grabbing' : 'cursor-pointer',
        'data-[state=selected]:bg-selected/10 hover:data-[state=selected]:bg-selected/15 hover:bg-muted/25',
        isActive && activeRowSource === 'keyboard' && !isDragging && !isDragGroup && 'row-ring',
        (isDragging || isDragGroup) && 'shadow-sm bg-background relative z-10',
      )}
      onClick={() => onRowClick(displayIndex)}
      onMouseEnter={() => onRowMouseEnter(displayIndex)}
      onContextMenu={(e) => onContextMenu(e, displayIndex)}
    >
      {(() => {
        const cells = row.getVisibleCells()
        const growIdx = cells.findIndex(c => (c.column.columnDef.meta as Record<string, unknown> | undefined)?.grow === true)
        const leadingCells = growIdx === -1 ? cells : cells.slice(0, growIdx + 1)
        const trailingCells = growIdx === -1 ? [] : cells.slice(growIdx + 1)

        return (
          <>
            {leadingCells.map((cell) => {
              const meta = cell.column.columnDef.meta as Record<string, unknown> | undefined
              const grow = meta?.grow === true

              if (cell.column.id === '_select') {
                return (
                  <span
                    key={cell.id}
                    className={cn(
                      'flex items-center shrink-0',
                      !isSelected && activeRowIndex !== displayIndex && 'opacity-0',
                    )}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </span>
                )
              }

              const size = cell.column.columnDef.size
              return (
                <div
                  key={cell.id}
                  className={cn(grow ? 'flex-1 min-w-0 truncate' : 'shrink-0')}
                  style={!grow && size ? { width: size } : undefined}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </div>
              )
            })}
            {trailingCells.length > 0 && (
              <div className="ml-auto flex items-center gap-2 shrink-0">
                {trailingCells.map((cell) => (
                  <div key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </div>
                ))}
              </div>
            )}
          </>
        )
      })()}
    </div>
  )
}
