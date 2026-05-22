import { DragEndEvent, DragMoveEvent, DragStartEvent } from '@dnd-kit/core';
import { Row, Table } from '@tanstack/react-table';
import * as React from 'react';
interface UseDragParams<TData> {
    rows: Row<TData>[];
    selectedCount: number;
    orderedData: TData[];
    setOrderedData: React.Dispatch<React.SetStateAction<TData[]>>;
    onRowReorder?: (newData: TData[]) => void;
    activeRowIndex: number | null;
    setActiveRowIndex: React.Dispatch<React.SetStateAction<number | null>>;
    getItemId: (row: TData) => string;
    table: Table<TData>;
    rowHeightRef: React.MutableRefObject<number>;
    headerHeightRef: React.MutableRefObject<number>;
    onBeforeReorder?: (newData: TData[], activeId: string, overId: string | null) => TData[];
    groupBy?: (row: TData) => string;
    onGroupChange?: (row: TData, newGroupKey: string) => TData;
}
export declare function useDrag<TData>({ rows, selectedCount, orderedData, setOrderedData, onRowReorder, activeRowIndex, setActiveRowIndex, getItemId, table, rowHeightRef, headerHeightRef, onBeforeReorder, groupBy, onGroupChange, }: UseDragParams<TData>): {
    sensors: import('@dnd-kit/core').SensorDescriptor<import('@dnd-kit/core').SensorOptions>[];
    dragActiveId: string | null;
    multiDragActive: boolean;
    justDropped: boolean;
    dragOccurredRef: React.RefObject<boolean>;
    customTransforms: number[] | null;
    dragTargetGroupKey: string | null;
    handleDragStart: (event: DragStartEvent) => void;
    handleDragMove: (event: DragMoveEvent) => void;
    handleDragEnd: (event: DragEndEvent) => void;
};
export {};
