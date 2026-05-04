import * as React from 'react';
interface RowCheckboxProps {
    checked: boolean;
    indeterminate?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
    className?: string;
}
export declare function RowCheckbox({ checked, indeterminate, onChange, onClick, className }: RowCheckboxProps): import("react/jsx-runtime").JSX.Element;
export {};
