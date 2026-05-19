import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { type Row, flexRender } from '@tanstack/react-table'
import * as React from 'react'
import { TableCell, TableRow } from '@/components/ui/table'
import { cn } from '@/lib/utils'

export interface SortableRowProps<TData> {
  row: Row<TData>
  displayIndex: number
  activeRowIndex: number | null
  activeRowSource: 'keyboard' | 'mouse'
  reorderable: boolean
  customTranslateY: number | null
  isDragGroup: boolean
  justDropped: boolean
  onMeasureHeight?: (height: number) => void
  onRowClick: (index: number) => void
  onRowMouseEnter: (index: number) => void
  onContextMenu: (e: React.MouseEvent, index: number) => void
}

export function SortableRow<TData>({
  row,
  displayIndex,
  activeRowIndex,
  activeRowSource,
  reorderable,
  customTranslateY,
  isDragGroup,
  justDropped,
  onMeasureHeight,
  onRowClick,
  onRowMouseEnter,
  onContextMenu,
}: SortableRowProps<TData>) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: row.id,
    disabled: !reorderable,
  })

  const nodeRef = React.useCallback((node: HTMLTableRowElement | null) => {
    setNodeRef(node)
    if (node && onMeasureHeight) onMeasureHeight(node.offsetHeight)
  }, [setNodeRef, onMeasureHeight])

  const isSelected = row.getIsSelected()
  const isActive = activeRowIndex === displayIndex

  return (
    <TableRow
      ref={nodeRef}
      {...(reorderable ? attributes : {})}
      {...(reorderable ? listeners : {})}
      tabIndex={-1}
      style={
        customTranslateY !== null
          ? { transform: `translateY(${customTranslateY}px)`, transition: 'none' }
          : justDropped
            ? { transform: 'none', transition: 'none' }
            : { transform: CSS.Transform.toString(transform), transition }
      }
      data-display-index={displayIndex}
      data-state={isSelected ? 'selected' : undefined}
      className={cn(
        'h-6 select-none',
        reorderable ? 'cursor-grab active:cursor-grabbing' : 'cursor-pointer',
        'data-[state=selected]:bg-selected/10 hover:data-[state=selected]:bg-selected/15 hover:bg-muted/25',
        isActive && activeRowSource === 'keyboard' && !isDragging && !isDragGroup && 'row-ring',
        (isDragging || isDragGroup) && 'shadow-sm bg-background relative z-10',
      )}
      onClick={() => onRowClick(displayIndex)}
      onMouseEnter={() => onRowMouseEnter(displayIndex)}
      onContextMenu={(e) => onContextMenu(e, displayIndex)}
    >
      {row.getVisibleCells().map((cell) => (
        <TableCell
          key={cell.id}
          className={cn(
            'py-1.5 text-sm',
            cell.column.id === '_select' && 'w-6 !pl-2 !pr-0'
          )}
        >
          {cell.column.id === '_select' ? (
            <span className={cn('flex items-center', !isSelected && activeRowIndex !== displayIndex && 'opacity-0')}>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </span>
          ) : (
            flexRender(cell.column.columnDef.cell, cell.getContext())
          )}
        </TableCell>
      ))}
    </TableRow>
  )
}
