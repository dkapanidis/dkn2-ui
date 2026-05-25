import type * as React from 'react'

export type IssueStatus = 'backlog' | 'todo' | 'in-progress' | 'done' | 'cancelled'
export type IssuePriority = 'low' | 'medium' | 'high'

export interface IssueCreateValues {
  title: string
  description: string
  status: IssueStatus
  priority?: IssuePriority
  labels: string[]
  project?: string
}

export interface IssueFieldOption {
  value: string
  label: string
  icon?: React.ReactNode
}

export interface IssueCreateSchema {
  statuses: IssueFieldOption[]
  priorities: IssueFieldOption[]
  labels: IssueFieldOption[]
  projects: IssueFieldOption[]
}
