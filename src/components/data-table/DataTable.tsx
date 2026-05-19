import {
  DndContext,
  closestCenter,
} from '@dnd-kit/core'
import { restrictToParentElement, restrictToVerticalAxis } from '@dnd-kit/modifiers'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import {
  type ColumnDef,
  type ColumnFiltersState,
  type RowSelectionState,
  type SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { ArrowUpDownIcon } from 'lucide-react'
import * as React from 'react'
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
import { FilterBar } from './FilterBar'
import { FilterButton } from './FilterButton'
import { FilterMenu } from './FilterMenu'
import { ListRow } from './ListRow'
import { RowCheckbox } from './RowCheckbox'
import { SelectionBar } from './SelectionBar'
import { SortableRow } from './SortableRow'
import type { TableActiveFilter, DataTableProps, RowAction } from './types'
import { ActionsDialog } from './ActionsDialog'
import { TableFooter } from './TableFooter'
import { useDrag } from './useDrag'
import { useKeyboardHandler } from './useKeyboardHandler'

export type { DataTableProps, RowAction }
export type { ShortcutKeys } from './types'

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
  view = 'table',
  filterDefs,
}: DataTableProps<TData, TValue>) {
  const showAll = pageSize === 'all'
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [activeFilters, setActiveFilters] = React.useState<TableActiveFilter[]>([])
  const [filterMenuOpen, setFilterMenuOpen] = React.useState(false)
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

  const filteredData = React.useMemo(() => {
    if (!activeFilters.length || !filterDefs?.length) return orderedData
    return orderedData.filter(row =>
      activeFilters.every(af => {
        if (af.values.length === 0) return true
        const def = filterDefs.find(d => d.id === af.filterId)
        return def ? def.filterFn(row, af.values) : true
      })
    )
  }, [orderedData, activeFilters, filterDefs])

  const handleToggleFilterValue = React.useCallback((filterId: string, value: string) => {
    setActiveFilters(prev => {
      const existing = prev.find(f => f.filterId === filterId)
      if (!existing) return [...prev, { filterId, values: [value] }]
      const newValues = existing.values.includes(value)
        ? existing.values.filter(v => v !== value)
        : [...existing.values, value]
      if (newValues.length === 0) return prev.filter(f => f.filterId !== filterId)
      return prev.map(f => f.filterId === filterId ? { ...f, values: newValues } : f)
    })
  }, [])

  const handleRemoveFilter = React.useCallback((filterId: string) => {
    setActiveFilters(prev => prev.filter(f => f.filterId !== filterId))
  }, [])

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
              <RowCheckbox
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
    data: filteredData,
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
    getItemId: getRowId ?? getStableId,
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
    if (!filterDefs?.length) return
    const handler = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) return
      if (e.key === 'f' || e.key === 'F') {
        e.preventDefault()
        setFilterMenuOpen(prev => !prev)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [filterDefs])

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
      {(searchColumn || filterDefs?.length) && (
        <div className="flex items-center gap-2">
          {searchColumn && (
            <Input
              placeholder={searchPlaceholder}
              value={(table.getColumn(searchColumn)?.getFilterValue() as string) ?? ''}
              onChange={(e) =>
                table.getColumn(searchColumn)?.setFilterValue(e.target.value)
              }
              className="max-w-sm h-8 text-sm"
            />
          )}
          {filterDefs?.length && (
            <div className="ml-auto">
              <FilterMenu
                filterDefs={filterDefs}
                activeFilters={activeFilters}
                onToggleValue={handleToggleFilterValue}
                open={filterMenuOpen}
                onOpenChange={setFilterMenuOpen}
                trigger={
                  <FilterButton active={activeFilters.length > 0} />
                }
              />
            </div>
          )}
        </div>
      )}

      {filterDefs?.length && activeFilters.length > 0 && (
        <FilterBar
          filterDefs={filterDefs}
          activeFilters={activeFilters}
          onRemoveFilter={handleRemoveFilter}
          onClearAll={() => setActiveFilters([])}
        />
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
          {view === 'list' ? (
            <SortableContext items={rowIds} strategy={verticalListSortingStrategy}>
              <div>
                {rows.length ? (
                  rows.map((row, index) => {
                    const isSelected = row.getIsSelected()
                    const prevSelected = rows[index - 1]?.getIsSelected() ?? false
                    const nextSelected = rows[index + 1]?.getIsSelected() ?? false
                    return (
                      <ListRow
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
                    )
                  })
                ) : (
                  <div className="h-24 flex items-center justify-center text-muted-foreground text-sm">
                    No results found.
                  </div>
                )}
              </div>
            </SortableContext>
          ) : (
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
          )}
        </div>
      </DndContext>

      <TableFooter
        ref={paginationRef}
        rowCount={table.getFilteredRowModel().rows.length}
        showPagination={!showAll}
        pageIndex={pageIndex}
        pageCount={pageCount}
        canPreviousPage={table.getCanPreviousPage()}
        canNextPage={table.getCanNextPage()}
        onPreviousPage={() => table.previousPage()}
        onNextPage={() => table.nextPage()}
        onShiftTabToTable={() => {
          setActiveRowIndex(rows.length - 1)
          setActiveRowSource('keyboard')
          beforeSentinelRef.current?.focus()
        }}
      />

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

      {rowActions?.length ? (
        <ActionsDialog
          open={actionsOpen}
          onOpenChange={setActionsOpen}
          rowActions={rowActions}
          actionPage={actionPage}
          onSetActionPage={setActionPage}
          effectiveRows={effectiveRows}
          actionsHeading={actionsHeading}
        />
      ) : null}
    </div>
    </TooltipProvider>
  )
}
