'use client'

import { MOCK } from '@/lib/data'
import { ChartClient } from './ChartClient'

export function ZdravstvoChart() {
  const d = MOCK.zdravstvo
  const labels = d.cakalneDobe.map((x) => x.storitev)
  const data = d.cakalneDobe.map((x) => x.dni)

  return (
    <ChartClient
      type="bar"
      data={{
        labels,
        datasets: [
          {
            label: 'Čakalna doba (dni)',
            data,
            backgroundColor: 'rgba(248, 81, 73, 0.6)',
          },
        ],
      }}
      options={{
        indexAxis: 'y',
        plugins: { legend: { display: false } },
      }}
    />
  )
}
