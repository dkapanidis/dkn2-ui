import * as React from 'react'
import { cn } from '@/lib/utils'

interface RowCheckboxProps {
  checked: boolean
  indeterminate?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void
  className?: string
}

export function RowCheckbox({ checked, indeterminate, onChange, onClick, className }: RowCheckboxProps) {
  const ref = React.useRef<HTMLInputElement>(null)
  React.useEffect(() => {
    if (ref.current) ref.current.indeterminate = !!indeterminate
  }, [indeterminate])
  const active = checked || indeterminate
  return (
    <span
      className={cn('inline-flex items-center justify-center cursor-pointer group', className)}
      onClick={onClick}
    >
      <input ref={ref} type="checkbox" checked={checked} onChange={onChange} tabIndex={-1} className="sr-only" />
      <span
        className={cn(
          'h-3.5 w-3.5 rounded-xs border flex items-center justify-center transition-colors',
          active
            ? 'bg-selected border-selected'
            : 'border-foreground/35 group-hover:border-selected'
        )}
      >
        {indeterminate && (
          <span className="block h-px w-2 bg-selected-foreground" />
        )}
        {checked && !indeterminate && (
          <svg viewBox="0 0 10 8" className="h-2 w-2.5 fill-none stroke-selected-foreground stroke-[2]">
            <polyline points="1,4 4,7 9,1" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
    </span>
  )
}
