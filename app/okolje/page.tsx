import { MOCK } from '@/lib/data'

export default function OkoljePage() {
  const d = MOCK.okolje

  return (
    <>
      <h1 className="page-title">Okolje</h1>
      <p className="page-subtitle">Zrak, emisije, recikliranje</p>

      <div className="kpi-row">
        <div className="kpi-item">
          <span className="label">Kvaliteta zraka (indeks)</span>
          <div className="value">{d.kvalitetaZraka}</div>
        </div>
        <div className="kpi-item">
          <span className="label">CO₂ emisije (t/preb.)</span>
          <div className="value">{d.co2Emisije}</div>
        </div>
        <div className="kpi-item">
          <span className="label">Recikliranje</span>
          <div className="value positive">{d.recikliranjeOdstotek} %</div>
        </div>
        <div className="kpi-item">
          <span className="label">Poraba vode (L/preb/dan)</span>
          <div className="value">{d.porabaVode}</div>
        </div>
        <div className="kpi-item">
          <span className="label">Gozdnatost</span>
          <div className="value positive">{d.gozdnatost} %</div>
        </div>
      </div>
    </>
  )
}
