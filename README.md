# drzava.gov.si

Next.js prototip portala države Slovenije z izmišljenimi podatki.

## Zahteve

- Node.js 18+
- npm ali yarn

## Zagon

```bash
npm install
npm run dev
```

Odpri [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Struktura

- **App Router** (`app/`) – layout s stranskim menijem in vsebina po sekcijah
- **Komponente** (`components/`) – Sidebar, HealthBar, grafi (Chart.js)
- **Podatki** (`lib/data.ts`) – izmišljeni mock podatki

### Strani

| Pot | Vsebina |
|-----|---------|
| `/` | Glavna – pozdrav, AI napoved, hitri pregled |
| `/finance` | Finance – proračun, prihodki, dolg, grafi, napovedi |
| `/zdravstvo` | Zdravstvo – kadri, čakalne dobe, napoved |
| `/solstvo` | Šolstvo – učitelji, študentje, medicina |
| `/demografija` | Demografija – rojstva, smrti, napoved prebivalstva |
| `/trg-dela` | Trg dela – zaposlenost, plače, manjkajoči poklici |
| `/stanovanja` | Stanovanja in nepremičnine |
| `/energija` | Energija |
| `/promet` | Promet |
| `/okolje` | Okolje |
| `/digitalna` | Digitalna država |

Na vrhu je **semafor stanja države** (🟢🟡🔴) po sekcijah. Vsi podatki so izmišljeni.
