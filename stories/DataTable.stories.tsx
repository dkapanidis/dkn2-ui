import type { Meta, StoryObj } from '@storybook/react-vite'
import { type ColumnDef } from '@tanstack/react-table'
import { MailIcon, ShieldIcon, TrashIcon, UserCheckIcon } from 'lucide-react'
import * as React from 'react'
import { toast } from 'sonner'
import { DataTable, type RowAction } from '../src/components/data-table'
import { Badge } from '../src/components/ui/badge'
import { Toaster } from '../src/components/ui/sonner'

interface Person {
  id: string
  name: string
  email: string
  role: string
  status: 'active' | 'inactive' | 'pending'
}

const columns: ColumnDef<Person>[] = [
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
    cell: ({ row }) => {
      const status = row.getValue('status') as Person['status']
      return (
        <Badge
          variant={
            status === 'active'
              ? 'default'
              : status === 'pending'
              ? 'secondary'
              : 'outline'
          }
          className="capitalize"
        >
          {status}
        </Badge>
      )
    },
  },
]

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
    layout: 'padded',
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
  render: () => (
    <DataTable
      columns={columns}
      data={people}
      searchColumn="name"
      searchPlaceholder="Search by name..."
    />
  ),
}

export const WithSearch: Story = {
  render: () => (
    <DataTable
      columns={columns}
      data={people}
      searchColumn="email"
      searchPlaceholder="Search by email..."
    />
  ),
}

export const EmptyState: Story = {
  render: () => (
    <DataTable
      columns={columns}
      data={[]}
      searchColumn="name"
      searchPlaceholder="Search..."
    />
  ),
}

export const SmallDataset: Story = {
  render: () => (
    <DataTable
      columns={columns}
      data={people.slice(0, 3)}
    />
  ),
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
  render: () => (
    <>
      <Toaster richColors />
      <DataTable
        columns={columns}
        data={people}
        searchColumn="name"
        searchPlaceholder="Search by name..."
        rowActions={rowActions}
        getRowLabel={(p) => p.name}
      />
    </>
  ),
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
  render: () => (
    <>
      <Toaster richColors />
      <DataTable
        columns={columns}
        data={people.slice(0, 4)}
        rowActions={rowActions}
        getRowLabel={(p) => p.name}
      />
    </>
  ),
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
  render: () => (
    <>
      <Toaster richColors />
      <DataTable
        columns={columns}
        data={people.slice(0, 6)}
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
  ),
}
