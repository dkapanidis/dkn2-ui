import { type LucideIcon } from 'lucide-react'
import * as React from 'react'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command'

export interface CommandMenuItemDef {
  id: string
  label: string
  icon?: LucideIcon
  keywords?: string[]
  shortcut?: string
  onSelect: () => void
}

export interface CommandMenuGroup {
  label: string
  items: CommandMenuItemDef[]
}

export interface CommandMenuProps {
  groups: CommandMenuGroup[]
  placeholder?: string
  open?: boolean
  onOpenChange?: (open: boolean) => void
  triggerShortcut?: boolean
}

export function CommandMenu({
  groups,
  placeholder = 'Type a command or search...',
  open: controlledOpen,
  onOpenChange,
  triggerShortcut = true,
}: CommandMenuProps) {
  const [internalOpen, setInternalOpen] = React.useState(false)

  const isControlled = controlledOpen !== undefined
  const open = isControlled ? controlledOpen : internalOpen

  const setOpen = React.useCallback(
    (value: boolean) => {
      if (!isControlled) setInternalOpen(value)
      onOpenChange?.(value)
    },
    [isControlled, onOpenChange]
  )

  React.useEffect(() => {
    if (!triggerShortcut) return
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen(!open)
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [triggerShortcut, open, setOpen])

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder={placeholder} />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        {groups.map((group, groupIdx) => (
          <React.Fragment key={group.label}>
            {groupIdx > 0 && <CommandSeparator />}
            <CommandGroup heading={group.label}>
              {group.items.map((item) => {
                const Icon = item.icon
                return (
                  <CommandItem
                    key={item.id}
                    value={[item.label, ...(item.keywords ?? [])].join(' ')}
                    onSelect={() => {
                      item.onSelect()
                      setOpen(false)
                    }}
                  >
                    {Icon && <Icon className="mr-2 h-4 w-4 opacity-70" />}
                    <span>{item.label}</span>
                    {item.shortcut && (
                      <CommandShortcut>{item.shortcut}</CommandShortcut>
                    )}
                  </CommandItem>
                )
              })}
            </CommandGroup>
          </React.Fragment>
        ))}
      </CommandList>
    </CommandDialog>
  )
}
