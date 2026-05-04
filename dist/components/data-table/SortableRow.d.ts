import { Row } from '@tanstack/react-table';
import * as React from 'react';
export interface SortableRowProps<TData> {
    row: Row<TData>;
    displayIndex: number;
    activeRowIndex: number | null;
    activeRowSource: 'keyboard' | 'mouse';
    reorderable: boolean;
    customTranslateY: number | null;
    isDragGroup: boolean;
    justDropped: boolean;
    onMeasureHeight?: (height: number) => void;
    onRowClick: (index: number) => void;
    onRowMouseEnter: (index: number) => void;
    onContextMenu: (e: React.MouseEvent, index: number) => void;
}
export declare function SortableRow<TData>({ row, displayIndex, activeRowIndex, activeRowSource, reorderable, customTranslateY, isDragGroup, justDropped, onMeasureHeight, onRowClick, onRowMouseEnter, onContextMenu, }: SortableRowProps<TData>): import("react/jsx-runtime").JSX.Element;
