import { ColumnDef } from '@tanstack/react-table';
import * as React from 'react';
export interface RowAction<TData> {
    label: string;
    icon?: React.ReactNode;
    shortcut?: string;
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
}
export declare function DataTable<TData, TValue>({ columns, data, searchColumn, searchPlaceholder, rowActions, getRowLabel, pageSize, }: DataTableProps<TData, TValue>): import("react/jsx-runtime").JSX.Element;
