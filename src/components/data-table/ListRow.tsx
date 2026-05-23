import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { type Row, flexRender } from '@tanstack/react-table'
import { cn } from '@/lib/utils'
import type { RowViewProps } from './SortableRow'

export const listRowClassName =
  'flex items-center gap-2 px-2 py-1.5 border-b border-border/40 select-none outline-none text-sm'

export function rowStateClasses(
  isSelected: boolean,
  isActive: boolean,
  activeRowSource: 'keyboard' | 'mouse',
) {
  return cn(
    isSelected && 'bg-primary/10',
    isActive && isSelected && 'bg-primary/15',
    isActive && !isSelected && activeRowSource === 'mouse' && 'bg-muted/30',
    isActive && !isSelected && activeRowSource === 'keyboard' && 'bg-primary/10',
    isActive && activeRowSource === 'keyboard' && 'row-ring',
  )
}

export function ListRowCells<TData>({ row, isSelected, activeRowIndex, displayIndex }: {
  row: Row<TData>
  isSelected: boolean
  activeRowIndex: number | null
  displayIndex: number
}) {
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
}

export function ListRow<TData>({
  row,
  displayIndex,
  activeRowIndex,
  activeRowSource,
  reorderable,
  hidden,
  onRowClick,
  onRowMouseEnter,
  onContextMenu,
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
    <div
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
        listRowClassName,
        reorderable ? 'cursor-grab active:cursor-grabbing' : 'cursor-pointer',
        rowStateClasses(isSelected, isActive, activeRowSource),
      )}
      onClick={(e) => onRowClick(displayIndex, e.shiftKey)}
      onMouseEnter={() => onRowMouseEnter(displayIndex)}
      onContextMenu={(e) => onContextMenu(e, displayIndex)}
    >
      <ListRowCells row={row} isSelected={isSelected} activeRowIndex={activeRowIndex} displayIndex={displayIndex} />
    </div>
  )
}
