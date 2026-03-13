import { MOCK } from '@/lib/data'
import { ZdravstvoChart } from '@/components/charts/ZdravstvoChart'

export default function ZdravstvoPage() {
  const d = MOCK.zdravstvo
  const primanjkljaj = d.potrebnoZdravnikov - d.zdravniki

  return (
    <>
      <h1 className="page-title">Zdravstvo</h1>
      <p className="page-subtitle">
        Stanje kadrov, čakalne dobe in napovedi
      </p>

      <div className="alert-box danger">
        <strong>Primanjkljaj zdravnikov:</strong> Potrebujemo {d.potrebnoZdravnikov},
        imamo {d.zdravniki}. Primanjkljaj: <strong>{primanjkljaj}</strong>. Napoved
        2030: <strong>−{d.napovedManjkajocih2030}</strong>.
      </div>

      <div className="kpi-row">
        <div className="kpi-item">
          <span className="label">Zdravniki</span>
          <div className="value">{d.zdravniki.toLocaleString('sl-SI')}</div>
        </div>
        <div className="kpi-item">
          <span className="label">Medicinske sestre</span>
          <div className="value">{d.medicinskeSestre.toLocaleString('sl-SI')}</div>
        </div>
        <div className="kpi-item">
          <span className="label">Pacienti na dan</span>
          <div className="value">{d.pacientiDan.toLocaleString('sl-SI')}</div>
        </div>
        <div className="kpi-item">
          <span className="label">Čakalna doba (povpr.)</span>
          <div className="value">{d.cakalnaDobaPovprecje} dni</div>
        </div>
        <div className="kpi-item">
          <span className="label">Zasedenost bolnišnic</span>
          <div className="value">{d.zasedenostBolnisc} %</div>
        </div>
        <div className="kpi-item">
          <span className="label">Operacij na dan</span>
          <div className="value">{d.operacijeNaDan}</div>
        </div>
      </div>

      <div className="section-block">
        <h3>Čakalne dobe po storitvah (dni)</h3>
        <ZdravstvoChart />
      </div>

      <div className="section-block">
        <h3>Napoved kadrov</h3>
        <div className="cards-grid">
          <div className="card">
            <div className="card-title">Zdravniki v penzijo (5 let)</div>
            <div className="card-value">{d.zdravnikiVPenzijo5}</div>
          </div>
          <div className="card">
            <div className="card-title">Zdravniki v penzijo (10 let)</div>
            <div className="card-value">{d.zdravnikiVPenzijo10}</div>
          </div>
          <div className="card">
            <div className="card-title">Trenutno študira medicino</div>
            <div className="card-value">{d.studiraMedicine}</div>
          </div>
          <div className="card">
            <div className="card-title">Napoved manjkajočih 2030</div>
            <div className="card-value negative">−{d.napovedManjkajocih2030}</div>
          </div>
        </div>
      </div>
    </>
  )
}
