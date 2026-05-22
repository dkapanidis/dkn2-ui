import * as React from 'react';
interface FilterButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    active: boolean;
}
export declare const FilterButton: React.ForwardRefExoticComponent<FilterButtonProps & React.RefAttributes<HTMLButtonElement>>;
export {};
