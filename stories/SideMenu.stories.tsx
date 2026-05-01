import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  AlertCircleIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  LayoutDashboardIcon,
  Settings2Icon,
  TargetIcon,
  UsersIcon,
} from 'lucide-react'
import * as React from 'react'
import { SideMenu, type NavItem } from '../src/components/side-menu'

const navItems: NavItem[] = [
  { id: 'home', label: 'Home', icon: HomeIcon },
  { id: 'inbox', label: 'Inbox', icon: InboxIcon, badge: 4 },
  { id: 'issues', label: 'My Issues', icon: AlertCircleIcon, badge: 12 },
  { id: 'separator-1', label: '' },
  { id: 'projects', label: 'Projects', icon: FolderIcon },
  { id: 'cycles', label: 'Cycles', icon: TargetIcon },
  { id: 'views', label: 'Views', icon: LayoutDashboardIcon },
  { id: 'members', label: 'Members', icon: UsersIcon },
  { id: 'separator-2', label: '' },
  { id: 'settings', label: 'Settings', icon: Settings2Icon },
]

function SideMenuWrapper({ collapsed: initialCollapsed = false }: { collapsed?: boolean }) {
  const [activeId, setActiveId] = React.useState('issues')
  const [collapsed, setCollapsed] = React.useState(initialCollapsed)

  return (
    <div className="flex h-[500px] border border-border rounded-lg overflow-hidden">
      <SideMenu
        items={navItems}
        activeId={activeId}
        onActiveChange={setActiveId}
        collapsed={collapsed}
        onCollapsedChange={setCollapsed}
        header={
          !collapsed ? (
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded bg-primary flex items-center justify-center">
                <span className="text-primary-foreground text-xs font-bold">L</span>
              </div>
              <span className="font-semibold text-sm">Linear</span>
            </div>
          ) : (
            <div className="flex justify-center">
              <div className="h-6 w-6 rounded bg-primary flex items-center justify-center">
                <span className="text-primary-foreground text-xs font-bold">L</span>
              </div>
            </div>
          )
        }
      />
      <div className="flex-1 p-6 bg-background">
        <p className="text-sm text-muted-foreground">
          Active: <span className="font-medium text-foreground">{activeId}</span>
        </p>
      </div>
    </div>
  )
}

const meta: Meta = {
  title: 'Components/SideMenu',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A collapsible sidebar navigation component inspired by Linear.',
      },
    },
  },
}

export default meta

export const Expanded: StoryObj = {
  render: () => <SideMenuWrapper collapsed={false} />,
}

export const Collapsed: StoryObj = {
  render: () => <SideMenuWrapper collapsed={true} />,
}

export const WithBadges: StoryObj = {
  render: () => <SideMenuWrapper collapsed={false} />,
}
