import type { Meta, StoryObj } from '@storybook/react-vite'
import { Search, Mail, Lock, User, Eye, EyeOff } from 'lucide-react'
import * as React from 'react'
import { Input } from '../src/components/ui/input'
import { Label } from '../src/components/ui/label'
import { Button } from '../src/components/ui/button'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A styled text input field built on the native HTML input element.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  render: () => <Input placeholder="Enter text..." />,
}

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="username">Username</Label>
      <Input id="username" placeholder="Enter username..." />
    </div>
  ),
}

export const Disabled: Story = {
  render: () => <Input disabled placeholder="Disabled input" value="Cannot edit this" />,
}

export const Invalid: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="email-invalid">Email</Label>
      <Input id="email-invalid" aria-invalid placeholder="invalid@example.com" />
      <p className="text-xs text-destructive">Please enter a valid email address.</p>
    </div>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
        <Input className="pl-9" placeholder="Search..." />
      </div>
      <div className="relative">
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
        <Input className="pl-9" type="email" placeholder="Email address" />
      </div>
      <div className="relative">
        <User className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
        <Input className="pl-9" placeholder="Full name" />
      </div>
    </div>
  ),
}

function PasswordInput() {
  const [show, setShow] = React.useState(false)
  return (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="password">Password</Label>
      <div className="relative">
        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
        <Input
          id="password"
          type={show ? 'text' : 'password'}
          className="pl-9 pr-10"
          placeholder="Enter password"
        />
        <button
          type="button"
          onClick={() => setShow((v) => !v)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
        >
          {show ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
        </button>
      </div>
    </div>
  )
}

export const Password: Story = {
  render: () => <PasswordInput />,
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-3 w-full max-w-sm">
      <Input className="h-7 text-xs px-2" placeholder="Small input" />
      <Input placeholder="Default input" />
      <Input className="h-11 text-base" placeholder="Large input" />
    </div>
  ),
}

export const InputTypes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <div className="grid gap-1.5">
        <Label>Text</Label>
        <Input type="text" placeholder="Enter text" />
      </div>
      <div className="grid gap-1.5">
        <Label>Email</Label>
        <Input type="email" placeholder="user@example.com" />
      </div>
      <div className="grid gap-1.5">
        <Label>Number</Label>
        <Input type="number" placeholder="0" />
      </div>
      <div className="grid gap-1.5">
        <Label>Date</Label>
        <Input type="date" />
      </div>
      <div className="grid gap-1.5">
        <Label>File</Label>
        <Input type="file" />
      </div>
    </div>
  ),
}

function FormExample() {
  const [values, setValues] = React.useState({ name: '', email: '', password: '' })
  const [submitted, setSubmitted] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
      <div className="grid gap-1.5">
        <Label htmlFor="form-name">Name</Label>
        <Input
          id="form-name"
          value={values.name}
          onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
          placeholder="Your name"
          required
        />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="form-email">Email</Label>
        <Input
          id="form-email"
          type="email"
          value={values.email}
          onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
          placeholder="user@example.com"
          required
        />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="form-password">Password</Label>
        <Input
          id="form-password"
          type="password"
          value={values.password}
          onChange={(e) => setValues((v) => ({ ...v, password: e.target.value }))}
          placeholder="Min 8 characters"
          minLength={8}
          required
        />
      </div>
      <Button type="submit" className="w-full">
        Create account
      </Button>
      {submitted && (
        <p className="text-sm text-muted-foreground text-center">
          Form submitted with: {values.name}, {values.email}
        </p>
      )}
    </form>
  )
}

export const FormWithValidation: Story = {
  render: () => <FormExample />,
}
