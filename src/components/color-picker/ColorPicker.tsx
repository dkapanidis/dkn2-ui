import { Check } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

const DISTINCT_COLORS: { hex: string; name: string }[] = [
  { hex: '#ef4444', name: 'Red' },
  { hex: '#f97316', name: 'Orange' },
  { hex: '#f59e0b', name: 'Amber' },
  { hex: '#eab308', name: 'Yellow' },
  { hex: '#84cc16', name: 'Lime' },
  { hex: '#22c55e', name: 'Green' },
  { hex: '#14b8a6', name: 'Teal' },
  { hex: '#0ea5e9', name: 'Sky' },
  { hex: '#6366f1', name: 'Indigo' },
  { hex: '#a855f7', name: 'Purple' },
  { hex: '#64748b', name: 'Slate' },
]

const DISTINCT_HEX_SET = new Set(DISTINCT_COLORS.map(c => c.hex))

// --- Color math ---

function hsvToRgb(h: number, s: number, v: number): [number, number, number] {
  const i = Math.floor(h / 60) % 6
  const f = h / 60 - Math.floor(h / 60)
  const p = v * (1 - s)
  const q = v * (1 - f * s)
  const t = v * (1 - (1 - f) * s)
  const variants: [number, number, number][] = [
    [v, t, p], [q, v, p], [p, v, t], [p, q, v], [t, p, v], [v, p, q],
  ]
  const [r, g, b] = variants[i]
  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)]
}

function rgbToHex(r: number, g: number, b: number): string {
  return '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('')
}

function hexToRgb(hex: string): [number, number, number] | null {
  const m = /^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(hex.trim())
  return m ? [parseInt(m[1], 16), parseInt(m[2], 16), parseInt(m[3], 16)] : null
}

function rgbToHsv(r: number, g: number, b: number): [number, number, number] {
  const rr = r / 255, gg = g / 255, bb = b / 255
  const max = Math.max(rr, gg, bb), min = Math.min(rr, gg, bb)
  const d = max - min
  let h = 0
  if (d !== 0) {
    if (max === rr) h = ((gg - bb) / d + 6) % 6
    else if (max === gg) h = (bb - rr) / d + 2
    else h = (rr - gg) / d + 4
    h *= 60
  }
  return [h, max === 0 ? 0 : d / max, max]
}

// --- Contrast adjustment ---

const MIN_LUMINANCE = 0.1

function relativeLuminance(hex: string): number {
  const rgb = hexToRgb(hex)
  if (!rgb) return 0
  const [r, g, b] = rgb.map(c => {
    const s = c / 255
    return s <= 0.04045 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4)
  })
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

function adjustForContrast(h: number, s: number, v: number): { hex: string; adjusted: boolean } {
  const hex = rgbToHex(...hsvToRgb(h, s, v))
  if (relativeLuminance(hex) >= MIN_LUMINANCE) return { hex, adjusted: false }
  let lo = v, hi = 1
  for (let i = 0; i < 20; i++) {
    const mid = (lo + hi) / 2
    relativeLuminance(rgbToHex(...hsvToRgb(h, s, mid))) >= MIN_LUMINANCE ? (hi = mid) : (lo = mid)
  }
  return { hex: rgbToHex(...hsvToRgb(h, s, hi)), adjusted: true }
}

// --- Gradient canvas picker ---

function GradientCanvas({
  hue, sat, val,
  onChange,
}: {
  hue: number; sat: number; val: number
  onChange: (s: number, v: number) => void
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const dragging = useRef(false)

  const draw = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    const w = canvas.width, h = canvas.height
    const [r, g, b] = hsvToRgb(hue, 1, 1)
    const gradH = ctx.createLinearGradient(0, 0, w, 0)
    gradH.addColorStop(0, '#fff')
    gradH.addColorStop(1, `rgb(${r},${g},${b})`)
    ctx.fillStyle = gradH
    ctx.fillRect(0, 0, w, h)
    const gradV = ctx.createLinearGradient(0, 0, 0, h)
    gradV.addColorStop(0, 'rgba(0,0,0,0)')
    gradV.addColorStop(1, 'rgba(0,0,0,1)')
    ctx.fillStyle = gradV
    ctx.fillRect(0, 0, w, h)
  }, [hue])

  useEffect(() => { draw() }, [draw])

  const pick = useCallback((e: React.MouseEvent | MouseEvent) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
    const y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height))
    onChange(x, 1 - y)
  }, [onChange])

  useEffect(() => {
    const move = (e: MouseEvent) => { if (dragging.current) pick(e) }
    const up = () => { dragging.current = false }
    document.addEventListener('mousemove', move)
    document.addEventListener('mouseup', up)
    return () => {
      document.removeEventListener('mousemove', move)
      document.removeEventListener('mouseup', up)
    }
  }, [pick])

  return (
    <div className="relative flex-1 min-w-0" style={{ height: 160 }}>
      <canvas
        ref={canvasRef}
        width={400}
        height={160}
        className="w-full h-full rounded cursor-crosshair"
        onMouseDown={(e) => { dragging.current = true; pick(e) }}
      />
      <div
        className="absolute w-4 h-4 rounded-full border-2 border-white shadow pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{ left: `${sat * 100}%`, top: `${(1 - val) * 100}%` }}
      />
    </div>
  )
}

// --- Hue slider ---

function HueSlider({ hue, onChange }: { hue: number; onChange: (h: number) => void }) {
  const ref = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const pick = useCallback((e: React.MouseEvent | MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height))
    onChange(y * 360)
  }, [onChange])

  useEffect(() => {
    const move = (e: MouseEvent) => { if (dragging.current) pick(e) }
    const up = () => { dragging.current = false }
    document.addEventListener('mousemove', move)
    document.addEventListener('mouseup', up)
    return () => {
      document.removeEventListener('mousemove', move)
      document.removeEventListener('mouseup', up)
    }
  }, [pick])

  return (
    <div
      ref={ref}
      className="relative w-4 rounded cursor-pointer flex-shrink-0"
      style={{
        height: 160,
        background: 'linear-gradient(to bottom, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)',
      }}
      onMouseDown={(e) => { dragging.current = true; pick(e) }}
    >
      <div
        className="absolute left-1/2 w-5 h-3 -translate-x-1/2 -translate-y-1/2 rounded-sm border-2 border-white shadow pointer-events-none"
        style={{ top: `${(hue / 360) * 100}%` }}
      />
    </div>
  )
}

// --- Main ColorPicker ---

export interface ColorPickerProps {
  value: string
  onChange: (color: string) => void
}

export function ColorPicker({ value, onChange }: ColorPickerProps) {
  const [open, setOpen] = useState(false)
  const [mode, setMode] = useState<'swatches' | 'gradient'>('swatches')
  const [hue, setHue] = useState(0)
  const [sat, setSat] = useState(1)
  const [val, setVal] = useState(1)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    setMode(DISTINCT_HEX_SET.has(value) ? 'swatches' : 'gradient')
    const rgb = hexToRgb(value)
    if (rgb) {
      const [h, s, v] = rgbToHsv(...rgb)
      setHue(h); setSat(s); setVal(v)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  const { hex: adjustedHex, adjusted: contrastAdjusted } = adjustForContrast(hue, sat, val)

  useEffect(() => {
    if (!open) return
    const handleOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handleOutside)
    return () => document.removeEventListener('mousedown', handleOutside)
  }, [open])

  function handleGradientChange(s: number, v: number) {
    setSat(s); setVal(v)
    onChange(adjustForContrast(hue, s, v).hex)
  }

  function handleHueChange(h: number) {
    setHue(h)
    onChange(adjustForContrast(h, sat, val).hex)
  }

  function handleSwatchClick(color: string) {
    onChange(color)
    const rgb = hexToRgb(color)
    if (rgb) {
      const [h, s, v] = rgbToHsv(...rgb)
      setHue(h); setSat(s); setVal(v)
    }
    setOpen(false)
  }

  const isGradient = mode === 'gradient'

  return (
    <TooltipProvider>
      <div className="relative inline-block" ref={ref}>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              type="button"
              className="w-6 h-6 rounded-full border-2 border-white shadow ring-1 ring-black/10 focus:outline-none"
              style={{ background: value }}
              onClick={() => setOpen(o => !o)}
            />
          </TooltipTrigger>
          <TooltipContent>{value.toUpperCase()}</TooltipContent>
        </Tooltip>

        {open && (
          <div className="absolute z-50 mt-2 rounded-xl border border-border bg-popover shadow-lg p-2">

            {/* Top row: content left + gradient toggle right (always) */}
            <div className="flex items-center gap-1">
              {/* Sizing anchor: swatches always rendered to hold the width */}
              <div className="relative">
                {/* Swatches — always in layout; invisible in gradient mode */}
                <div className={`flex items-center gap-1 transition-opacity duration-150 ${isGradient ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                  {DISTINCT_COLORS.map(({ hex, name }) => (
                    <Tooltip key={hex}>
                      <TooltipTrigger asChild>
                        <button
                          type="button"
                          className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center border-2 hover:scale-110 transition-transform focus:outline-none"
                          style={{
                            background: hex,
                            borderColor: hex === value ? 'white' : 'transparent',
                            boxShadow: hex === value ? `0 0 0 2px ${hex}` : undefined,
                          }}
                          onClick={() => handleSwatchClick(hex)}
                        >
                          {hex === value && <Check className="w-3.5 h-3.5 text-white drop-shadow" strokeWidth={3} />}
                        </button>
                      </TooltipTrigger>
                      <TooltipContent>{name}</TooltipContent>
                    </Tooltip>
                  ))}
                  <div className="w-px h-6 bg-border mx-0.5 flex-shrink-0" />
                </div>

                {/* Gradient header — absolute overlay, same width as swatches */}
                <div className={`absolute inset-0 flex items-center gap-2 transition-opacity duration-150 ${isGradient ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    <button
                      type="button"
                      className="w-7 h-7 rounded-full flex-shrink-0 border-2 border-white flex items-center justify-center hover:scale-110 transition-transform focus:outline-none"
                      style={{ background: adjustedHex, boxShadow: `0 0 0 2px ${adjustedHex}` }}
                      onClick={() => setOpen(false)}
                    >
                      <Check className="w-3.5 h-3.5 text-white drop-shadow" strokeWidth={3} />
                    </button>
                    <span className="text-xs text-muted-foreground font-mono select-none">HEX</span>
                    <span className="text-xs font-mono text-foreground">{adjustedHex.toUpperCase()}</span>
                    {contrastAdjusted && (
                      <span className="text-xs text-muted-foreground whitespace-nowrap">Contrast has been adjusted</span>
                    )}
                  </div>
              </div>

              {/* Gradient toggle — always top-right */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    type="button"
                    onClick={() => setMode(m => m === 'gradient' ? 'swatches' : 'gradient')}
                    className={`w-7 h-7 rounded-full flex-shrink-0 border-2 transition-transform hover:scale-110 focus:outline-none border-white ${isGradient ? 'ring-2 ring-indigo-500' : ''}`}
                    style={{
                      background: 'conic-gradient(from 0deg, #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00)',
                    }}
                  />
                </TooltipTrigger>
                <TooltipContent>Custom color</TooltipContent>
              </Tooltip>
            </div>

            {/* Animated canvas panel */}
            <div
              className="grid"
              style={{
                gridTemplateRows: isGradient ? '1fr' : '0fr',
                transition: 'grid-template-rows 200ms ease',
              }}
            >
              <div className="overflow-hidden min-h-0">
                <div className="flex gap-1 pt-2">
                  <GradientCanvas hue={hue} sat={sat} val={val} onChange={handleGradientChange} />
                  <div className="w-7 flex justify-center flex-shrink-0">
                    <HueSlider hue={hue} onChange={handleHueChange} />
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}
      </div>
    </TooltipProvider>
  )
}
