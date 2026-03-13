import { MOCK } from '@/lib/data'

const sectors = [
  { key: 'finance', label: 'Finance' },
  { key: 'zdravstvo', label: 'Zdravstvo' },
  { key: 'solstvo', label: 'Šolstvo' },
  { key: 'demografija', label: 'Demografija' },
  { key: 'trg-dela', label: 'Trg dela' },
  { key: 'stanovanja', label: 'Stanovanja' },
  { key: 'energija', label: 'Energija' },
  { key: 'promet', label: 'Promet' },
  { key: 'okolje', label: 'Okolje' },
  { key: 'digitalna', label: 'Digitalna država' },
] as const

const emoji: Record<string, string> = {
  green: '🟢',
  yellow: '🟡',
  red: '🔴',
}

export function HealthBar() {
  return (
    <header className="health-bar">
      <span className="health-bar-label">Stanje države</span>
      <div className="health-dots">
        {sectors.map(({ key, label }) => (
          <span
            key={key}
            className="health-dot"
            title={label}
          >
            {emoji[MOCK.health[key as keyof typeof MOCK.health]] ?? '🟢'}
          </span>
        ))}
      </div>
    </header>
  )
}
