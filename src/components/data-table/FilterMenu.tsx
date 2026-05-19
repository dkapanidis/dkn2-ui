import { CheckIcon, ChevronRightIcon } from 'lucide-react'
import * as React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import type { TableActiveFilter, TableFilterDef, TableFilterOption } from './types'

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
  const [subMenuTop, setSubMenuTop] = React.useState(0)

  const mainInputRef = React.useRef<HTMLInputElement>(null)
  const subInputRef = React.useRef<HTMLInputElement>(null)
  const mainListRef = React.useRef<HTMLDivElement>(null)
  const subListRef = React.useRef<HTMLDivElement>(null)
  const popoverRef = React.useRef<HTMLDivElement>(null)
  const itemRefs = React.useRef<(HTMLButtonElement | null)[]>([])
  const mousePos = React.useRef({ x: 0, y: 0 })
  const anchorPos = React.useRef({ x: 0, y: 0 })  // mouse pos when current item was selected
  const aimTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null)
  const subMenuRef = React.useRef<HTMLDivElement>(null)

  type SearchResult =
    | { type: 'filter'; def: TableFilterDef<TData> }
    | { type: 'option'; def: TableFilterDef<TData>; opt: TableFilterOption }

  const filteredDefs = React.useMemo(
    () => filterDefs.filter(d => d.label.toLowerCase().includes(mainSearch.toLowerCase())),
    [filterDefs, mainSearch]
  )

  const searchResults = React.useMemo<SearchResult[] | null>(() => {
    if (!mainSearch) return null
    const q = mainSearch.toLowerCase()
    const results: SearchResult[] = []
    for (const def of filterDefs) {
      if (def.label.toLowerCase().includes(q)) {
        results.push({ type: 'filter', def })
      } else {
        for (const opt of def.options) {
          if (opt.label.toLowerCase().includes(q)) {
            results.push({ type: 'option', def, opt })
          }
        }
      }
    }
    return results
  }, [filterDefs, mainSearch])

  const activeList = searchResults ?? filteredDefs.map(def => ({ type: 'filter' as const, def }))

  const activeDef = (() => {
    if (searchResults) {
      const item = searchResults[highlightedMain]
      return item?.type === 'filter' ? item.def : null
    }
    return filteredDefs[highlightedMain] ?? null
  })()

  const filteredOptions = React.useMemo(
    () =>
      activeDef?.options.filter(o =>
        o.label.toLowerCase().includes(subSearch.toLowerCase())
      ) ?? [],
    [activeDef, subSearch]
  )

  const isSelected = (filterId: string, value: string) =>
    activeFilters.find(f => f.filterId === filterId)?.values.includes(value) ?? false

  const updateSubMenuTop = (index: number) => {
    const item = itemRefs.current[index]
    const popover = popoverRef.current
    if (!item || !popover) return
    const itemRect = item.getBoundingClientRect()
    const popoverRect = popover.getBoundingClientRect()
    setSubMenuTop(itemRect.top - popoverRect.top)
  }

  // Track mouse position
  React.useEffect(() => {
    if (!open) return
    const handler = (e: MouseEvent) => { mousePos.current = { x: e.clientX, y: e.clientY } }
    window.addEventListener('mousemove', handler)
    return () => {
      window.removeEventListener('mousemove', handler)
      if (aimTimer.current) clearTimeout(aimTimer.current)
    }
  }, [open])

  // True when mouse is within the triangle: anchorPos → submenu top-right → submenu bottom-right
  const isAimingAtSubmenu = () => {
    const subEl = subMenuRef.current
    if (!subEl) return false
    const r = subEl.getBoundingClientRect()
    const from = anchorPos.current
    const curr = mousePos.current
    if (curr.x >= from.x) return false  // moving right, not toward submenu
    // Vectors from anchor to the two right-edge corners of the submenu
    const dxTop = r.right - from.x;  const dyTop = r.top    - from.y
    const dxBot = r.right - from.x;  const dyBot = r.bottom - from.y
    // Vector from anchor to current position
    const dx = curr.x - from.x;      const dy = curr.y - from.y
    // Cross products: if both have same sign, curr is inside the cone
    const crossTop = dxTop * dy - dyTop * dx
    const crossBot = dxBot * dy - dyBot * dx
    return crossTop * crossBot <= 0
  }

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
    setHighlightedMain(prev => prev === -1 ? -1 : Math.min(prev, activeList.length - 1))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeList.length])

  // Auto-select first row when active def changes
  React.useEffect(() => {
    setHighlightedSub(0)
    setSubSearch('')
  }, [activeDef?.id])

  // Update submenu position when highlighted item changes via keyboard
  React.useEffect(() => {
    if (highlightedMain >= 0) updateSubMenuTop(highlightedMain)
  }, [highlightedMain])

  // Deselect values hidden by the submenu search
  React.useEffect(() => {
    setHighlightedSub(0)
    if (!activeDef || !subSearch) return
    const visibleValues = new Set(filteredOptions.map(o => o.value))
    const selected = activeFilters.find(f => f.filterId === activeDef.id)?.values ?? []
    selected.filter(v => !visibleValues.has(v)).forEach(v => onToggleValue(activeDef.id, v))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subSearch])

  // Scroll highlighted item into view
  React.useEffect(() => {
    if (focusedPanel === 'main' && highlightedMain >= 0) {
      mainListRef.current?.children[highlightedMain]?.scrollIntoView({ block: 'nearest' })
    }
  }, [highlightedMain, focusedPanel])

  React.useEffect(() => {
    if (focusedPanel === 'sub' && highlightedSub >= 0) {
      subListRef.current?.children[highlightedSub]?.scrollIntoView({ block: 'nearest' })
    }
  }, [highlightedSub, focusedPanel])

  const handleMainKeyDown = (e: React.KeyboardEvent) => {
    const n = activeList.length
    if (e.key === 'ArrowDown' || (e.key === 'Tab' && !e.shiftKey)) {
      e.preventDefault()
      setHighlightedMain(prev => prev === -1 ? 0 : (prev + 1) % n)
    } else if (e.key === 'ArrowUp' || (e.key === 'Tab' && e.shiftKey)) {
      e.preventDefault()
      setHighlightedMain(prev => prev <= 0 ? n - 1 : prev - 1)
    } else if (e.key === 'Enter') {
      const idx = highlightedMain >= 0 ? highlightedMain : activeList.length === 1 ? 0 : -1
      const item = idx >= 0 ? activeList[idx] : null
      if (item) {
        e.preventDefault()
        if (item.type === 'option') {
          onToggleValue(item.def.id, item.opt.value)
        } else if (item.type === 'filter') {
          if (filteredOptions.length === 1) {
            onToggleValue(item.def.id, filteredOptions[0].value)
          } else {
            setFocusedPanel('sub')
            setTimeout(() => subInputRef.current?.focus(), 0)
          }
        }
      }
    } else if (e.key === 'ArrowRight' && activeDef) {
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
      const opt = highlightedSub >= 0 ? filteredOptions[highlightedSub] : filteredOptions.length === 1 ? filteredOptions[0] : undefined
      if (opt && activeDef) onToggleValue(activeDef.id, opt.value)
    }
  }

  return (
    <Popover open={open} onOpenChange={onOpenChange}>
      <PopoverTrigger asChild>{trigger}</PopoverTrigger>
      <PopoverContent
        ref={popoverRef}
        align="end"
        className="w-52 p-0 overflow-visible border border-white/10"
        onOpenAutoFocus={e => e.preventDefault()}
      >
        {/* Submenu — floats to the left, aligned to the highlighted item */}
        {activeDef && (
          <div
            ref={subMenuRef}
            className="absolute right-[calc(100%-8px)] w-52 bg-popover rounded-md border border-white/10 shadow-md flex flex-col overflow-hidden"
            style={{ top: subMenuTop }}
            onMouseEnter={() => { if (aimTimer.current) clearTimeout(aimTimer.current) }}
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
                    <span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center">
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

        {/* Main menu */}
        <div className="flex flex-col" onKeyDown={handleMainKeyDown}>
          <div className="border-b border-white/10 px-3 py-2 flex items-center gap-2">
            <input
              ref={mainInputRef}
              placeholder="Add Filter..."
              value={mainSearch}
              onChange={e => setMainSearch(e.target.value)}
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              onFocus={() => setFocusedPanel('main')}
            />
            <span className="text-xs text-muted-foreground border border-white/10 rounded px-1">F</span>
          </div>
          <div ref={mainListRef} className="max-h-72 overflow-y-auto p-1">
            {activeList.length === 0 && (
              <p className="py-4 text-center text-xs text-muted-foreground">No filters found.</p>
            )}
            {activeList.map((item, i) => {
              const isHighlighted = i === highlightedMain
              const baseClass = cn(
                'flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none',
                isHighlighted
                  ? 'bg-accent text-accent-foreground'
                  : 'hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent focus-visible:text-accent-foreground'
              )
              if (item.type === 'option') {
                const selected = isSelected(item.def.id, item.opt.value)
                return (
                  <button
                    key={`${item.def.id}:${item.opt.value}`}
                    ref={el => { itemRefs.current[i] = el }}
                    className={baseClass}
                    onMouseEnter={() => { setHighlightedMain(i); setFocusedPanel('main') }}
                    onFocus={() => { setHighlightedMain(i); setFocusedPanel('main') }}
                    onClick={() => onToggleValue(item.def.id, item.opt.value)}
                  >
                    {item.opt.icon && <span className="shrink-0 text-muted-foreground">{item.opt.icon}</span>}
                    <span className="flex-1 text-left truncate">
                      <span className="text-muted-foreground">{item.def.label}</span>
                      <span className="text-muted-foreground mx-1">›</span>
                      <span>{item.opt.label}</span>
                    </span>
                    {selected && <CheckIcon className="h-3 w-3 shrink-0" />}
                  </button>
                )
              }
              return (
                <button
                  key={item.def.id}
                  ref={el => { itemRefs.current[i] = el }}
                  className={baseClass}
                  onMouseEnter={() => {
                    const switchToItem = () => {
                      anchorPos.current = mousePos.current
                      setHighlightedMain(i)
                      setFocusedPanel('main')
                      updateSubMenuTop(i)
                    }
                    if (aimTimer.current) clearTimeout(aimTimer.current)
                    if (activeDef && isAimingAtSubmenu()) {
                      aimTimer.current = setTimeout(switchToItem, 200)
                    } else {
                      switchToItem()
                    }
                  }}
                  onFocus={() => { setHighlightedMain(i); setFocusedPanel('main') }}
                  onClick={() => {
                    anchorPos.current = mousePos.current
                    setHighlightedMain(i)
                    setFocusedPanel('sub')
                    setTimeout(() => subInputRef.current?.focus(), 0)
                  }}
                >
                  {item.def.icon && <span className="shrink-0 text-muted-foreground">{item.def.icon}</span>}
                  <span className="flex-1 text-left truncate">{item.def.label}</span>
                  <ChevronRightIcon className="h-3.5 w-3.5 text-muted-foreground" />
                </button>
              )
            })}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
