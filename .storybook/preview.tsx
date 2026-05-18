import type { Preview } from '@storybook/react-vite'
import React from 'react'
import { ThemeProvider } from '../src/components/theme'
import '../src/styles/globals.css'

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Theme',
      defaultValue: 'dark',
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
      const theme = context.globals['theme'] ?? 'dark'

      React.useEffect(() => {
        document.documentElement.classList.remove('light', 'dark')
        document.documentElement.classList.add(theme)
      }, [theme])

      return (
        <ThemeProvider defaultTheme={theme} key={theme}>
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
