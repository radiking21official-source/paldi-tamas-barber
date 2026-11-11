# Páldi Tamás Barber — Implementációs terv v1

**Dátum:** 2026-11-11
**Repo mappa:** `E:\weboldalak\tamas-barber\`
**Látványterv:** `LATVANYTERV.md` (v1 jóváhagyva)

---

## 1. Safe defaults (6 nyitott kérdésre)

A user "mehet csináld" jóváhagyása alapján a nyitott kérdésekre a következő safe default-okat használom. Bármelyik változtatható később, csak jelezned kell.

| Kérdés | Default | Indoklás |
|---|---|---|
| Fotó-anyag | Unsplash stock (B&W, desaturated) — placeholder-ként, cserélhető | Van nélküle is elindulni |
| Időpontfoglalás | **Cal.com** — iframe-embed `/foglalas` route-on | Ingyen, EU hosted, mobil-barát |
| Black Barber link | Megemlítés + térképpont (ha van cím) — külső link egyelőre `#` | Tamással egyeztetendő |
| Domain | Placeholder `paldi-tamas-barber.hu` a configban — bármikor cserélhető | Vercel subdomain is OK indulásnak |
| Social | Placeholder IG + FB linkek — later config | Tamástól bekérjük |

**Tamás-tól kell majd** (Phase 3 előtt):
- 1-3 saját portré-fotó (JPG/HEIC, min. 1200px)
- Cal.com account létrehozás + public slug (pl. `cal.com/paldi-tamas`)
- Instagram / Facebook üzleti profil link
- Opcionális: Black Barber cím + szalon weboldal URL ha van

---

## 2. Tech stack

**Frontend:**
- **Next.js 15.x** (App Router)
- **React 19**
- **TypeScript** strict
- **Tailwind CSS v4** (custom tokens a brand-színekhez)
- **Fonts:** `next/font/google` — Playfair Display + Inter
- **Animations:** Framer Motion (scroll-triggered fade, hero parallax)
- **Icons:** Lucide React (razor, scissors, map-pin, phone, instagram, facebook)

**Backend / integrációk:**
- **Resend** — kapcsolatfelvétel email (`/api/contact`)
- **Cal.com embed** — `@calcom/embed-react` komponens
- **Vercel Analytics** + opcionálisan Speed Insights
- **Sharp** — kép-optimalizáció build time
- (SEO) **schema.org JSON-LD** inline minden releváns oldalon

**Deploy:**
- **Vercel** (Hobby ingyen, később Pro ha Analytics Plus kell)
- **GitHub repo:** `infinitygraphicskft-gif/paldi-tamas-barber` (javaslat) — vagy a user választ másikat
- CI: Vercel preview minden PR-hoz, main → production

**NEM használunk (direkt kihagyva):**
- ❌ Cookie banner library (nincs tracking cookie a MVP-ben)
- ❌ CMS (Sanity/Strapi) — statikus tartalom elég egy landing page-hez
- ❌ Komplex form library — natív HTML + Zod validáció elég

---

## 3. Fájl-struktúra

```
E:\weboldalak\tamas-barber\
├── .env.example              # Resend, Cal.com username, Molino webhook...
├── .gitignore
├── .prettierrc
├── CLAUDE.md                 # projekt-specifikus utasítások
├── LATVANYTERV.md            # vizuális koncepció (már megvan)
├── TERV.md                   # ez a fájl
├── README.md                 # setup, local dev, deploy
├── eslint.config.mjs
├── next.config.ts            # image domains (Unsplash), redirects
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts        # brand-tokens
├── tsconfig.json
│
├── app/
│   ├── layout.tsx            # fonts, body, GA/Vercel Analytics
│   ├── page.tsx              # főoldal — minden szekció egy komponens
│   ├── globals.css           # Tailwind + brand grain-overlay
│   ├── not-found.tsx         # 404 — black + "Nincs ilyen oldal" + home link
│   ├── sitemap.ts            # auto sitemap
│   ├── robots.ts             # AI-bot allow
│   │
│   ├── foglalas/
│   │   └── page.tsx          # Cal.com iframe embed, teljes képernyőn
│   │
│   └── api/
│       └── contact/
│           └── route.ts      # Resend form handler (ha szükséges mellékleti kapcsolat)
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx        # sticky, mobil hamburger, "Foglalás" sticky CTA
│   │   └── Footer.tsx
│   │
│   ├── sections/
│   │   ├── Hero.tsx          # 100vh, portré BG, parallax cím
│   │   ├── Services.tsx      # 4 szolgáltatás-kártya
│   │   ├── Gallery.tsx       # masonry 6-8 kép
│   │   ├── About.tsx         # Tamás bemutatkozás 2-oszlopos
│   │   └── CTA.tsx           # középponti foglalás-sáv
│   │
│   ├── ui/
│   │   ├── Button.tsx        # primary (gold), secondary (ghost)
│   │   ├── Card.tsx          # service card wrapper
│   │   ├── SectionTitle.tsx  # eyebrow + H2 + lead
│   │   ├── Divider.tsx       # ornamental réz-vonal
│   │   └── Reveal.tsx        # scroll-triggered fade wrapper
│   │
│   └── booking/
│       └── CalEmbed.tsx      # Cal.com embed komponens
│
├── lib/
│   ├── site.ts               # brand constants (név, email, telefon, város)
│   ├── services.ts           # 4 szolgáltatás TypeScript array
│   ├── gallery.ts            # galéria kép-meta (alt, src, aspect)
│   └── seo.ts                # közös SEO helper (title, OG, schema.org generátor)
│
├── public/
│   ├── images/
│   │   ├── hero-portrait.jpg
│   │   ├── about-tamas.jpg
│   │   ├── gallery-1.jpg … gallery-8.jpg
│   │   ├── og-image.jpg      # 1200×630 social preview
│   │   └── favicon-source.svg
│   ├── favicon.ico
│   ├── apple-icon.png
│   ├── icon.png              # Next.js auto-icon
│   ├── llms.txt              # AI-friendly site summary
│   └── robots.txt            # (ha robots.ts nem elég, backup)
│
└── docs/
    ├── BRAND_GUIDELINES.md   # színek, tipo, do-and-don't (Tamásnak is érthetően)
    └── DEPLOYMENT.md         # Vercel + domain setup
```

---

## 4. Brand tokens (Tailwind config)

```ts
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0A0A0A',
          secondary: '#1A1715',
          elevated: '#242020',
        },
        text: {
          primary: '#F5F1EA',
          secondary: '#B8ADA0',
          muted: '#7A7066',
        },
        accent: {
          gold: '#C9A96E',
          'gold-hover': '#D4B57A',
          'gold-muted': '#8A7449',
          wine: '#5C1F1F',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        barber: '0.3em',  // uppercase eyebrow / tagline
      },
    },
  },
}
```

---

## 5. Környezeti változók (`.env.example`)

```bash
# Site URL (prod)
NEXT_PUBLIC_SITE_URL=https://www.paldi-tamas-barber.hu

# Cal.com public slug (pl. paldi-tamas)
NEXT_PUBLIC_CAL_USERNAME=paldi-tamas
NEXT_PUBLIC_CAL_EVENT_SLUG=foglalas  # vagy "haircut" ha Cal.com-on így hívják

# Resend (kapcsolatfelvétel email ha mellékelt form kell)
RESEND_API_KEY=re_xxx
CONTACT_TO=info@paldi-tamas-barber.hu
CONTACT_FROM=noreply@paldi-tamas-barber.hu

# Social (meta tags / footer link)
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/paldi_tamas_barber
NEXT_PUBLIC_FACEBOOK_URL=https://facebook.com/paldi.tamas.barber

# Analytics (opcionális)
NEXT_PUBLIC_GA_ID=
```

---

## 6. SEO csomag

**Minden oldal:**
- `<title>` max 60 kar — pl. `Páldi Tamás Barber — Férfi hajvágás és szakállformázás | Black Barber Budapest`
- `<meta name="description">` max 160 kar
- Open Graph + Twitter card
- Canonical URL
- `hreflang="hu"` (csak magyar az MVP-ben)

**Főoldal JSON-LD:**
- `@type: LocalBusiness` (subtype: `HairSalon` vagy `BarberShop`)
- `name`, `address` (Black Barber), `telephone`, `priceRange: "4000 Ft – 10000 Ft"`
- `openingHours` (Tamás megadja)
- `founder` → `Person` (Páldi Tamás)
- `hasOfferCatalog` → a 4 szolgáltatás `Offer`-ként
- `knowsAbout`: ["férfi hajvágás", "szakállformázás", "barber", "klasszikus borbély"]

**Kiegészítő:**
- `/sitemap.xml` (Next.js `sitemap.ts`)
- `/robots.ts` — explicit allow GPTBot, ChatGPT-User, ClaudeBot, PerplexityBot, Google-Extended
- `/llms.txt` route — AI-friendly oldalösszefoglaló
- Favicon + Apple icon + 1200×630 OG image

---

## 7. Cal.com integráció — részletek

**Két beépítési opció:**

**A) `/foglalas` route — teljes képernyős embed**
```tsx
// app/foglalas/page.tsx
import { getCalApi } from "@calcom/embed-react";
// vagy egyszerűbben: <iframe src="https://cal.com/${username}/${event}" />
```
A hero + CTA gombok ide navigálnak (`<Link href="/foglalas">`).

**B) Inline modal a főoldalon** — opcionális, ha a user a scroll nélkül azonnali foglalást akar

**Default: A opció** — tisztább, jobb SEO, nincs JS-függő modal.

**Cal.com beállítások Tamásnak:**
1. Regisztráció `cal.com` — ingyen fiók, EU region
2. Event type létrehozás: "Férfi hajvágás" — 45 perc, 6 700 Ft (tájékoztató)
3. Multiple event-types opcionális (Haj+szakáll 10 000, Gépi 4 000, stb.) — a kártyák pontosan ezekre linkelnek
4. Working hours beállítás (szalon nyitva kor)
5. Buffer time 15 perc (takarítás)
6. Branding: fekete téma a Cal.com-on belül is (Premium feature, de ingyen tier is elég)
7. Webhook (opcionális): email értesítés Tamásnak + kalendár szinkronizáció

---

## 8. Komponens-fa (vizuális)

```
<RootLayout>                           // app/layout.tsx
  ├── <Navbar />                       // sticky header
  └── <main>
       <page.tsx>
         ├── <Hero />                  // fullscreen
         ├── <Services />              // 4 kártya
         ├── <Gallery />               // masonry
         ├── <About />                 // 2-oszlopos
         └── <CTA />                   // középponti
       </page.tsx>
  └── <Footer />
</RootLayout>
```

Minden `<section>`-t egy `<Reveal>` wrapper burkol scroll-triggered fade-hez.

---

## 9. Lépésről lépésre build-sorrend

### Fázis 1 — Scaffold (1-2 óra)
1. `pnpm dlx create-next-app@latest tamas-barber-app --typescript --tailwind --app --src-dir=false --eslint`
   (Egyszerűbb: Rádi László futtatja lokálban.)
2. Tailwind config: brand tokens beírása
3. Fonts bekötése (Playfair Display + Inter) `app/layout.tsx`-ben
4. `lib/site.ts` + `lib/services.ts` konstansok
5. Globals.css: háttér-grain overlay, alap body szín

### Fázis 2 — UI komponensek (2-3 óra)
6. `<Button>`, `<Card>`, `<SectionTitle>`, `<Divider>`, `<Reveal>` ui komponensek
7. `<Navbar>` + `<Footer>` layout komponensek
8. `components/sections/*` 5 szekció-komponens (üres szkeletonokkal elsőre)

### Fázis 3 — Tartalom + fotók (1-2 óra)
9. Hero kép + 8 galéria kép (Unsplash placeholder-ekkel indulunk)
10. Tartalmak (services array, about text) `lib/`-ből
11. Cal.com embed komponens + `/foglalas` route
12. Linkek bekötése (hero CTA, szolgáltatás-kártyák, nagy CTA mind `/foglalas`-ra)

### Fázis 4 — SEO + metadata (1 óra)
13. `app/layout.tsx` metadata API teljes feltöltés (OG, Twitter, canonical)
14. `app/sitemap.ts` + `app/robots.ts`
15. Főoldal JSON-LD inline script (LocalBusiness + Services + Person)
16. `public/llms.txt` route

### Fázis 5 — Deploy (30 perc)
17. GitHub repo létrehozás + első push (`main` branch)
18. Vercel account connect → import repo
19. Env variables beírása Vercel-en (Resend + Cal.com username)
20. Deploy → Vercel subdomain teszt
21. Custom domain bekötése (ha megvan) — Vercel DNS

### Fázis 6 — Finomítás (1-2 óra, user tesztelés után)
22. Animációk tuningja (Framer Motion scroll-timings)
23. Mobile audit (sticky CTA, touch targets)
24. Lighthouse-audit (cél: 90+ minden kategóriában)
25. OG image generálás (saját, nem Unsplash)

**Teljes becslés:** 8-12 fejlesztői óra az alap teljes verzióra.

---

## 10. Költségek (havi)

| Elem | Ár | Megjegyzés |
|---|---|---|
| Vercel Hobby | 0 Ft | Ingyen, elég a landing page-hez |
| Cal.com | 0 Ft | Ingyen tier bőven elég |
| Resend | 0 Ft | 100 email/nap ingyen |
| Domain (ha kell) | ~3 000 Ft/év | .hu domain (RegistryPort / Nic.hu) |
| Vercel Analytics | 0 Ft | Alapcsomag ingyen |
| **ÖSSZE havonta** | **~0 Ft** | +250 Ft/hó amortizált domain-díj |

**Egyszeri költség:** 0 Ft (ha a domain már megvan) VAGY ~3 000 Ft (új domain reg).

---

## 11. User akciók — mielőtt a kódolás indul

**Mindenképp kell tőled (Rádi László):**
- [ ] GitHub repo név és org megerősítés (`infinitygraphicskft-gif/paldi-tamas-barber`?)
- [ ] Resend API kulcs (az ExtraTable-é is lehet, ha osztozunk)

**Tamástól be kell kérni (nem blocker, placeholder-rel elindulunk):**
- [ ] 1-3 saját portré-fotó + 3-5 munka-fotó
- [ ] Cal.com regisztráció + public slug
- [ ] Instagram + Facebook link
- [ ] Black Barber pontos cím (Google Maps-link)
- [ ] Domain preferencia (paldi-tamas-barber.hu? tamasbarber.hu? paldi-tamas.hu?)
- [ ] Nyitvatartás (JSON-LD-hez + óra blokkoláshoz Cal.com-ban)
- [ ] Telefonszám (ha publikus)

---

## 12. Mit csinál most a Claude Code (következő prompt)

Ha a user "mehet csináld" jóváhagyja ezt a tervet is, a következő Claude Code prompt indulhat:

1. Scaffold a Next.js 15 app-ot (Fázis 1 lépések 1-5)
2. Minden komponens csontváz létrehozása placeholderekkel
3. Services array + about text a `lib/`-ből beillesztve
4. Cal.com embed route + placeholder username
5. Alap SEO + robots.ts + sitemap.ts
6. GitHub repo init + első commit **main-re push NÉLKÜL** (user átnézi)
7. Deploy: `vercel link` instrukció a usernek PowerShell-ben

**Következő prompt-ot a `CLAUDE_CODE_PROMPT.md`-ben tettem le** — azt copy-paste-eli a user Claude Code-ba az `E:\weboldalak\tamas-barber\` mappában.

---

## 13. Rizikók + mitigáció

| Rizikó | Valószínűség | Impakt | Mitigáció |
|---|---|---|---|
| Tamásnak nincs fotó-anyag | Magas | Közepes | Unsplash placeholder → később swap |
| Cal.com-ot nem akarja | Közepes | Közepes | Könnyű swap Bookwize/SimplyBook-ra (1 komponens) |
| Nem tetszik a dark design | Alacsony-közepes | Magas | Már vázoltam 2 alternatívát (minimal/vintage) — gyors újradolgozás |
| Domain nem érhető el | Alacsony | Alacsony | Vercel subdomain először — domain később köthető be |
| Resend SPF/DKIM | Közepes | Közepes | Tamás domain-jéhez tartozó DNS beállítás (standard útmutató) |

---

**Ha jóváhagyod a tervet → futtatom a Claude Code promptot és indul a scaffold. A `CLAUDE_CODE_PROMPT.md` a következő fájl lesz.**
