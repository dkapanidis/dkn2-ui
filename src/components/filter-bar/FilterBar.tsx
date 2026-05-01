import { FilterIcon, PlusIcon, SearchIcon, XIcon } from 'lucide-react'
import * as React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'

export interface FilterOption {
  id: string
  label: string
  type: 'select' | 'text' | 'boolean'
  options?: { label: string; value: string }[]
}

export interface ActiveFilter {
  filterId: string
  label: string
  value: string
}

export interface FilterBarProps {
  availableFilters: FilterOption[]
  activeFilters: ActiveFilter[]
  onAdd: (filter: ActiveFilter) => void
  onRemove: (filterId: string) => void
  onClear: () => void
  searchValue?: string
  onSearchChange?: (value: string) => void
  searchPlaceholder?: string
}

interface FilterValuePickerProps {
  filter: FilterOption
  onSelect: (value: string, label: string) => void
  onClose: () => void
}

function FilterValuePicker({ filter, onSelect, onClose }: FilterValuePickerProps) {
  const [textValue, setTextValue] = React.useState('')

  if (filter.type === 'select' && filter.options) {
    return (
      <div className="space-y-1">
        <p className="text-xs text-muted-foreground px-1 py-0.5">Select {filter.label}</p>
        {filter.options.map((opt) => (
          <button
            key={opt.value}
            className="flex w-full items-center rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground"
            onClick={() => {
              onSelect(opt.value, opt.label)
              onClose()
            }}
          >
            {opt.label}
          </button>
        ))}
      </div>
    )
  }

  if (filter.type === 'boolean') {
    return (
      <div className="space-y-1">
        <p className="text-xs text-muted-foreground px-1 py-0.5">{filter.label}</p>
        <button
          className="flex w-full items-center rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground"
          onClick={() => { onSelect('true', 'Yes'); onClose() }}
        >
          Yes
        </button>
        <button
          className="flex w-full items-center rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground"
          onClick={() => { onSelect('false', 'No'); onClose() }}
        >
          No
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-2">
      <p className="text-xs text-muted-foreground px-1 py-0.5">Enter {filter.label}</p>
      <div className="flex gap-2">
        <Input
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
          placeholder={`Filter by ${filter.label.toLowerCase()}...`}
          className="h-7 text-sm"
          onKeyDown={(e) => {
            if (e.key === 'Enter' && textValue.trim()) {
              onSelect(textValue.trim(), textValue.trim())
              onClose()
            }
          }}
          autoFocus
        />
        <Button
          size="sm"
          className="h-7 text-xs"
          onClick={() => {
            if (textValue.trim()) {
              onSelect(textValue.trim(), textValue.trim())
              onClose()
            }
          }}
        >
          Apply
        </Button>
      </div>
    </div>
  )
}

export function FilterBar({
  availableFilters,
  activeFilters,
  onAdd,
  onRemove,
  onClear,
  searchValue,
  onSearchChange,
  searchPlaceholder = 'Search...',
}: FilterBarProps) {
  const [addingFilter, setAddingFilter] = React.useState<FilterOption | null>(null)
  const [popoverOpen, setPopoverOpen] = React.useState(false)
  const [dropdownOpen, setDropdownOpen] = React.useState(false)

  const activeFilterIds = new Set(activeFilters.map((f) => f.filterId))
  const availableToAdd = availableFilters.filter((f) => !activeFilterIds.has(f.id))

  const handleFilterSelect = (filter: FilterOption) => {
    setDropdownOpen(false)
    setAddingFilter(filter)
    setPopoverOpen(true)
  }

  const handleValueSelect = (value: string, label: string) => {
    if (!addingFilter) return
    onAdd({
      filterId: addingFilter.id,
      label: `${addingFilter.label}: ${label}`,
      value,
    })
    setAddingFilter(null)
    setPopoverOpen(false)
  }

  return (
    <div className="flex items-center gap-2 flex-wrap">
      {onSearchChange && (
        <div className="relative">
          <SearchIcon className="absolute left-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
          <Input
            value={searchValue ?? ''}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={searchPlaceholder}
            className="h-7 pl-7 text-sm w-48"
          />
        </div>
      )}

      {activeFilters.map((filter) => (
        <Badge
          key={filter.filterId}
          variant="secondary"
          className="flex items-center gap-1 h-6 px-2 text-xs font-normal rounded-md"
        >
          <span>{filter.label}</span>
          <button
            onClick={() => onRemove(filter.filterId)}
            className="ml-0.5 rounded-sm opacity-60 hover:opacity-100 transition-opacity"
          >
            <XIcon className="h-3 w-3" />
            <span className="sr-only">Remove filter</span>
          </button>
        </Badge>
      ))}

      <Popover open={popoverOpen} onOpenChange={(open) => {
        setPopoverOpen(open)
        if (!open) setAddingFilter(null)
      }}>
        <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
          <PopoverTrigger asChild>
            <span />
          </PopoverTrigger>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                'h-7 gap-1.5 text-xs text-muted-foreground hover:text-foreground',
                availableToAdd.length === 0 && 'opacity-50 pointer-events-none'
              )}
            >
              <PlusIcon className="h-3.5 w-3.5" />
              Filter
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-44">
            <DropdownMenuLabel className="text-xs">Add filter</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {availableToAdd.map((filter) => (
              <DropdownMenuItem
                key={filter.id}
                onClick={() => handleFilterSelect(filter)}
                className="text-sm"
              >
                <FilterIcon className="h-3.5 w-3.5 mr-2 opacity-50" />
                {filter.label}
              </DropdownMenuItem>
            ))}
            {availableToAdd.length === 0 && (
              <p className="px-2 py-1.5 text-xs text-muted-foreground">All filters active</p>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
        {addingFilter && (
          <PopoverContent align="start" className="w-64 p-2">
            <FilterValuePicker
              filter={addingFilter}
              onSelect={handleValueSelect}
              onClose={() => {
                setPopoverOpen(false)
                setAddingFilter(null)
              }}
            />
          </PopoverContent>
        )}
      </Popover>

      {activeFilters.length > 0 && (
        <button
          onClick={onClear}
          className="text-xs text-muted-foreground hover:text-foreground transition-colors underline-offset-2 hover:underline"
        >
          Clear all
        </button>
      )}
    </div>
  )
}
