import { TableActiveFilter, TableFilterDef } from './types';
interface FilterBarProps<TData> {
    filterDefs: TableFilterDef<TData>[];
    activeFilters: TableActiveFilter[];
    onRemoveFilter: (filterId: string) => void;
    onClearAll?: () => void;
}
export declare function FilterBar<TData>({ filterDefs, activeFilters, onRemoveFilter, onClearAll }: FilterBarProps<TData>): import("react/jsx-runtime").JSX.Element | null;
export {};
