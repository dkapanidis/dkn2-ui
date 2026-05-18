import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ColumnDef } from '@tanstack/react-table'
import {
  AlertCircleIcon,
  BellIcon,
  BookmarkIcon,
  ChevronDownIcon,
  CircleDashedIcon,
  CircleDotDashedIcon,
  FolderIcon,
  InboxIcon,
  LayersIcon,
  LayoutDashboardIcon,
  ListFilterIcon,
  PenLineIcon,
  PlusIcon,
  RefreshCwIcon,
  RepeatIcon,
  SearchIcon,
  Settings2Icon,
  SlidersHorizontalIcon,
  StarIcon,
  TableIcon,
  TargetIcon,
  UsersIcon,
} from 'lucide-react'
import * as React from 'react'
import { DataTable } from '../src/components/data-table'
import { SideMenu, type NavItem } from '../src/components/side-menu'
import { Toaster } from '../src/components/ui/sonner'
import { cn } from '../src/lib/utils'

interface Issue {
  id: string
  code: string
  title: string
  status: 'backlog' | 'todo' | 'in-progress' | 'done' | 'cancelled'
  label?: string
  labelColor?: string
  priority?: 'medium' | 'high'
  createdAt: string
  updatedAt: string
}

const issues: Issue[] = [
  { id: '112', code: 'RAY-112', title: 'Blog post: update blog content Postgres on ARM vs x86', status: 'backlog', createdAt: 'Jan 23', updatedAt: 'May 1' },
  { id: '140', code: 'RAY-140', title: 'Create benchmark comparison vs Supabase', status: 'backlog', createdAt: 'Feb 15', updatedAt: 'May 1' },
  { id: '74', code: 'RAY-74', title: 'Give an estimation pricing page for users', status: 'backlog', createdAt: 'Apr 2025', updatedAt: 'May 1' },
  { id: '110', code: 'RAY-110', title: 'Create comparison page(s)', status: 'backlog', createdAt: 'Jan 23', updatedAt: 'May 1' },
  { id: '111', code: 'RAY-111', title: 'Blog post: create blog content Hosted Postgres vs Managed', status: 'backlog', createdAt: 'Jan 23', updatedAt: 'May 1' },
  { id: '109', code: 'RAY-109', title: 'Create FAQ page', status: 'backlog', createdAt: 'Jan 23', updatedAt: 'May 1' },
  { id: '73', code: 'RAY-73', title: 'Calculate pricing by pod resources, not customer plan', status: 'backlog', label: 'Improvement', labelColor: 'green', priority: 'medium', createdAt: 'Apr 2025', updatedAt: 'May 2' },
  { id: '113', code: 'RAY-113', title: 'Blog post: create Postgres on Kubernetes vs Bare metal', status: 'backlog', createdAt: 'Jan 23', updatedAt: 'May 1' },
  { id: '76', code: 'RAY-76', title: 'Focus on specific target audience', status: 'backlog', createdAt: 'Apr 2025', updatedAt: 'May 3' },
  { id: '75', code: 'RAY-75', title: 'Simplify as much as possible support plans', status: 'backlog', label: 'UI', labelColor: 'green', createdAt: 'Apr 2025', updatedAt: 'May 3' },
]

function StatusIcon({ status }: { status: Issue['status'] }) {
  if (status === 'in-progress') return <CircleDotDashedIcon className="h-3.5 w-3.5 text-yellow-500 shrink-0" />
  return <CircleDashedIcon className="h-3.5 w-3.5 text-muted-foreground/60 shrink-0" />
}

const issueColumns: ColumnDef<Issue>[] = [
  {
    id: 'code',
    accessorKey: 'code',
    header: 'ID',
    cell: ({ row }) => (
      <span className="font-mono text-xs text-muted-foreground/60">{row.original.code}</span>
    ),
    size: 60,
  },
  {
    id: 'status',
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => <StatusIcon status={row.original.status} />,
    size: 20,
  },
  {
    id: 'title',
    accessorKey: 'title',
    header: 'Title',
    cell: ({ row }) => <span className="truncate text-sm">{row.original.title}</span>,
    meta: { grow: true },
  },
  {
    id: 'label',
    accessorKey: 'label',
    header: 'Label',
    cell: ({ row }) =>
      row.original.label ? (
        <div className="flex items-center gap-1">
          <span className={cn('h-1.5 w-1.5 rounded-full', row.original.labelColor === 'green' ? 'bg-green-500' : 'bg-blue-500')} />
          <span className="text-xs text-muted-foreground">{row.original.label}</span>
        </div>
      ) : null,
    size: 100,
  },
  {
    id: 'priority',
    accessorKey: 'priority',
    header: 'Priority',
    cell: ({ row }) =>
      row.original.priority ? (
        <div className="flex items-center gap-0.5">
          <span className="text-yellow-500 text-xs">⚠</span>
          <span className="text-xs text-muted-foreground">M</span>
        </div>
      ) : null,
    size: 36,
  },
  {
    id: 'createdAt',
    accessorKey: 'createdAt',
    header: 'Created',
    cell: ({ row }) => <span className="text-xs text-muted-foreground/60">{row.original.createdAt}</span>,
    size: 72,
  },
  {
    id: 'updatedAt',
    accessorKey: 'updatedAt',
    header: 'Updated',
    cell: ({ row }) => <span className="text-xs text-muted-foreground/60">{row.original.updatedAt}</span>,
    size: 44,
  },
]

const workspaceNavItems: NavItem[] = [
  { id: 'inbox', label: 'Inbox', icon: InboxIcon, badge: 7 },
  { id: 'reviews', label: 'Reviews', icon: RefreshCwIcon },
  { id: 'my-issues', label: 'My issues', icon: AlertCircleIcon },
  { id: 'separator-1', label: '' },
  { id: 'initiatives', label: 'Initiatives', icon: LayersIcon },
  { id: 'projects', label: 'Projects', icon: FolderIcon },
  { id: 'views', label: 'Views', icon: LayoutDashboardIcon },
  { id: 'customers', label: 'Customers', icon: UsersIcon },
  { id: 'more', label: 'More', icon: PlusIcon },
  { id: 'separator-2', label: '' },
  {
    id: 'favorites',
    label: 'Favorites',
    icon: BookmarkIcon,
    children: [
      { id: 'pi06', label: 'PI06', icon: TargetIcon },
      { id: 'current-cycle', label: 'Current cycle', icon: RepeatIcon },
      { id: 'all-issues', label: 'All issues', icon: AlertCircleIcon },
      { id: 'backlog', label: 'Backlog', icon: LayersIcon },
      { id: 'unestimated', label: 'Unestimated', icon: LayersIcon },
      { id: 'support', label: 'Support', icon: UsersIcon },
    ],
  },
  { id: 'separator-3', label: '' },
  {
    id: 'raydb',
    label: 'RayDB',
    icon: Settings2Icon,
    children: [
      { id: 'triage', label: 'Triage', icon: AlertCircleIcon },
      { id: 'issues', label: 'Issues', icon: AlertCircleIcon },
      {
        id: 'cycles',
        label: 'Cycles',
        icon: RepeatIcon,
        children: [
          { id: 'current', label: 'Current' },
          { id: 'upcoming', label: 'Upcoming' },
        ],
      },
      { id: 'team-projects', label: 'Projects', icon: FolderIcon },
      { id: 'team-views', label: 'Views', icon: LayoutDashboardIcon },
    ],
  },
]

type Tab = 'all' | 'active' | 'backlog'

function IssuesPage() {
  const [activeTab, setActiveTab] = React.useState<Tab>('all')
  const [collapsed, setCollapsed] = React.useState(false)
  const [groupOpen, setGroupOpen] = React.useState(true)
  const [data, setData] = React.useState(issues)

  return (
    <div className="flex h-full w-full bg-background text-foreground overflow-hidden">
      <Toaster richColors />
      <SideMenu
        items={workspaceNavItems}
        activeId="issues"
        collapsed={collapsed}
        onCollapsedChange={setCollapsed}
        header={
          !collapsed ? (
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded bg-rose-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">RA</span>
              </div>
              <span className="font-semibold text-sm">RayDB</span>
              <ChevronDownIcon className="h-3.5 w-3.5 text-muted-foreground ml-auto" />
            </div>
          ) : (
            <div className="flex justify-center">
              <div className="h-6 w-6 rounded bg-rose-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">RA</span>
              </div>
            </div>
          )
        }
      />

      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-border shrink-0">
          <div className="flex items-center gap-1.5 text-sm">
            <SearchIcon className="h-4 w-4 text-muted-foreground" />
            <PenLineIcon className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground mx-1">RayDB</span>
            <span className="text-muted-foreground">/</span>
            <span className="mx-1 font-medium">Issues</span>
            <StarIcon className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400" />
          </div>
          <BellIcon className="h-4 w-4 text-muted-foreground" />
        </div>

        {/* Tab bar */}
        <div className="flex items-center justify-between px-4 border-b border-border shrink-0">
          <div className="flex items-center gap-1">
            {(['all', 'active', 'backlog'] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  'px-3 py-2 text-sm border-b-2 transition-colors',
                  activeTab === tab
                    ? 'border-foreground text-foreground font-medium'
                    : 'border-transparent text-muted-foreground hover:text-foreground',
                )}
              >
                {tab === 'all' ? 'All issues' : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
            <button className="px-2 py-2 text-muted-foreground hover:text-foreground">
              <Settings2Icon className="h-4 w-4" />
            </button>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <button className="p-1.5 hover:text-foreground rounded">
              <ListFilterIcon className="h-4 w-4" />
            </button>
            <button className="p-1.5 hover:text-foreground rounded">
              <SlidersHorizontalIcon className="h-4 w-4" />
            </button>
            <button className="p-1.5 hover:text-foreground rounded">
              <TableIcon className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Issues list */}
        <div className="flex-1 overflow-y-auto">
          {/* Group header */}
          <div className="flex items-center gap-2 px-4 py-2 border-b border-border sticky top-0 bg-background z-10">
            <button onClick={() => setGroupOpen((v) => !v)}>
              <ChevronDownIcon
                className={cn(
                  'h-4 w-4 text-muted-foreground transition-transform',
                  !groupOpen && '-rotate-90',
                )}
              />
            </button>
            <span className="text-sm font-medium">No project</span>
            <span className="text-yellow-500 text-xs">⚠</span>
            <span className="text-xs text-muted-foreground">{data.length}</span>
            <button className="ml-auto p-0.5 rounded hover:bg-accent text-muted-foreground hover:text-foreground">
              <PlusIcon className="h-4 w-4" />
            </button>
          </div>

          {groupOpen && (
            <DataTable
              columns={issueColumns}
              data={data}
              view="list"
              pageSize="all"
              getRowId={(row) => row.id}
              onRowReorder={setData}
            />
          )}

          {/* Footer */}
          <div className="flex items-center justify-center gap-1 py-4 text-xs text-muted-foreground">
            <span className="font-medium text-foreground">70 issues</span>
            <span>hidden by display options</span>
            <button className="ml-1 underline hover:text-foreground">Show options</button>
          </div>
        </div>
      </div>
    </div>
  )
}

const meta: Meta = {
  title: 'Pages/Issues',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A Linear-style issues page using DataTable in list view mode.',
      },
    },
  },
}

export default meta

export const Default: StoryObj = {
  render: () => (
    <div className="h-screen">
      <IssuesPage />
    </div>
  ),
}
