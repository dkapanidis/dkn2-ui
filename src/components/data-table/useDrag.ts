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
  getStableId: (row: TData) => string
  table: Table<TData>
  rowHeightRef: React.MutableRefObject<number>
}

export function useDrag<TData>({
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
}: UseDragParams<TData>) {
  const [dragActiveId, setDragActiveId] = React.useState<string | null>(null)
  const [multiDragActive, setMultiDragActive] = React.useState(false)
  const [dragDeltaY, setDragDeltaY] = React.useState(0)
  const dragDeltaYRef = React.useRef(0)
  const [justDropped, setJustDropped] = React.useState(false)
  const justDroppedRafRef = React.useRef<number | null>(null)

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
    const newIdx = newData.findIndex(item => getStableId(item) === activeRowId) - pageStart
    setActiveRowIndex(newIdx >= 0 ? newIdx : null)
  }, [activeRowIndex, rows, table, getStableId, setActiveRowIndex])

  const handleDragStart = (event: DragStartEvent) => {
    const id = String(event.active.id)
    setDragActiveId(id)
    setDragDeltaY(0)
    dragDeltaYRef.current = 0
    const draggedRow = rows.find((r) => r.id === id)
    setMultiDragActive((draggedRow?.getIsSelected() ?? false) && selectedCount > 1)
  }

  const handleDragMove = (event: DragMoveEvent) => {
    if (multiDragActive) {
      dragDeltaYRef.current = event.delta.y
      setDragDeltaY(event.delta.y)
    }
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    const finalDeltaY = dragDeltaYRef.current
    setDragActiveId(null)
    setMultiDragActive(false)
    setDragDeltaY(0)
    dragDeltaYRef.current = 0

    const draggedRow = rows.find((r) => r.id === active.id)
    const isDraggedSelected = draggedRow?.getIsSelected() ?? false

    if (isDraggedSelected && selectedCount > 1) {
      const rowH = rowHeightRef.current
      const activeDomIndex = rows.findIndex((r) => r.id === active.id)
      const nonSelectedDomIndices = rows.map((r, i) => !r.getIsSelected() ? i : -1).filter(i => i !== -1)
      const insertAt_original = nonSelectedDomIndices.filter(i => i < activeDomIndex).length
      const insertAt = Math.max(0, Math.min(
        Math.round(insertAt_original + finalDeltaY / rowH),
        nonSelectedDomIndices.length
      ))
      const selectedIdSet = new Set(table.getSelectedRowModel().rows.map((r) => r.id))
      const selectedItems = orderedData.filter((item) => selectedIdSet.has(getStableId(item)))
      const unselectedItems = orderedData.filter((item) => !selectedIdSet.has(getStableId(item)))
      const newData = [
        ...unselectedItems.slice(0, insertAt),
        ...selectedItems,
        ...unselectedItems.slice(insertAt),
      ]
      setJustDropped(true)
      if (justDroppedRafRef.current) cancelAnimationFrame(justDroppedRafRef.current)
      justDroppedRafRef.current = requestAnimationFrame(() => {
        justDroppedRafRef.current = requestAnimationFrame(() => {
          setJustDropped(false)
        })
      })
      updateActiveRowAfterReorder(newData)
      setOrderedData(newData)
      onRowReorder?.(newData)
    } else {
      if (!over || active.id === over.id) return
      const oldIndex = orderedData.findIndex((item) => getStableId(item) === active.id)
      const newIndex = orderedData.findIndex((item) => getStableId(item) === over.id)
      if (oldIndex === -1 || newIndex === -1) return
      const newData = arrayMove(orderedData, oldIndex, newIndex)
      updateActiveRowAfterReorder(newData)
      setOrderedData(newData)
      onRowReorder?.(newData)
    }
  }

  let customTransforms: number[] | null = null
  if (multiDragActive && dragActiveId) {
    const rowH = rowHeightRef.current
    const activeDomIndex = rows.findIndex((r) => r.id === dragActiveId)
    if (activeDomIndex !== -1) {
      const selectedDomIndices = rows.map((r, i) => r.getIsSelected() ? i : -1).filter(i => i !== -1)
      const nonSelectedDomIndices = rows.map((r, i) => !r.getIsSelected() ? i : -1).filter(i => i !== -1)
      const groupSize = selectedDomIndices.length
      const insertAt_original = nonSelectedDomIndices.filter(i => i < activeDomIndex).length
      const insertAt_float = insertAt_original + dragDeltaY / rowH
      const insertAt = Math.max(0, Math.min(Math.round(insertAt_float), nonSelectedDomIndices.length))
      customTransforms = rows.map((row, domIndex) => {
        if (row.getIsSelected()) {
          const groupIdx = selectedDomIndices.indexOf(domIndex)
          const clamped = Math.max(0, Math.min(insertAt_float, nonSelectedDomIndices.length))
          return (clamped + groupIdx - domIndex) * rowH
        }
        const k = nonSelectedDomIndices.indexOf(domIndex)
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
    customTransforms,
    handleDragStart,
    handleDragMove,
    handleDragEnd,
  }
}
