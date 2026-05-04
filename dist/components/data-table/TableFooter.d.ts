import * as React from 'react';
interface TableFooterProps {
    rowCount: number;
    showPagination: boolean;
    pageIndex: number;
    pageCount: number;
    canPreviousPage: boolean;
    canNextPage: boolean;
    onPreviousPage: () => void;
    onNextPage: () => void;
    onShiftTabToTable: () => void;
}
export declare const TableFooter: React.ForwardRefExoticComponent<TableFooterProps & React.RefAttributes<HTMLDivElement>>;
export {};
