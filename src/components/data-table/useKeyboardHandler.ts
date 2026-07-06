import type { Row, Table } from '@tanstack/react-table'
import * as React from 'react'
import type { RowAction } from './types'

interface UseKeyboardHandlerParams<TData> {
  rowActions?: RowAction<TData>[]
  rows: Row<TData>[]
  activeRowIndex: number | null
  selectedCount: number
  contextMenu: { x: number; y: number; rowIndex: number } | null
  table: Table<TData>
  effectiveRows: TData[]
  setActionsOpen: (open: boolean) => void
  setActionPage: (page: RowAction<TData> | null) => void
  setActiveRowIndex: React.Dispatch<React.SetStateAction<number | null>>
  setActiveRowSource: (source: 'keyboard' | 'mouse') => void
  suppressMouseRef: React.MutableRefObject<boolean>
  setContextMenu: (menu: null) => void
  onRowOpen?: (row: TData) => void
}

export function useKeyboardHandler<TData>({
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
  onRowOpen,
}: UseKeyboardHandlerParams<TData>) {
  const shiftAnchorRef = React.useRef<number | null>(null)

  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.tagName === 'SELECT' ||
        target.isContentEditable
      ) return

      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        if (!rowActions?.length || !effectiveRows.length) return
        e.preventDefault()
        setActionsOpen(true)
      } else if ((e.metaKey || e.ctrlKey) && e.key === 'a') {
        e.preventDefault()
        table.toggleAllPageRowsSelected(true)
      } else if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key === 'ArrowUp' && activeRowIndex !== null) {
        e.preventDefault()
        suppressMouseRef.current = true
        setActiveRowSource('keyboard')
        if (shiftAnchorRef.current === null) shiftAnchorRef.current = activeRowIndex
        setActiveRowIndex(0)
        const anchor = shiftAnchorRef.current
        const selection: Record<string, boolean> = {}
        for (let i = 0; i <= anchor; i++) {
          selection[rows[i].id] = true
        }
        table.setRowSelection(selection)
      } else if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key === 'ArrowDown' && activeRowIndex !== null) {
        e.preventDefault()
        suppressMouseRef.current = true
        setActiveRowSource('keyboard')
        if (shiftAnchorRef.current === null) shiftAnchorRef.current = activeRowIndex
        setActiveRowIndex(rows.length - 1)
        const anchor = shiftAnchorRef.current
        const selection: Record<string, boolean> = {}
        for (let i = anchor; i <= rows.length - 1; i++) {
          selection[rows[i].id] = true
        }
        table.setRowSelection(selection)
      } else if ((e.metaKey || e.ctrlKey) && e.key === 'ArrowUp') {
        e.preventDefault()
        suppressMouseRef.current = true
        setActiveRowSource('keyboard')
        shiftAnchorRef.current = null
        setActiveRowIndex(0)
      } else if ((e.metaKey || e.ctrlKey) && e.key === 'ArrowDown') {
        e.preventDefault()
        suppressMouseRef.current = true
        setActiveRowSource('keyboard')
        shiftAnchorRef.current = null
        setActiveRowIndex(rows.length - 1)
      } else if (e.key === 'Tab' && !e.shiftKey && activeRowIndex === rows.length - 1) {
        setActiveRowIndex(null)
      } else if (e.key === 'Tab' && e.shiftKey && activeRowIndex === 0) {
        setActiveRowIndex(null)
      } else if (e.key === 'ArrowDown' && !e.altKey && e.shiftKey && activeRowIndex !== null) {
        e.preventDefault()
        suppressMouseRef.current = true
        setActiveRowSource('keyboard')
        if (shiftAnchorRef.current === null) shiftAnchorRef.current = activeRowIndex
        const nextIndex = Math.min(activeRowIndex + 1, rows.length - 1)
        setActiveRowIndex(nextIndex)
        const anchor = shiftAnchorRef.current
        const selection: Record<string, boolean> = {}
        for (let i = Math.min(anchor, nextIndex); i <= Math.max(anchor, nextIndex); i++) {
          selection[rows[i].id] = true
        }
        table.setRowSelection(selection)
      } else if (e.key === 'ArrowUp' && !e.altKey && e.shiftKey && activeRowIndex !== null) {
        e.preventDefault()
        suppressMouseRef.current = true
        setActiveRowSource('keyboard')
        if (shiftAnchorRef.current === null) shiftAnchorRef.current = activeRowIndex
        const nextIndex = Math.max(activeRowIndex - 1, 0)
        setActiveRowIndex(nextIndex)
        const anchor = shiftAnchorRef.current
        const selection: Record<string, boolean> = {}
        for (let i = Math.min(anchor, nextIndex); i <= Math.max(anchor, nextIndex); i++) {
          selection[rows[i].id] = true
        }
        table.setRowSelection(selection)
      } else if ((e.key === 'ArrowDown' && !e.altKey) || (e.key === 'j' && !e.metaKey && !e.ctrlKey && !e.altKey) || (e.key === 'Tab' && !e.shiftKey && activeRowIndex !== null && activeRowIndex !== rows.length - 1)) {
        e.preventDefault()
        suppressMouseRef.current = true
        setActiveRowSource('keyboard')
        shiftAnchorRef.current = null
        setActiveRowIndex((prev) =>
          prev === null ? 0 : Math.min(prev + 1, rows.length - 1)
        )
      } else if ((e.key === 'ArrowUp' && !e.altKey) || (e.key === 'k' && !e.metaKey && !e.ctrlKey && !e.altKey) || (e.key === 'Tab' && e.shiftKey && activeRowIndex !== null && activeRowIndex !== 0)) {
        e.preventDefault()
        suppressMouseRef.current = true
        setActiveRowSource('keyboard')
        shiftAnchorRef.current = null
        setActiveRowIndex((prev) =>
          prev === null ? 0 : Math.max(prev - 1, 0)
        )
      } else if ((e.key === ' ' || e.key === 'x') && activeRowIndex !== null) {
        e.preventDefault()
        suppressMouseRef.current = true
        rows[activeRowIndex]?.toggleSelected()
      } else if (e.key === 'Enter' && activeRowIndex !== null && onRowOpen) {
        e.preventDefault()
        const row = rows[activeRowIndex]
        if (row) onRowOpen(row.original)
      } else if (e.key === 'Enter' && activeRowIndex !== null && rowActions?.length && effectiveRows.length) {
        e.preventDefault()
        setActionsOpen(true)
      } else if (e.key === 'Escape') {
        if (contextMenu) {
          setContextMenu(null)
        } else if (selectedCount > 0) {
          table.resetRowSelection()
        } else {
          setActiveRowIndex(null)
        }
      } else if (rowActions?.length) {
        const allSubActions = rowActions.flatMap((a) => a.subActions ?? [])
        const matchedSub = allSubActions.find(
          (a) =>
            a.shortcutKeys &&
            a.shortcutKeys.key === e.key &&
            !!a.shortcutKeys.altKey === e.altKey &&
            !!a.shortcutKeys.shiftKey === e.shiftKey &&
            !!a.shortcutKeys.metaKey === e.metaKey &&
            !!a.shortcutKeys.ctrlKey === e.ctrlKey,
        )
        if (matchedSub) {
          e.preventDefault()
          if (!effectiveRows.length) return
          suppressMouseRef.current = true
          matchedSub.onClick?.(effectiveRows)
        } else if (!e.metaKey && !e.ctrlKey && !e.altKey) {
          const matched = rowActions.find((a) => a.shortcut === e.key)
          if (matched) {
            e.preventDefault()
            if (!effectiveRows.length) return
            if (matched.subActions?.length) {
              setActionPage(matched)
              setActionsOpen(true)
            } else {
              matched.onClick?.(effectiveRows)
            }
          }
        }
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rowActions, rows, activeRowIndex, selectedCount, contextMenu, table, onRowOpen])
}
