import { ChevronLeftIcon, ChevronRightIcon, type LucideIcon } from 'lucide-react'
import * as React from 'react'
import { Separator } from '@/components/ui/separator'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'

export interface NavItem {
  id: string
  label: string
  icon?: LucideIcon
  href?: string
  onClick?: () => void
  badge?: string | number
  children?: NavItem[]
}

export interface SideMenuProps {
  items: NavItem[]
  activeId?: string
  onActiveChange?: (id: string) => void
  collapsed?: boolean
  onCollapsedChange?: (collapsed: boolean) => void
  header?: React.ReactNode
  footer?: React.ReactNode
}

interface NavItemButtonProps {
  item: NavItem
  isActive: boolean
  collapsed: boolean
  depth?: number
  onActiveChange?: (id: string) => void
}

function NavItemButton({
  item,
  isActive,
  collapsed,
  depth = 0,
  onActiveChange,
}: NavItemButtonProps) {
  const [expanded, setExpanded] = React.useState(true)
  const Icon = item.icon

  const handleClick = () => {
    if (item.children) {
      setExpanded((v) => !v)
    }
    if (item.onClick) item.onClick()
    if (onActiveChange) onActiveChange(item.id)
  }

  const button = (
    <button
      onClick={handleClick}
      className={cn(
        'group relative flex w-full items-center gap-2.5 rounded-md px-2 py-1.5 text-sm transition-colors',
        depth > 0 && 'ml-4 w-[calc(100%-1rem)]',
        isActive
          ? 'bg-accent text-accent-foreground font-medium before:absolute before:left-0 before:top-1 before:bottom-1 before:w-0.5 before:rounded-full before:bg-primary'
          : 'text-muted-foreground hover:bg-accent/60 hover:text-accent-foreground',
        collapsed && 'justify-center px-0'
      )}
    >
      {Icon && (
        <Icon
          className={cn(
            'shrink-0 transition-colors',
            collapsed ? 'h-4.5 w-4.5' : 'h-4 w-4',
            isActive ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground'
          )}
        />
      )}
      {!collapsed && (
        <>
          <span className="flex-1 truncate text-left">{item.label}</span>
          {item.badge !== undefined && (
            <span className="ml-auto text-xs tabular-nums text-muted-foreground">
              {item.badge}
            </span>
          )}
        </>
      )}
    </button>
  )

  return (
    <div>
      {collapsed ? (
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>{button}</TooltipTrigger>
            <TooltipContent side="right">
              <p>{item.label}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ) : (
        button
      )}
      {!collapsed && item.children && expanded && (
        <div className="mt-0.5 space-y-0.5">
          {item.children.map((child) => (
            <NavItemButton
              key={child.id}
              item={child}
              isActive={false}
              collapsed={collapsed}
              depth={depth + 1}
              onActiveChange={onActiveChange}
            />
          ))}
        </div>
      )}
    </div>
  )
}

interface SectionProps {
  items: NavItem[]
  isSeparator?: boolean
}

function isSeparatorItem(item: NavItem): boolean {
  return item.id.startsWith('separator')
}

export function SideMenu({
  items,
  activeId,
  onActiveChange,
  collapsed = false,
  onCollapsedChange,
  header,
  footer,
}: SideMenuProps) {
  const sections: NavItem[][] = []
  let current: NavItem[] = []
  for (const item of items) {
    if (isSeparatorItem(item)) {
      sections.push(current)
      current = []
    } else {
      current.push(item)
    }
  }
  sections.push(current)

  return (
    <div
      className={cn(
        'flex h-full flex-col border-r border-border bg-sidebar text-sidebar-foreground transition-all duration-200',
        collapsed ? 'w-12' : 'w-56'
      )}
    >
      {header && (
        <div className={cn('shrink-0 border-b border-sidebar-border', collapsed ? 'px-2 py-3' : 'px-3 py-3')}>
          {header}
        </div>
      )}

      <div className="flex-1 overflow-y-auto py-2">
        {sections.map((section, idx) => (
          <React.Fragment key={idx}>
            {idx > 0 && <Separator className="my-2 bg-sidebar-border" />}
            <nav className={cn('space-y-0.5', collapsed ? 'px-1' : 'px-2')}>
              {section.map((item) => (
                <NavItemButton
                  key={item.id}
                  item={item}
                  isActive={activeId === item.id}
                  collapsed={collapsed}
                  onActiveChange={onActiveChange}
                />
              ))}
            </nav>
          </React.Fragment>
        ))}
      </div>

      {footer && (
        <div className={cn('shrink-0 border-t border-sidebar-border', collapsed ? 'px-1 py-2' : 'px-2 py-2')}>
          {footer}
        </div>
      )}

      <div className={cn('shrink-0 border-t border-sidebar-border', collapsed ? 'px-1 py-2' : 'px-2 py-2')}>
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={() => onCollapsedChange?.(!collapsed)}
                className={cn(
                  'flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-xs text-muted-foreground hover:bg-accent/60 hover:text-accent-foreground transition-colors',
                  collapsed && 'justify-center px-0'
                )}
              >
                {collapsed ? (
                  <ChevronRightIcon className="h-4 w-4" />
                ) : (
                  <>
                    <ChevronLeftIcon className="h-4 w-4" />
                    <span>Collapse</span>
                  </>
                )}
              </button>
            </TooltipTrigger>
            {collapsed && (
              <TooltipContent side="right">
                <p>Expand sidebar</p>
              </TooltipContent>
            )}
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  )
}
