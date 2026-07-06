import { CheckIcon } from 'lucide-react'
import * as React from 'react'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'

export interface AttributeOption {
  value: string
  label: string
  icon?: React.ReactNode
}

export interface AttributeButtonProps {
  /** Selectable options shown in the popover. */
  options: AttributeOption[]
  /** Currently selected value(s). */
  selected?: string[]
  /** Allow selecting more than one option. */
  multi?: boolean
  /** Called with the option value whenever an option is clicked. */
  onSelect: (value: string) => void
  /** Text shown on the button when nothing is selected. */
  placeholder?: React.ReactNode
  /** Icon shown on the button when nothing is selected. */
  placeholderIcon?: React.ReactNode
  /** Width class for the popover content. */
  contentWidth?: string
  /** Alignment of the popover relative to the trigger. */
  align?: 'start' | 'center' | 'end'
  /** Size of the trigger button. */
  size?: React.ComponentProps<typeof Button>['size']
  /** Tab index for the trigger button. Pass -1 to keep it out of the tab order (e.g. in table rows). */
  tabIndex?: number
  /**
   * Show a search input with keyboard navigation (arrows to move, space to
   * select, enter to choose and close) — same interaction as the filter menu.
   */
  searchable?: boolean
  /** Placeholder for the search input when `searchable` is set. */
  searchPlaceholder?: string
  className?: string
}

export function AttributeButton({
  options,
  selected = [],
  multi = false,
  onSelect,
  placeholder,
  placeholderIcon,
  contentWidth = 'w-44',
  align = 'start',
  size = 'pill',
  tabIndex,
  searchable = false,
  searchPlaceholder = 'Filter...',
  className,
}: AttributeButtonProps) {
  const [open, setOpen] = React.useState(false)
  const [search, setSearch] = React.useState('')
  const [highlighted, setHighlighted] = React.useState(0)
  const selectedOptions = options.filter(o => selected.includes(o.value))
  const hasSelection = selectedOptions.length > 0

  const filteredOptions = React.useMemo(
    () =>
      searchable
        ? options.filter(o => o.label.toLowerCase().includes(search.toLowerCase()))
        : options,
    [options, searchable, search]
  )

  React.useEffect(() => {
    if (open) {
      setSearch('')
      setHighlighted(0)
    }
  }, [open])

  React.useEffect(() => {
    setHighlighted(0)
  }, [search])

  const handleSelect = (value: string) => {
    onSelect(value)
    if (!multi) setOpen(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!searchable) return
    const n = filteredOptions.length
    if (e.key === 'ArrowDown' || (e.key === 'Tab' && !e.shiftKey)) {
      e.preventDefault()
      if (n) setHighlighted(prev => (prev + 1) % n)
    } else if (e.key === 'ArrowUp' || (e.key === 'Tab' && e.shiftKey)) {
      e.preventDefault()
      if (n) setHighlighted(prev => (prev <= 0 ? n - 1 : prev - 1))
    } else if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault()
      const opt = filteredOptions[highlighted]
      if (opt) {
        onSelect(opt.value)
        if (e.key === 'Enter') setOpen(false)
      }
    }
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="attribute"
          size={size}
          tabIndex={tabIndex}
          className={className}
          // Prevent row-level handlers (selection, drag) from firing when used in a table cell.
          onClick={e => e.stopPropagation()}
        >
          {hasSelection
            ? selectedOptions.map(o => (o.icon ? <span key={o.value} className="shrink-0">{o.icon}</span> : null))
            : placeholderIcon}
          {hasSelection ? selectedOptions.map(o => o.label).join(', ') : placeholder}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align={align}
        className={cn('p-0', contentWidth)}
        onClick={e => e.stopPropagation()}
        onKeyDown={handleKeyDown}
        // When the trigger is kept out of the tab order, don't restore focus to it on close
        // (avoids leaving a focus ring on a button that shouldn't be focusable).
        onCloseAutoFocus={tabIndex === -1 ? e => e.preventDefault() : undefined}
      >
        {searchable && (
          <div className="border-b border-white/10 px-3 py-2">
            <input
              autoFocus
              placeholder={searchPlaceholder}
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>
        )}
        <div className="p-1 max-h-64 overflow-y-auto">
        {searchable && filteredOptions.length === 0 && (
          <p className="py-4 text-center text-xs text-muted-foreground">No options.</p>
        )}
        {filteredOptions.map((opt, i) => {
          const isSelected = selected.includes(opt.value)
          return (
            <button
              key={opt.value}
              onClick={() => handleSelect(opt.value)}
              onMouseEnter={searchable ? () => setHighlighted(i) : undefined}
              className={cn(
                'flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none',
                searchable && i === highlighted
                  ? 'bg-accent text-accent-foreground'
                  : 'hover:bg-accent hover:text-accent-foreground',
                isSelected && 'text-foreground font-medium'
              )}
            >
              {multi && (
                <span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center">
                  {isSelected && <CheckIcon className="h-3 w-3" />}
                </span>
              )}
              {opt.icon && <span className="shrink-0">{opt.icon}</span>}
              <span className="flex-1 text-left truncate">{opt.label}</span>
              {!multi && isSelected && <CheckIcon className="h-3 w-3 shrink-0 text-muted-foreground" />}
            </button>
          )
        })}
        </div>
      </PopoverContent>
    </Popover>
  )
}
