import type { Metadata } from "next";
import { site } from "./site";
import { services, priceRange } from "./services";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Férfi hajvágás és szakállformázás | Black Barber Budapest`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: "Páldi Tamás" }],
  creator: site.credit.name,
  publisher: site.name,
  keywords: [
    "férfi hajvágás Budapest",
    "barber Budapest",
    "szakállformázás",
    "borbély Budapest",
    "Páldi Tamás",
    "Black Barber",
    "prémium barber",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.slogan}`,
    description: site.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${site.name} — ${site.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.slogan}`,
    description: site.description,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

/** JSON-LD — LocalBusiness / HairSalon + Person + Offers */
export function buildJsonLd() {
  const openingHoursSpec = [
    { day: "Tuesday", range: site.openingHours.tuesday },
    { day: "Wednesday", range: site.openingHours.wednesday },
    { day: "Thursday", range: site.openingHours.thursday },
    { day: "Friday", range: site.openingHours.friday },
    { day: "Saturday", range: site.openingHours.saturday },
  ]
    .filter((d) => d.range && !d.range.toLowerCase().includes("zárva"))
    .map((d) => {
      const [opens, closes] = d.range.split("–").map((s) => s.trim());
      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: `https://schema.org/${d.day}`,
        opens,
        closes,
      };
    });

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "HairSalon"],
        "@id": `${site.url}#business`,
        name: site.name,
        description: site.description,
        url: site.url,
        telephone: site.contact.phone || undefined,
        email: site.contact.email,
        priceRange: priceRange.label,
        image: `${site.url}/og-image.jpg`,
        address: {
          "@type": "PostalAddress",
          addressLocality: site.venue.city,
          addressCountry: "HU",
          streetAddress: site.venue.street || undefined,
          postalCode: site.venue.postalCode || undefined,
        },
        openingHoursSpecification: openingHoursSpec,
        founder: {
          "@type": "Person",
          "@id": `${site.url}#founder`,
          name: "Páldi Tamás",
          jobTitle: "Barber",
          worksFor: { "@id": `${site.url}#business` },
          knowsAbout: [
            "férfi hajvágás",
            "szakállformázás",
            "klasszikus borbély",
            "fade hajvágás",
          ],
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Szolgáltatások",
          itemListElement: services.map((s) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: s.name,
              description: s.description,
            },
            price: s.priceFt,
            priceCurrency: "HUF",
          })),
        },
        sameAs: [site.social.instagram, site.social.facebook].filter(Boolean),
      },
    ],
  };
}

/** Egy szolgáltatás strukturált adat (belső használatra, ha kell) */
export function serviceJsonLd(serviceId: string) {
  const s = services.find((svc) => svc.id === serviceId);
  if (!s) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    description: s.description,
    provider: { "@id": `${site.url}#business` },
    offers: {
      "@type": "Offer",
      price: s.priceFt,
      priceCurrency: "HUF",
    },
  };
}
