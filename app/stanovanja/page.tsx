import { MOCK } from '@/lib/data'

export default function StanovanjaPage() {
  const d = MOCK.stanovanja

  return (
    <>
      <h1 className="page-title">Stanovanja in nepremičnine</h1>
      <p className="page-subtitle">Cene, najemnine in potrebe</p>

      <div className="kpi-row">
        <div className="kpi-item">
          <span className="label">Povprečna cena m²</span>
          <div className="value">{d.cenaM2.toLocaleString('sl-SI')} €</div>
        </div>
        <div className="kpi-item">
          <span className="label">Razmerje plača / stanovanje</span>
          <div className="value">{d.razmerjePlacaStanovanje} let</div>
        </div>
        <div className="kpi-item">
          <span className="label">Novogradnje (letno)</span>
          <div className="value">{d.novogradnjeLeto.toLocaleString('sl-SI')}</div>
        </div>
        <div className="kpi-item">
          <span className="label">Prazna stanovanja</span>
          <div className="value">{d.praznaStanovanja.toLocaleString('sl-SI')}</div>
        </div>
        <div className="kpi-item">
          <span className="label">Povprečna najemnina</span>
          <div className="value">{d.povprecnaNajemnina} €</div>
        </div>
      </div>

      <div className="section-block">
        <h3>Napoved</h3>
        <div className="card">
          <div className="card-title">Potrebna stanovanja do 2035</div>
          <div className="card-value">{d.potrebnoDo2035.toLocaleString('sl-SI')}</div>
          <div className="card-note">
            Na podlagi demografskih napovedi in trendov
          </div>
        </div>
      </div>
    </>
  )
}
