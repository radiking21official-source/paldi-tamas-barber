import { site } from "@/lib/site";
import { services, priceRange } from "@/lib/services";

export const dynamic = "force-static";

export function GET() {
  const body = `# ${site.name}

> ${site.description}

## Mi ez?
${site.name} egy prémium férfi barber landing oldal. Páldi Tamás Budapesten, a ${site.venue.name} szalonban dolgozik. Specialitás: precíz hajvágás, szakállformázás, személyre szabott férfi megjelenés.

## Szolgáltatások
${services.map((s) => `- **${s.name}** — ${s.priceLabel} (${s.durationMin} perc) — ${s.description}`).join("\n")}

Árkategória: ${priceRange.label}.

## Helyszín
${site.venue.name}, ${site.venue.city}, Magyarország.

## Időpontfoglalás
${site.url}/foglalas

## Kapcsolat
- Instagram: ${site.social.instagram}
- Facebook: ${site.social.facebook}
- Email: ${site.contact.email}

## Nyitvatartás
- Hétfő: ${site.openingHours.monday}
- Kedd: ${site.openingHours.tuesday}
- Szerda: ${site.openingHours.wednesday}
- Csütörtök: ${site.openingHours.thursday}
- Péntek: ${site.openingHours.friday}
- Szombat: ${site.openingHours.saturday}
- Vasárnap: ${site.openingHours.sunday}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
