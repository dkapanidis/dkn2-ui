import type { Meta, StoryObj } from '@storybook/react-vite'
import { type ColumnDef } from '@tanstack/react-table'
import { ArrowDown, ArrowUp, ChevronsDown, ChevronsUp, CircleIcon, Dot, MailIcon, ShieldIcon, TrashIcon, UserCheckIcon, LockIcon, UnlockIcon } from 'lucide-react'
import * as React from 'react'
import { toast } from 'sonner'
import { DataTable, type RowAction } from '../src/components/data-table'
import { Badge } from '../src/components/ui/badge'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '../src/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '../src/components/ui/popover'
import { Toaster } from '../src/components/ui/sonner'

interface Person {
  id: string
  name: string
  email: string
  role: string
  status: 'active' | 'inactive' | 'pending'
}

const STATUS_OPTIONS: Person['status'][] = ['active', 'inactive', 'pending']

function StatusBadge({ status }: { status: Person['status'] }) {
  switch (status) {
    case 'active':
      return <Badge className="h-4 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">Active</Badge>
    case 'inactive':
      return <Badge className="h-4 bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-400">Inactive</Badge>
    case 'pending':
      return <Badge className="h-4 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">Pending</Badge>
  }
}

function StatusCell({
  status,
  onChange,
}: {
  status: Person['status']
  onChange: (next: Person['status']) => void
}) {
  const [open, setOpen] = React.useState(false)
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          onClick={(e) => e.stopPropagation()}
          tabIndex={-1}
          className="inline-flex items-center rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <StatusBadge status={status} />
        </button>
      </PopoverTrigger>
      <PopoverContent
        side="left"
        align="start"
        sideOffset={6}
        className="p-0 w-48 border border-zinc-300 dark:border-zinc-600 [--tw-animate-duration:100ms]"
        onClick={(e) => e.stopPropagation()}
      >
        <Command>
          <CommandInput placeholder="Filter status..." className="h-8 text-xs" />
          <CommandList>
            <CommandEmpty>No status found.</CommandEmpty>
            <CommandGroup>
              {STATUS_OPTIONS.map((opt) => (
                <CommandItem
                  key={opt}
                  value={opt}
                  className="py-1 text-xs"
                  onSelect={() => {
                    onChange(opt)
                    setOpen(false)
                  }}
                >
                  <StatusBadge status={opt} />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

function makeColumns(
  onStatusChange: (id: string, status: Person['status']) => void
): ColumnDef<Person>[] {
  return [
    {
      accessorKey: 'name',
      header: 'Name',
      cell: ({ row }) => (
        <span className="font-medium">{row.getValue('name')}</span>
      ),
    },
    {
      accessorKey: 'email',
      header: 'Email',
      cell: ({ row }) => (
        <span className="text-muted-foreground">{row.getValue('email')}</span>
      ),
    },
    {
      accessorKey: 'role',
      header: 'Role',
    },
    {
      accessorKey: 'status',
      header: 'Status',
      cell: ({ row }) => (
        <StatusCell
          status={row.getValue('status') as Person['status']}
          onChange={(next) => onStatusChange(row.original.id, next)}
        />
      ),
    },
  ]
}

function useStatefulPeople(initial: Person[]) {
  const [data, setData] = React.useState(initial)
  const onStatusChange = React.useCallback((id: string, status: Person['status']) =>
    setData((prev) => prev.map((p) => (p.id === id ? { ...p, status } : p))), [])
  const columns = React.useMemo(() => makeColumns(onStatusChange), [onStatusChange])
  const rowActionsWithStatus = React.useMemo<RowAction<Person>[]>(() => [
    ...rowActions,
    {
      label: 'Status',
      icon: <CircleIcon />,
      shortcut: 'c',
      subActions: STATUS_OPTIONS.map((s) => ({
        label: s.charAt(0).toUpperCase() + s.slice(1),
        onClick: (rows) => {
          rows.forEach((r) => onStatusChange(r.id, s))
          toast.success(`Status set to ${s}`, { description: rows.map((r) => r.name).join(', ') })
        },
      })),
    },
  ], [onStatusChange])
  return { data, columns, rowActionsWithStatus }
}

const people: Person[] = [
  { id: '1', name: 'Alice Johnson', email: 'alice@example.com', role: 'Engineer', status: 'active' },
  { id: '2', name: 'Bob Smith', email: 'bob@example.com', role: 'Designer', status: 'active' },
  { id: '3', name: 'Carol White', email: 'carol@example.com', role: 'Product Manager', status: 'pending' },
  { id: '4', name: 'David Brown', email: 'david@example.com', role: 'Engineer', status: 'inactive' },
  { id: '5', name: 'Eva Martinez', email: 'eva@example.com', role: 'Data Analyst', status: 'active' },
  { id: '6', name: 'Frank Lee', email: 'frank@example.com', role: 'DevOps', status: 'active' },
  { id: '7', name: 'Grace Kim', email: 'grace@example.com', role: 'Engineer', status: 'pending' },
  { id: '8', name: 'Henry Wilson', email: 'henry@example.com', role: 'Marketing', status: 'active' },
  { id: '9', name: 'Iris Chen', email: 'iris@example.com', role: 'Designer', status: 'active' },
  { id: '10', name: 'Jake Thompson', email: 'jake@example.com', role: 'Engineer', status: 'inactive' },
  { id: '11', name: 'Karen Davis', email: 'karen@example.com', role: 'Product Manager', status: 'active' },
  { id: '12', name: 'Liam Garcia', email: 'liam@example.com', role: 'Engineer', status: 'active' },
]

const meta: Meta<typeof DataTable> = {
  title: 'Components/DataTable',
  component: DataTable,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A Linear-inspired data table with sorting, filtering, and pagination.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof DataTable>

export const Default: Story = {
  render: () => {
    const { data, columns } = useStatefulPeople(people)
    return (
      <DataTable
        columns={columns}
        data={data}
        searchColumn="name"
        searchPlaceholder="Search by name..."
      />
    )
  },
}

export const WithSearch: Story = {
  render: () => {
    const { data, columns } = useStatefulPeople(people)
    return (
      <DataTable
        columns={columns}
        data={data}
        searchColumn="email"
        searchPlaceholder="Search by email..."
      />
    )
  },
}

export const EmptyState: Story = {
  render: () => {
    const { columns } = useStatefulPeople(people)
    return (
      <DataTable
        columns={columns}
        data={[]}
        searchColumn="name"
        searchPlaceholder="Search..."
      />
    )
  },
}

export const SmallDataset: Story = {
  render: () => {
    const { data, columns } = useStatefulPeople(people.slice(0, 3))
    return <DataTable columns={columns} data={data} />
  },
}

const rowActions: RowAction<Person>[] = [
  {
    label: 'Send email',
    icon: <MailIcon />,
    onClick: (rows) =>
      toast.success(`Email sent to ${rows.length} user${rows.length !== 1 ? 's' : ''}`, {
        description: rows.map((r) => r.name).join(', '),
      }),
  },
  {
    label: 'Activate',
    icon: <UserCheckIcon />,
    onClick: (rows) =>
      toast.success(`Activated ${rows.length} user${rows.length !== 1 ? 's' : ''}`, {
        description: rows.map((r) => r.name).join(', '),
      }),
  },
  {
    label: 'Change role to Admin',
    icon: <ShieldIcon />,
    onClick: (rows) =>
      toast('Role updated', {
        description: `${rows.length} user${rows.length !== 1 ? 's' : ''} promoted to Admin`,
      }),
  },
  {
    label: 'Delete',
    icon: <TrashIcon />,
    destructive: true,
    onClick: (rows) =>
      toast.error(`Deleted ${rows.length} user${rows.length !== 1 ? 's' : ''}`, {
        description: rows.map((r) => r.name).join(', '),
      }),
  },
]

export const WithRowActions: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Select rows via checkboxes or click, then use the bottom bar, right-click context menu, or ⌘K to run actions.',
      },
    },
  },
  render: () => {
    const { data, columns, rowActionsWithStatus } = useStatefulPeople(people)
    return (
      <>
        <Toaster richColors />
        <DataTable
          columns={columns}
          data={data}
          searchColumn="name"
          searchPlaceholder="Search by name..."
          rowActions={rowActionsWithStatus}
          getRowLabel={(p) => p.name}
        />
      </>
    )
  },
}

export const WithRowActionsSmall: Story = {
  name: 'Row Actions — Small Dataset',
  parameters: {
    docs: {
      description: {
        story: 'Row actions on a small dataset — useful for checking the selection bar and context menu without pagination.',
      },
    },
  },
  render: () => {
    const { data, columns, rowActionsWithStatus } = useStatefulPeople(people.slice(0, 4))
    return (
      <>
        <Toaster richColors />
        <DataTable
          columns={columns}
          data={data}
          rowActions={rowActionsWithStatus}
          getRowLabel={(p) => p.name}
        />
      </>
    )
  },
}

export const NoPagination: Story = {
  name: 'No Pagination',
  parameters: {
    docs: {
      description: {
        story: 'All rows shown at once with no pagination controls — useful for small or bounded datasets.',
      },
    },
  },
  render: () => {
    const { data, columns } = useStatefulPeople(people)
    return (
      <DataTable
        columns={columns}
        data={data}
        searchColumn="name"
        searchPlaceholder="Search by name..."
        pageSize="all"
      />
    )
  },
}

export const WithRowReorder: Story = {
  name: 'Row Reorder',
  parameters: {
    docs: {
      description: {
        story: 'Drag the grip handle to manually reorder rows. The parent owns the data order.',
      },
    },
  },
  render: () => {
    const [data, setData] = React.useState(people.slice(0, 6))
    const { columns } = useStatefulPeople(data)

    function movePeople(rows: Person[], direction: 'top' | 'up' | 'down' | 'bottom') {
      const selectedIds = new Set(rows.map((r) => r.id))
      setData((prev) => {
        const result = [...prev]
        if (direction === 'top') {
          const selected = result.filter((r) => selectedIds.has(r.id))
          const rest = result.filter((r) => !selectedIds.has(r.id))
          return [...selected, ...rest]
        }
        if (direction === 'bottom') {
          const selected = result.filter((r) => selectedIds.has(r.id))
          const rest = result.filter((r) => !selectedIds.has(r.id))
          return [...rest, ...selected]
        }
        const positions = result
          .map((r, i) => ({ r, i }))
          .filter(({ r }) => selectedIds.has(r.id))
          .map(({ i }) => i)
        if (direction === 'up') {
          for (const pos of positions) {
            if (pos > 0 && !selectedIds.has(result[pos - 1].id)) {
              ;[result[pos - 1], result[pos]] = [result[pos], result[pos - 1]]
            }
          }
        } else {
          for (const pos of [...positions].reverse()) {
            if (pos < result.length - 1 && !selectedIds.has(result[pos + 1].id)) {
              ;[result[pos], result[pos + 1]] = [result[pos + 1], result[pos]]
            }
          }
        }
        return result
      })
    }

    const moveRowActions: RowAction<Person>[] = [
      {
        label: 'Move',
        subActions: [
          {
            label: 'Move to top',
            icon: <ChevronsUp />,
            shortcut: '⌥⇧↑',
            shortcutKeys: { key: 'ArrowUp', altKey: true, shiftKey: true },
            onClick: (rows) => movePeople(rows, 'top'),
          },
          {
            label: 'Move up',
            icon: <ArrowUp />,
            shortcut: '⌥↑',
            shortcutKeys: { key: 'ArrowUp', altKey: true },
            onClick: (rows) => movePeople(rows, 'up'),
          },
          {
            label: 'Move down',
            icon: <ArrowDown />,
            shortcut: '⌥↓',
            shortcutKeys: { key: 'ArrowDown', altKey: true },
            onClick: (rows) => movePeople(rows, 'down'),
          },
          {
            label: 'Move to bottom',
            icon: <ChevronsDown />,
            shortcut: '⌥⇧↓',
            shortcutKeys: { key: 'ArrowDown', altKey: true, shiftKey: true },
            onClick: (rows) => movePeople(rows, 'bottom'),
          },
        ],
      },
    ]

    return (
      <DataTable
        columns={columns}
        data={data}
        rowActions={moveRowActions}
        getRowLabel={(p) => p.name}
        onRowReorder={setData}
        pageSize="all"
      />
    )
  },
}

export const WithRowReorderLocked: Story = {
  name: 'Row Reorder — Lock Move',
  parameters: {
    docs: {
      description: {
        story:
          'With `lockMove={true}`, drag handles and alt+arrow are disabled while a column sort is active. Clearing the sort re-enables manual reorder.',
      },
    },
  },
  render: () => {
    const [data, setData] = React.useState(people.slice(0, 6))
    const { columns } = useStatefulPeople(data)
    const [sorting, setSorting] = React.useState<{ id: string; desc: boolean }[]>([])
    const isSorted = sorting.length > 0

    return (
      <div className="flex flex-col gap-3 p-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          {isSorted ? (
            <>
              <LockIcon className="h-3.5 w-3.5" />
              <span>Sorted by <strong className="text-foreground">{sorting[0].id}</strong> — reorder locked. Click the column header to clear sort.</span>
            </>
          ) : (
            <>
              <UnlockIcon className="h-3.5 w-3.5" />
              <span>Manual order — drag or use <kbd className="rounded border border-border px-1 py-0.5 font-mono text-[10px]">⌥↑↓</kbd> to reorder.</span>
            </>
          )}
        </div>
        <DataTable
          columns={columns}
          data={data}
          onRowReorder={setData}
          lockMove
          sorting={sorting}
          onSortingChange={setSorting}
          pageSize="all"
        />
      </div>
    )
  },
}

export const WithDestructiveOnlyAction: Story = {
  name: 'Row Actions — Destructive Only',
  parameters: {
    docs: {
      description: {
        story: 'A single destructive action — common for delete-only bulk operations.',
      },
    },
  },
  render: () => {
    const { data, columns: baseColumns } = useStatefulPeople(people.slice(0, 6))
    return (
      <>
        <Toaster richColors />
        <DataTable
          columns={baseColumns}
          data={data}
          rowActions={[
            {
              label: 'Delete selected',
              icon: <TrashIcon />,
              destructive: true,
              onClick: (rows) =>
                toast.error(`Deleted ${rows.length} user${rows.length !== 1 ? 's' : ''}`, {
                  description: rows.map((r) => r.name).join(', '),
                }),
            },
          ]}
        />
      </>
    )
  },
}
