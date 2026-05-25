import {
  AlertCircleIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  ChevronsUpIcon,
  CircleDashedIcon,
  CircleDotDashedIcon,
  TargetIcon,
} from 'lucide-react'
import * as React from 'react'
import type { IssueCreateSchema } from './types'

export const defaultIssueSchema: IssueCreateSchema = {
  statuses: [
    { value: 'backlog', label: 'Backlog', icon: <CircleDashedIcon className="h-3.5 w-3.5 text-muted-foreground/60" /> },
    { value: 'todo', label: 'Todo', icon: <CircleDashedIcon className="h-3.5 w-3.5 text-muted-foreground" /> },
    { value: 'in-progress', label: 'In Progress', icon: <CircleDotDashedIcon className="h-3.5 w-3.5 text-yellow-500" /> },
    { value: 'done', label: 'Done', icon: <CircleDashedIcon className="h-3.5 w-3.5 text-green-500" /> },
    { value: 'cancelled', label: 'Cancelled', icon: <AlertCircleIcon className="h-3.5 w-3.5 text-red-500/60" /> },
  ],
  priorities: [
    { value: 'high', label: 'High', icon: <ChevronsUpIcon className="h-3.5 w-3.5 text-orange-500" /> },
    { value: 'medium', label: 'Medium', icon: <ArrowUpIcon className="h-3.5 w-3.5 text-yellow-500" /> },
    { value: 'low', label: 'Low', icon: <ArrowDownIcon className="h-3.5 w-3.5 text-blue-400" /> },
  ],
  labels: [
    { value: 'Improvement', label: 'Improvement', icon: <span className="h-1.5 w-1.5 rounded-full bg-green-500 inline-block" /> },
    { value: 'UI', label: 'UI', icon: <span className="h-1.5 w-1.5 rounded-full bg-blue-500 inline-block" /> },
  ],
  projects: [
    { value: 'PI06', label: 'PI06', icon: <TargetIcon className="h-3.5 w-3.5 text-muted-foreground" /> },
  ],
}
