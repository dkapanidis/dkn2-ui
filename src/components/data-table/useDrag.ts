import {
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
  type DragOverEvent,
  type DragStartEvent,
} from '@dnd-kit/core'
import { sortableKeyboardCoordinates } from '@dnd-kit/sortable'
import type { Row, Table } from '@tanstack/react-table'
import * as React from 'react'
import type { GroupConfig } from './types'

// dnd-kit droppable id prefix for a group header. Hovering a header drops the
// dragged row(s) as the first item of that group.
export const HEADER_DROPPABLE_PREFIX = 'group-header:'

interface UseDragParams<TData> {
  rows: Row<TData>[]
  selectedCount: number
  orderedData: TData[]
  setOrderedData: React.Dispatch<React.SetStateAction<TData[]>>
  onRowReorder?: (newData: TData[]) => void
  getItemId: (row: TData) => string
  table: Table<TData>
  groupBy?: (row: TData) => string
  onGroupChange?: (row: TData, newGroupKey: string) => TData
  groupConfigs?: Record<string, GroupConfig>
  dragEnabled?: boolean
}

/**
 * Drag/reorder via live DOM reflow. On every `dragOver` the data is reordered so
 * the real DOM reflects the drop — group headers and heights recompute naturally
 * because they are real layout elements. The dragged row(s) stay in the list as
 * opacity-0 placeholders; a DragOverlay renders the visible copy under the cursor.
 */
export function useDrag<TData>({
  rows,
  selectedCount,
  orderedData,
  setOrderedData,
  onRowReorder,
  getItemId,
  table,
  groupBy,
  onGroupChange,
  groupConfigs,
  dragEnabled = true,
}: UseDragParams<TData>) {
  const [dragActiveId, setDragActiveId] = React.useState<string | null>(null)
  const [draggingIds, setDraggingIds] = React.useState<Set<string>>(() => new Set())
  const [dragCrossesGroup, setDragCrossesGroup] = React.useState(false)
  const dragOccurredRef = React.useRef(false)
  // Snapshot of the order at drag start, restored if the drag is cancelled.
  const preDragOrderRef = React.useRef<TData[]>([])
  // Maps each dragged item's id to its group at drag start, so we can detect
  // group changes even when selected rows span multiple groups.
  const preDragGroupsRef = React.useRef<Map<string, string>>(new Map())

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  )

  // Identity of an order array, used to skip redundant state updates.
  const orderSignature = React.useCallback((items: TData[]) =>
    items.map(it => groupBy ? `${getItemId(it)}@${groupBy(it)}` : getItemId(it)).join('|'),
  [getItemId, groupBy])

  const handleDragStart = (event: DragStartEvent) => {
    if (!dragEnabled) return
    dragOccurredRef.current = true
    const id = String(event.active.id)
    setDragActiveId(id)
    preDragOrderRef.current = orderedData
    const draggedRow = rows.find((r) => r.id === id)
    const multi = (draggedRow?.getIsSelected() ?? false) && selectedCount > 1
    const draggingIdSet = multi
      ? new Set(table.getSelectedRowModel().rows.map((r) => r.id))
      : new Set([id])
    setDraggingIds(draggingIdSet)

    if (groupBy) {
      const preDragGroups = new Map<string, string>()
      for (const row of rows) {
        if (draggingIdSet.has(row.id)) preDragGroups.set(row.id, groupBy(row.original))
      }
      preDragGroupsRef.current = preDragGroups
    } else {
      preDragGroupsRef.current = new Map()
    }
    setDragCrossesGroup(false)
  }

  const handleDragOver = (event: DragOverEvent) => {
    if (!dragEnabled) return
    const { over } = event
    if (!over) return
    const overId = String(over.id)
    if (draggingIds.has(overId)) return

    const order = orderedData
    const block = order.filter((it) => draggingIds.has(getItemId(it)))
    if (block.length === 0) return
    const rest = order.filter((it) => !draggingIds.has(getItemId(it)))

    let insertIdx: number
    let newGroupKey: string | null = null

    if (overId.startsWith(HEADER_DROPPABLE_PREFIX)) {
      if (!groupBy) return
      const headerGroup = overId.slice(HEADER_DROPPABLE_PREFIX.length)
      // The boundary slot directly under this header.
      insertIdx = rest.findIndex((it) => groupBy(it) === headerGroup)
      if (insertIdx === -1) {
        // Target group currently has no other rows — place by group order.
        const targetOrder = groupConfigs?.[headerGroup]?.order ?? Infinity
        insertIdx = rest.findIndex((it) => (groupConfigs?.[groupBy(it)]?.order ?? Infinity) > targetOrder)
        if (insertIdx === -1) insertIdx = rest.length
        newGroupKey = headerGroup
      } else {
        // A header sits at a group boundary. Approaching from above joins this
        // group as its first item; approaching from below (the block is already
        // in this group) leaves it to become the last item of the group above.
        const blockGroup = groupBy(block[0])
        newGroupKey = (blockGroup === headerGroup && insertIdx > 0)
          ? groupBy(rest[insertIdx - 1])
          : headerGroup
      }
    } else {
      const overIdx = rest.findIndex((it) => getItemId(it) === overId)
      if (overIdx === -1) return
      newGroupKey = groupBy ? groupBy(rest[overIdx]) : null
      // Continuous swap: move the block to the side of `over` it is travelling toward.
      const blockStart = order.findIndex((it) => draggingIds.has(getItemId(it)))
      const overOrderIdx = order.findIndex((it) => getItemId(it) === overId)
      insertIdx = overOrderIdx > blockStart ? overIdx + 1 : overIdx
    }

    let placedBlock = block
    if (newGroupKey !== null && groupBy && onGroupChange) {
      const target = newGroupKey
      placedBlock = block.map((it) => groupBy(it) !== target ? onGroupChange(it, target) : it)
    }
    const newOrder = [...rest.slice(0, insertIdx), ...placedBlock, ...rest.slice(insertIdx)]
    if (orderSignature(newOrder) !== orderSignature(order)) {
      setOrderedData(newOrder)
    }

    if (newGroupKey !== null && preDragGroupsRef.current.size > 0) {
      const crosses = Array.from(preDragGroupsRef.current.values()).some(orig => orig !== newGroupKey)
      setDragCrossesGroup(crosses)
    }
  }

  const endDrag = () => {
    setDragActiveId(null)
    setDraggingIds(new Set())
    setDragCrossesGroup(false)
    preDragGroupsRef.current = new Map()
    setTimeout(() => { dragOccurredRef.current = false }, 0)
  }

  const handleDragEnd = (_event: DragEndEvent) => {
    endDrag()
    // Live reordering during dragOver already produced the final order.
    if (orderSignature(orderedData) !== orderSignature(preDragOrderRef.current)) {
      onRowReorder?.(orderedData)
    }
  }

  const handleDragCancel = (_event: DragEndEvent) => {
    endDrag()
    setOrderedData(preDragOrderRef.current)
  }

  return {
    sensors,
    dragActiveId,
    draggingIds,
    dragCrossesGroup,
    dragOccurredRef,
    handleDragStart,
    handleDragOver,
    handleDragEnd,
    handleDragCancel,
  }
}
