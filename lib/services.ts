/**
 * Szolgáltatások — Páldi Tamás Barber
 * A Black Barber nyilvános árlistája alapján. Tamás egyéni szolgáltatásait
 * indulás előtt érdemes még egyszer visszaigazolni.
 */

export type Service = {
  id: string;
  name: string;
  priceFt: number;
  priceLabel: string;
  description: string;
  durationMin: number;
  calEventSlug?: string;
};

export const services: Service[] = [
  {
    id: "hajvagas",
    name: "Hajvágás",
    priceFt: 6700,
    priceLabel: "6 700 Ft",
    description: "Klasszikus vagy modern férfi hajvágás ollóval és géppel, fazon konzultációval.",
    durationMin: 30,
    calEventSlug: "hajvagas",
  },
  {
    id: "haj-szakall",
    name: "Haj + szakáll",
    priceFt: 10000,
    priceLabel: "10 000 Ft",
    description: "Teljes szolgáltatás — hajvágás, szakállformázás, kontúrozás, meleg törölköző.",
    durationMin: 60,
    calEventSlug: "haj-szakall",
  },
  {
    id: "gepi-hajvagas",
    name: "Gépi hajvágás",
    priceFt: 4000,
    priceLabel: "4 000 Ft",
    description: "Gyors, egy-fokozatú gépi vágás — ha csak egy tiszta, rövid frizura kell.",
    durationMin: 15,
    calEventSlug: "gepi-hajvagas",
  },
  {
    id: "szakall",
    name: "Szakáll",
    priceFt: 5000,
    priceLabel: "5 000 Ft",
    description: "Precíz szakállformázás, kontúrozás, meleg törölköző és utánápolás.",
    durationMin: 30,
    calEventSlug: "szakall",
  },
];

export const priceRange = {
  min: Math.min(...services.map((s) => s.priceFt)),
  max: Math.max(...services.map((s) => s.priceFt)),
  label: "4 000 Ft – 10 000 Ft",
} as const;
