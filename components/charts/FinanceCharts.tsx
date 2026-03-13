'use client'

import { MOCK } from '@/lib/data'
import { ChartClient } from './ChartClient'

export function FinanceCharts() {
  const d = MOCK.finance
  const labels = d.proracun.map((x) => x.leto.toString())
  const planirano = d.proracun.map((x) => x.planirano)
  const dejansko = d.proracun.map((x) => x.dejansko)
  const prihodkiLabels = d.prihodki.map((x) => x.vir)
  const prihodkiData = d.prihodki.map((x) => x.znesek)

  return (
    <>
      <ChartClient
        type="bar"
        data={{
          labels,
          datasets: [
            {
              label: 'Planirano (mrd €)',
              data: planirano,
              backgroundColor: 'rgba(45, 125, 125, 0.6)',
            },
            {
              label: 'Dejansko (mrd €)',
              data: dejansko,
              backgroundColor: 'rgba(63, 185, 80, 0.6)',
            },
          ],
        }}
      />
      <div className="two-cols" style={{ marginTop: '1.5rem' }}>
        <div className="section-block">
          <h3>Prihodki po virih (mrd €)</h3>
          <ChartClient
            type="doughnut"
            data={{
              labels: prihodkiLabels,
              datasets: [
                {
                  data: prihodkiData,
                  backgroundColor: [
                    '#2d7d7d',
                    '#3d9d9d',
                    '#3fb950',
                    '#d29922',
                    '#8b949e',
                  ],
                },
              ],
            }}
            options={{
              plugins: { legend: { position: 'right', labels: { color: '#e6edf3' } } },
            }}
          />
        </div>
        <div className="section-block">
          <h3>Napoved dolga (% BDP)</h3>
          <ChartClient
            type="line"
            data={{
              labels: ['2024', '2027', '2030', '2033', '2035'],
              datasets: [
                {
                  label: 'Dolg % BDP (napoved)',
                  data: [
                    d.dolgBdpOdstotek,
                    74,
                    d.napovedDolga5,
                    82,
                    d.napovedDolga10,
                  ],
                  borderColor: '#f85149',
                  fill: false,
                  tension: 0.3,
                },
              ],
            }}
          />
        </div>
      </div>
    </>
  )
}
