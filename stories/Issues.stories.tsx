import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ColumnDef } from '@tanstack/react-table'
import {
  AlertCircleIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  BellIcon,
  ChevronsUpIcon,
  BookmarkIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronUpIcon,
  CircleDashedIcon,
  CircleDotDashedIcon,
  EllipsisIcon,
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
  ListIcon,
  SlidersHorizontalIcon,
  StarIcon,
  TableIcon,
  TargetIcon,
  TrashIcon,
  UsersIcon,
} from 'lucide-react'
import * as React from 'react'
import { AttributeButton, type AttributeOption } from '../src/components/attribute-button'
import { CreateIssueDialog, defaultIssueSchema, type IssueCreateValues } from '../src/components/create-issue'
import { DataTable, FilterBar, FilterMenu, type GroupConfig, type RowAction, type TableActiveFilter, type TableFilterDef } from '../src/components/data-table'
import { SideMenu, type NavItem } from '../src/components/side-menu'
import { Popover, PopoverContent, PopoverTrigger } from '../src/components/ui/popover'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../src/components/ui/select'
import { Toaster } from '../src/components/ui/sonner'
import { cn } from '../src/lib/utils'

interface Issue {
  id: string
  code: string
  title: string
  status: 'backlog' | 'todo' | 'in-progress' | 'done' | 'cancelled'
  labels?: string[]
  priority?: 'low' | 'medium' | 'high'
  createdAt: string
  updatedAt: string
  project?: string
}

const issues: Issue[] = [
  { id: '112', code: 'ACM-112', title: 'Onboarding flow: add welcome email sequence for new signups', status: 'todo', createdAt: 'Jan 23', updatedAt: 'May 1' },
  { id: '140', code: 'ACM-140', title: 'Investigate memory leak in background job processor', status: 'in-progress', priority: 'high', createdAt: 'Feb 15', updatedAt: 'May 1', project: 'PI06' },
  { id: '74', code: 'ACM-74', title: 'Add two-factor authentication support', status: 'in-progress', labels: ['Improvement', 'UI'], priority: 'high', createdAt: 'Apr 2025', updatedAt: 'May 1', project: 'PI06' },
  { id: '110', code: 'ACM-110', title: 'Redesign dashboard widgets to support custom layouts', status: 'todo', labels: ['UI'], createdAt: 'Jan 23', updatedAt: 'May 1' },
  { id: '111', code: 'ACM-111', title: 'Export reports to CSV and PDF formats', status: 'backlog', createdAt: 'Jan 23', updatedAt: 'May 1' },
  { id: '109', code: 'ACM-109', title: 'Set up end-to-end tests for the checkout flow', status: 'done', createdAt: 'Jan 23', updatedAt: 'May 1' },
  { id: '73', code: 'ACM-73', title: 'Migrate search to use full-text indexing', status: 'in-progress', labels: ['Improvement'], priority: 'medium', createdAt: 'Apr 2025', updatedAt: 'May 2' },
  { id: '113', code: 'ACM-113', title: 'Add dark mode support across all settings pages', status: 'backlog', labels: ['UI'], createdAt: 'Jan 23', updatedAt: 'May 1' },
  { id: '76', code: 'ACM-76', title: 'Implement rate limiting on the public API', status: 'todo', priority: 'high', createdAt: 'Apr 2025', updatedAt: 'May 3', project: 'PI06' },
  { id: '75', code: 'ACM-75', title: 'Consolidate notification preferences into a single screen', status: 'cancelled', labels: ['UI'], createdAt: 'Apr 2025', updatedAt: 'May 3' },
]

const statusOptions: AttributeOption[] = [
  { value: 'backlog', label: 'Backlog', icon: <CircleDashedIcon className="h-3.5 w-3.5 text-muted-foreground/60" /> },
  { value: 'todo', label: 'Todo', icon: <CircleDashedIcon className="h-3.5 w-3.5 text-muted-foreground" /> },
  { value: 'in-progress', label: 'In Progress', icon: <CircleDotDashedIcon className="h-3.5 w-3.5 text-yellow-500" /> },
  { value: 'done', label: 'Done', icon: <CircleDotDashedIcon className="h-3.5 w-3.5 text-green-500" /> },
  { value: 'cancelled', label: 'Cancelled', icon: <CircleDotDashedIcon className="h-3.5 w-3.5 text-red-500/60" /> },
]

const priorityOptions: AttributeOption[] = [
  { value: 'high', label: 'High', icon: <ChevronsUpIcon className="h-3.5 w-3.5 text-orange-500" /> },
  { value: 'medium', label: 'Medium', icon: <ArrowUpIcon className="h-3.5 w-3.5 text-yellow-500" /> },
  { value: 'low', label: 'Low', icon: <ArrowDownIcon className="h-3.5 w-3.5 text-blue-400" /> },
]

const labelOptions: AttributeOption[] = [
  { value: 'Improvement', label: 'Improvement', icon: <span className="h-1.5 w-1.5 rounded-full bg-green-500 inline-block" /> },
  { value: 'UI', label: 'UI', icon: <span className="h-1.5 w-1.5 rounded-full bg-blue-500 inline-block" /> },
]

const projectOptions: AttributeOption[] = [
  { value: 'PI06', label: 'PI06', icon: <TargetIcon className="h-3.5 w-3.5 text-muted-foreground" /> },
]

const iconPlaceholder = (letter: string) => (
  <span className="h-3.5 w-3.5 flex items-center justify-center text-[10px] font-bold border border-current rounded-sm">{letter}</span>
)

const toggleValue = (arr: string[], value: string) =>
  arr.includes(value) ? arr.filter(v => v !== value) : [...arr, value]

function StatusIcon({ status }: { status: Issue['status'] }) {
  if (status === 'in-progress') return <CircleDotDashedIcon className="h-3.5 w-3.5 text-yellow-500 shrink-0" />
  if (status === 'done') return <CircleDotDashedIcon className="h-3.5 w-3.5 text-green-500 shrink-0" />
  if (status === 'cancelled') return <CircleDotDashedIcon className="h-3.5 w-3.5 text-red-500/60 shrink-0" />
  if (status === 'todo') return <CircleDashedIcon className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
  return <CircleDashedIcon className="h-3.5 w-3.5 text-muted-foreground/60 shrink-0" />
}

type UpdateIssue = (id: string, updater: (issue: Issue) => Issue) => void

const getIssueColumns = (onUpdate: UpdateIssue): ColumnDef<Issue>[] => [
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
    accessorKey: 'labels',
    header: 'Label',
    cell: ({ row }) => (
      <AttributeButton
        options={labelOptions}
        selected={row.original.labels ?? []}
        multi
        onSelect={value =>
          onUpdate(row.original.id, i => ({ ...i, labels: toggleValue(i.labels ?? [], value) }))
        }
        placeholder="Label"
        placeholderIcon={iconPlaceholder('L')}
        searchable
        searchPlaceholder="Add label..."
        tabIndex={-1}
      />
    ),
    size: 160,
  },
  {
    id: 'priority',
    accessorKey: 'priority',
    header: 'Priority',
    cell: ({ row }) => (
      <AttributeButton
        options={priorityOptions}
        selected={row.original.priority ? [row.original.priority] : []}
        onSelect={value =>
          onUpdate(row.original.id, i => ({
            ...i,
            priority: i.priority === value ? undefined : (value as Issue['priority']),
          }))
        }
        placeholder="Priority"
        placeholderIcon={<EllipsisIcon className="h-3.5 w-3.5" />}
        searchable
        searchPlaceholder="Set priority..."
        tabIndex={-1}
      />
    ),
    size: 120,
  },
  {
    id: 'project',
    accessorKey: 'project',
    header: 'Project',
    cell: ({ row }) => (
      <AttributeButton
        options={projectOptions}
        selected={row.original.project ? [row.original.project] : []}
        onSelect={value =>
          onUpdate(row.original.id, i => ({ ...i, project: i.project === value ? undefined : value }))
        }
        placeholder="Project"
        placeholderIcon={iconPlaceholder('P')}
        searchable
        searchPlaceholder="Set project..."
        tabIndex={-1}
      />
    ),
    size: 120,
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
      { value: 'high', label: 'High', icon: <ChevronsUpIcon className="h-3.5 w-3.5 text-orange-500" /> },
      { value: 'medium', label: 'Medium', icon: <ArrowUpIcon className="h-3.5 w-3.5 text-yellow-500" /> },
      { value: 'low', label: 'Low', icon: <ArrowDownIcon className="h-3.5 w-3.5 text-blue-400" /> },
      { value: '', label: 'No priority', icon: <ArrowDownIcon className="h-3.5 w-3.5 text-muted-foreground/40" /> },
    ],
    filterFn: (row, values) => values.includes(row.priority ?? ''),
  },
  {
    id: 'label',
    label: 'Label',
    icon: <BookmarkIcon className="h-3.5 w-3.5" />,
    options: [
      { value: 'Improvement', label: 'Improvement', icon: <span className="h-1.5 w-1.5 rounded-full bg-green-500 inline-block" /> },
      { value: 'UI', label: 'UI', icon: <span className="h-1.5 w-1.5 rounded-full bg-blue-500 inline-block" /> },
    ],
    filterFn: (row, values) => row.labels?.some(label => values.includes(label)) ?? false,
  },
  {
    id: 'project',
    label: 'Project',
    icon: <TargetIcon className="h-3.5 w-3.5" />,
    options: [
      { value: 'PI06', label: 'PI06', icon: <TargetIcon className="h-3.5 w-3.5 text-muted-foreground" /> },
      { value: '', label: 'No project', icon: <FolderIcon className="h-3.5 w-3.5 text-muted-foreground/40" /> },
    ],
    filterFn: (row, values) => values.includes(row.project ?? ''),
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

type GroupField = 'project' | 'priority' | 'none'
type SortField = 'title' | 'status' | 'priority' | 'createdAt' | 'updatedAt'
type SortOrder = 'asc' | 'desc'

const sortFieldLabels: Record<SortField, string> = {
  title: 'Title',
  status: 'Status',
  priority: 'Priority',
  createdAt: 'Created',
  updatedAt: 'Updated',
}

const toggleableColumns = ['code', 'label', 'priority', 'project', 'createdAt', 'updatedAt'] as const
type ToggleableColumn = typeof toggleableColumns[number]

const columnLabels: Record<ToggleableColumn, string> = {
  code: 'ID',
  label: 'Label',
  priority: 'Priority',
  project: 'Project',
  createdAt: 'Created',
  updatedAt: 'Updated',
}

interface ConfigureMenuProps {
  sortField: SortField | null
  sortOrder: SortOrder
  visibleColumns: Set<ToggleableColumn>
  groupField: GroupField
  onSortFieldChange: (field: SortField | null) => void
  onSortOrderChange: (order: SortOrder) => void
  onToggleColumn: (col: ToggleableColumn) => void
  onGroupFieldChange: (field: GroupField) => void
  onReset: () => void
}

function ConfigureMenu({
  sortField,
  sortOrder,
  visibleColumns,
  groupField,
  onSortFieldChange,
  onSortOrderChange,
  onToggleColumn,
  onGroupFieldChange,
  onReset,
}: ConfigureMenuProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="p-1.5 hover:text-foreground rounded outline-none focus-visible:ring-1 focus-visible:ring-ring">
          <SlidersHorizontalIcon className="h-4 w-4" />
        </button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-72 p-0 border border-white/10">
        <div className="flex flex-col">
          {/* Ordering section */}
          <div className="px-4 py-3 border-b border-border">
            <div className="flex items-center justify-between gap-3">
              <span className="text-sm text-muted-foreground">Ordering</span>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => onSortOrderChange(sortOrder === 'asc' ? 'desc' : 'asc')}
                  className="p-1 rounded hover:bg-accent text-muted-foreground hover:text-foreground"
                  title={sortOrder === 'asc' ? 'Ascending' : 'Descending'}
                >
                  {sortOrder === 'asc'
                    ? <ArrowUpIcon className="h-3.5 w-3.5" />
                    : <ArrowDownIcon className="h-3.5 w-3.5" />}
                </button>
                <Select
                  value={sortField ?? 'manual'}
                  onValueChange={v => onSortFieldChange(v === 'manual' ? null : (v as SortField))}
                >
                  <SelectTrigger className="h-7 text-sm w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="manual">Manual</SelectItem>
                    {(Object.keys(sortFieldLabels) as SortField[]).map(f => (
                      <SelectItem key={f} value={f}>{sortFieldLabels[f]}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Grouping section */}
          <div className="px-4 py-3 border-b border-border">
            <div className="flex items-center justify-between gap-3">
              <span className="text-sm text-muted-foreground">Grouping</span>
              <Select
                value={groupField}
                onValueChange={v => onGroupFieldChange(v as GroupField)}
              >
                <SelectTrigger className="h-7 text-sm w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">None</SelectItem>
                  <SelectItem value="project">Project</SelectItem>
                  <SelectItem value="priority">Priority</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Display properties section */}
          <div className="px-4 py-3 border-b border-border">
            <p className="text-sm font-medium mb-2.5">Display properties</p>
            <div className="flex flex-wrap gap-1.5">
              {toggleableColumns.map(col => {
                const active = visibleColumns.has(col)
                return (
                  <button
                    key={col}
                    onClick={() => onToggleColumn(col)}
                    className={cn(
                      'px-2.5 py-1 rounded-full text-xs border transition-colors',
                      active
                        ? 'bg-accent border-border text-foreground font-medium'
                        : 'border-border/50 text-muted-foreground hover:border-border hover:text-foreground'
                    )}
                  >
                    {columnLabels[col]}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-end px-4 py-2">
            <button
              onClick={onReset}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Reset
            </button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}


const defaultVisibleColumns = new Set<ToggleableColumn>(['code', 'label', 'priority', 'createdAt', 'updatedAt'])

const projectGroupConfigs: Record<string, GroupConfig> = {
  '': { label: 'No project', order: 0 },
  'PI06': { label: 'PI06', icon: <TargetIcon className="h-3.5 w-3.5" />, order: 1 },
}

const priorityGroupConfigs: Record<string, GroupConfig> = {
  '': { label: 'No priority', order: 0 },
  'high': { label: 'High', icon: <ChevronsUpIcon className="h-3.5 w-3.5 text-orange-500" />, order: 1 },
  'medium': { label: 'Medium', icon: <ArrowUpIcon className="h-3.5 w-3.5 text-yellow-500" />, order: 2 },
}

type Tab = 'all' | 'active' | 'backlog'

interface IssueDetailProps {
  issue: Issue
  index: number
  total: number
  onBack: () => void
  onNavigate: (direction: 1 | -1) => void
  onUpdate: UpdateIssue
}

function IssueDetail({ issue, index, total, onBack, onNavigate, onUpdate }: IssueDetailProps) {
  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.defaultPrevented) return
      const target = e.target as HTMLElement
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) return
      if (e.metaKey || e.ctrlKey || e.altKey) return
      if (e.key === 'Escape') {
        e.preventDefault()
        onBack()
      } else if (e.key === 'j' || e.key === 'ArrowDown') {
        e.preventDefault()
        onNavigate(1)
      } else if (e.key === 'k' || e.key === 'ArrowUp') {
        e.preventDefault()
        onNavigate(-1)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onBack, onNavigate])

  return (
    <div className="flex flex-1 min-h-0">
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Detail header */}
        <div className="flex items-center gap-2 px-4 py-2 border-b border-border shrink-0 text-sm">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground rounded px-1 py-0.5 outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            <ChevronLeftIcon className="h-4 w-4" />
            <kbd className="rounded border border-border bg-muted px-1 py-0.5 font-mono text-[10px] leading-none">Esc</kbd>
          </button>
          <span className="font-mono text-xs text-muted-foreground">{issue.code}</span>
          <div className="ml-auto flex items-center gap-1 text-muted-foreground">
            <span className="text-xs">{index + 1} / {total}</span>
            <button
              onClick={() => onNavigate(-1)}
              disabled={index <= 0}
              title="Previous issue (k)"
              className="p-1 rounded hover:bg-accent hover:text-foreground disabled:opacity-40 disabled:pointer-events-none outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              <ChevronUpIcon className="h-4 w-4" />
            </button>
            <button
              onClick={() => onNavigate(1)}
              disabled={index >= total - 1}
              title="Next issue (j)"
              className="p-1 rounded hover:bg-accent hover:text-foreground disabled:opacity-40 disabled:pointer-events-none outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              <ChevronDownIcon className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Detail body */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-2xl mx-auto px-8 py-10">
            <h1 className="text-2xl font-semibold leading-snug">{issue.title}</h1>
            <p className="mt-6 text-sm text-muted-foreground">Add description…</p>
          </div>
        </div>
      </div>

      {/* Properties sidebar */}
      <aside className="w-60 shrink-0 border-l border-border px-4 py-4 flex flex-col gap-3 overflow-y-auto">
        <p className="text-xs text-muted-foreground font-medium">Properties</p>
        <AttributeButton
          options={statusOptions}
          selected={[issue.status]}
          onSelect={value => onUpdate(issue.id, i => ({ ...i, status: value as Issue['status'] }))}
          searchable
          searchPlaceholder="Set status..."
          className="justify-start"
        />
        <AttributeButton
          options={priorityOptions}
          selected={issue.priority ? [issue.priority] : []}
          onSelect={value =>
            onUpdate(issue.id, i => ({
              ...i,
              priority: i.priority === value ? undefined : (value as Issue['priority']),
            }))
          }
          placeholder="Priority"
          placeholderIcon={<EllipsisIcon className="h-3.5 w-3.5" />}
          searchable
          searchPlaceholder="Set priority..."
          className="justify-start"
        />
        <AttributeButton
          options={labelOptions}
          selected={issue.labels ?? []}
          multi
          onSelect={value => onUpdate(issue.id, i => ({ ...i, labels: toggleValue(i.labels ?? [], value) }))}
          placeholder="Label"
          placeholderIcon={iconPlaceholder('L')}
          searchable
          searchPlaceholder="Add label..."
          className="justify-start"
        />
        <AttributeButton
          options={projectOptions}
          selected={issue.project ? [issue.project] : []}
          onSelect={value => onUpdate(issue.id, i => ({ ...i, project: i.project === value ? undefined : value }))}
          placeholder="Project"
          placeholderIcon={iconPlaceholder('P')}
          searchable
          searchPlaceholder="Set project..."
          className="justify-start"
        />
      </aside>
    </div>
  )
}

function IssuesPage() {
  const [activeTab, setActiveTab] = React.useState<Tab>('all')
  const [collapsed, setCollapsed] = React.useState(false)
  const [data, setData] = React.useState(issues)
  const [activeFilters, setActiveFilters] = React.useState<TableActiveFilter[]>([])
  const [filterMenuOpen, setFilterMenuOpen] = React.useState(false)
  const [createOpen, setCreateOpen] = React.useState(false)
  const filterButtonRef = React.useRef<HTMLButtonElement>(null)
  const [sortField, setSortField] = React.useState<SortField | null>(null)
  const [sortOrder, setSortOrder] = React.useState<SortOrder>('asc')
  const [visibleColumns, setVisibleColumns] = React.useState<Set<ToggleableColumn>>(new Set(defaultVisibleColumns))
  const [view, setView] = React.useState<'list' | 'table'>('list')
  const [groupField, setGroupField] = React.useState<GroupField>('project')
  const [openIssueId, setOpenIssueId] = React.useState<string | null>(null)

  const handleToggleColumn = (col: ToggleableColumn) => {
    setVisibleColumns(prev => {
      const next = new Set(prev)
      if (next.has(col)) next.delete(col); else next.add(col)
      return next
    })
  }

  const handleResetConfigure = () => {
    setSortField(null)
    setSortOrder('asc')
    setVisibleColumns(new Set(defaultVisibleColumns))
    setGroupField('project')
  }

  const updateIssue = React.useCallback<UpdateIssue>(
    (id, updater) => setData(prev => prev.map(issue => (issue.id === id ? updater(issue) : issue))),
    []
  )

  const rowActions = React.useMemo<RowAction<Issue>[]>(() => {
    const applyTo = (rows: Issue[], updater: (issue: Issue) => Issue) =>
      setData(prev => prev.map(issue => (rows.some(r => r.id === issue.id) ? updater(issue) : issue)))
    return [
      {
        label: 'Status',
        icon: <CircleDashedIcon className="h-3.5 w-3.5" />,
        shortcut: 's',
        subActions: statusOptions.map(o => ({
          label: o.label,
          icon: o.icon,
          onClick: rows => applyTo(rows, i => ({ ...i, status: o.value as Issue['status'] })),
        })),
      },
      {
        label: 'Label',
        icon: <BookmarkIcon className="h-3.5 w-3.5" />,
        shortcut: 'l',
        subActions: labelOptions.map(o => ({
          label: o.label,
          icon: o.icon,
          onClick: rows => applyTo(rows, i => ({ ...i, labels: toggleValue(i.labels ?? [], o.value) })),
        })),
      },
      {
        label: 'Priority',
        icon: <AlertCircleIcon className="h-3.5 w-3.5" />,
        shortcut: 'p',
        subActions: [
          ...priorityOptions.map(o => ({
            label: o.label,
            icon: o.icon,
            onClick: (rows: Issue[]) => applyTo(rows, i => ({ ...i, priority: o.value as Issue['priority'] })),
          })),
          {
            label: 'No priority',
            icon: <EllipsisIcon className="h-3.5 w-3.5 text-muted-foreground/60" />,
            onClick: (rows: Issue[]) => applyTo(rows, i => ({ ...i, priority: undefined })),
          },
        ],
      },
      {
        label: 'Delete',
        icon: <TrashIcon className="h-3.5 w-3.5" />,
        destructive: true,
        onClick: rows => setData(prev => prev.filter(issue => !rows.some(r => r.id === issue.id))),
      },
    ]
  }, [])

  // Issue order for the detail view's prev/next navigation, honoring active filters.
  const filteredIssues = React.useMemo(
    () =>
      data.filter(row =>
        activeFilters.every(af => {
          if (af.values.length === 0) return true
          const def = issueFilterDefs.find(d => d.id === af.filterId)
          return def ? def.filterFn(row, af.values) : true
        })
      ),
    [data, activeFilters]
  )

  const openIssue = openIssueId ? data.find(i => i.id === openIssueId) : undefined

  const handleNavigateIssue = React.useCallback(
    (direction: 1 | -1) => {
      setOpenIssueId(prevId => {
        const idx = filteredIssues.findIndex(i => i.id === prevId)
        const next = filteredIssues[idx + direction]
        return next ? next.id : prevId
      })
    },
    [filteredIssues]
  )

  const filteredColumns = React.useMemo(
    () => getIssueColumns(updateIssue).filter(col => {
      const id = col.id as ToggleableColumn
      if (!toggleableColumns.includes(id as ToggleableColumn)) return true
      return visibleColumns.has(id)
    }),
    [visibleColumns, updateIssue]
  )

  const tableSorting = React.useMemo(
    () => sortField ? [{ id: sortField, desc: sortOrder === 'desc' }] : [],
    [sortField, sortOrder]
  )

  const handleSortingChange = (newSorting: { id: string; desc: boolean }[]) => {
    if (newSorting.length === 0) {
      setSortField(null)
    } else {
      setSortField(newSorting[0].id as SortField)
      setSortOrder(newSorting[0].desc ? 'desc' : 'asc')
    }
  }

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
      if (createOpen || openIssueId) return
      const target = e.target as HTMLElement
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) return
      if (e.key === 'f' || e.key === 'F') {
        e.preventDefault()
        setFilterMenuOpen(prev => !prev)
      }
      if (e.key === 'c' || e.key === 'C') {
        e.preventDefault()
        setCreateOpen(true)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [createOpen, openIssueId])

  const handleCreateIssue = (values: IssueCreateValues) => {
    const newId = String(Date.now())
    const newIssue: Issue = {
      id: newId,
      code: `ACM-${newId.slice(-3)}`,
      title: values.title,
      status: values.status,
      priority: values.priority,
      labels: values.labels,
      project: values.project,
      createdAt: 'May 25',
      updatedAt: 'May 25',
    }
    setData(prev => [newIssue, ...prev])
  }

  return (
    <div className="flex h-full w-full bg-background text-foreground overflow-hidden">
      <Toaster richColors />
      <CreateIssueDialog
        open={createOpen}
        onOpenChange={setCreateOpen}
        schema={defaultIssueSchema}
        onCreate={handleCreateIssue}
      />
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

        {openIssue ? (
          <IssueDetail
            issue={openIssue}
            index={filteredIssues.findIndex(i => i.id === openIssue.id)}
            total={filteredIssues.length}
            onBack={() => setOpenIssueId(null)}
            onNavigate={handleNavigateIssue}
            onUpdate={updateIssue}
          />
        ) : (
        <>
        {/* Tab bar */}
        <div className="flex items-center justify-between px-4 border-b border-border shrink-0">
          <div className="flex items-center gap-1">
            {(['all', 'active', 'backlog'] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  'px-3 py-2 text-sm border-b-2 transition-colors outline-none focus-visible:ring-1 focus-visible:ring-ring',
                  activeTab === tab
                    ? 'border-foreground text-foreground font-medium'
                    : 'border-transparent text-muted-foreground hover:text-foreground',
                )}
              >
                {tab === 'all' ? 'All issues' : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
            <button className="px-2 py-2 text-muted-foreground hover:text-foreground rounded outline-none focus-visible:ring-1 focus-visible:ring-ring">
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
            <ConfigureMenu
              sortField={sortField}
              sortOrder={sortOrder}
              visibleColumns={visibleColumns}
              groupField={groupField}
              onSortFieldChange={setSortField}
              onSortOrderChange={setSortOrder}
              onToggleColumn={handleToggleColumn}
              onGroupFieldChange={setGroupField}
              onReset={handleResetConfigure}
            />
            <button
              onClick={() => setView(v => v === 'list' ? 'table' : 'list')}
              className={cn('p-1.5 rounded outline-none focus-visible:ring-1 focus-visible:ring-ring', view === 'table' ? 'text-foreground' : 'hover:text-foreground')}
              title={view === 'list' ? 'Switch to table view' : 'Switch to list view'}
            >
              {view === 'list' ? <TableIcon className="h-4 w-4" /> : <ListIcon className="h-4 w-4" />}
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
        <div className="flex-1 overflow-y-auto px-2 pt-2">
          <DataTable
            columns={filteredColumns}
            data={data}
            view={view}
            pageSize="all"
            getRowId={(row) => row.id}
            rowActions={rowActions}
            getRowLabel={(row) => row.code}
            onRowOpen={(row) => setOpenIssueId(row.id)}
            onRowReorder={setData}
            onSwitchToManual={() => setSortField(null)}
            filterDefs={issueFilterDefs}
            activeFilters={activeFilters}
            onToggleFilterValue={handleToggleFilterValue}
            onRemoveFilter={handleRemoveFilter}
            onClearFilters={handleClearFilters}
            sorting={tableSorting}
            onSortingChange={handleSortingChange}
            groupBy={
              groupField === 'project' ? (row) => row.project ?? '' :
              groupField === 'priority' ? (row) => row.priority ?? '' :
              undefined
            }
            groupConfigs={
              groupField === 'project' ? projectGroupConfigs :
              groupField === 'priority' ? priorityGroupConfigs :
              undefined
            }
            onGroupChange={
              groupField === 'project' ? (row, newKey) => ({ ...row, project: newKey || undefined }) :
              groupField === 'priority' ? (row, newKey) => ({ ...row, priority: (newKey || undefined) as Issue['priority'] }) :
              undefined
            }
          />

          {/* Footer */}
          <div className="flex items-center justify-center gap-1 py-4 text-xs text-muted-foreground">
            <span className="font-medium text-foreground">70 issues</span>
            <span>hidden by display options</span>
            <button className="ml-1 underline hover:text-foreground rounded outline-none focus-visible:ring-1 focus-visible:ring-ring">Show options</button>
          </div>
        </div>
        </>
        )}
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
