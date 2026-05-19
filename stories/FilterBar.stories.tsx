import type { ColumnDef } from '@tanstack/react-table'
import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  CircleDotIcon,
  CircleIcon,
  CircleCheckIcon,
  CircleXIcon,
  SignalHighIcon,
  SignalMediumIcon,
  SignalLowIcon,
  MinusIcon,
} from 'lucide-react'
import * as React from 'react'
import { DataTable, type TableFilterDef } from '../src/components/data-table'

interface Issue {
  id: string
  title: string
  status: 'backlog' | 'in_progress' | 'in_review' | 'done' | 'cancelled'
  priority: 'urgent' | 'high' | 'medium' | 'low' | 'none'
  assignee: string
}

const issues: Issue[] = [
  { id: 'ISS-001', title: 'Fix login redirect loop', status: 'in_progress', priority: 'urgent', assignee: 'Alice' },
  { id: 'ISS-002', title: 'Add dark mode support', status: 'backlog', priority: 'medium', assignee: 'Bob' },
  { id: 'ISS-003', title: 'Improve table performance', status: 'in_review', priority: 'high', assignee: 'Alice' },
  { id: 'ISS-004', title: 'Fix pagination bug', status: 'done', priority: 'high', assignee: 'Carol' },
  { id: 'ISS-005', title: 'Update onboarding flow', status: 'backlog', priority: 'low', assignee: 'Bob' },
  { id: 'ISS-006', title: 'Add keyboard shortcuts', status: 'in_progress', priority: 'medium', assignee: 'Carol' },
  { id: 'ISS-007', title: 'Fix export to CSV', status: 'cancelled', priority: 'low', assignee: 'Alice' },
  { id: 'ISS-008', title: 'Improve error messages', status: 'backlog', priority: 'none', assignee: 'Bob' },
  { id: 'ISS-009', title: 'Add multi-select support', status: 'in_review', priority: 'high', assignee: 'Carol' },
  { id: 'ISS-010', title: 'Fix mobile layout', status: 'done', priority: 'urgent', assignee: 'Alice' },
]

const statusIcon: Record<Issue['status'], React.ReactNode> = {
  backlog: <CircleIcon className="h-3.5 w-3.5 text-muted-foreground" />,
  in_progress: <CircleDotIcon className="h-3.5 w-3.5 text-blue-500" />,
  in_review: <CircleDotIcon className="h-3.5 w-3.5 text-yellow-500" />,
  done: <CircleCheckIcon className="h-3.5 w-3.5 text-green-500" />,
  cancelled: <CircleXIcon className="h-3.5 w-3.5 text-muted-foreground" />,
}

const priorityIcon: Record<Issue['priority'], React.ReactNode> = {
  urgent: <SignalHighIcon className="h-3.5 w-3.5 text-red-500" />,
  high: <SignalHighIcon className="h-3.5 w-3.5 text-orange-500" />,
  medium: <SignalMediumIcon className="h-3.5 w-3.5 text-yellow-500" />,
  low: <SignalLowIcon className="h-3.5 w-3.5 text-blue-500" />,
  none: <MinusIcon className="h-3.5 w-3.5 text-muted-foreground" />,
}

const columns: ColumnDef<Issue, string>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
    size: 80,
  },
  {
    accessorKey: 'title',
    header: 'Title',
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => (
      <span className="inline-flex items-center gap-1.5 capitalize">
        {statusIcon[row.original.status]}
        {row.original.status.replace('_', ' ')}
      </span>
    ),
  },
  {
    accessorKey: 'priority',
    header: 'Priority',
    cell: ({ row }) => (
      <span className="inline-flex items-center gap-1.5 capitalize">
        {priorityIcon[row.original.priority]}
        {row.original.priority === 'none' ? 'No priority' : row.original.priority}
      </span>
    ),
  },
  {
    accessorKey: 'assignee',
    header: 'Assignee',
  },
]

const filterDefs: TableFilterDef<Issue>[] = [
  {
    id: 'status',
    label: 'Status',
    icon: <CircleDotIcon className="h-3.5 w-3.5" />,
    options: [
      { value: 'backlog', label: 'Backlog', icon: statusIcon.backlog },
      { value: 'in_progress', label: 'In Progress', icon: statusIcon.in_progress },
      { value: 'in_review', label: 'In Review', icon: statusIcon.in_review },
      { value: 'done', label: 'Done', icon: statusIcon.done },
      { value: 'cancelled', label: 'Cancelled', icon: statusIcon.cancelled },
    ],
    filterFn: (row, values) => values.includes(row.status),
  },
  {
    id: 'priority',
    label: 'Priority',
    icon: <SignalHighIcon className="h-3.5 w-3.5" />,
    options: [
      { value: 'urgent', label: 'Urgent', icon: priorityIcon.urgent },
      { value: 'high', label: 'High', icon: priorityIcon.high },
      { value: 'medium', label: 'Medium', icon: priorityIcon.medium },
      { value: 'low', label: 'Low', icon: priorityIcon.low },
      { value: 'none', label: 'No Priority', icon: priorityIcon.none },
    ],
    filterFn: (row, values) => values.includes(row.priority),
  },
  {
    id: 'assignee',
    label: 'Assignee',
    icon: <CircleIcon className="h-3.5 w-3.5" />,
    options: [
      { value: 'Alice', label: 'Alice' },
      { value: 'Bob', label: 'Bob' },
      { value: 'Carol', label: 'Carol' },
    ],
    filterFn: (row, values) => values.includes(row.assignee),
  },
]

const meta: Meta = {
  title: 'Components/FilterBar',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

export const Default: StoryObj = {
  render: () => (
    <div className="p-6">
      <DataTable
        columns={columns}
        data={issues}
        filterDefs={filterDefs}
        searchColumn="title"
        searchPlaceholder="Search issues..."
        pageSize="all"
      />
    </div>
  ),
}
