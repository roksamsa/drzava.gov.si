import { MOCK } from '@/lib/data'

export default function DigitalnaPage() {
  const d = MOCK.digitalna

  return (
    <>
      <h1 className="page-title">Digitalna država</h1>
      <p className="page-subtitle">eUprava, digitalne storitve, papir</p>

      <div className="kpi-row">
        <div className="kpi-item">
          <span className="label">Digitalnih storitev</span>
          <div className="value positive">{d.digitalnihStoritev} %</div>
        </div>
        <div className="kpi-item">
          <span className="label">Uporabnikov eUprave (M)</span>
          <div className="value">{d.uporabnikovEuprave}</div>
        </div>
        <div className="kpi-item">
          <span className="label">Papir (t/letno)</span>
          <div className="value">{d.papirLetno}</div>
        </div>
        <div className="kpi-item">
          <span className="label">Povprečen čas obdelave vloge</span>
          <div className="value">{d.povprecenCasObdelave} dni</div>
        </div>
      </div>
    </>
  )
}
