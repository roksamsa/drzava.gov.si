import { MOCK } from '@/lib/data'

export default function TrgDelaPage() {
  const d = MOCK.trgDela

  return (
    <>
      <h1 className="page-title">Trg dela</h1>
      <p className="page-subtitle">
        Zaposlenost, plače in manjkajoči poklici
      </p>

      <div className="kpi-row">
        <div className="kpi-item">
          <span className="label">Stopnja zaposlenosti</span>
          <div className="value">{d.stopnjaZaposlenosti} %</div>
        </div>
        <div className="kpi-item">
          <span className="label">Brezposelnost</span>
          <div className="value">{d.brezposelnost} %</div>
        </div>
        <div className="kpi-item">
          <span className="label">Povprečna plača</span>
          <div className="value">{d.povprecnaPlaca} €</div>
        </div>
        <div className="kpi-item">
          <span className="label">Minimalna plača</span>
          <div className="value">{d.minimalnaPlaca} €</div>
        </div>
        <div className="kpi-item">
          <span className="label">Prosta delovna mesta</span>
          <div className="value">{d.prostaMesta.toLocaleString('sl-SI')}</div>
        </div>
      </div>

      <div className="section-block">
        <h3>Manjkajoči poklici</h3>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Poklic</th>
                <th>Št. manjkajočih</th>
              </tr>
            </thead>
            <tbody>
              {d.manjkajociPoklici.map((p) => (
                <tr key={p.poklic}>
                  <td>{p.poklic}</td>
                  <td>{p.st.toLocaleString('sl-SI')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="section-block">
        <h3>Zemljevid manjkajočih poklicev po regijah (prototip)</h3>
        <div className="map-placeholder">
          Mapa Slovenije z manjkajočimi poklici – prikaz bo dodan v naslednji
          fazi
        </div>
      </div>
    </>
  )
}
