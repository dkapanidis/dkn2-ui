import { LucideIcon } from 'lucide-react';
import * as React from 'react';
export interface NavItem {
    id: string;
    label: string;
    icon?: LucideIcon;
    href?: string;
    onClick?: () => void;
    badge?: string | number;
    children?: NavItem[];
}
export interface SideMenuProps {
    items: NavItem[];
    activeId?: string;
    onActiveChange?: (id: string) => void;
    collapsed?: boolean;
    onCollapsedChange?: (collapsed: boolean) => void;
    header?: React.ReactNode;
    footer?: React.ReactNode;
}
export declare function SideMenu({ items, activeId, onActiveChange, collapsed, onCollapsedChange, header, footer, }: SideMenuProps): import("react/jsx-runtime").JSX.Element;
