/**
 * Brand constants — Páldi Tamás Barber
 * Minden Tamás-tól függő adat ide — utólag könnyen változtatható.
 */

export const site = {
  name: "Páldi Tamás Barber",
  shortName: "Páldi Tamás",
  tagline: "PRECIZITÁS • STÍLUS • MINŐSÉG",
  slogan: "Találd meg a saját stílusod",
  description:
    "4+ év tapasztalat precíz férfi hajvágásban és szakállformázásban — a Black Barber szalonban, Budapesten.",
  locale: "hu-HU",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.paldi-tamas-barber.hu",

  // Helyszín
  venue: {
    name: "Black Barber",
    city: "Budapest",
    country: "Hungary",
    street: "Páskomliget utca 8.",
    postalCode: "1156",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Black+Barber+P%C3%A1skomliget+utca+8+Budapest",
  },

  // Kapcsolat (placeholder-ek — Tamás adja a valódit)
  contact: {
    email: "info@paldi-tamas-barber.hu",
    phone: "+36 30 884 9706",
  },

  // Nyitvatartás — Tamás adja a valódit
  openingHours: {
    monday: "Zárva",
    tuesday: "10:00 – 20:00",
    wednesday: "10:00 – 20:00",
    thursday: "10:00 – 20:00",
    friday: "10:00 – 20:00",
    saturday: "10:00 – 20:00",
    sunday: "Zárva",
  },

  // Social
  social: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "https://instagram.com/paldi_tamas_barber",
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL ?? "https://facebook.com/paldi.tamas.barber",
  },

  // Készítő credit
  credit: {
    name: "Rádi László",
    url: "https://infinityreklam.hu",
  },
} as const;

export type Site = typeof site;
