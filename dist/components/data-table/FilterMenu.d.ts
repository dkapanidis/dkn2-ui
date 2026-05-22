import { TableActiveFilter, TableFilterDef } from './types';
import * as React from 'react';
interface FilterMenuProps<TData> {
    filterDefs: TableFilterDef<TData>[];
    activeFilters: TableActiveFilter[];
    onToggleValue: (filterId: string, value: string) => void;
    open: boolean;
    onOpenChange: (open: boolean) => void;
    trigger: React.ReactNode;
}
export declare function FilterMenu<TData>({ filterDefs, activeFilters, onToggleValue, open, onOpenChange, trigger, }: FilterMenuProps<TData>): import("react/jsx-runtime").JSX.Element;
export {};
