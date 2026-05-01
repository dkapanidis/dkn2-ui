import { LucideIcon } from 'lucide-react';
export interface CommandMenuItemDef {
    id: string;
    label: string;
    icon?: LucideIcon;
    keywords?: string[];
    shortcut?: string;
    onSelect: () => void;
}
export interface CommandMenuGroup {
    label: string;
    items: CommandMenuItemDef[];
}
export interface CommandMenuProps {
    groups: CommandMenuGroup[];
    placeholder?: string;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    triggerShortcut?: boolean;
}
export declare function CommandMenu({ groups, placeholder, open: controlledOpen, onOpenChange, triggerShortcut, }: CommandMenuProps): import("react/jsx-runtime").JSX.Element;
