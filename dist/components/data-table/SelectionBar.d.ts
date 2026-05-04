import { RowAction } from './types';
import * as React from 'react';
interface SelectionBarProps<TData> {
    selectedCount: number;
    rowActions?: RowAction<TData>[];
    onClearSelection: () => void;
    onOpenActions: () => void;
}
export declare function SelectionBar<TData>({ selectedCount, rowActions, onClearSelection, onOpenActions, }: SelectionBarProps<TData>): React.ReactPortal | null;
export {};
