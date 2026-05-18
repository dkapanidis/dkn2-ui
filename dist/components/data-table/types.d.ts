import { ColumnDef } from '@tanstack/react-table';
import type * as React from 'react';
export interface ShortcutKeys {
    key: string;
    altKey?: boolean;
    shiftKey?: boolean;
    metaKey?: boolean;
    ctrlKey?: boolean;
}
export interface RowAction<TData> {
    label: string;
    icon?: React.ReactNode;
    shortcut?: string;
    shortcutKeys?: ShortcutKeys;
    onClick?: (rows: TData[]) => void;
    subActions?: RowAction<TData>[];
    destructive?: boolean;
}
export interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
    searchColumn?: string;
    searchPlaceholder?: string;
    rowActions?: RowAction<TData>[];
    getRowLabel?: (row: TData) => string;
    pageSize?: number | 'all';
    onRowReorder?: (newData: TData[]) => void;
    getRowId?: (row: TData) => string;
    view?: 'table' | 'list';
}
