# Páldi Tamás Barber — weboldal

Prémium férfi barber landing page Next.js 16 + Tailwind v4 + Framer Motion.

**Látványterv:** `LATVANYTERV.md` (v1) + `LATVANYTERV_v2.md` (delta)
**Tech terv:** `TERV.md` (v1) + `TERV_v2.md` (delta)
**Piackutatás:** `RESEARCH.md`

---

## Setup — lokális fejlesztés

```powershell
# 1) Dependencies telepítés (ha node_modules nincs)
pnpm install

# 2) .env.local létrehozása (.env.example alapján)
Copy-Item .env.example .env.local
# majd edit: Resend kulcs, Cal.com username, social linkek

# 3) Dev server
pnpm dev
# → http://localhost:3000
```

## Scriptek

```powershell
pnpm dev      # dev server (Turbopack)
pnpm build    # production build
pnpm start    # production server
pnpm lint     # ESLint check
```

## Környezeti változók

Lásd `.env.example`. A legfontosabbak:
- `NEXT_PUBLIC_SITE_URL` — prod URL
- `NEXT_PUBLIC_BOOKING_PROVIDER` — `cal` | `reservio` | `fresha`
- `NEXT_PUBLIC_CAL_USERNAME` — Cal.com felhasználónév
- `RESEND_API_KEY` — email küldéshez (opcionális)

## Deploy — Vercel

1. GitHub repo létrehozás + push
2. [vercel.com](https://vercel.com) → Import Git Repository
3. Env változók beírása a Vercel dashboard-on
4. Deploy — automata preview + prod

## Struktúra

```
app/
  layout.tsx            # Root layout — fonts, JSON-LD, Analytics
  page.tsx              # Főoldal — minden szekció
  foglalas/page.tsx     # Cal.com embed
  sitemap.ts
  robots.ts
  llms.txt/route.ts     # AI-friendly site summary
components/
  layout/               # Navbar, Footer
  sections/             # Hero, Services, Gallery, About, Process, Testimonials, CTA
  ui/                   # Button, Card, SectionTitle, Divider, Reveal, StickyBookingBar
  booking/              # BookingEmbed (provider-switch)
lib/
  site.ts               # Brand constants
  services.ts           # 4 szolgáltatás
  gallery.ts            # Képek
  testimonials.ts       # Üres array alapból
  booking.ts            # Provider logika
  seo.ts                # Metadata + JSON-LD
public/
  images/               # (placeholder, Unsplash remote URL-ek vannak most)
```

## Credit

Weboldalt készítette: [Rádi László](https://infinityreklam.hu)
