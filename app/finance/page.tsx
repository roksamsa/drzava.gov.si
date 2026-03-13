import { MOCK } from '@/lib/data'
import { FinanceCharts } from '@/components/charts/FinanceCharts'

export default function FinancePage() {
  const d = MOCK.finance

  return (
    <>
      <h1 className="page-title">Finance države</h1>
      <p className="page-subtitle">
        Proračun, prihodki, javni dolg in napovedi
      </p>

      <div className="kpi-row">
        <div className="kpi-item">
          <span className="label">Javni dolg</span>
          <div className="value">{d.javniDolg} mrd €</div>
        </div>
        <div className="kpi-item">
          <span className="label">Dolg na prebivalca</span>
          <div className="value">{d.dolgNaPrebivalca.toLocaleString('sl-SI')} €</div>
        </div>
        <div className="kpi-item">
          <span className="label">Dolg % BDP</span>
          <div className="value">{d.dolgBdpOdstotek} %</div>
        </div>
        <div className="kpi-item">
          <span className="label">Mesečni cashflow</span>
          <div className="value">{d.cashflowMesečni} M €</div>
        </div>
        <div className="kpi-item">
          <span className="label">EU sredstva (prejeta/porabljena)</span>
          <div className="value">
            {d.euSredstvaPrejeta} / {d.euSredstvaPorabljena} mrd €
          </div>
        </div>
      </div>

      <div className="section-block">
        <h3>Proračun skozi čas (mrd €)</h3>
        <FinanceCharts />
      </div>

      <div className="section-block">
        <h3>Investicije in napovedi</h3>
        <div className="cards-grid">
          <div className="card">
            <div className="card-title">Investicije države</div>
            <div className="card-value">{d.investicije} mrd €</div>
          </div>
          <div className="card">
            <div className="card-title">Napoved prihodkov (5 let)</div>
            <div className="card-value">{d.napovedPrihodkov5} mrd €</div>
          </div>
          <div className="card">
            <div className="card-title">Napoved dolga 5 let</div>
            <div className="card-value neutral">{d.napovedDolga5} % BDP</div>
          </div>
          <div className="card">
            <div className="card-title">Napoved dolga 10 let</div>
            <div className="card-value negative">{d.napovedDolga10} % BDP</div>
          </div>
        </div>
      </div>

      <div className="section-block">
        <h3>Zemljevid investicij po regijah (prototip)</h3>
        <div className="map-placeholder">
          Zemljevid Slovenije z investicijami po regijah – prikaz bo dodan v
          naslednji fazi
        </div>
      </div>
    </>
  )
}
