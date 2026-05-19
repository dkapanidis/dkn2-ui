import { ListFilterIcon } from 'lucide-react'
import * as React from 'react'
import { cn } from '@/lib/utils'

interface FilterButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active: boolean
}

export const FilterButton = React.forwardRef<HTMLButtonElement, FilterButtonProps>(
  function FilterButton({ active, className, ...props }, ref) {
    return (
      <button
        ref={ref}
        className={cn(
          'flex h-8 w-8 items-center justify-center rounded-full border transition-colors',
          active
            ? 'border-primary bg-primary/10 text-primary'
            : 'border-border bg-background text-muted-foreground hover:border-foreground/40 hover:text-foreground',
          className
        )}
        aria-label="Filter"
        {...props}
      >
        <ListFilterIcon className="h-3.5 w-3.5" />
      </button>
    )
  }
)
