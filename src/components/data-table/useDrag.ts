import {
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
  type DragMoveEvent,
  type DragStartEvent,
} from '@dnd-kit/core'
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable'
import type { Row, Table } from '@tanstack/react-table'
import * as React from 'react'

interface UseDragParams<TData> {
  rows: Row<TData>[]
  selectedCount: number
  orderedData: TData[]
  setOrderedData: React.Dispatch<React.SetStateAction<TData[]>>
  onRowReorder?: (newData: TData[]) => void
  activeRowIndex: number | null
  setActiveRowIndex: React.Dispatch<React.SetStateAction<number | null>>
  getItemId: (row: TData) => string
  table: Table<TData>
  rowHeightRef: React.MutableRefObject<number>
  headerHeightRef: React.MutableRefObject<number>
  onBeforeReorder?: (newData: TData[], activeId: string, overId: string | null) => TData[]
  groupBy?: (row: TData) => string
  onGroupChange?: (row: TData, newGroupKey: string) => TData
}

export function useDrag<TData>({
  rows,
  selectedCount,
  orderedData,
  setOrderedData,
  onRowReorder,
  activeRowIndex,
  setActiveRowIndex,
  getItemId,
  table,
  rowHeightRef,
  headerHeightRef,
  onBeforeReorder,
  groupBy,
  onGroupChange,
}: UseDragParams<TData>) {
  const [dragActiveId, setDragActiveId] = React.useState<string | null>(null)
  const [multiDragActive, setMultiDragActive] = React.useState(false)
  const [dragDeltaY, setDragDeltaY] = React.useState(0)
  const dragDeltaYRef = React.useRef(0)
  const [justDropped, setJustDropped] = React.useState(false)
  const justDroppedRafRef = React.useRef<number | null>(null)
  const dragOccurredRef = React.useRef(false)

  React.useEffect(() => () => {
    if (justDroppedRafRef.current) cancelAnimationFrame(justDroppedRafRef.current)
  }, [])

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  )

  const updateActiveRowAfterReorder = React.useCallback((newData: TData[]) => {
    if (activeRowIndex === null) return
    const activeRowId = rows[activeRowIndex]?.id
    if (!activeRowId) return
    const { pageIndex: pi, pageSize: ps } = table.getState().pagination
    const pageStart = pi * ps
    const newIdx = newData.findIndex(item => getItemId(item) === activeRowId) - pageStart
    setActiveRowIndex(newIdx >= 0 ? newIdx : null)
  }, [activeRowIndex, rows, table, getItemId, setActiveRowIndex])

  // Geometric placement for a single-row drag within a grouped table.
  // Returns the insertion index into the non-dragged visible rows, and the group
  // the dragged row currently belongs to. Group membership flips when the dragged
  // row's center crosses a group header's center — i.e. when it is half-way over
  // the header — which lets it settle as the first item of the group below while
  // the header itself shifts to sit above it. Working from original row centers
  // (header-aware) keeps the preview deterministic and independent of dnd-kit's
  // collision detection, which mismeasures the header gap between groups.
  const computeGroupedPlacement = React.useCallback((deltaY: number) => {
    if (!dragActiveId || !groupBy) return null
    const activeDomIndex = rows.findIndex(r => r.id === dragActiveId)
    if (activeDomIndex === -1) return null
    const rowH = rowHeightRef.current
    const headerH = headerHeightRef.current
    const keys = rows.map(r => groupBy(r.original))
    const nonDragged: number[] = []
    for (let i = 0; i < rows.length; i++) if (i !== activeDomIndex) nonDragged.push(i)

    // Group boundaries (= rendered headers) among visible-row indices in (a, b].
    const headersBetween = (a: number, b: number) => {
      let c = 0
      for (let i = a + 1; i <= b; i++) if (keys[i] !== keys[i - 1]) c++
      return c
    }
    // Original center Y of visible row `d`, relative to the dragged row's center.
    const centerY = (d: number) => {
      if (d === activeDomIndex) return 0
      return d > activeDomIndex
        ? (d - activeDomIndex) * rowH + headersBetween(activeDomIndex, d) * headerH
        : (d - activeDomIndex) * rowH - headersBetween(d, activeDomIndex) * headerH
    }

    let insertAt = 0
    for (const d of nonDragged) if (centerY(d) < deltaY) insertAt++

    let targetGroupKey = keys[activeDomIndex]
    if (nonDragged.length > 0) {
      if (insertAt === 0) {
        targetGroupKey = keys[nonDragged[0]]
      } else if (insertAt === nonDragged.length) {
        targetGroupKey = keys[nonDragged[nonDragged.length - 1]]
      } else {
        const up = keys[nonDragged[insertAt - 1]]
        const dn = keys[nonDragged[insertAt]]
        if (up === dn) {
          targetGroupKey = up
        } else {
          // The dragged row sits in a boundary gap with a header in it. It belongs
          // to the lower group once its center passes the header's center.
          const headerCenter = centerY(nonDragged[insertAt]) - rowH / 2 - headerH / 2
          targetGroupKey = deltaY < headerCenter ? up : dn
        }
      }
    }
    return { insertAt, targetGroupKey }
  }, [dragActiveId, groupBy, rows, rowHeightRef, headerHeightRef])

  const flagJustDropped = React.useCallback(() => {
    setJustDropped(true)
    if (justDroppedRafRef.current) cancelAnimationFrame(justDroppedRafRef.current)
    justDroppedRafRef.current = requestAnimationFrame(() => {
      justDroppedRafRef.current = requestAnimationFrame(() => {
        setJustDropped(false)
      })
    })
  }, [])

  const handleDragStart = (event: DragStartEvent) => {
    dragOccurredRef.current = true
    const id = String(event.active.id)
    setDragActiveId(id)
    setDragDeltaY(0)
    dragDeltaYRef.current = 0
    const draggedRow = rows.find((r) => r.id === id)
    setMultiDragActive((draggedRow?.getIsSelected() ?? false) && selectedCount > 1)
  }

  const handleDragMove = (event: DragMoveEvent) => {
    dragDeltaYRef.current = event.delta.y
    setDragDeltaY(event.delta.y)
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    const finalDeltaY = dragDeltaYRef.current
    setDragActiveId(null)
    setMultiDragActive(false)
    setDragDeltaY(0)
    dragDeltaYRef.current = 0
    setTimeout(() => { dragOccurredRef.current = false }, 0)

    const activeId = String(active.id)
    const draggedRow = rows.find((r) => r.id === activeId)
    const isDraggedSelected = draggedRow?.getIsSelected() ?? false

    if (isDraggedSelected && selectedCount > 1) {
      const rowH = rowHeightRef.current
      const activeDomIndex = rows.findIndex((r) => r.id === activeId)
      const nonSelectedDomIndices = rows.map((r, i) => !r.getIsSelected() ? i : -1).filter(i => i !== -1)
      const insertAt_original = nonSelectedDomIndices.filter(i => i < activeDomIndex).length
      const insertAt = Math.max(0, Math.min(
        Math.round(insertAt_original + finalDeltaY / rowH),
        nonSelectedDomIndices.length
      ))
      const selectedIdSet = new Set(table.getSelectedRowModel().rows.map((r) => r.id))
      const selectedItems = orderedData.filter((item) => selectedIdSet.has(getItemId(item)))
      const unselectedItems = orderedData.filter((item) => !selectedIdSet.has(getItemId(item)))
      const newData = [
        ...unselectedItems.slice(0, insertAt),
        ...selectedItems,
        ...unselectedItems.slice(insertAt),
      ]
      const finalData = onBeforeReorder ? onBeforeReorder(newData, activeId, over ? String(over.id) : null) : newData
      flagJustDropped()
      updateActiveRowAfterReorder(finalData)
      setOrderedData(finalData)
      onRowReorder?.(finalData)
    } else if (groupBy) {
      // Single-row drag in a grouped table: place by the same geometric model
      // that drives the live preview, so the drop lands exactly where it looked.
      const placement = computeGroupedPlacement(finalDeltaY)
      if (!placement) return
      const { insertAt, targetGroupKey } = placement
      const nonDraggedVisible = rows.filter((r) => r.id !== activeId)
      const beforeId = insertAt < nonDraggedVisible.length ? nonDraggedVisible[insertAt].id : null
      let draggedItem = orderedData.find((it) => getItemId(it) === activeId)
      if (!draggedItem) return
      const withoutDragged = orderedData.filter((it) => getItemId(it) !== activeId)
      if (onGroupChange && groupBy(draggedItem) !== targetGroupKey) {
        draggedItem = onGroupChange(draggedItem, targetGroupKey)
      }
      let newData: TData[]
      if (beforeId === null) {
        newData = [...withoutDragged, draggedItem]
      } else {
        const idx = withoutDragged.findIndex((it) => getItemId(it) === beforeId)
        newData = idx === -1
          ? [...withoutDragged, draggedItem]
          : [...withoutDragged.slice(0, idx), draggedItem, ...withoutDragged.slice(idx)]
      }
      flagJustDropped()
      updateActiveRowAfterReorder(newData)
      setOrderedData(newData)
      onRowReorder?.(newData)
    } else {
      if (!over || active.id === over.id) return
      const oldIndex = orderedData.findIndex((item) => getItemId(item) === activeId)
      const newIndex = orderedData.findIndex((item) => getItemId(item) === String(over.id))
      if (oldIndex === -1 || newIndex === -1) return
      const newData = arrayMove(orderedData, oldIndex, newIndex)
      updateActiveRowAfterReorder(newData)
      setOrderedData(newData)
      onRowReorder?.(newData)
    }
  }

  // Per-row translateY for the live drag preview. Used for multi-row drags and for
  // single-row drags in grouped tables. dnd-kit's default sortable strategy measures
  // the gap between sortable rows, which across a group boundary includes the header
  // height — so it shifts boundary rows too far. Uniform rowH shifts here keep every
  // row within its group; the dragged set tracks the pointer.
  let customTransforms: number[] | null = null
  let dragTargetGroupKey: string | null = null
  const grouped = !!groupBy
  if (dragActiveId && (multiDragActive || grouped)) {
    const rowH = rowHeightRef.current
    const activeDomIndex = rows.findIndex((r) => r.id === dragActiveId)
    if (activeDomIndex !== -1) {
      // Drag set: the selected rows in a multi-drag, otherwise just the dragged row.
      const inDragSet = (row: Row<TData>) => multiDragActive ? row.getIsSelected() : row.id === dragActiveId
      const draggedDomIndices = rows.map((r, i) => inDragSet(r) ? i : -1).filter(i => i !== -1)
      const nonDraggedDomIndices = rows.map((r, i) => !inDragSet(r) ? i : -1).filter(i => i !== -1)
      const groupSize = draggedDomIndices.length
      const insertAt_original = nonDraggedDomIndices.filter(i => i < activeDomIndex).length
      // The dragged set tracks the pointer smoothly.
      const insertAt_float = insertAt_original + dragDeltaY / rowH
      // Where the displaced (non-dragged) rows settle. Multi-drag tracks the pointer.
      // Single-row grouped drag uses the header-aware geometric placement, so the
      // displaced rows and the group header move in lockstep.
      let insertAt: number
      if (multiDragActive) {
        insertAt = Math.max(0, Math.min(Math.round(insertAt_float), nonDraggedDomIndices.length))
      } else {
        const placement = computeGroupedPlacement(dragDeltaY)
        insertAt = placement ? placement.insertAt : insertAt_original
        dragTargetGroupKey = placement ? placement.targetGroupKey : null
      }
      customTransforms = rows.map((row, domIndex) => {
        if (inDragSet(row)) {
          const groupIdx = draggedDomIndices.indexOf(domIndex)
          const clamped = Math.max(0, Math.min(insertAt_float, nonDraggedDomIndices.length))
          return (clamped + groupIdx - domIndex) * rowH
        }
        const k = nonDraggedDomIndices.indexOf(domIndex)
        const target = k < insertAt ? k : k + groupSize
        return (target - domIndex) * rowH
      })
    }
  }

  return {
    sensors,
    dragActiveId,
    multiDragActive,
    justDropped,
    dragOccurredRef,
    customTransforms,
    dragTargetGroupKey,
    handleDragStart,
    handleDragMove,
    handleDragEnd,
  }
}
