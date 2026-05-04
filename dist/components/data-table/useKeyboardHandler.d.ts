import { Row, Table } from '@tanstack/react-table';
import { RowAction } from './types';
import * as React from 'react';
interface UseKeyboardHandlerParams<TData> {
    rowActions?: RowAction<TData>[];
    rows: Row<TData>[];
    activeRowIndex: number | null;
    selectedCount: number;
    contextMenu: {
        x: number;
        y: number;
        rowIndex: number;
    } | null;
    table: Table<TData>;
    effectiveRows: TData[];
    setActionsOpen: (open: boolean) => void;
    setActionPage: (page: RowAction<TData> | null) => void;
    setActiveRowIndex: React.Dispatch<React.SetStateAction<number | null>>;
    setActiveRowSource: (source: 'keyboard' | 'mouse') => void;
    suppressMouseRef: React.MutableRefObject<boolean>;
    setContextMenu: (menu: null) => void;
}
export declare function useKeyboardHandler<TData>({ rowActions, rows, activeRowIndex, selectedCount, contextMenu, table, effectiveRows, setActionsOpen, setActionPage, setActiveRowIndex, setActiveRowSource, suppressMouseRef, setContextMenu, }: UseKeyboardHandlerParams<TData>): void;
export {};
