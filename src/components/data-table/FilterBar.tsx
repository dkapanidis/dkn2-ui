import { XIcon } from 'lucide-react'
import * as React from 'react'
import { Button } from '@/components/ui/button'
import type { TableActiveFilter, TableFilterDef } from './types'

interface FilterBarProps<TData> {
  filterDefs: TableFilterDef<TData>[]
  activeFilters: TableActiveFilter[]
  onRemoveFilter: (filterId: string) => void
  onClearAll?: () => void
}

export function FilterBar<TData>({ filterDefs, activeFilters, onRemoveFilter, onClearAll }: FilterBarProps<TData>) {
  if (activeFilters.length === 0) return null

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <div className="flex items-center gap-1.5 flex-wrap flex-1">
        {activeFilters.map(af => {
          const def = filterDefs.find(d => d.id === af.filterId)
          if (!def) return null
          const valueLabels = af.values.map(v => {
            const opt = def.options.find(o => o.value === v)
            return (
              <span key={v} className="inline-flex items-center gap-1">
                {opt?.icon && <span className="shrink-0">{opt.icon}</span>}
                <span>{opt?.label ?? v}</span>
              </span>
            )
          })

          return (
            <span
              key={af.filterId}
              className="inline-flex items-center gap-1.5 rounded-md border border-border bg-muted dark:bg-muted/50 px-2 py-1 text-xs"
            >
              {def.icon && <span className="text-muted-foreground shrink-0">{def.icon}</span>}
              <span className="text-muted-foreground">{def.label}</span>
              <span className="text-muted-foreground">is</span>
              <span className="flex items-center gap-1 flex-wrap">
                {valueLabels.reduce<React.ReactNode[]>((acc, el, i) => {
                  if (i > 0) acc.push(<span key={`sep-${i}`} className="text-muted-foreground">,</span>)
                  acc.push(el)
                  return acc
                }, [])}
              </span>
              <button
                onClick={() => onRemoveFilter(af.filterId)}
                className="ml-0.5 rounded-sm text-muted-foreground hover:text-foreground outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
                aria-label={`Remove ${def.label} filter`}
              >
                <XIcon className="h-3 w-3" />
              </button>
            </span>
          )
        })}
      </div>
      {onClearAll && (
        <Button variant="ghost" size="sm" className="h-7 text-xs" onClick={onClearAll}>
          Clear
        </Button>
      )}
    </div>
  )
}
