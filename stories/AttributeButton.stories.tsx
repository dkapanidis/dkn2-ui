import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  ArrowDownIcon,
  ArrowUpIcon,
  ChevronsUpIcon,
  CircleDashedIcon,
  CircleDotDashedIcon,
  EllipsisIcon,
  TargetIcon,
} from 'lucide-react'
import * as React from 'react'
import { AttributeButton, type AttributeOption } from '../src/components/attribute-button'

const statusOptions: AttributeOption[] = [
  { value: 'backlog', label: 'Backlog', icon: <CircleDashedIcon className="h-3.5 w-3.5 text-muted-foreground/60" /> },
  { value: 'todo', label: 'Todo', icon: <CircleDashedIcon className="h-3.5 w-3.5 text-muted-foreground" /> },
  { value: 'in-progress', label: 'In Progress', icon: <CircleDotDashedIcon className="h-3.5 w-3.5 text-yellow-500" /> },
  { value: 'done', label: 'Done', icon: <CircleDashedIcon className="h-3.5 w-3.5 text-green-500" /> },
  { value: 'cancelled', label: 'Cancelled', icon: <CircleDashedIcon className="h-3.5 w-3.5 text-red-500" /> },
]

const priorityOptions: AttributeOption[] = [
  { value: 'high', label: 'High', icon: <ChevronsUpIcon className="h-3.5 w-3.5 text-orange-500" /> },
  { value: 'medium', label: 'Medium', icon: <ArrowUpIcon className="h-3.5 w-3.5 text-yellow-500" /> },
  { value: 'low', label: 'Low', icon: <ArrowDownIcon className="h-3.5 w-3.5 text-blue-400" /> },
]

const labelOptions: AttributeOption[] = [
  { value: 'Improvement', label: 'Improvement', icon: <span className="h-1.5 w-1.5 rounded-full bg-green-500 inline-block" /> },
  { value: 'UI', label: 'UI', icon: <span className="h-1.5 w-1.5 rounded-full bg-blue-500 inline-block" /> },
  { value: 'Bug', label: 'Bug', icon: <span className="h-1.5 w-1.5 rounded-full bg-red-500 inline-block" /> },
]

const projectOptions: AttributeOption[] = [
  { value: 'PI06', label: 'PI06', icon: <TargetIcon className="h-3.5 w-3.5 text-muted-foreground" /> },
  { value: 'PI07', label: 'PI07', icon: <TargetIcon className="h-3.5 w-3.5 text-muted-foreground" /> },
]

function Playground() {
  const [status, setStatus] = React.useState('backlog')
  const [priority, setPriority] = React.useState<string | undefined>()
  const [labels, setLabels] = React.useState<string[]>([])
  const [project, setProject] = React.useState<string | undefined>()

  const toggle = (value: string) =>
    setLabels(prev => (prev.includes(value) ? prev.filter(l => l !== value) : [...prev, value]))

  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <div className="flex flex-wrap items-center gap-1.5">
        <AttributeButton
          options={statusOptions}
          selected={[status]}
          onSelect={setStatus}
        />
        <AttributeButton
          options={priorityOptions}
          selected={priority ? [priority] : []}
          onSelect={v => setPriority(p => (p === v ? undefined : v))}
          placeholder="Priority"
          placeholderIcon={<EllipsisIcon className="h-3.5 w-3.5" />}
        />
        <AttributeButton
          options={projectOptions}
          selected={project ? [project] : []}
          onSelect={v => setProject(p => (p === v ? undefined : v))}
          placeholder="Project"
          placeholderIcon={<span className="h-3.5 w-3.5 flex items-center justify-center text-[10px] font-bold border border-current rounded-sm">P</span>}
        />
        <AttributeButton
          options={labelOptions}
          selected={labels}
          multi
          onSelect={toggle}
          placeholder="Labels"
          placeholderIcon={<span className="h-3.5 w-3.5 flex items-center justify-center text-[10px] font-bold border border-current rounded-sm">L</span>}
        />
      </div>
    </div>
  )
}

const meta: Meta<typeof AttributeButton> = {
  title: 'Components/AttributeButton',
  component: AttributeButton,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A pill-shaped button that opens a popover to pick from a set of options. Supports single and multi (toggle) selection and a placeholder shown when nothing is selected.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof AttributeButton>

export const Playground_: Story = {
  name: 'Playground',
  render: () => <Playground />,
}

export const SingleSelect: Story = {
  render: () => {
    const [status, setStatus] = React.useState('todo')
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <AttributeButton options={statusOptions} selected={[status]} onSelect={setStatus} />
      </div>
    )
  },
}

export const MultiSelect: Story = {
  render: () => {
    const [labels, setLabels] = React.useState<string[]>(['Improvement'])
    const toggle = (value: string) =>
      setLabels(prev => (prev.includes(value) ? prev.filter(l => l !== value) : [...prev, value]))
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <AttributeButton
          options={labelOptions}
          selected={labels}
          multi
          onSelect={toggle}
          placeholder="Labels"
          placeholderIcon={<span className="h-3.5 w-3.5 flex items-center justify-center text-[10px] font-bold border border-current rounded-sm">L</span>}
        />
      </div>
    )
  },
}
