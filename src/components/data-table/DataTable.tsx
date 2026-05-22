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
  type Updater,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { ArrowDownIcon, ArrowUpIcon, ChevronDownIcon, PlusIcon } from 'lucide-react'
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

function GroupHeader({ label, icon, count, collapsed, onToggle, onAdd }: {
  label: string
  icon?: React.ReactNode
  count: number
  collapsed: boolean
  onToggle: () => void
  onAdd?: () => void
}) {
  return (
    <div className="flex items-center gap-2 px-2 py-1.5 border-b border-border sticky top-0 bg-background z-10 select-none">
      <button
        onClick={onToggle}
        className="p-0.5 rounded hover:bg-accent text-muted-foreground hover:text-foreground"
      >
        <ChevronDownIcon
          className={cn('h-3.5 w-3.5 transition-transform', collapsed && '-rotate-90')}
        />
      </button>
      {icon && <span className="shrink-0 text-muted-foreground">{icon}</span>}
      <span className="text-sm font-medium">{label}</span>
      <span className="text-yellow-500 text-xs">⚠</span>
      <span className="text-xs text-muted-foreground">{count}</span>
      {onAdd && (
        <button
          className="ml-auto p-0.5 rounded hover:bg-accent text-muted-foreground hover:text-foreground"
          onClick={onAdd}
        >
          <PlusIcon className="h-3.5 w-3.5" />
        </button>
      )}
    </div>
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
  view = 'table',
  filterDefs,
  activeFilters: controlledActiveFilters,
  onToggleFilterValue: controlledToggleFilterValue,
  onRemoveFilter: controlledRemoveFilter,
  onClearFilters: controlledClearFilters,
  sorting: controlledSorting,
  onSortingChange: onControlledSortingChange,
  groupBy,
  groupConfigs,
  onGroupChange,
}: DataTableProps<TData, TValue>) {
  const isControlled = controlledActiveFilters !== undefined
  const showAll = pageSize === 'all'
  const [internalSorting, setInternalSorting] = React.useState<SortingState>([])
  const isControlledSorting = controlledSorting !== undefined
  const sorting = isControlledSorting ? controlledSorting : internalSorting
  const setSorting = React.useCallback((updater: Updater<SortingState>) => {
    const next = typeof updater === 'function' ? updater(sorting) : updater
    if (isControlledSorting) onControlledSortingChange?.(next)
    else setInternalSorting(next)
  }, [isControlledSorting, sorting, onControlledSortingChange])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [internalActiveFilters, setInternalActiveFilters] = React.useState<TableActiveFilter[]>([])
  const activeFilters = isControlled ? controlledActiveFilters : internalActiveFilters
  const [filterMenuOpen, setFilterMenuOpen] = React.useState(false)
  const [collapsedGroups, setCollapsedGroups] = React.useState<Set<string>>(new Set())
  const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({})
  const [activeRowIndex, setActiveRowIndex] = React.useState<number | null>(null)
  const [activeRowSource, setActiveRowSource] = React.useState<'keyboard' | 'mouse'>('mouse')
  const beforeSentinelRef = React.useRef<HTMLDivElement>(null)
  const paginationRef = React.useRef<HTMLDivElement>(null)
  const tableContainerRef = React.useRef<HTMLDivElement>(null)
  const filterButtonRef = React.useRef<HTMLButtonElement>(null)
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

  React.useEffect(() => {
    setRowSelection({})
  }, [activeFilters])

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
    if (isControlled) { controlledToggleFilterValue?.(filterId, value); return }
    setInternalActiveFilters(prev => {
      const existing = prev.find(f => f.filterId === filterId)
      if (!existing) return [...prev, { filterId, values: [value] }]
      const newValues = existing.values.includes(value)
        ? existing.values.filter(v => v !== value)
        : [...existing.values, value]
      if (newValues.length === 0) return prev.filter(f => f.filterId !== filterId)
      return prev.map(f => f.filterId === filterId ? { ...f, values: newValues } : f)
    })
  }, [isControlled, controlledToggleFilterValue])

  const handleRemoveFilter = React.useCallback((filterId: string) => {
    if (isControlled) { controlledRemoveFilter?.(filterId); return }
    setInternalActiveFilters(prev => prev.filter(f => f.filterId !== filterId))
  }, [isControlled, controlledRemoveFilter])

  // Sync internal order when data changes externally (filter, server refresh, etc.)
  // Also follow the active row to its new position by tracking its stable ID.
  // visibleRowsRef/activeRowIndex are intentionally captured at the moment data changes (old ordering).
  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(() => {
    if (activeRowIndex !== null) {
      const activeId = visibleRowsRef.current[activeRowIndex]?.id
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

  const allColumns = React.useMemo<ColumnDef<TData, unknown>[]>(
    () => [
      selectionColumn,
      ...(columns as ColumnDef<TData, unknown>[]),
    ],
    [selectionColumn, columns]
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

  // Compute groups preserving insertion order
  const groupedRows = React.useMemo(() => {
    if (!groupBy) return null
    const groups = new Map<string, typeof rows>()
    for (const row of rows) {
      const key = groupBy(row.original)
      if (!groups.has(key)) groups.set(key, [])
      groups.get(key)!.push(row)
    }
    return groups
  }, [rows, groupBy])

  // Keep a ref to visibleRows so the data-change effect can read the current value
  // without being re-triggered on every render (stale-closure pattern, like `rows` above).
  const visibleRowsRef = React.useRef<typeof rows>([])

  // Visible rows: exclude rows whose group is collapsed
  const visibleRows = React.useMemo(() => {
    if (!groupedRows) return rows
    const result: typeof rows = []
    for (const [key, groupRows] of groupedRows) {
      if (!collapsedGroups.has(key)) result.push(...groupRows)
    }
    return result
  }, [groupedRows, collapsedGroups, rows])

  visibleRowsRef.current = visibleRows

  // Fast lookup: row id → visible display index
  const visibleRowIndexMap = React.useMemo(() => {
    const map = new Map<string, number>()
    visibleRows.forEach((row, i) => map.set(row.id, i))
    return map
  }, [visibleRows])

  // Rows that actions apply to: explicit selection, or the keyboard-navigated row as implicit target
  const effectiveRows: TData[] =
    selectedCount > 0
      ? selectedRows
      : activeRowIndex !== null && visibleRows[activeRowIndex]
        ? [visibleRows[activeRowIndex].original]
        : []

  const actionsHeading = (() => {
    if (effectiveRows.length === 0) return 'Actions'
    if (effectiveRows.length === 1)
      return getRowLabel ? getRowLabel(effectiveRows[0]) : '1 row'
    return `${effectiveRows.length} rows`
  })()

  const onBeforeReorder = React.useCallback((newData: TData[], activeId: string): TData[] => {
    if (!groupBy || !onGroupChange) return newData
    const idFn = getRowId ?? getStableId
    const activeIdx = newData.findIndex(item => idFn(item) === activeId)
    if (activeIdx === -1) return newData
    const activeItem = newData[activeIdx]
    const prevItem = activeIdx > 0 ? newData[activeIdx - 1] : null
    const nextItem = activeIdx < newData.length - 1 ? newData[activeIdx + 1] : null
    const newGroupKey = prevItem ? groupBy(prevItem) : (nextItem ? groupBy(nextItem) : groupBy(activeItem))
    const currentGroupKey = groupBy(activeItem)
    if (newGroupKey === currentGroupKey) return newData
    const updatedItem = onGroupChange(activeItem, newGroupKey)
    return newData.map(item => item === activeItem ? updatedItem : item)
  }, [groupBy, onGroupChange, getRowId, getStableId])

  const {
    sensors,
    dragActiveId,
    multiDragActive,
    justDropped,
    dragOccurredRef,
    customTransforms,
    handleDragStart,
    handleDragMove,
    handleDragEnd,
  } = useDrag({
    rows: visibleRows,
    selectedCount,
    orderedData,
    setOrderedData,
    onRowReorder,
    activeRowIndex,
    setActiveRowIndex,
    getItemId: getRowId ?? getStableId,
    table,
    rowHeightRef,
    onBeforeReorder,
  })

  useKeyboardHandler({
    rowActions,
    rows: visibleRows,
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
    if (!onRowReorder) return
    const handler = (e: KeyboardEvent) => {
      if (!e.altKey || (e.key !== 'ArrowUp' && e.key !== 'ArrowDown')) return
      const target = e.target as HTMLElement
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) return
      if (activeRowIndex === null) return
      e.preventDefault()
      suppressMouseRef.current = true
      const direction = e.key === 'ArrowUp' ? -1 : 1
      const from = activeRowIndex
      const to = e.shiftKey
        ? (direction === -1 ? 0 : orderedData.length - 1)
        : Math.max(0, Math.min(orderedData.length - 1, from + direction))
      if (from === to) return
      const next = [...orderedData]
      const [item] = next.splice(from, 1)
      next.splice(to, 0, item)
      setOrderedData(next)
      onRowReorder(next)
      setActiveRowIndex(to)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onRowReorder, activeRowIndex, orderedData])

  React.useEffect(() => {
    if (activeRowIndex === null) return
    const el = tableContainerRef.current?.querySelector<HTMLElement>(`[data-display-index="${activeRowIndex}"]`)
    el?.scrollIntoView({ block: 'nearest', behavior: 'instant' })
    if (activeRowSource === 'keyboard') filterButtonRef.current?.blur()
  }, [activeRowIndex, activeRowSource])

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

  const rowIds = visibleRows.map((r) => r.id)

  return (
    <TooltipProvider>
    <div className="flex flex-col gap-3">
      {(searchColumn || (filterDefs?.length && !isControlled)) && (
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
          {filterDefs?.length && !isControlled && (
            <div className="ml-auto">
              <FilterMenu
                filterDefs={filterDefs}
                activeFilters={activeFilters}
                onToggleValue={handleToggleFilterValue}
                open={filterMenuOpen}
                onOpenChange={setFilterMenuOpen}
                trigger={
                  <FilterButton ref={filterButtonRef} active={activeFilters.length > 0} />
                }
              />
            </div>
          )}
        </div>
      )}

      {filterDefs?.length && activeFilters.length > 0 && !isControlled && (
        <FilterBar
          filterDefs={filterDefs}
          activeFilters={activeFilters}
          onRemoveFilter={handleRemoveFilter}
          onClearAll={() => isControlled ? controlledClearFilters?.() : setInternalActiveFilters([])}
        />
      )}

      <div
        ref={beforeSentinelRef}
        tabIndex={0}
        className="sr-only"
        onFocus={(e) => {
          if (visibleRows.length === 0) return
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
                {visibleRows.length === 0 && !groupedRows ? (
                  <div className="h-24 flex items-center justify-center text-muted-foreground text-sm">
                    No results found.
                  </div>
                ) : groupedRows ? (
                  Array.from(groupedRows.entries()).map(([groupKey, groupRows]) => {
                    const isCollapsed = collapsedGroups.has(groupKey)
                    const config = groupConfigs?.[groupKey]
                    return (
                      <React.Fragment key={groupKey}>
                        <GroupHeader
                          label={config?.label ?? groupKey}
                          icon={config?.icon}
                          count={groupRows.length}
                          collapsed={isCollapsed}
                          onToggle={() =>
                            setCollapsedGroups(prev => {
                              const next = new Set(prev)
                              if (next.has(groupKey)) next.delete(groupKey)
                              else next.add(groupKey)
                              return next
                            })
                          }
                        />
                        {!isCollapsed && groupRows.map((row) => {
                          const displayIndex = visibleRowIndexMap.get(row.id) ?? 0
                          const isSelected = row.getIsSelected()
                          const prevRow = visibleRows[displayIndex - 1]
                          const nextRow = visibleRows[displayIndex + 1]
                          const prevSelected = prevRow?.getIsSelected() ?? false
                          const nextSelected = nextRow?.getIsSelected() ?? false
                          return (
                            <ListRow
                              key={`${row.id}-${isSelected ? 1 : 0}-${prevSelected ? 1 : 0}-${nextSelected ? 1 : 0}`}
                              row={row}
                              displayIndex={displayIndex}
                              activeRowIndex={activeRowIndex}
                              activeRowSource={activeRowSource}
                              reorderable={!!onRowReorder}
                              customTranslateY={customTransforms ? customTransforms[displayIndex] : null}
                              isDragGroup={multiDragActive && row.getIsSelected()}
                              justDropped={justDropped}
                              onMeasureHeight={displayIndex === 0 ? (h) => { rowHeightRef.current = h } : undefined}
                              onRowClick={(i) => {
                                if (dragOccurredRef.current) return
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
                        })}
                      </React.Fragment>
                    )
                  })
                ) : (
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
                          if (dragOccurredRef.current) return
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
                          'text-xs font-medium text-muted-foreground uppercase tracking-wide h-8 group/th',
                          header.id === '_select' && 'w-6 !pl-2 !pr-0',
                          header.column.getCanSort() && 'cursor-pointer select-none'
                        )}
                        onClick={
                          header.column.getCanSort()
                            ? () => {
                                const sorted = header.column.getIsSorted()
                                header.column.toggleSorting(sorted === 'asc')
                              }
                            : undefined
                        }
                      >
                        {header.isPlaceholder ? null : header.id === '_select' ? (
                          flexRender(header.column.columnDef.header, header.getContext())
                        ) : (
                          <div className="flex items-center gap-1">
                            {flexRender(header.column.columnDef.header, header.getContext())}
                            {header.column.getCanSort() && (() => {
                              const sorted = header.column.getIsSorted()
                              if (sorted === 'asc') return <ArrowUpIcon className="h-3 w-3 text-foreground" />
                              if (sorted === 'desc') return <ArrowDownIcon className="h-3 w-3 text-foreground" />
                              return <ArrowUpIcon className="h-3 w-3 opacity-0 group-hover/th:opacity-40 transition-opacity" />
                            })()}
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
                          if (dragOccurredRef.current) return
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
          setActiveRowIndex(visibleRows.length - 1)
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
