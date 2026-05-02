import * as React from 'react'
import { cn } from '@/lib/utils'

// --- SettingsRow ---

export interface SettingsRowProps {
  label: string
  description?: string
  children: React.ReactNode
  className?: string
}

export function SettingsRow({ label, description, children, className }: SettingsRowProps) {
  return (
    <div className={cn('flex items-center justify-between gap-6 py-3 px-4', className)}>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-foreground">{label}</p>
        {description && (
          <p className="text-xs text-muted-foreground mt-0.5">{description}</p>
        )}
      </div>
      <div className="shrink-0">{children}</div>
    </div>
  )
}

// --- SettingsSection ---

export interface SettingsSectionProps {
  title: string
  children: React.ReactNode
  className?: string
}

export function SettingsSection({ title, children, className }: SettingsSectionProps) {
  return (
    <div className={cn('space-y-0', className)}>
      <h2 className="text-base font-semibold text-foreground mb-3">{title}</h2>
      <div className="rounded-lg border border-border bg-card divide-y divide-border overflow-hidden">
        {children}
      </div>
    </div>
  )
}

// --- SettingsPage ---

export interface SettingsPageProps {
  title?: string
  children: React.ReactNode
  className?: string
}

export function SettingsPage({ title = 'Settings', children, className }: SettingsPageProps) {
  return (
    <div className={cn('max-w-3xl mx-auto py-8 px-6 space-y-8', className)}>
      <h1 className="text-2xl font-semibold text-foreground">{title}</h1>
      {children}
    </div>
  )
}

