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
import { ArrowUpDownIcon, ChevronLeftIcon, ChevronRightIcon, CommandIcon, XIcon } from 'lucide-react'
import * as React from 'react'
import { createPortal } from 'react-dom'
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

export interface RowAction<TData> {
  label: string
  icon?: React.ReactNode
  onClick: (rows: TData[]) => void
  destructive?: boolean
}

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  searchColumn?: string
  searchPlaceholder?: string
  rowActions?: RowAction<TData>[]
  getRowLabel?: (row: TData) => string
}

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
  return (
    <input
      ref={ref}
      type="checkbox"
      checked={checked}
      onChange={onChange}
      onClick={onClick}
      className={cn(
        'h-3.5 w-3.5 rounded border-border accent-primary cursor-pointer align-middle',
        className
      )}
    />
  )
}

export function DataTable<TData, TValue>({
  columns,
  data,
  searchColumn,
  searchPlaceholder = 'Search...',
  rowActions,
  getRowLabel,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({})
  const [activeRowIndex, setActiveRowIndex] = React.useState<number | null>(null)
  const [contextMenu, setContextMenu] = React.useState<{
    x: number
    y: number
    rowIndex: number
  } | null>(null)
  const [actionsOpen, setActionsOpen] = React.useState(false)

  const selectionColumn = React.useMemo<ColumnDef<TData, unknown>>(
    () => ({
      id: '_select',
      header: ({ table }) => (
        <Checkbox
          checked={table.getIsAllPageRowsSelected()}
          indeterminate={table.getIsSomePageRowsSelected()}
          onChange={table.getToggleAllPageRowsSelectedHandler() as React.ChangeEventHandler<HTMLInputElement>}
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onChange={row.getToggleSelectedHandler() as React.ChangeEventHandler<HTMLInputElement>}
          onClick={(e) => e.stopPropagation()}
        />
      ),
      enableSorting: false,
      enableColumnFilter: false,
      size: 36,
    }),
    []
  )

  const allColumns = React.useMemo<ColumnDef<TData, unknown>[]>(
    () => [selectionColumn, ...(columns as ColumnDef<TData, unknown>[])],
    [selectionColumn, columns]
  )

  const table = useReactTable({
    data,
    columns: allColumns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onRowSelectionChange: setRowSelection,
    enableRowSelection: true,
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

  // Global keyboard handler — navigation works regardless of focus
  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      // Skip when focus is inside a text input to avoid hijacking typing
      const target = e.target as HTMLElement
      if (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.tagName === 'SELECT' ||
        target.isContentEditable
      ) return

      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        if (!rowActions?.length) return
        e.preventDefault()
        setActionsOpen(true)
      } else if ((e.metaKey || e.ctrlKey) && e.key === 'a') {
        e.preventDefault()
        table.toggleAllPageRowsSelected(true)
      } else if (e.key === 'ArrowDown') {
        e.preventDefault()
        setActiveRowIndex((prev) =>
          prev === null ? 0 : Math.min(prev + 1, rows.length - 1)
        )
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setActiveRowIndex((prev) =>
          prev === null ? 0 : Math.max(prev - 1, 0)
        )
      } else if ((e.key === ' ' || e.key === 'x') && activeRowIndex !== null) {
        e.preventDefault()
        rows[activeRowIndex]?.toggleSelected()
      } else if (e.key === 'Enter' && activeRowIndex !== null && rowActions?.length) {
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
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [rowActions, rows, activeRowIndex, selectedCount, contextMenu, table])

  // Close context menu on outside interaction
  React.useEffect(() => {
    if (!contextMenu) return
    const close = () => setContextMenu(null)
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

  return (
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

      <div className="rounded-md border border-border overflow-hidden">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="bg-muted/30 hover:bg-muted/30">
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    style={header.column.columnDef.size ? { width: header.column.columnDef.size } : undefined}
                    className={cn(
                      'text-xs font-medium text-muted-foreground uppercase tracking-wide h-8',
                      header.id === '_select' && 'w-9 px-3',
                      header.column.getCanSort() && 'cursor-pointer select-none'
                    )}
                    onClick={
                      header.column.getCanSort()
                        ? header.column.getToggleSortingHandler()
                        : undefined
                    }
                  >
                    {header.isPlaceholder ? null : header.id === '_select' ? (
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
          <TableBody>
            {rows.length ? (
              rows.map((row, index) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() ? 'selected' : undefined}
                  className={cn(
                    'border-border/50 h-9 cursor-pointer select-none',
                    row.getIsSelected()
                      ? 'bg-primary/10 hover:bg-primary/15'
                      : 'hover:bg-muted/40',
                    activeRowIndex === index &&
                    'ring-1 ring-inset ring-primary/50'
                  )}
                  onClick={() => {
                    setActiveRowIndex(index)
                    row.toggleSelected()
                  }}
                  onMouseEnter={() => setActiveRowIndex(index)}
                  onContextMenu={(e) => handleContextMenu(e, index)}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className={cn(
                        'py-1.5 text-sm',
                        cell.column.id === '_select' && 'w-9 px-3'
                      )}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
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
        </Table>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-xs text-muted-foreground">
          {table.getFilteredRowModel().rows.length} row
          {table.getFilteredRowModel().rows.length !== 1 ? 's' : ''}
        </p>
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
      </div>

      {/* Context menu */}
      {contextMenu &&
        rowActions?.length &&
        createPortal(
          <div
            style={{ top: contextMenu.y, left: contextMenu.x }}
            className="fixed z-50 min-w-[160px] overflow-hidden rounded-md border border-border bg-popover shadow-md py-1 [&_svg]:size-4"
            onClick={(e) => e.stopPropagation()}
          >
            {rowActions.map((action, i) => (
              <button
                key={i}
                className={cn(
                  'flex w-full items-center gap-2 px-3 py-1.5 text-xs hover:bg-accent transition-colors text-left outline-none focus:bg-accent',
                  action.destructive && 'text-destructive hover:text-destructive focus:text-destructive'
                )}
                onClick={() => {
                  action.onClick(getContextRows())
                  setContextMenu(null)
                }}
              >
                {action.icon}
                {action.label}
              </button>
            ))}
          </div>,
          document.body
        )}

      {/* Selection bar */}
      {selectedCount > 0 &&
        createPortal(
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1 rounded-full border border-border bg-popover text-popover-foreground px-2 py-1.5 shadow-lg">
            <span className="px-2 text-sm font-medium">{selectedCount} selected</span>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    className="flex h-6 w-6 items-center justify-center rounded-full text-muted-foreground hover:bg-accent transition-colors"
                    onClick={() => table.resetRowSelection()}
                  >
                    <XIcon className="h-3.5 w-3.5" />
                  </button>
                </TooltipTrigger>
                <TooltipContent className="flex items-center gap-1.5 bg-primary-foreground text-primary border border-primary/20">
                  Clear selected
                  <kbd className="rounded border border-primary/30 bg-primary/10 px-1 py-0.5 font-mono text-[10px] leading-none">
                    Esc
                  </kbd>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            {rowActions?.length ? (
              <button
                className="ml-1 flex items-center gap-1.5 rounded-full bg-muted text-foreground px-3 py-1 text-sm hover:opacity-80 transition-opacity"
                onClick={() => setActionsOpen(true)}
              >
                <CommandIcon className="h-3.5 w-3.5" />
                Actions
              </button>
            ) : null}
          </div>,
          document.body
        )}

      {/* Actions command dialog */}
      {rowActions?.length ? (
        <CommandDialog
          open={actionsOpen}
          onOpenChange={setActionsOpen}
          title="Row Actions"
          description="Choose an action to apply to selected rows"
        >
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No actions available.</CommandEmpty>
            <CommandGroup heading={actionsHeading}>
              {rowActions.map((action, i) => (
                <CommandItem
                  key={i}
                  onSelect={() => {
                    action.onClick(effectiveRows)
                    setActionsOpen(false)
                  }}
                  className={cn(action.destructive && 'text-destructive')}
                >
                  {action.icon}
                  {action.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      ) : null}
    </div>
  )
}
