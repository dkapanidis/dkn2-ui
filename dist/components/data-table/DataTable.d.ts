import { DataTableProps, RowAction } from './types';
export type { DataTableProps, RowAction };
export type { ShortcutKeys } from './types';
export declare function DataTable<TData, TValue>({ columns, data, searchColumn, searchPlaceholder, rowActions, getRowLabel, pageSize, onRowReorder, getRowId, }: DataTableProps<TData, TValue>): import("react/jsx-runtime").JSX.Element;
