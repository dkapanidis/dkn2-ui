import type { Meta, StoryObj } from '@storybook/react-vite'
import * as React from 'react'
import { type ActiveFilter, FilterBar, type FilterOption } from '../src/components/filter-bar'

const availableFilters: FilterOption[] = [
  {
    id: 'status',
    label: 'Status',
    type: 'select',
    options: [
      { label: 'Backlog', value: 'backlog' },
      { label: 'In Progress', value: 'in_progress' },
      { label: 'Done', value: 'done' },
      { label: 'Cancelled', value: 'cancelled' },
    ],
  },
  {
    id: 'priority',
    label: 'Priority',
    type: 'select',
    options: [
      { label: 'Urgent', value: 'urgent' },
      { label: 'High', value: 'high' },
      { label: 'Medium', value: 'medium' },
      { label: 'Low', value: 'low' },
      { label: 'No Priority', value: 'none' },
    ],
  },
  {
    id: 'assignee',
    label: 'Assignee',
    type: 'text',
  },
  {
    id: 'label',
    label: 'Label',
    type: 'select',
    options: [
      { label: 'Bug', value: 'bug' },
      { label: 'Feature', value: 'feature' },
      { label: 'Improvement', value: 'improvement' },
      { label: 'Documentation', value: 'docs' },
    ],
  },
  {
    id: 'archived',
    label: 'Archived',
    type: 'boolean',
  },
]

function FilterBarWrapper({
  initialFilters = [],
  withSearch = false,
}: {
  initialFilters?: ActiveFilter[]
  withSearch?: boolean
}) {
  const [activeFilters, setActiveFilters] = React.useState<ActiveFilter[]>(initialFilters)
  const [searchValue, setSearchValue] = React.useState('')

  const handleAdd = (filter: ActiveFilter) => {
    setActiveFilters((prev) => [...prev.filter((f) => f.filterId !== filter.filterId), filter])
  }

  const handleRemove = (filterId: string) => {
    setActiveFilters((prev) => prev.filter((f) => f.filterId !== filterId))
  }

  const handleClear = () => {
    setActiveFilters([])
    setSearchValue('')
  }

  return (
    <div className="space-y-4">
      <FilterBar
        availableFilters={availableFilters}
        activeFilters={activeFilters}
        onAdd={handleAdd}
        onRemove={handleRemove}
        onClear={handleClear}
        searchValue={withSearch ? searchValue : undefined}
        onSearchChange={withSearch ? setSearchValue : undefined}
        searchPlaceholder="Search issues..."
      />
      {activeFilters.length > 0 && (
        <div className="text-xs text-muted-foreground p-3 bg-muted/30 rounded-md border border-border">
          <p className="font-medium text-foreground mb-1">Active filters:</p>
          {activeFilters.map((f) => (
            <p key={f.filterId}>
              <span className="font-mono">{f.filterId}</span>: {f.value}
            </p>
          ))}
        </div>
      )}
    </div>
  )
}

const meta: Meta = {
  title: 'Components/FilterBar',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A Linear-style filter bar with search, filter chips, and a dropdown to add filters.',
      },
    },
  },
}

export default meta

export const Empty: StoryObj = {
  render: () => <FilterBarWrapper />,
}

export const WithSearch: StoryObj = {
  render: () => <FilterBarWrapper withSearch />,
}

export const WithActiveFilters: StoryObj = {
  render: () => (
    <FilterBarWrapper
      initialFilters={[
        { filterId: 'status', label: 'Status: In Progress', value: 'in_progress' },
        { filterId: 'priority', label: 'Priority: High', value: 'high' },
      ]}
    />
  ),
}

export const WithSearchAndFilters: StoryObj = {
  render: () => (
    <FilterBarWrapper
      withSearch
      initialFilters={[
        { filterId: 'status', label: 'Status: In Progress', value: 'in_progress' },
      ]}
    />
  ),
}
