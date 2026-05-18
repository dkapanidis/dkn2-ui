import type { Meta, StoryObj } from '@storybook/react-vite'
import * as React from 'react'
import { ColorPicker } from '../src/components/color-picker'

const meta: Meta = {
  title: 'Components/ColorPicker',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

export const Default: StoryObj = {
  render: () => {
    const [color, setColor] = React.useState('#eab308')
    return (
      <div className="flex flex-col items-center gap-6 p-8">
        <ColorPicker value={color} onChange={setColor} />
        <p className="text-sm text-muted-foreground font-mono">{color}</p>
      </div>
    )
  },
}

export const MultipleColors: StoryObj = {
  render: () => {
    const [colors, setColors] = React.useState(['#ef4444', '#22c55e', '#6366f1'])
    return (
      <div className="flex gap-4 p-8">
        {colors.map((c, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <ColorPicker value={c} onChange={(v) => setColors(prev => prev.map((x, j) => j === i ? v : x))} />
            <span className="text-xs font-mono text-muted-foreground">{c}</span>
          </div>
        ))}
      </div>
    )
  },
}
