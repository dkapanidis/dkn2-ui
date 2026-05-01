import { ColumnDef } from '@tanstack/react-table';
import * as React from 'react';
export interface RowAction<TData> {
    label: string;
    icon?: React.ReactNode;
    onClick: (rows: TData[]) => void;
    destructive?: boolean;
}
export interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
    searchColumn?: string;
    searchPlaceholder?: string;
    rowActions?: RowAction<TData>[];
    getRowLabel?: (row: TData) => string;
}
export declare function DataTable<TData, TValue>({ columns, data, searchColumn, searchPlaceholder, rowActions, getRowLabel, }: DataTableProps<TData, TValue>): import("react/jsx-runtime").JSX.Element;
