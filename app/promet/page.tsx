import { MOCK } from '@/lib/data'

export default function PrometPage() {
  const d = MOCK.promet

  return (
    <>
      <h1 className="page-title">Promet</h1>
      <p className="page-subtitle">Avtoceste, javni transport, nesreče</p>

      <div className="kpi-row">
        <div className="kpi-item">
          <span className="label">Promet na avtocestah</span>
          <div className="value">{d.avtocesteMilijardiKm} mrd km</div>
        </div>
        <div className="kpi-item">
          <span className="label">Javni transport (potnikov, M)</span>
          <div className="value">{d.javniTransportPotnikov}</div>
        </div>
        <div className="kpi-item">
          <span className="label">Registrirana vozila</span>
          <div className="value">{(d.registriranaVozila / 1e6).toFixed(2)} M</div>
        </div>
        <div className="kpi-item">
          <span className="label">Prometne nesreče (letno)</span>
          <div className="value">{d.prometneNesrece.toLocaleString('sl-SI')}</div>
        </div>
      </div>
    </>
  )
}
