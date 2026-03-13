import { MOCK } from '@/lib/data'

export default function EnergijaPage() {
  const d = MOCK.energija

  return (
    <>
      <h1 className="page-title">Energija</h1>
      <p className="page-subtitle">Proizvodnja, poraba, obnovljivi viri</p>

      <div className="kpi-row">
        <div className="kpi-item">
          <span className="label">Proizvodnja (TWh)</span>
          <div className="value">{d.proizvodnja}</div>
        </div>
        <div className="kpi-item">
          <span className="label">Poraba (TWh)</span>
          <div className="value">{d.poraba}</div>
        </div>
        <div className="kpi-item">
          <span className="label">Uvoz / Izvoz (TWh)</span>
          <div className="value">
            {d.uvoz} / {d.izvoz}
          </div>
        </div>
        <div className="kpi-item">
          <span className="label">Obnovljivi viri</span>
          <div className="value positive">{d.obnovljiviOdstotek} %</div>
        </div>
        <div className="kpi-item">
          <span className="label">Cena energije (kWh)</span>
          <div className="value">{d.cenaEnergije} €</div>
        </div>
        <div className="kpi-item">
          <span className="label">Energetska neodvisnost</span>
          <div className="value">{d.neodvisnost} %</div>
        </div>
        <div className="kpi-item">
          <span className="label">CO₂ emisije (t/preb.)</span>
          <div className="value">{d.co2Emisije}</div>
        </div>
      </div>
    </>
  )
}
