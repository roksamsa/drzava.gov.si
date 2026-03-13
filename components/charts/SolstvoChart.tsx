'use client'

import { MOCK } from '@/lib/data'
import { ChartClient } from './ChartClient'

export function SolstvoChart() {
  const d = MOCK.solstvo

  return (
    <ChartClient
      type="doughnut"
      height="small"
      data={{
        labels: ['Ostane v državi', 'Odide v tujino'],
        datasets: [
          {
            data: [d.ostaneVDrzavi, 100 - d.ostaneVDrzavi],
            backgroundColor: ['#3fb950', '#f85149'],
          },
        ],
      }}
      options={{
        plugins: { legend: { position: 'bottom', labels: { color: '#e6edf3' } } },
      }}
    />
  )
}
