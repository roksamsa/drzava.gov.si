'use client'

import { useEffect, useRef } from 'react'
import { Chart as ChartJS, type ChartData } from 'chart.js/auto'

const defaultOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { labels: { color: '#8b949e' } },
  },
  scales: {
    x: { ticks: { color: '#8b949e' as const } },
    y: { ticks: { color: '#8b949e' as const } },
  },
}

type Props = {
  type: 'bar' | 'line' | 'doughnut'
  data: ChartData<'bar' | 'line' | 'doughnut'>
  options?: Record<string, unknown>
  height?: 'normal' | 'small'
}

export function ChartClient({ type, data, options, height = 'normal' }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const chartRef = useRef<ChartJS | null>(null)

  useEffect(() => {
    if (!canvasRef.current) return
    const ctx = canvasRef.current.getContext('2d')
    if (!ctx) return

    if (chartRef.current) {
      chartRef.current.destroy()
      chartRef.current = null
    }

    chartRef.current = new ChartJS(ctx, {
      type,
      data,
      options: { ...defaultOptions, ...options },
    })

    return () => {
      chartRef.current?.destroy()
      chartRef.current = null
    }
  }, [type, data, options])

  return (
    <div className={height === 'small' ? 'chart-container small' : 'chart-container'}>
      <canvas ref={canvasRef} />
    </div>
  )
}
