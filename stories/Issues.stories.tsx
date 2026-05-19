import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ColumnDef } from '@tanstack/react-table'
import {
  AlertCircleIcon,
  ArrowUpIcon,
  BellIcon,
  ChevronsUpIcon,
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
import { DataTable, FilterBar, FilterButton, FilterMenu, type TableActiveFilter, type TableFilterDef } from '../src/components/data-table'
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
  { id: '112', code: 'ACM-112', title: 'Onboarding flow: add welcome email sequence for new signups', status: 'todo', createdAt: 'Jan 23', updatedAt: 'May 1' },
  { id: '140', code: 'ACM-140', title: 'Investigate memory leak in background job processor', status: 'in-progress', priority: 'high', createdAt: 'Feb 15', updatedAt: 'May 1' },
  { id: '74', code: 'ACM-74', title: 'Add two-factor authentication support', status: 'in-progress', label: 'Improvement', labelColor: 'green', priority: 'high', createdAt: 'Apr 2025', updatedAt: 'May 1' },
  { id: '110', code: 'ACM-110', title: 'Redesign dashboard widgets to support custom layouts', status: 'todo', label: 'UI', labelColor: 'blue', createdAt: 'Jan 23', updatedAt: 'May 1' },
  { id: '111', code: 'ACM-111', title: 'Export reports to CSV and PDF formats', status: 'backlog', createdAt: 'Jan 23', updatedAt: 'May 1' },
  { id: '109', code: 'ACM-109', title: 'Set up end-to-end tests for the checkout flow', status: 'done', createdAt: 'Jan 23', updatedAt: 'May 1' },
  { id: '73', code: 'ACM-73', title: 'Migrate search to use full-text indexing', status: 'in-progress', label: 'Improvement', labelColor: 'green', priority: 'medium', createdAt: 'Apr 2025', updatedAt: 'May 2' },
  { id: '113', code: 'ACM-113', title: 'Add dark mode support across all settings pages', status: 'backlog', label: 'UI', labelColor: 'blue', createdAt: 'Jan 23', updatedAt: 'May 1' },
  { id: '76', code: 'ACM-76', title: 'Implement rate limiting on the public API', status: 'todo', priority: 'high', createdAt: 'Apr 2025', updatedAt: 'May 3' },
  { id: '75', code: 'ACM-75', title: 'Consolidate notification preferences into a single screen', status: 'cancelled', label: 'UI', labelColor: 'blue', createdAt: 'Apr 2025', updatedAt: 'May 3' },
]

function StatusIcon({ status }: { status: Issue['status'] }) {
  if (status === 'in-progress') return <CircleDotDashedIcon className="h-3.5 w-3.5 text-yellow-500 shrink-0" />
  if (status === 'done') return <CircleDotDashedIcon className="h-3.5 w-3.5 text-green-500 shrink-0" />
  if (status === 'cancelled') return <CircleDotDashedIcon className="h-3.5 w-3.5 text-red-500/60 shrink-0" />
  if (status === 'todo') return <CircleDashedIcon className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
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
    cell: ({ row }) => {
      const p = row.original.priority
      if (!p) return null
      return (
        <div className="flex items-center gap-0.5">
          {p === 'high'
            ? <ChevronsUpIcon className="h-3.5 w-3.5 text-orange-500 shrink-0" />
            : <ArrowUpIcon className="h-3.5 w-3.5 text-yellow-500 shrink-0" />}
          <span className="text-xs text-muted-foreground">{p === 'high' ? 'H' : 'M'}</span>
        </div>
      )
    },
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

const issueFilterDefs: TableFilterDef<Issue>[] = [
  {
    id: 'status',
    label: 'Status',
    icon: <CircleDashedIcon className="h-3.5 w-3.5" />,
    options: [
      { value: 'backlog', label: 'Backlog', icon: <CircleDashedIcon className="h-3.5 w-3.5 text-muted-foreground/60" /> },
      { value: 'todo', label: 'Todo', icon: <CircleDashedIcon className="h-3.5 w-3.5 text-muted-foreground" /> },
      { value: 'in-progress', label: 'In Progress', icon: <CircleDotDashedIcon className="h-3.5 w-3.5 text-yellow-500" /> },
      { value: 'done', label: 'Done', icon: <CircleDashedIcon className="h-3.5 w-3.5 text-green-500" /> },
      { value: 'cancelled', label: 'Cancelled', icon: <CircleDashedIcon className="h-3.5 w-3.5 text-red-500" /> },
    ],
    filterFn: (row, values) => values.includes(row.status),
  },
  {
    id: 'priority',
    label: 'Priority',
    icon: <AlertCircleIcon className="h-3.5 w-3.5" />,
    options: [
      { value: 'medium', label: 'Medium', icon: <ArrowUpIcon className="h-3.5 w-3.5 text-yellow-500" /> },
      { value: 'high', label: 'High', icon: <ChevronsUpIcon className="h-3.5 w-3.5 text-orange-500" /> },
    ],
    filterFn: (row, values) => row.priority !== undefined && values.includes(row.priority),
  },
  {
    id: 'label',
    label: 'Label',
    icon: <BookmarkIcon className="h-3.5 w-3.5" />,
    options: [
      { value: 'Improvement', label: 'Improvement', icon: <span className="h-1.5 w-1.5 rounded-full bg-green-500 inline-block" /> },
      { value: 'UI', label: 'UI', icon: <span className="h-1.5 w-1.5 rounded-full bg-blue-500 inline-block" /> },
    ],
    filterFn: (row, values) => row.label !== undefined && values.includes(row.label),
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
    id: 'acme',
    label: 'Acme',
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
  const [activeFilters, setActiveFilters] = React.useState<TableActiveFilter[]>([])
  const [filterMenuOpen, setFilterMenuOpen] = React.useState(false)
  const filterButtonRef = React.useRef<HTMLButtonElement>(null)

  const handleToggleFilterValue = (filterId: string, value: string) => {
    setActiveFilters(prev => {
      const existing = prev.find(f => f.filterId === filterId)
      if (!existing) return [...prev, { filterId, values: [value] }]
      const newValues = existing.values.includes(value)
        ? existing.values.filter(v => v !== value)
        : [...existing.values, value]
      if (newValues.length === 0) return prev.filter(f => f.filterId !== filterId)
      return prev.map(f => f.filterId === filterId ? { ...f, values: newValues } : f)
    })
  }

  const handleRemoveFilter = (filterId: string) =>
    setActiveFilters(prev => prev.filter(f => f.filterId !== filterId))

  const handleClearFilters = () => setActiveFilters([])

  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) return
      if (e.key === 'f' || e.key === 'F') {
        e.preventDefault()
        setFilterMenuOpen(prev => !prev)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

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
              <div className="h-6 w-6 rounded bg-violet-600 flex items-center justify-center">
                <span className="text-white text-xs font-bold">AC</span>
              </div>
              <span className="font-semibold text-sm">Acme</span>
              <ChevronDownIcon className="h-3.5 w-3.5 text-muted-foreground ml-auto" />
            </div>
          ) : (
            <div className="flex justify-center">
              <div className="h-6 w-6 rounded bg-violet-600 flex items-center justify-center">
                <span className="text-white text-xs font-bold">AC</span>
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
            <span className="text-muted-foreground mx-1">Acme</span>
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
            <FilterMenu
              filterDefs={issueFilterDefs}
              activeFilters={activeFilters}
              onToggleValue={handleToggleFilterValue}
              open={filterMenuOpen}
              onOpenChange={setFilterMenuOpen}
              trigger={
                <button ref={filterButtonRef} className="p-1.5 hover:text-foreground rounded outline-none focus-visible:ring-1 focus-visible:ring-ring">
                  <ListFilterIcon className="h-4 w-4" />
                </button>
              }
            />
            <button className="p-1.5 hover:text-foreground rounded">
              <SlidersHorizontalIcon className="h-4 w-4" />
            </button>
            <button className="p-1.5 hover:text-foreground rounded">
              <TableIcon className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Filter bar panel */}
        {activeFilters.length > 0 && (
          <div className="px-4 py-2 border-b border-border shrink-0">
            <FilterBar
              filterDefs={issueFilterDefs}
              activeFilters={activeFilters}
              onRemoveFilter={handleRemoveFilter}
              onClearAll={handleClearFilters}
            />
          </div>
        )}

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
              filterDefs={issueFilterDefs}
              activeFilters={activeFilters}
              onToggleFilterValue={handleToggleFilterValue}
              onRemoveFilter={handleRemoveFilter}
              onClearFilters={handleClearFilters}
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
