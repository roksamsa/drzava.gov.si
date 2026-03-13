import { MOCK } from '@/lib/data'

export default function DemografijaPage() {
  const d = MOCK.demografija

  return (
    <>
      <h1 className="page-title">Demografija</h1>
      <p className="page-subtitle">
        Rojstva, smrti, migracije in starostna struktura
      </p>

      <div className="alert-box warning">
        <strong>2035:</strong> 1 zaposleni : {d.razmerjeZaposlenUpokojen}{' '}
        upokojenca – to takoj pokaže problem pokojnin.
      </div>

      <div className="kpi-row">
        <div className="kpi-item">
          <span className="label">Rojstva (letno)</span>
          <div className="value">{d.rojstva.toLocaleString('sl-SI')}</div>
        </div>
        <div className="kpi-item">
          <span className="label">Smrti (letno)</span>
          <div className="value">{d.smrti.toLocaleString('sl-SI')}</div>
        </div>
        <div className="kpi-item">
          <span className="label">Migracije (neto)</span>
          <div className="value positive">+{d.migracijeNeto.toLocaleString('sl-SI')}</div>
        </div>
        <div className="kpi-item">
          <span className="label">Prebivalstvo</span>
          <div className="value">{(d.prebivalstvo / 1e6).toFixed(2)} M</div>
        </div>
      </div>

      <div className="section-block">
        <h3>Napoved prebivalstva</h3>
        <div className="cards-grid">
          <div className="card">
            <div className="card-title">2035</div>
            <div className="card-value">{(d.napoved2035 / 1e6).toFixed(2)} M</div>
          </div>
          <div className="card">
            <div className="card-title">2050</div>
            <div className="card-value">{(d.napoved2050 / 1e6).toFixed(2)} M</div>
          </div>
          <div className="card">
            <div className="card-title">Upokojenci 2035</div>
            <div className="card-value">{(d.upokojenci2035 / 1e3).toFixed(0)} K</div>
          </div>
          <div className="card">
            <div className="card-title">Zaposleni 2035</div>
            <div className="card-value">{(d.zaposleni2035 / 1e3).toFixed(0)} K</div>
          </div>
        </div>
      </div>

      <div className="section-block">
        <h3>Starostna piramida (prototip)</h3>
        <div className="map-placeholder">
          Graf starostne piramide – prikaz bo dodan v naslednji fazi
        </div>
      </div>
    </>
  )
}
