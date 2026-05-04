import { RowAction } from './types';
interface ActionsDialogProps<TData> {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    rowActions: RowAction<TData>[];
    actionPage: RowAction<TData> | null;
    onSetActionPage: (page: RowAction<TData> | null) => void;
    effectiveRows: TData[];
    actionsHeading: string;
}
export declare function ActionsDialog<TData>({ open, onOpenChange, rowActions, actionPage, onSetActionPage, effectiveRows, actionsHeading, }: ActionsDialogProps<TData>): import("react/jsx-runtime").JSX.Element;
export {};
