# Páldi Tamás Barber — Implementációs terv v2 (delta v1→v2)

**Dátum:** 2026-11-11
**Alap:** `TERV.md` v1 (minden változatlan, kivéve amit itt felsorolok)
**Forrás:** `RESEARCH.md` + `LATVANYTERV_v2.md`

---

## Mi MARAD v1-ből

- Teljes tech stack: Next.js 15 + React 19 + TypeScript strict + Tailwind v4 + Framer Motion
- Resend, Cal.com embed, Vercel Analytics
- Fájl-struktúra (app/, components/, lib/, public/)
- Brand tokens (Tailwind config)
- `.env.example` szerkezet
- SEO csomag (sitemap, robots, llms.txt, JSON-LD LocalBusiness/HairSalon)
- Deploy pipeline: GitHub + Vercel

## Mi VÁLTOZIK v1-hez képest

### 1. BookingEmbed provider-switch
- v1: `components/booking/CalEmbed.tsx` — fix Cal.com
- v2: `components/booking/BookingEmbed.tsx` — props: `provider: "cal" | "reservio" | "fresha"`, `username`, `eventSlug`
- Switch-case a provider szerint különböző iframe `src`-t generál
- Default marad: `provider="cal"`, de Tamás majd egy soros config-change-el átválthat Reservióra
- Indok: a magyar piac Cal.com-ot nem használ. Fresha/Reservio az iparági standard. Ez 1 óra extra fejlesztés, később mentesít egy teljes refaktor-tól.

### 2. Új szekció komponens: `components/sections/Process.tsx`
- "HOGYAN DOLGOZOM" szekció — 4 lépéses icon-list
- Ikonok (lucide-react): `MessageCircle` (konzultáció), `Scissors` (hajvágás), `Beard` (szakáll — ha nincs, `UserRound`), `Check` (elégedettség)
- Elhelyezés `app/page.tsx`-ben: `<About />` után, `<CTA />` előtt
- Reveal wrapperbe becsomagolva, mint a többi

### 3. Új UI elem: `components/ui/StickyBookingBar.tsx`
- Mobil-only (`md:hidden`), bottom fixed, full-width, gold BG
- Props: `href` (default `/foglalas`), `label` (default "Foglalj időpontot")
- Fade-in akkor, amikor a hero-szekció kiscrolloz
- IntersectionObserver vagy Framer Motion useScroll

### 4. Új opcionális adatstruktúra: `lib/testimonials.ts`
- `export const testimonials: Testimonial[] = []` — üres array alapból
- Ha Tamás vendég-véleményeket ad, feltölthető
- Komponens `components/sections/Testimonials.tsx` renderel egy szekciót CSAK akkor, ha `testimonials.length > 0`
- Indok: tiszta on/off kapcsoló, placeholder-ek nélkül

### 5. Hero subline + tartalom frissítés
- `lib/site.ts` / `lib/content.ts` — hero subline átírva:
  - v1: `"Igényes férfi hajvágás, szakállformázás..."`
  - v2: `"4+ év tapasztalat precíz hajvágásban és szakállformázásban. Minden vendégnek a saját stílusa — a Black Barber szalonban."`

### 6. Lighthouse prioritás: képek
- A WebFetch-eknél látszott: magyar barber-oldalak lassúak (sok WordPress WPForms + unoptimized image). Mi ne essünk ebbe:
  - Minden kép Next.js `<Image>` komponenssel (automatikus AVIF/WebP + responsive srcset)
  - Hero kép `priority` prop
  - Galéria képek `loading="lazy"` + blur placeholder
  - Unsplash URL-eket NE direktben használjuk — letöltjük `public/images/`-be build előtt (dev stage OK, de prod előtt lokalizálva)

---

## Új fájl-struktúra adalékok (v1 + ez)

```
E:\weboldalak\tamas-barber\
├── ... (v1 változatlan)
│
├── components/
│   ├── booking/
│   │   └── BookingEmbed.tsx          # ÚJ (v1 CalEmbed helyett)
│   ├── sections/
│   │   ├── Process.tsx               # ÚJ
│   │   └── Testimonials.tsx          # ÚJ (opcionális render)
│   └── ui/
│       └── StickyBookingBar.tsx      # ÚJ
│
├── lib/
│   └── testimonials.ts               # ÚJ (üres array alapból)
│
├── RESEARCH.md                        # ÚJ (ez a kutatás)
├── LATVANYTERV.md                     # v1 (változatlan)
├── LATVANYTERV_v2.md                  # ÚJ (delta)
├── TERV.md                            # v1 (változatlan)
└── TERV_v2.md                         # ÚJ (delta)
```

## Új env változók

```bash
# BookingEmbed provider választás (cal | reservio | fresha)
NEXT_PUBLIC_BOOKING_PROVIDER=cal
NEXT_PUBLIC_RESERVIO_USERNAME=      # ha reservio
NEXT_PUBLIC_FRESHA_SLUG=            # ha fresha
```

## Idő-becslés frissítve

| Fázis | v1 becslés | v2 becslés | Delta |
|---|---|---|---|
| Fázis 1 Scaffold | 1-2 ó | 1-2 ó | — |
| Fázis 2 UI | 2-3 ó | 2.5-3.5 ó | +0.5 (StickyBar, BookingEmbed switch) |
| Fázis 3 Content | 1-2 ó | 1.5-2 ó | +0.5 (Process szekció + testimonials off-state) |
| Fázis 4 SEO | 1 ó | 1 ó | — |
| Fázis 5 Deploy | 0.5 ó | 0.5 ó | — |
| Fázis 6 Finomítás | 1-2 ó | 1-2 ó | — |
| **ÖSSZESEN** | **6-10 ó** | **7-11 ó** | **+1 ó** |

---

Minden más v1 szerint marad. Bármi itt nincs említve = v1 irányadó.
