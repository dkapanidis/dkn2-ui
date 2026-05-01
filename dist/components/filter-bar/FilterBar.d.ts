export interface FilterOption {
    id: string;
    label: string;
    type: 'select' | 'text' | 'boolean';
    options?: {
        label: string;
        value: string;
    }[];
}
export interface ActiveFilter {
    filterId: string;
    label: string;
    value: string;
}
export interface FilterBarProps {
    availableFilters: FilterOption[];
    activeFilters: ActiveFilter[];
    onAdd: (filter: ActiveFilter) => void;
    onRemove: (filterId: string) => void;
    onClear: () => void;
    searchValue?: string;
    onSearchChange?: (value: string) => void;
    searchPlaceholder?: string;
}
export declare function FilterBar({ availableFilters, activeFilters, onAdd, onRemove, onClear, searchValue, onSearchChange, searchPlaceholder, }: FilterBarProps): import("react/jsx-runtime").JSX.Element;
