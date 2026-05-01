import type { Preview } from '@storybook/react-vite'
import React from 'react'
import { ThemeProvider } from '../src/components/theme'
import '../src/styles/globals.css'

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Theme',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals['theme'] ?? 'light'
      return (
        <ThemeProvider defaultTheme={theme}>
          <div className="min-h-screen bg-background text-foreground p-6">
            <Story />
          </div>
        </ThemeProvider>
      )
    },
  ],
  parameters: {
    layout: 'padded',
  },
}

export default preview
