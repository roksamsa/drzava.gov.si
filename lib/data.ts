/**
 * Izmišljeni podatki za prototip portala drzava.gov.si
 */

export const MOCK = {
  user: {
    name: 'Janez',
    surname: 'Novak',
    greeting: 'Živjo',
    subtitle:
      'Preglej stanje države v realnem času. Tukaj so ključni kazalniki in napovedi za Slovenijo.',
  },

  health: {
    finance: 'yellow',
    zdravstvo: 'red',
    solstvo: 'green',
    demografija: 'red',
    'trg-dela': 'green',
    stanovanja: 'yellow',
    energija: 'green',
    promet: 'green',
    okolje: 'yellow',
    digitalna: 'green',
  } as const,

  finance: {
    proracun: [
      { leto: 2020, planirano: 11.2, dejansko: 10.8 },
      { leto: 2021, planirano: 12.1, dejansko: 12.5 },
      { leto: 2022, planirano: 13.0, dejansko: 13.2 },
      { leto: 2023, planirano: 14.2, dejansko: 14.0 },
      { leto: 2024, planirano: 15.1, dejansko: 14.8 },
    ],
    prihodki: [
      { vir: 'DDV', znesek: 4.2, odstotek: 28 },
      { vir: 'Dohodnina', znesek: 2.8, odstotek: 19 },
      { vir: 'Trošarine', znesek: 2.1, odstotek: 14 },
      { vir: 'Socialni prispevki', znesek: 3.5, odstotek: 23 },
      { vir: 'Ostalo', znesek: 2.5, odstotek: 16 },
    ],
    javniDolg: 42.3,
    dolgNaPrebivalca: 19980,
    dolgBdpOdstotek: 70.2,
    cashflowMesečni: 125,
    investicije: 2.8,
    euSredstvaPrejeta: 1.2,
    euSredstvaPorabljena: 0.9,
    napovedDolga5: 78,
    napovedDolga10: 85,
    napovedPrihodkov5: 17.5,
  },

  zdravstvo: {
    zdravniki: 5800,
    potrebnoZdravnikov: 6500,
    medicinskeSestre: 18200,
    pacientiDan: 45000,
    cakalnaDobaPovprecje: 45,
    zasedenostBolnisc: 78,
    operacijeNaDan: 320,
    zdravnikiVPenzijo5: 450,
    zdravnikiVPenzijo10: 1200,
    studiraMedicine: 380,
    napovedManjkajocih2030: 1200,
    cakalneDobe: [
      { storitev: 'Ordinacija ZD', dni: 14 },
      { storitev: 'Specialist', dni: 62 },
      { storitev: 'MR', dni: 89 },
      { storitev: 'Operacija (elektivna)', dni: 120 },
    ],
  },

  solstvo: {
    ucitelji: 28500,
    ucenci: 185000,
    studenti: 95000,
    diplomantiLeto: 22000,
    ostaneVDrzavi: 78,
    studentiMedicine: 420,
    postaneZdravnik: 310,
    odideVTujino: 35,
  },

  demografija: {
    rojstva: 18500,
    smrti: 23500,
    migracijeNeto: 12000,
    prebivalstvo: 2110000,
    napoved2035: 2080000,
    napoved2050: 1980000,
    upokojenci2035: 580000,
    zaposleni2035: 920000,
    razmerjeZaposlenUpokojen: 1.3,
  },

  trgDela: {
    stopnjaZaposlenosti: 74.2,
    brezposelnost: 4.1,
    povprecnaPlaca: 2180,
    minimalnaPlaca: 1253,
    prostaMesta: 28500,
    manjkajociPoklici: [
      { poklic: 'Zdravstveni delavci', st: 1200 },
      { poklic: 'IT specialisti', st: 850 },
      { poklic: 'Gradbeništvo', st: 620 },
      { poklic: 'Gostinstvo', st: 1100 },
      { poklic: 'Vzgojitelji', st: 340 },
    ],
  },

  stanovanja: {
    cenaM2: 2850,
    razmerjePlacaStanovanje: 12.5,
    novogradnjeLeto: 4500,
    praznaStanovanja: 85000,
    povprecnaNajemnina: 580,
    potrebnoDo2035: 95000,
  },

  energija: {
    proizvodnja: 16.2,
    poraba: 14.8,
    uvoz: 2.1,
    izvoz: 3.5,
    obnovljiviOdstotek: 42,
    cenaEnergije: 0.18,
    neodvisnost: 78,
    co2Emisije: 6.2,
  },

  promet: {
    avtocesteMilijardiKm: 8.2,
    javniTransportPotnikov: 125,
    registriranaVozila: 1250000,
    prometneNesrece: 18500,
  },

  okolje: {
    kvalitetaZraka: 72,
    co2Emisije: 6.2,
    recikliranjeOdstotek: 59,
    porabaVode: 145,
    gozdnatost: 58,
  },

  digitalna: {
    digitalnihStoritev: 87,
    uporabnikovEuprave: 1.2,
    papirLetno: 420,
    povprecenCasObdelave: 3.2,
  },
}
