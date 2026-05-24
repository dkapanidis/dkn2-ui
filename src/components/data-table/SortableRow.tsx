import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { type Row, flexRender } from '@tanstack/react-table'
import * as React from 'react'
import { TableCell, TableRow } from '@/components/ui/table'
import { cn } from '@/lib/utils'
import { rowStateClasses } from './ListRow'

export interface RowViewProps<TData> {
  row: Row<TData>
  displayIndex: number
  activeRowIndex: number | null
  activeRowSource: 'keyboard' | 'mouse'
  reorderable: boolean
  // True while this row is part of an active drag — kept in the list as an
  // opacity-0 placeholder so the layout (and group heights) stay correct.
  hidden?: boolean
  onRowClick: (index: number, shiftKey: boolean) => void
  onRowMouseEnter: (index: number) => void
  onContextMenu: (e: React.MouseEvent, index: number) => void
  prevSelected?: boolean
  nextSelected?: boolean
}

export function SortableRowCells<TData>({ row, isSelected, isActive, activeRowSource, prevSelected = false, nextSelected = false }: {
  row: Row<TData>
  isSelected: boolean
  isActive: boolean
  activeRowSource: 'keyboard' | 'mouse'
  prevSelected?: boolean
  nextSelected?: boolean
}) {
  const cells = row.getVisibleCells()
  const hasBackground = isSelected || isActive
  const isRing = isActive && activeRowSource === 'keyboard'
  const tb = 'inset 0 1px 0 0 var(--selected-border), inset 0 -1px 0 0 var(--selected-border)'

  return (
    <>
      {cells.map((cell, ci) => {
        const isFirst = ci === 0
        const isLast = ci === cells.length - 1
        let boxShadow: string | undefined
        if (isRing) {
          if (isFirst && isLast) boxShadow = `inset 1px 0 0 0 var(--selected-border), inset -1px 0 0 0 var(--selected-border), ${tb}`
          else if (isFirst)     boxShadow = `inset 1px 0 0 0 var(--selected-border), ${tb}`
          else if (isLast)      boxShadow = `inset -1px 0 0 0 var(--selected-border), ${tb}`
          else                  boxShadow = tb
        }
        return (
          <TableCell
            key={cell.id}
            className={cn(
              'py-1.5 text-sm',
              cell.column.id === '_select' && 'w-6 !pl-2 !pr-0',
              isFirst && hasBackground && !prevSelected && 'rounded-tl-md',
              isFirst && hasBackground && !nextSelected && 'rounded-bl-md',
              isLast  && hasBackground && !prevSelected && 'rounded-tr-md',
              isLast  && hasBackground && !nextSelected && 'rounded-br-md',
            )}
            style={boxShadow ? { boxShadow } : undefined}
          >
            {cell.column.id === '_select' ? (
              <span className={cn('flex items-center', !isSelected && !isActive && 'opacity-0')}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </span>
            ) : (
              flexRender(cell.column.columnDef.cell, cell.getContext())
            )}
          </TableCell>
        )
      })}
    </>
  )
}

export function SortableRow<TData>({
  row,
  displayIndex,
  activeRowIndex,
  activeRowSource,
  reorderable,
  hidden,
  onRowClick,
  onRowMouseEnter,
  onContextMenu,
  prevSelected,
  nextSelected,
}: RowViewProps<TData>) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: row.id,
    disabled: !reorderable,
    // Animate while actively sorting (rows reposition smoothly as you drag
    // over them), but not on drop — live reflow already placed the row, so a
    // settle animation would replay that move and cause a flip.
    animateLayoutChanges: ({ isSorting }) => isSorting === true,
  })

  const isSelected = row.getIsSelected()
  const isActive = activeRowIndex === displayIndex

  return (
    <TableRow
      ref={setNodeRef}
      {...(reorderable ? attributes : {})}
      {...(reorderable ? listeners : {})}
      tabIndex={-1}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: hidden || isDragging ? 0 : undefined,
      }}
      data-display-index={displayIndex}
      data-state={isSelected ? 'selected' : undefined}
      className={cn(
        'h-6 select-none outline-none',
        reorderable ? 'cursor-grab active:cursor-grabbing' : 'cursor-pointer',
        rowStateClasses(isSelected, isActive),
      )}
      onClick={(e) => onRowClick(displayIndex, e.shiftKey)}
      onMouseEnter={() => onRowMouseEnter(displayIndex)}
      onContextMenu={(e) => onContextMenu(e, displayIndex)}
    >
      <SortableRowCells row={row} isSelected={isSelected} isActive={isActive} activeRowSource={activeRowSource} prevSelected={prevSelected} nextSelected={nextSelected} />
    </TableRow>
  )
}
