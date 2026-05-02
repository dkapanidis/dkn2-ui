import type { Meta, StoryObj } from '@storybook/react-vite'
import * as React from 'react'
import {
  SettingsPage,
  SettingsSection,
  SettingsRow,
} from '../src/components/settings'
import { Switch } from '../src/components/ui/switch'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../src/components/ui/select'
import { Input } from '../src/components/ui/input'
import { Label } from '../src/components/ui/label'
import { Button } from '../src/components/ui/button'

const meta: Meta = {
  title: 'Pages/Settings',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A Linear-inspired settings/preferences page with sections, rows, toggles, and dropdowns.',
      },
    },
  },
}

export default meta

function PreferencesExample() {
  const [defaultHomeView, setDefaultHomeView] = React.useState('active-issues')
  const [displayNames, setDisplayNames] = React.useState('username')
  const [firstDayOfWeek, setFirstDayOfWeek] = React.useState('sunday')
  const [convertEmoticons, setConvertEmoticons] = React.useState(true)
  const [sendCommentOn, setSendCommentOn] = React.useState('cmd-enter')
  const [fontSize, setFontSize] = React.useState('default')
  const [usePointerCursors, setUsePointerCursors] = React.useState(false)

  return (
    <SettingsPage title="Preferences">
      <SettingsSection title="General">
        <SettingsRow
          label="Default home view"
          description="Select which view to display when launching the app"
        >
          <Select value={defaultHomeView} onValueChange={setDefaultHomeView}>
            <SelectTrigger className="w-44">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="active-issues">Active issues</SelectItem>
              <SelectItem value="my-issues">My issues</SelectItem>
              <SelectItem value="inbox">Inbox</SelectItem>
              <SelectItem value="projects">Projects</SelectItem>
            </SelectContent>
          </Select>
        </SettingsRow>

        <SettingsRow
          label="Display names"
          description="Select how names are displayed in the interface"
        >
          <Select value={displayNames} onValueChange={setDisplayNames}>
            <SelectTrigger className="w-44">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="username">Username</SelectItem>
              <SelectItem value="full-name">Full name</SelectItem>
              <SelectItem value="first-name">First name</SelectItem>
            </SelectContent>
          </Select>
        </SettingsRow>

        <SettingsRow label="First day of the week" description="Used for date pickers">
          <Select value={firstDayOfWeek} onValueChange={setFirstDayOfWeek}>
            <SelectTrigger className="w-44">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sunday">Sunday</SelectItem>
              <SelectItem value="monday">Monday</SelectItem>
              <SelectItem value="saturday">Saturday</SelectItem>
            </SelectContent>
          </Select>
        </SettingsRow>

        <SettingsRow
          label="Convert text emoticons into emojis"
          description="Strings like :) will be converted to 🙂"
        >
          <Switch checked={convertEmoticons} onCheckedChange={setConvertEmoticons} />
        </SettingsRow>

        <SettingsRow
          label="Send comment on..."
          description="Choose which key press is used to submit a comment"
        >
          <Select value={sendCommentOn} onValueChange={setSendCommentOn}>
            <SelectTrigger className="w-44">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cmd-enter">⌘+Enter</SelectItem>
              <SelectItem value="enter">Enter</SelectItem>
            </SelectContent>
          </Select>
        </SettingsRow>
      </SettingsSection>

      <SettingsSection title="Interface and theme">
        <SettingsRow label="Font size" description="Adjust the size of text across the app">
          <Select value={fontSize} onValueChange={setFontSize}>
            <SelectTrigger className="w-44">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="small">Small</SelectItem>
              <SelectItem value="default">Default</SelectItem>
              <SelectItem value="large">Large</SelectItem>
            </SelectContent>
          </Select>
        </SettingsRow>

        <SettingsRow
          label="Use pointer cursors"
          description="Change the cursor to a pointer when hovering over any interactive elements"
        >
          <Switch checked={usePointerCursors} onCheckedChange={setUsePointerCursors} />
        </SettingsRow>
      </SettingsSection>
    </SettingsPage>
  )
}

export const Preferences: StoryObj = {
  render: () => <PreferencesExample />,
}

export const CustomSettings: StoryObj = {
  render: () => {
    const [notifications, setNotifications] = React.useState(true)
    const [marketing, setMarketing] = React.useState(false)
    const [digest, setDigest] = React.useState('daily')

    return (
      <SettingsPage title="Notifications">
        <SettingsSection title="Email notifications">
          <SettingsRow
            label="Activity notifications"
            description="Receive emails when someone mentions you, assigns an issue, or comments on your work"
          >
            <Switch checked={notifications} onCheckedChange={setNotifications} />
          </SettingsRow>
          <SettingsRow
            label="Marketing emails"
            description="Receive emails about new features and product updates"
          >
            <Switch checked={marketing} onCheckedChange={setMarketing} />
          </SettingsRow>
          <SettingsRow
            label="Digest frequency"
            description="How often to receive a summary of your notifications"
          >
            <Select value={digest} onValueChange={setDigest}>
              <SelectTrigger className="w-36">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="realtime">Real-time</SelectItem>
                <SelectItem value="hourly">Hourly</SelectItem>
                <SelectItem value="daily">Daily</SelectItem>
                <SelectItem value="weekly">Weekly</SelectItem>
                <SelectItem value="never">Never</SelectItem>
              </SelectContent>
            </Select>
          </SettingsRow>
        </SettingsSection>
      </SettingsPage>
    )
  },
}

export const ProfileSettings: StoryObj = {
  render: () => {
    const [name, setName] = React.useState('John Doe')
    const [email, setEmail] = React.useState('john@example.com')
    const [timezone, setTimezone] = React.useState('utc')

    return (
      <SettingsPage title="Profile">
        <SettingsSection title="Personal information">
          <SettingsRow label="Display name" description="Your name as shown to other members">
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-56"
              placeholder="Your name"
            />
          </SettingsRow>
          <SettingsRow label="Email address" description="Used for notifications and sign-in">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-56"
              placeholder="user@example.com"
            />
          </SettingsRow>
          <SettingsRow label="Timezone" description="Used for scheduling and date display">
            <Select value={timezone} onValueChange={setTimezone}>
              <SelectTrigger className="w-56">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="utc">UTC</SelectItem>
                <SelectItem value="us-eastern">US Eastern (UTC-5)</SelectItem>
                <SelectItem value="us-pacific">US Pacific (UTC-8)</SelectItem>
                <SelectItem value="europe-london">Europe/London (UTC+0)</SelectItem>
                <SelectItem value="europe-paris">Europe/Paris (UTC+1)</SelectItem>
                <SelectItem value="asia-tokyo">Asia/Tokyo (UTC+9)</SelectItem>
              </SelectContent>
            </Select>
          </SettingsRow>
        </SettingsSection>

        <SettingsSection title="Security">
          <SettingsRow
            label="Password"
            description="Last changed 3 months ago"
          >
            <Button variant="outline" size="sm">
              Change password
            </Button>
          </SettingsRow>
          <SettingsRow
            label="Two-factor authentication"
            description="Add an extra layer of security to your account"
          >
            <Button variant="outline" size="sm">
              Enable 2FA
            </Button>
          </SettingsRow>
        </SettingsSection>
      </SettingsPage>
    )
  },
}

export const WithAllInputTypes: StoryObj = {
  render: () => {
    const [settings, setSettings] = React.useState({
      apiKey: 'sk-••••••••••••••••',
      webhookUrl: '',
      theme: 'system',
      language: 'en',
      autoSave: true,
      betaFeatures: false,
      analyticsEnabled: true,
    })

    const update = (key: string, val: string | boolean) =>
      setSettings((s) => ({ ...s, [key]: val }))

    return (
      <SettingsPage title="Developer settings">
        <SettingsSection title="API access">
          <SettingsRow label="API key" description="Your personal API key — keep it secret">
            <div className="flex gap-2">
              <Input value={settings.apiKey} readOnly className="w-52 font-mono text-xs" />
              <Button variant="outline" size="sm">
                Regenerate
              </Button>
            </div>
          </SettingsRow>
          <SettingsRow
            label="Webhook URL"
            description="Receive POST requests when events occur"
          >
            <Input
              value={settings.webhookUrl}
              onChange={(e) => update('webhookUrl', e.target.value)}
              className="w-64"
              placeholder="https://your-app.com/webhook"
            />
          </SettingsRow>
        </SettingsSection>

        <SettingsSection title="Appearance">
          <SettingsRow label="Theme" description="Choose your preferred color scheme">
            <Select value={settings.theme} onValueChange={(v) => update('theme', v)}>
              <SelectTrigger className="w-36">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </SettingsRow>
          <SettingsRow label="Language" description="Interface display language">
            <Select value={settings.language} onValueChange={(v) => update('language', v)}>
              <SelectTrigger className="w-36">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Español</SelectItem>
                <SelectItem value="fr">Français</SelectItem>
                <SelectItem value="de">Deutsch</SelectItem>
                <SelectItem value="ja">日本語</SelectItem>
              </SelectContent>
            </Select>
          </SettingsRow>
        </SettingsSection>

        <SettingsSection title="Features">
          <SettingsRow
            label="Auto-save"
            description="Automatically save changes as you type"
          >
            <Switch
              checked={settings.autoSave}
              onCheckedChange={(v) => update('autoSave', v)}
            />
          </SettingsRow>
          <SettingsRow
            label="Beta features"
            description="Get early access to features still in development"
          >
            <Switch
              checked={settings.betaFeatures}
              onCheckedChange={(v) => update('betaFeatures', v)}
            />
          </SettingsRow>
          <SettingsRow
            label="Analytics"
            description="Help us improve by sharing anonymous usage data"
          >
            <Switch
              checked={settings.analyticsEnabled}
              onCheckedChange={(v) => update('analyticsEnabled', v)}
            />
          </SettingsRow>
        </SettingsSection>
      </SettingsPage>
    )
  },
}
