import type { ColumnDef, SortingState } from '@tanstack/react-table'
import type * as React from 'react'

export interface ShortcutKeys {
  key: string
  altKey?: boolean
  shiftKey?: boolean
  metaKey?: boolean
  ctrlKey?: boolean
}

export interface RowAction<TData> {
  label: string
  icon?: React.ReactNode
  shortcut?: string
  shortcutKeys?: ShortcutKeys
  onClick?: (rows: TData[]) => void
  subActions?: RowAction<TData>[]
  destructive?: boolean
}

export interface TableFilterOption {
  label: string
  value: string
  icon?: React.ReactNode
}

export interface TableFilterDef<TData> {
  id: string
  label: string
  icon?: React.ReactNode
  options: TableFilterOption[]
  filterFn: (row: TData, selectedValues: string[]) => boolean
}

export interface TableActiveFilter {
  filterId: string
  values: string[]
}

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  searchColumn?: string
  searchPlaceholder?: string
  rowActions?: RowAction<TData>[]
  getRowLabel?: (row: TData) => string
  pageSize?: number | 'all'
  onRowReorder?: (newData: TData[]) => void
  getRowId?: (row: TData) => string
  view?: 'table' | 'list'
  filterDefs?: TableFilterDef<TData>[]
  /** Controlled filter state. When provided the internal filter button is hidden. */
  activeFilters?: TableActiveFilter[]
  onToggleFilterValue?: (filterId: string, value: string) => void
  onRemoveFilter?: (filterId: string) => void
  onClearFilters?: () => void
  /** Controlled sorting state. When provided, header clicks update via onSortingChange. */
  sorting?: SortingState
  onSortingChange?: (sorting: SortingState) => void
}
