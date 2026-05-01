import { ColumnDef } from '@tanstack/react-table';
export interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
    searchColumn?: string;
    searchPlaceholder?: string;
}
export declare function DataTable<TData, TValue>({ columns, data, searchColumn, searchPlaceholder, }: DataTableProps<TData, TValue>): import("react/jsx-runtime").JSX.Element;
