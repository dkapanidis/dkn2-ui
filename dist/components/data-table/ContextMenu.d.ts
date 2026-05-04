import { RowAction } from './types';
import * as React from 'react';
interface ContextMenuProps<TData> {
    contextMenu: {
        x: number;
        y: number;
        rowIndex: number;
    } | null;
    contextSub: {
        action: RowAction<TData>;
        x: number;
        y: number;
    } | null;
    rowActions: RowAction<TData>[];
    onSetContextSub: (sub: {
        action: RowAction<TData>;
        x: number;
        y: number;
    } | null) => void;
    onClose: () => void;
    getContextRows: () => TData[];
}
export declare function ContextMenu<TData>({ contextMenu, contextSub, rowActions, onSetContextSub, onClose, getContextRows, }: ContextMenuProps<TData>): React.ReactPortal | null;
export {};
