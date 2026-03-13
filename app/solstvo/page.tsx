import { MOCK } from '@/lib/data'
import { SolstvoChart } from '@/components/charts/SolstvoChart'

export default function SolstvoPage() {
  const d = MOCK.solstvo

  return (
    <>
      <h1 className="page-title">Šolstvo</h1>
      <p className="page-subtitle">
        Učitelji, učenci, študentje in usmeritve
      </p>

      <div className="kpi-row">
        <div className="kpi-item">
          <span className="label">Učitelji</span>
          <div className="value">{d.ucitelji.toLocaleString('sl-SI')}</div>
        </div>
        <div className="kpi-item">
          <span className="label">Učenci</span>
          <div className="value">{d.ucenci.toLocaleString('sl-SI')}</div>
        </div>
        <div className="kpi-item">
          <span className="label">Študentje</span>
          <div className="value">{d.studenti.toLocaleString('sl-SI')}</div>
        </div>
        <div className="kpi-item">
          <span className="label">Diplomanti na leto</span>
          <div className="value">{d.diplomantiLeto.toLocaleString('sl-SI')}</div>
        </div>
        <div className="kpi-item">
          <span className="label">Ostane v državi</span>
          <div className="value">{d.ostaneVDrzavi} %</div>
        </div>
      </div>

      <div className="section-block">
        <h3>Diplomanti: ostanejo v državi / odidejo v tujino</h3>
        <SolstvoChart />
      </div>

      <div className="section-block">
        <h3>Medicina: od študenta do zdravnika</h3>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Kazalnik</th>
                <th>Število</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Študentov medicine</td>
                <td>{d.studentiMedicine}</td>
              </tr>
              <tr>
                <td>Dejansko postane zdravnik</td>
                <td>{d.postaneZdravnik}</td>
              </tr>
              <tr>
                <td>Odide v tujino</td>
                <td>{d.odideVTujino}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
