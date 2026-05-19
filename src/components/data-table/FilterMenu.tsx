import { CheckIcon, ChevronRightIcon } from 'lucide-react'
import * as React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import type { TableActiveFilter, TableFilterDef } from './types'

interface FilterMenuProps<TData> {
  filterDefs: TableFilterDef<TData>[]
  activeFilters: TableActiveFilter[]
  onToggleValue: (filterId: string, value: string) => void
  open: boolean
  onOpenChange: (open: boolean) => void
  trigger: React.ReactNode
}

export function FilterMenu<TData>({
  filterDefs,
  activeFilters,
  onToggleValue,
  open,
  onOpenChange,
  trigger,
}: FilterMenuProps<TData>) {
  const [mainSearch, setMainSearch] = React.useState('')
  const [subSearch, setSubSearch] = React.useState('')
  const [highlightedMain, setHighlightedMain] = React.useState(-1)
  const [highlightedSub, setHighlightedSub] = React.useState(-1)
  const [focusedPanel, setFocusedPanel] = React.useState<'main' | 'sub'>('main')

  const mainInputRef = React.useRef<HTMLInputElement>(null)
  const subInputRef = React.useRef<HTMLInputElement>(null)
  const mainListRef = React.useRef<HTMLDivElement>(null)
  const subListRef = React.useRef<HTMLDivElement>(null)

  const filteredDefs = React.useMemo(
    () => filterDefs.filter(d => d.label.toLowerCase().includes(mainSearch.toLowerCase())),
    [filterDefs, mainSearch]
  )

  const activeDef = filteredDefs[highlightedMain] ?? null

  const filteredOptions = React.useMemo(
    () =>
      activeDef?.options.filter(o =>
        o.label.toLowerCase().includes(subSearch.toLowerCase())
      ) ?? [],
    [activeDef, subSearch]
  )

  const isSelected = (filterId: string, value: string) =>
    activeFilters.find(f => f.filterId === filterId)?.values.includes(value) ?? false

  // Reset state when opening
  React.useEffect(() => {
    if (open) {
      setMainSearch('')
      setSubSearch('')
      setHighlightedMain(-1)
      setHighlightedSub(-1)
      setFocusedPanel('main')
      setTimeout(() => mainInputRef.current?.focus(), 0)
    }
  }, [open])

  // Keep highlightedMain in bounds when search changes (but don't promote -1)
  React.useEffect(() => {
    setHighlightedMain(prev => prev === -1 ? -1 : Math.min(prev, filteredDefs.length - 1))
  }, [filteredDefs.length])

  // Reset sub highlight when active def changes
  React.useEffect(() => {
    setHighlightedSub(-1)
    setSubSearch('')
  }, [activeDef?.id])

  // Deselect values hidden by the submenu search
  React.useEffect(() => {
    if (!activeDef || !subSearch) return
    const visibleValues = new Set(filteredOptions.map(o => o.value))
    const selected = activeFilters.find(f => f.filterId === activeDef.id)?.values ?? []
    selected.filter(v => !visibleValues.has(v)).forEach(v => onToggleValue(activeDef.id, v))
    // intentionally only runs when subSearch changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subSearch])

  // Scroll highlighted item into view
  React.useEffect(() => {
    if (focusedPanel === 'main') {
      mainListRef.current?.children[highlightedMain]?.scrollIntoView({ block: 'nearest' })
    }
  }, [highlightedMain, focusedPanel])

  React.useEffect(() => {
    if (focusedPanel === 'sub') {
      subListRef.current?.children[highlightedSub]?.scrollIntoView({ block: 'nearest' })
    }
  }, [highlightedSub, focusedPanel])

  const handleMainKeyDown = (e: React.KeyboardEvent) => {
    const n = filteredDefs.length
    if (e.key === 'ArrowDown' || (e.key === 'Tab' && !e.shiftKey)) {
      e.preventDefault()
      setHighlightedMain(prev => prev === -1 ? 0 : (prev + 1) % n)
    } else if (e.key === 'ArrowUp' || (e.key === 'Tab' && e.shiftKey)) {
      e.preventDefault()
      setHighlightedMain(prev => prev <= 0 ? n - 1 : prev - 1)
    } else if ((e.key === 'ArrowRight' || e.key === 'Enter') && activeDef) {
      e.preventDefault()
      setFocusedPanel('sub')
      setTimeout(() => subInputRef.current?.focus(), 0)
    } else if (e.key === 'Escape') {
      onOpenChange(false)
    }
  }

  const handleSubKeyDown = (e: React.KeyboardEvent) => {
    const n = filteredOptions.length
    if (e.key === 'ArrowDown' || (e.key === 'Tab' && !e.shiftKey)) {
      e.preventDefault()
      setHighlightedSub(prev => prev === -1 ? 0 : (prev + 1) % n)
    } else if (e.key === 'ArrowUp' || (e.key === 'Tab' && e.shiftKey)) {
      e.preventDefault()
      setHighlightedSub(prev => prev <= 0 ? n - 1 : prev - 1)
    } else if (e.key === 'ArrowLeft' || e.key === 'Escape') {
      e.preventDefault()
      setFocusedPanel('main')
      setTimeout(() => mainInputRef.current?.focus(), 0)
    } else if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault()
      const opt = filteredOptions[highlightedSub]
      if (opt && activeDef) onToggleValue(activeDef.id, opt.value)
    }
  }

  return (
    <Popover open={open} onOpenChange={onOpenChange}>
      <PopoverTrigger asChild>{trigger}</PopoverTrigger>
      <PopoverContent
        align="end"
        className="w-auto p-0 flex overflow-hidden border border-white/10"
        onOpenAutoFocus={e => e.preventDefault()}
      >
        {/* Submenu — left panel */}
        {activeDef && (
          <div
            className="w-52 border-r border-white/10 flex flex-col"
            onKeyDown={handleSubKeyDown}
          >
            <div className="border-b border-white/10 px-3 py-2">
              <input
                ref={subInputRef}
                placeholder="Filter..."
                value={subSearch}
                onChange={e => setSubSearch(e.target.value)}
                className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                onFocus={() => setFocusedPanel('sub')}
              />
            </div>
            <div ref={subListRef} className="max-h-64 overflow-y-auto p-1">
              {filteredOptions.length === 0 && (
                <p className="py-4 text-center text-xs text-muted-foreground">No options.</p>
              )}
              {filteredOptions.map((opt, i) => {
                const selected = isSelected(activeDef.id, opt.value)
                return (
                  <button
                    key={opt.value}
                    className={cn(
                      'flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none',
                      i === highlightedSub && focusedPanel === 'sub'
                        ? 'bg-accent text-accent-foreground'
                        : 'hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent focus-visible:text-accent-foreground'
                    )}
                    onMouseEnter={() => { setHighlightedSub(i); setFocusedPanel('sub') }}
                    onFocus={() => { setHighlightedSub(i); setFocusedPanel('sub') }}
                    onClick={() => onToggleValue(activeDef.id, opt.value)}
                  >
                    <span className={cn('flex h-3.5 w-3.5 shrink-0 items-center justify-center')}>
                      {selected && <CheckIcon className="h-3 w-3" />}
                    </span>
                    {opt.icon && <span className="shrink-0">{opt.icon}</span>}
                    <span className="truncate">{opt.label}</span>
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {/* Main menu — right panel */}
        <div className="w-52 flex flex-col" onKeyDown={handleMainKeyDown}>
          <div className="border-b border-white/10 px-3 py-2 flex items-center gap-2">
            <input
              ref={mainInputRef}
              placeholder="Add Filter..."
              value={mainSearch}
              onChange={e => setMainSearch(e.target.value)}
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              onFocus={() => setFocusedPanel('main')}
            />
            <span className="text-xs text-muted-foreground border border-border rounded px-1">F</span>
          </div>
          <div ref={mainListRef} className="max-h-72 overflow-y-auto p-1">
            {filteredDefs.length === 0 && (
              <p className="py-4 text-center text-xs text-muted-foreground">No filters found.</p>
            )}
            {filteredDefs.map((def, i) => (
              <button
                key={def.id}
                className={cn(
                  'flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none',
                  i === highlightedMain
                    ? 'bg-accent text-accent-foreground'
                    : 'hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent focus-visible:text-accent-foreground'
                )}
                onMouseEnter={() => { setHighlightedMain(i); setFocusedPanel('main') }}
                onFocus={() => { setHighlightedMain(i); setFocusedPanel('main') }}
                onClick={() => {
                  setHighlightedMain(i)
                  setFocusedPanel('sub')
                  setTimeout(() => subInputRef.current?.focus(), 0)
                }}
              >
                {def.icon && <span className="shrink-0 text-muted-foreground">{def.icon}</span>}
                <span className="flex-1 text-left truncate">{def.label}</span>
                <ChevronRightIcon className="h-3.5 w-3.5 text-muted-foreground" />
              </button>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
