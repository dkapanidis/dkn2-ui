import {
  DndContext,
  DragOverlay,
  MeasuringStrategy,
  closestCenter,
  useDroppable,
} from '@dnd-kit/core'
import { restrictToParentElement, restrictToVerticalAxis } from '@dnd-kit/modifiers'
import { SortableContext, arrayMove, verticalListSortingStrategy } from '@dnd-kit/sortable'
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
import { ListRow, ListRowCells, listRowClassName } from './ListRow'
import { RowCheckbox } from './RowCheckbox'
import { SelectionBar } from './SelectionBar'
import { SortableRow } from './SortableRow'
import type { TableActiveFilter, DataTableProps, RowAction } from './types'
import { ActionsDialog } from './ActionsDialog'
import { TableFooter } from './TableFooter'
import { HEADER_DROPPABLE_PREFIX, useDrag } from './useDrag'
import { useKeyboardHandler } from './useKeyboardHandler'

export type { DataTableProps, RowAction }
export type { ShortcutKeys } from './types'

function GroupHeader({ groupKey, label, icon, count, collapsed, onToggle, onAdd }: {
  groupKey: string
  label: string
  icon?: React.ReactNode
  count: number
  collapsed: boolean
  onToggle: () => void
  onAdd?: () => void
}) {
  // Droppable so a row dragged onto the header lands as the group's first item.
  const { setNodeRef } = useDroppable({ id: HEADER_DROPPABLE_PREFIX + groupKey })
  return (
    <div ref={setNodeRef} className="flex items-center gap-2 px-2 py-1.5 border-b border-border sticky top-0 bg-background z-10 select-none">
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
  lockMove = false,
  onSwitchToManual,
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
  const anchorRowIndexRef = React.useRef<number | null>(null)
  const beforeSentinelRef = React.useRef<HTMLDivElement>(null)
  const paginationRef = React.useRef<HTMLDivElement>(null)
  const tableContainerRef = React.useRef<HTMLDivElement>(null)
  const filterButtonRef = React.useRef<HTMLButtonElement>(null)
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
    anchorRowIndexRef.current = null
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
  const rowsRef = React.useRef<typeof rows>([])
  rowsRef.current = rows
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
    if (groupConfigs) {
      const entries = Array.from(groups.entries())
      entries.sort(([a], [b]) => {
        const orderA = groupConfigs[a]?.order ?? Infinity
        const orderB = groupConfigs[b]?.order ?? Infinity
        return orderA - orderB
      })
      return new Map(entries)
    }
    return groups
  }, [rows, groupBy, groupConfigs])

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

  // orderedData re-sorted to match the grouped visual order so that drag/keyboard
  // index operations work in the same space as what the user sees on screen.
  const visualOrderedData = React.useMemo(() => {
    if (!groupedRows) return orderedData
    const idFn = getRowId ?? getStableId
    const idToItem = new Map(orderedData.map(item => [idFn(item), item]))
    const seen = new Set<string>()
    const result: TData[] = []
    for (const [, groupRows] of groupedRows) {
      for (const row of groupRows) {
        const id = idFn(row.original)
        const item = idToItem.get(id)
        if (item && !seen.has(id)) { result.push(item); seen.add(id) }
      }
    }
    for (const item of orderedData) {
      const id = idFn(item)
      if (!seen.has(id)) { result.push(item); seen.add(id) }
    }
    return result
  }, [groupedRows, orderedData, getRowId, getStableId])

  const visualOrderedDataRef = React.useRef(visualOrderedData)
  visualOrderedDataRef.current = visualOrderedData

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

  // Group change wrapper that preserves the object's stable drag id across the
  // new object instance — required so dnd-kit keeps tracking a row whose group
  // changes mid-drag. (When getRowId is supplied the id is value-based already.)
  const reorderGroupChange = React.useCallback((row: TData, newGroupKey: string): TData => {
    if (!onGroupChange) return row
    const next = onGroupChange(row, newGroupKey)
    if (!getRowId && next !== row && typeof row === 'object' && row && typeof next === 'object' && next) {
      const id = stableIdMap.current.get(row as object)
      if (id !== undefined) stableIdMap.current.set(next as object, id)
    }
    return next
  }, [onGroupChange, getRowId])

  // lockMove:true blocks reorder while a non-manual sort is active.
  // lockMove:false (default) allows reorder but calls onSwitchToManual to clear sorting first.
  const dragEnabled = !!onRowReorder && (!lockMove || sorting.length === 0)

  const {
    sensors,
    dragActiveId,
    draggingIds,
    dragCrossesGroup,
    dragOccurredRef,
    handleDragStart: _handleDragStart,
    handleDragOver,
    handleDragEnd,
    handleDragCancel,
  } = useDrag({
    rows: visibleRows,
    selectedCount,
    orderedData: visualOrderedData,
    setOrderedData,
    onRowReorder,
    getItemId: getRowId ?? getStableId,
    table,
    groupBy,
    onGroupChange: reorderGroupChange,
    groupConfigs,
    dragEnabled,
  })

  // Sync orderedData to the current sorted visual order so that switching from a
  // sorted view to manual order starts from what the user already sees on screen.
  const syncOrderedDataToSortedRows = React.useCallback(() => {
    const idFn = getRowId ?? getStableId
    const allRows = rowsRef.current
    const currentData = visualOrderedDataRef.current
    const idToItem = new Map(currentData.map(item => [idFn(item), item]))
    const inRows = new Set(allRows.map(r => r.id))
    const next: TData[] = [
      ...allRows.map(r => idToItem.get(r.id)).filter((x): x is TData => x !== undefined),
      ...currentData.filter(item => !inRows.has(idFn(item))),
    ]
    setOrderedData(next)
  }, [getRowId, getStableId])

  const handleDragStart = React.useCallback((event: Parameters<typeof _handleDragStart>[0]) => {
    if (!lockMove && sorting.length > 0) {
      syncOrderedDataToSortedRows()
      onSwitchToManual?.()
    }
    _handleDragStart(event)
  }, [lockMove, sorting, onSwitchToManual, _handleDragStart, syncOrderedDataToSortedRows])

  // The rows rendered in the floating DragOverlay that follows the cursor.
  // For a multi-row drag every dragged row is shown stacked in visible order.
  const overlayRows = React.useMemo(() => {
    if (!dragActiveId) return []
    return visibleRows.filter(r => draggingIds.has(r.id))
  }, [dragActiveId, draggingIds, visibleRows])

  // dnd-kit anchors the overlay at the grabbed row's slot. When the grabbed row
  // is not the first of the selection, shift the stack up by the height of the
  // rows above it so the grabbed row stays aligned under the cursor.
  const overlayOffset = React.useMemo(() => {
    if (!dragActiveId || !tableContainerRef.current) return 0
    let offset = 0
    for (const r of overlayRows) {
      if (r.id === dragActiveId) break
      const idx = visibleRowIndexMap.get(r.id)
      if (idx === undefined) continue
      const el = tableContainerRef.current.querySelector<HTMLElement>(`[data-display-index="${idx}"]`)
      if (el) offset += el.offsetHeight
    }
    return offset
  }, [dragActiveId, overlayRows, visibleRowIndexMap])

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
      if (lockMove && sorting.length > 0) return
      if (!lockMove && sorting.length > 0) {
        const idFn = getRowId ?? getStableId
        const allRows = rowsRef.current
        const currentData = visualOrderedDataRef.current
        const idToItem = new Map(currentData.map(item => [idFn(item), item]))
        const inRows = new Set(allRows.map(r => r.id))
        const synced: TData[] = [
          ...allRows.map(r => idToItem.get(r.id)).filter((x): x is TData => x !== undefined),
          ...currentData.filter(item => !inRows.has(idFn(item))),
        ]
        setOrderedData(synced)
        onSwitchToManual?.()
      }
      e.preventDefault()
      suppressMouseRef.current = true
      const direction = e.key === 'ArrowUp' ? -1 : 1
      const idFn = getRowId ?? getStableId
      const currentVisibleRows = visibleRowsRef.current
      const activeRow = currentVisibleRows[activeRowIndex]
      if (!activeRow) return
      const isMulti = activeRow.getIsSelected() && table.getSelectedRowModel().rows.length > 1
      if (isMulti) {
        const selectedIdSet = new Set(table.getSelectedRowModel().rows.map(r => r.id))
        const vod = visualOrderedDataRef.current
        const activeId = idFn(activeRow.original)

        if (e.shiftKey) {
          // Move all selected items to the top or bottom as a block
          const selected = vod.filter(item => selectedIdSet.has(idFn(item)))
          const unselected = vod.filter(item => !selectedIdSet.has(idFn(item)))
          const next = direction === -1 ? [...selected, ...unselected] : [...unselected, ...selected]
          setOrderedData(next)
          onRowReorder(next)
          const rankInSelected = selected.findIndex(item => idFn(item) === activeId)
          setActiveRowIndex(direction === -1 ? rankInSelected : unselected.length + rankInSelected)
          return
        }

        const activeVodIdx = vod.findIndex(item => idFn(item) === activeId)

        // Cross-group: check the leading edge of the whole selection in the movement
        // direction (not just the active row) so multi-row selections trigger when
        // any edge item hits a group boundary.
        if (groupBy && onGroupChange) {
          const selectedVodIndices = Array.from(selectedIdSet)
            .map(id => vod.findIndex(item => idFn(item) === id))
            .filter(i => i !== -1)
          if (selectedVodIndices.length > 0) {
            const edgeVodIdx = (direction === -1 ? Math.min(...selectedVodIndices) : Math.max(...selectedVodIndices)) + direction
            if (edgeVodIdx >= 0 && edgeVodIdx < vod.length && !selectedIdSet.has(idFn(vod[edgeVodIdx]))) {
              const activeGroupKey = groupBy(activeRow.original)
              const stepOverGroupKey = groupBy(vod[edgeVodIdx])
              if (activeGroupKey !== stepOverGroupKey) {
                const next = vod.map(item => selectedIdSet.has(idFn(item)) ? reorderGroupChange(item, stepOverGroupKey) : item)
                setOrderedData(next)
                onRowReorder(next)
                setActiveRowIndex(activeRowIndex)
                return
              }
            }
          }
        }

        // Each selected item independently swaps with its adjacent unselected neighbor.
        const result = [...vod]
        if (direction === -1) {
          for (let i = 0; i < result.length; i++) {
            if (selectedIdSet.has(idFn(result[i])) && i > 0 && !selectedIdSet.has(idFn(result[i - 1]))) {
              ;[result[i - 1], result[i]] = [result[i], result[i - 1]]
            }
          }
        } else {
          for (let i = result.length - 1; i >= 0; i--) {
            if (selectedIdSet.has(idFn(result[i])) && i < result.length - 1 && !selectedIdSet.has(idFn(result[i + 1]))) {
              ;[result[i], result[i + 1]] = [result[i + 1], result[i]]
            }
          }
        }
        setOrderedData(result)
        onRowReorder(result)
        if (activeVodIdx !== -1) {
          const newActiveVodIdx = result.findIndex(item => idFn(item) === activeId)
          setActiveRowIndex(activeRowIndex + (newActiveVodIdx - activeVodIdx))
        }
        return
      }
      const targetDisplayIndex = e.shiftKey
        ? (direction === -1 ? 0 : currentVisibleRows.length - 1)
        : Math.max(0, Math.min(currentVisibleRows.length - 1, activeRowIndex + direction))
      if (targetDisplayIndex === activeRowIndex) return
      const targetRow = currentVisibleRows[targetDisplayIndex]
      const vod = visualOrderedDataRef.current
      // When crossing a group boundary, skip arrayMove — item is already adjacent to
      // the new group in vod, so just changing the group makes it first (DOWN) or last (UP).
      if (groupBy && onGroupChange && groupBy(activeRow.original) !== groupBy(targetRow.original)) {
        const newGroupKey = groupBy(targetRow.original)
        const updated = onGroupChange(activeRow.original, newGroupKey)
        const next = vod.map(item => idFn(item) === idFn(activeRow.original) ? updated : item)
        setOrderedData(next)
        onRowReorder(next)
        setActiveRowIndex(activeRowIndex)
        return
      }
      const fromIdx = vod.findIndex(item => idFn(item) === idFn(activeRow.original))
      const toIdx = vod.findIndex(item => idFn(item) === idFn(targetRow.original))
      if (fromIdx === -1 || toIdx === -1) return
      const next = arrayMove(vod, fromIdx, toIdx)
      setOrderedData(next)
      onRowReorder(next)
      setActiveRowIndex(targetDisplayIndex)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onRowReorder, activeRowIndex, getRowId, getStableId, groupBy, onGroupChange, lockMove, sorting, onSwitchToManual])

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

  const handleRowClick = React.useCallback((i: number, shiftKey: boolean, toggleSelected: () => void) => {
    if (dragOccurredRef.current) return
    setActiveRowSource('mouse')
    setActiveRowIndex(i)
    if (shiftKey && anchorRowIndexRef.current !== null) {
      const lo = Math.min(anchorRowIndexRef.current, i)
      const hi = Math.max(anchorRowIndexRef.current, i)
      const updates: RowSelectionState = {}
      for (let idx = lo; idx <= hi; idx++) {
        const r = visibleRowsRef.current[idx]
        if (r) updates[r.id] = true
      }
      setRowSelection(prev => ({ ...prev, ...updates }))
    } else {
      anchorRowIndexRef.current = i
      toggleSelected()
    }
  }, [])

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
        measuring={{ droppable: { strategy: MeasuringStrategy.Always } }}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
        onDragCancel={handleDragCancel}
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
                          groupKey={groupKey}
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
                          return (
                            <ListRow
                              key={row.id}
                              row={row}
                              displayIndex={displayIndex}
                              activeRowIndex={activeRowIndex}
                              activeRowSource={activeRowSource}
                              reorderable={dragEnabled}
                              hidden={draggingIds.has(row.id)}
                              onRowClick={(i, shiftKey) => handleRowClick(i, shiftKey, () => row.toggleSelected())}
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
                    return (
                      <ListRow
                        key={row.id}
                        row={row}
                        displayIndex={index}
                        activeRowIndex={activeRowIndex}
                        activeRowSource={activeRowSource}
                        reorderable={dragEnabled}
                        hidden={draggingIds.has(row.id)}
                        onRowClick={(i, shiftKey) => handleRowClick(i, shiftKey, () => row.toggleSelected())}
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
                                if (sorted === 'desc') header.column.clearSorting()
                                else header.column.toggleSorting(sorted === 'asc')
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
                  {visibleRows.length === 0 && !groupedRows ? (
                    <TableRow>
                      <TableCell
                        colSpan={allColumns.length}
                        className="h-24 text-center text-muted-foreground text-sm"
                      >
                        No results found.
                      </TableCell>
                    </TableRow>
                  ) : groupedRows ? (
                    Array.from(groupedRows.entries()).map(([groupKey, groupRows]) => {
                      const isCollapsed = collapsedGroups.has(groupKey)
                      const config = groupConfigs?.[groupKey]
                      return (
                        <React.Fragment key={groupKey}>
                          <TableRow className="hover:bg-transparent">
                            <TableCell colSpan={allColumns.length} className="p-0">
                              <GroupHeader
                                groupKey={groupKey}
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
                            </TableCell>
                          </TableRow>
                          {!isCollapsed && groupRows.map((row) => {
                            const displayIndex = visibleRowIndexMap.get(row.id) ?? 0
                            return (
                              <SortableRow
                                key={row.id}
                                row={row}
                                displayIndex={displayIndex}
                                activeRowIndex={activeRowIndex}
                                activeRowSource={activeRowSource}
                                reorderable={dragEnabled}
                                hidden={draggingIds.has(row.id)}
                                onRowClick={(i, shiftKey) => handleRowClick(i, shiftKey, () => row.toggleSelected())}
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
                    visibleRows.map((row, index) => {
                      return <SortableRow
                        key={row.id}
                        row={row}
                        displayIndex={index}
                        activeRowIndex={activeRowIndex}
                        activeRowSource={activeRowSource}
                        reorderable={dragEnabled}
                        hidden={draggingIds.has(row.id)}
                        onRowClick={(i, shiftKey) => handleRowClick(i, shiftKey, () => row.toggleSelected())}
                        onRowMouseEnter={(i) => {
                          if (suppressMouseRef.current) return
                          setActiveRowSource('mouse')
                          setActiveRowIndex(i)
                        }}
                        onContextMenu={handleContextMenu}
                      />
                    })
                  )}
                </TableBody>
              </SortableContext>
            </Table>
          )}
        </div>
        <DragOverlay dropAnimation={null}>
          {overlayRows.length > 0 ? (
            <div
              className="cursor-grabbing rounded-sm shadow-lg overflow-hidden"
              style={overlayOffset ? { transform: `translateY(-${overlayOffset}px)` } : undefined}
            >
              {overlayRows.map((r) => (
                <div
                  key={r.id}
                  className={cn(listRowClassName, r.getIsSelected() ? 'bg-primary/10' : 'bg-background')}
                >
                  <ListRowCells row={r} isSelected={r.getIsSelected()} activeRowIndex={null} displayIndex={-1} />
                </div>
              ))}
            </div>
          ) : null}
        </DragOverlay>
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
        isDraggingMulti={!!dragActiveId && draggingIds.size > 1}
        dragCrossesGroup={dragCrossesGroup}
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
