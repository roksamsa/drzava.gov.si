import Link from 'next/link'
import { MOCK } from '@/lib/data'

export default function GlavnaPage() {
  const d = MOCK.user
  const f = MOCK.finance
  const t = MOCK.trgDela
  const z = MOCK.zdravstvo
  const dem = MOCK.demografija

  return (
    <>
      <div className="welcome-hero">
        <h1>
          {d.greeting}, {d.name} {d.surname}
        </h1>
        <p className="welcome-sub">{d.subtitle}</p>
      </div>

      <div className="section-block">
        <h3>AI napoved – scenariji</h3>
        <div className="alert-box warning">
          Če nič ne naredimo → problem pri pokojninah okoli 2032. Če odpremo 300
          dodatnih mest na medicini → stanje stabilno do 2035.
        </div>
      </div>

      <div className="section-block">
        <h3>Hitri pregled</h3>
        <div className="cards-grid">
          <Link href="/finance" className="card">
            <div className="card-title">Javni dolg</div>
            <div className="card-value">
              {f.javniDolg} mrd €
            </div>
            <div className="card-note">{f.dolgBdpOdstotek} % BDP</div>
          </Link>
          <div className="card">
            <div className="card-title">Brezposelnost</div>
            <div className="card-value">{t.brezposelnost} %</div>
            <div className="card-note">Trg dela</div>
          </div>
          <Link href="/zdravstvo" className="card">
            <div className="card-title">Manjkajoči zdravniki</div>
            <div className="card-value negative">
              {z.potrebnoZdravnikov - z.zdravniki}
            </div>
            <div className="card-note">Napoved 2030: −1200</div>
          </Link>
          <Link href="/demografija" className="card">
            <div className="card-title">Prebivalstvo</div>
            <div className="card-value">
              {(dem.prebivalstvo / 1e6).toFixed(2)} M
            </div>
            <div className="card-note">Napoved 2035: 2.08 M</div>
          </Link>
        </div>
      </div>
    </>
  )
}
