import {
  DndContext,
  closestCenter,
} from '@dnd-kit/core'
import { restrictToParentElement, restrictToVerticalAxis } from '@dnd-kit/modifiers'
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import {
  type ColumnDef,
  type ColumnFiltersState,
  type Row,
  type RowSelectionState,
  type SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { ArrowUpDownIcon, ChevronLeftIcon, ChevronRightIcon, GripVerticalIcon } from 'lucide-react'
import * as React from 'react'
import { Button } from '@/components/ui/button'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { ContextMenu } from './ContextMenu'
import { SelectionBar } from './SelectionBar'
import type { DataTableProps, RowAction } from './types'
import { useDrag } from './useDrag'
import { useKeyboardHandler } from './useKeyboardHandler'

export type { DataTableProps, RowAction }
export type { ShortcutKeys } from './types'

function Checkbox({
  checked,
  indeterminate,
  onChange,
  onClick,
  className,
}: {
  checked: boolean
  indeterminate?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void
  className?: string
}) {
  const ref = React.useRef<HTMLInputElement>(null)
  React.useEffect(() => {
    if (ref.current) ref.current.indeterminate = !!indeterminate
  }, [indeterminate])
  const active = checked || indeterminate
  return (
    <span
      className={cn('inline-flex items-center justify-center cursor-pointer group', className)}
      onClick={onClick}
    >
      <input ref={ref} type="checkbox" checked={checked} onChange={onChange} tabIndex={-1} className="sr-only" />
      <span
        className={cn(
          'h-3.5 w-3.5 rounded-xs border flex items-center justify-center transition-colors',
          active
            ? 'bg-selected border-selected'
            : 'border-foreground/35 group-hover:border-selected'
        )}
      >
        {indeterminate && (
          <span className="block h-px w-2 bg-selected-foreground" />
        )}
        {checked && !indeterminate && (
          <svg viewBox="0 0 10 8" className="h-2 w-2.5 fill-none stroke-selected-foreground stroke-[2]">
            <polyline points="1,4 4,7 9,1" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
    </span>
  )
}

interface SortableRowProps<TData> {
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

function SortableRow<TData>({
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
        'h-6 cursor-pointer select-none',
        'data-[state=selected]:bg-selected/10 hover:data-[state=selected]:bg-selected/15 hover:bg-muted/25',
        isActive && activeRowSource === 'keyboard' && 'row-ring',
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
            (cell.column.id === '_select' || cell.column.id === '_reorder') && 'w-6 !pl-2 !pr-0'
          )}
        >
          {cell.column.id === '_reorder' ? (
            <span
              {...attributes}
              {...listeners}
              tabIndex={-1}
              className="flex items-center text-muted-foreground/30 hover:text-muted-foreground/70 cursor-grab active:cursor-grabbing outline-none"
            >
              <GripVerticalIcon className="h-3.5 w-3.5" />
            </span>
          ) : cell.column.id === '_select' ? (
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

export function DataTable<TData, TValue>({
  columns,
  data,
  searchColumn,
  searchPlaceholder = 'Search...',
  rowActions,
  getRowLabel,
  pageSize = 10,
  onRowReorder,
  getRowId,
}: DataTableProps<TData, TValue>) {
  const showAll = pageSize === 'all'
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({})
  const [activeRowIndex, setActiveRowIndex] = React.useState<number | null>(null)
  const [activeRowSource, setActiveRowSource] = React.useState<'keyboard' | 'mouse'>('mouse')
  const beforeSentinelRef = React.useRef<HTMLDivElement>(null)
  const paginationRef = React.useRef<HTMLDivElement>(null)
  const tableContainerRef = React.useRef<HTMLDivElement>(null)
  const rowHeightRef = React.useRef<number>(33)
  const [contextMenu, setContextMenu] = React.useState<{
    x: number
    y: number
    rowIndex: number
  } | null>(null)
  const [contextSub, setContextSub] = React.useState<{
    action: RowAction<TData>
    x: number
    y: number
  } | null>(null)
  const [actionsOpen, setActionsOpen] = React.useState(false)
  const [actionPage, setActionPage] = React.useState<RowAction<TData> | null>(null)
  const [orderedData, setOrderedData] = React.useState<TData[]>(data)
  const suppressMouseRef = React.useRef(false)

  // Sync internal order when data changes externally (filter, server refresh, etc.)
  // Also follow the active row to its new position by tracking its stable ID.
  // rows/activeRowIndex are intentionally captured at the moment data changes (old ordering).
  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(() => {
    if (activeRowIndex !== null) {
      const activeId = rows[activeRowIndex]?.id
      if (activeId) {
        const idFn = getRowId ?? getStableId
        const newIdx = data.findIndex((item) => idFn(item) === activeId)
        setActiveRowIndex(newIdx >= 0 ? newIdx : null)
      }
    }
    setOrderedData(data)
  }, [data])

  // Stable ID per data object regardless of position — required for dnd-kit to track
  // items correctly across reorders (tanstack table's default IDs are position-based)
  const stableIdMap = React.useRef(new WeakMap<object, string>())
  const stableIdCounter = React.useRef(0)
  const getStableId = React.useCallback((row: TData): string => {
    if (typeof row !== 'object' || row === null) return String(stableIdCounter.current++)
    const obj = row as object
    if (!stableIdMap.current.has(obj)) {
      stableIdMap.current.set(obj, String(stableIdCounter.current++))
    }
    return stableIdMap.current.get(obj)!
  }, [])

  // Reset sub-page after the close animation finishes, not during, to avoid flashes
  React.useEffect(() => {
    if (!actionsOpen) {
      const t = setTimeout(() => setActionPage(null), 200)
      return () => clearTimeout(t)
    }
  }, [actionsOpen])

  const selectionColumn = React.useMemo<ColumnDef<TData, unknown>>(
    () => ({
      id: '_select',
      header: () => null,
      cell: ({ row }) => (
        <Tooltip>
          <TooltipTrigger asChild>
            <span className="inline-flex items-center">
              <Checkbox
                checked={row.getIsSelected()}
                onChange={row.getToggleSelectedHandler() as React.ChangeEventHandler<HTMLInputElement>}
                onClick={(e) => { e.stopPropagation(); row.toggleSelected() }}
              />
            </span>
          </TooltipTrigger>
          <TooltipContent className="flex items-center gap-1.5">
            Select row
            <kbd className="rounded border border-selected/30 bg-selected/10 px-1 py-0.5 font-mono text-[10px] leading-none">x</kbd>
          </TooltipContent>
        </Tooltip>
      ),
      enableSorting: false,
      enableColumnFilter: false,
      size: 16,
    }),
    [getRowLabel]
  )

  const reorderColumn = React.useMemo<ColumnDef<TData, unknown>>(
    () => ({
      id: '_reorder',
      header: () => null,
      cell: () => null, // rendered inside SortableRow directly
      enableSorting: false,
      enableColumnFilter: false,
      size: 16,
    }),
    []
  )

  const allColumns = React.useMemo<ColumnDef<TData, unknown>[]>(
    () => [
      ...(onRowReorder ? [reorderColumn] : []),
      selectionColumn,
      ...(columns as ColumnDef<TData, unknown>[]),
    ],
    [reorderColumn, selectionColumn, columns, onRowReorder]
  )

  const table = useReactTable({
    data: orderedData,
    columns: allColumns,
    getRowId: getRowId ?? getStableId,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onRowSelectionChange: setRowSelection,
    enableRowSelection: true,
    initialState: {
      pagination: { pageSize: showAll ? Number.MAX_SAFE_INTEGER : pageSize },
    },
    state: {
      sorting,
      columnFilters,
      rowSelection,
    },
  })

  const rows = table.getRowModel().rows
  const selectedRows = table.getSelectedRowModel().rows.map((r) => r.original)
  const selectedCount = selectedRows.length

  // Rows that actions apply to: explicit selection, or the keyboard-navigated row as implicit target
  const effectiveRows: TData[] =
    selectedCount > 0
      ? selectedRows
      : activeRowIndex !== null && rows[activeRowIndex]
        ? [rows[activeRowIndex].original]
        : []

  const actionsHeading = (() => {
    if (effectiveRows.length === 0) return 'Actions'
    if (effectiveRows.length === 1)
      return getRowLabel ? getRowLabel(effectiveRows[0]) : '1 row'
    return `${effectiveRows.length} rows`
  })()

  const {
    sensors,
    dragActiveId,
    multiDragActive,
    justDropped,
    customTransforms,
    handleDragStart,
    handleDragMove,
    handleDragEnd,
  } = useDrag({
    rows,
    selectedCount,
    orderedData,
    setOrderedData,
    onRowReorder,
    activeRowIndex,
    setActiveRowIndex,
    getStableId,
    table,
    rowHeightRef,
  })

  useKeyboardHandler({
    rowActions,
    rows,
    activeRowIndex,
    selectedCount,
    contextMenu,
    table,
    effectiveRows,
    setActionsOpen,
    setActionPage,
    setActiveRowIndex,
    setActiveRowSource,
    suppressMouseRef,
    setContextMenu,
  })

  React.useEffect(() => {
    const handler = () => { suppressMouseRef.current = false }
    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [])

  React.useEffect(() => {
    if (activeRowIndex === null) return
    const el = tableContainerRef.current?.querySelector<HTMLElement>(`[data-display-index="${activeRowIndex}"]`)
    el?.scrollIntoView({ block: 'nearest', behavior: 'instant' })
  }, [activeRowIndex])

  // Close context menu on outside interaction
  React.useEffect(() => {
    if (!contextMenu) { setContextSub(null); return }
    const close = () => { setContextMenu(null); setContextSub(null) }
    window.addEventListener('click', close)
    window.addEventListener('scroll', close, true)
    return () => {
      window.removeEventListener('click', close)
      window.removeEventListener('scroll', close, true)
    }
  }, [contextMenu])

  const handleContextMenu = (e: React.MouseEvent, rowIndex: number) => {
    if (!rowActions?.length) return
    e.preventDefault()
    setActiveRowIndex(rowIndex)
    setContextMenu({ x: e.clientX, y: e.clientY, rowIndex })
  }

  // Actions apply to: context menu row (if not in selection), otherwise all selected
  const getContextRows = (): TData[] => {
    if (contextMenu === null) return selectedRows
    const contextRow = rows[contextMenu.rowIndex]
    if (!contextRow) return selectedRows
    if (selectedRows.length > 0 && contextRow.getIsSelected()) return selectedRows
    return [contextRow.original]
  }

  const pageIndex = table.getState().pagination.pageIndex
  const pageCount = table.getPageCount()

  const rowIds = rows.map((r) => r.id)

  return (
    <TooltipProvider>
    <div className="flex flex-col gap-3">
      {searchColumn && (
        <div className="flex items-center">
          <Input
            placeholder={searchPlaceholder}
            value={(table.getColumn(searchColumn)?.getFilterValue() as string) ?? ''}
            onChange={(e) =>
              table.getColumn(searchColumn)?.setFilterValue(e.target.value)
            }
            className="max-w-sm h-8 text-sm"
          />
        </div>
      )}

      <div
        ref={beforeSentinelRef}
        tabIndex={0}
        className="sr-only"
        onFocus={(e) => {
          if (rows.length === 0) return
          if (paginationRef.current?.contains(e.relatedTarget as Node)) return
          setActiveRowIndex(0)
          setActiveRowSource('keyboard')
        }}
      />
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        modifiers={[restrictToVerticalAxis, restrictToParentElement]}
        onDragStart={handleDragStart}
        onDragMove={handleDragMove}
        onDragEnd={handleDragEnd}
      >
        <div ref={tableContainerRef}>
          <Table className="border-separate border-spacing-0">
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id} className="hover:bg-transparent">
                  {headerGroup.headers.map((header) => (
                    <TableHead
                      key={header.id}
                      style={header.column.columnDef.size ? { width: header.column.columnDef.size } : undefined}
                      className={cn(
                        'text-xs font-medium text-muted-foreground uppercase tracking-wide h-8',
                        (header.id === '_select' || header.id === '_reorder') && 'w-6 !pl-2 !pr-0',
                        header.column.getCanSort() && 'cursor-pointer select-none'
                      )}
                      onClick={
                        header.column.getCanSort()
                          ? header.column.getToggleSortingHandler()
                          : undefined
                      }
                    >
                      {header.isPlaceholder ? null : header.id === '_select' || header.id === '_reorder' ? (
                        flexRender(header.column.columnDef.header, header.getContext())
                      ) : (
                        <div className="flex items-center gap-1">
                          {flexRender(header.column.columnDef.header, header.getContext())}
                          {header.column.getCanSort() && (
                            <ArrowUpDownIcon
                              className={cn(
                                'h-3 w-3 transition-opacity',
                                header.column.getIsSorted()
                                  ? 'opacity-100 text-foreground'
                                  : 'opacity-30'
                              )}
                            />
                          )}
                        </div>
                      )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <SortableContext items={rowIds} strategy={verticalListSortingStrategy}>
              <TableBody>
                {rows.length ? (
                  rows.map((row, index) => {
                    const isSelected = row.getIsSelected()
                    const prevSelected = rows[index - 1]?.getIsSelected() ?? false
                    const nextSelected = rows[index + 1]?.getIsSelected() ?? false
                    return <SortableRow
                      key={`${row.id}-${isSelected ? 1 : 0}-${prevSelected ? 1 : 0}-${nextSelected ? 1 : 0}`}
                      row={row}
                      displayIndex={index}
                      activeRowIndex={activeRowIndex}
                      activeRowSource={activeRowSource}
                      reorderable={!!onRowReorder}
                      customTranslateY={customTransforms ? customTransforms[index] : null}
                      isDragGroup={multiDragActive && row.getIsSelected()}
                      justDropped={justDropped}
                      onMeasureHeight={index === 0 ? (h) => { rowHeightRef.current = h } : undefined}
                      onRowClick={(i) => {
                        setActiveRowSource('mouse')
                        setActiveRowIndex(i)
                        row.toggleSelected()
                      }}
                      onRowMouseEnter={(i) => {
                        if (suppressMouseRef.current) return
                        setActiveRowSource('mouse')
                        setActiveRowIndex(i)
                      }}
                      onContextMenu={handleContextMenu}
                    />
                  })
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={allColumns.length}
                      className="h-24 text-center text-muted-foreground text-sm"
                    >
                      No results found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </SortableContext>
          </Table>
        </div>
      </DndContext>

      <div
        ref={paginationRef}
        className="flex items-center justify-between"
        onKeyDown={(e) => {
          if (e.key === 'Tab' && e.shiftKey && rows.length > 0) {
            const focusables = Array.from(
              paginationRef.current?.querySelectorAll<HTMLElement>('button:not([disabled]),[tabindex="0"]') ?? []
            )
            if (focusables[0] === document.activeElement) {
              e.preventDefault()
              e.stopPropagation()
              setActiveRowIndex(rows.length - 1)
              setActiveRowSource('keyboard')
              beforeSentinelRef.current?.focus()
            }
          }
        }}
      >
        <p className="text-xs text-muted-foreground">
          {table.getFilteredRowModel().rows.length} row
          {table.getFilteredRowModel().rows.length !== 1 ? 's' : ''}
        </p>
        {!showAll && (
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">
              Page {pageIndex + 1} of {Math.max(pageCount, 1)}
            </span>
            <Button
              variant="outline"
              size="icon"
              className="h-7 w-7"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <ChevronLeftIcon className="h-3.5 w-3.5" />
              <span className="sr-only">Previous page</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-7 w-7"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              <ChevronRightIcon className="h-3.5 w-3.5" />
              <span className="sr-only">Next page</span>
            </Button>
          </div>
        )}
      </div>

      <ContextMenu
        contextMenu={contextMenu}
        contextSub={contextSub}
        rowActions={rowActions ?? []}
        onSetContextSub={setContextSub}
        onClose={() => { setContextMenu(null); setContextSub(null) }}
        getContextRows={getContextRows}
      />

      <SelectionBar
        selectedCount={selectedCount}
        rowActions={rowActions}
        onClearSelection={() => table.resetRowSelection()}
        onOpenActions={() => setActionsOpen(true)}
      />

      {/* Actions command dialog */}
      {rowActions?.length ? (
        <CommandDialog
          open={actionsOpen}
          onOpenChange={setActionsOpen}
          commandKey={actionPage?.label ?? 'root'}
          title="Row Actions"
          description="Choose an action to apply to selected rows"
        >
          <CommandInput
            autoFocus
            placeholder={actionPage ? `Search ${actionPage.label.toLowerCase()}...` : 'Type a command or search...'}
            onKeyDown={(e) => {
              if (e.key === 'Backspace' && (e.target as HTMLInputElement).value === '') {
                setActionPage(null)
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
                      setActionsOpen(false)
                      setActionPage(null)
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
                        setActionPage(action)
                      } else {
                        action.onClick?.(effectiveRows)
                        setActionsOpen(false)
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
      ) : null}
    </div>
    </TooltipProvider>
  )
}
