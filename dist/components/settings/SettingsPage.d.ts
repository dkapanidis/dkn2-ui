import * as React from 'react';
export interface SettingsRowProps {
    label: string;
    description?: string;
    children: React.ReactNode;
    className?: string;
}
export declare function SettingsRow({ label, description, children, className }: SettingsRowProps): import("react/jsx-runtime").JSX.Element;
export interface SettingsSectionProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}
export declare function SettingsSection({ title, children, className }: SettingsSectionProps): import("react/jsx-runtime").JSX.Element;
export interface SettingsPageProps {
    title?: string;
    children: React.ReactNode;
    className?: string;
}
export declare function SettingsPage({ title, children, className }: SettingsPageProps): import("react/jsx-runtime").JSX.Element;
