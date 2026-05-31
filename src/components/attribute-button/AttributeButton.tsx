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
  className,
}: AttributeButtonProps) {
  const [open, setOpen] = React.useState(false)
  const selectedOptions = options.filter(o => selected.includes(o.value))
  const hasSelection = selectedOptions.length > 0

  const handleSelect = (value: string) => {
    onSelect(value)
    if (!multi) setOpen(false)
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
        className={cn('p-1', contentWidth)}
        onClick={e => e.stopPropagation()}
        // When the trigger is kept out of the tab order, don't restore focus to it on close
        // (avoids leaving a focus ring on a button that shouldn't be focusable).
        onCloseAutoFocus={tabIndex === -1 ? e => e.preventDefault() : undefined}
      >
        {options.map(opt => {
          const isSelected = selected.includes(opt.value)
          return (
            <button
              key={opt.value}
              onClick={() => handleSelect(opt.value)}
              className={cn(
                'flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none',
                'hover:bg-accent hover:text-accent-foreground',
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
      </PopoverContent>
    </Popover>
  )
}
