# 🚀 Claude Code prompt — Páldi Tamás Barber scaffold

**Hogyan használd:**
1. Nyiss Claude Code-ot (VS Code extension vagy `claude` CLI)
2. `cd E:\weboldalak\tamas-barber`
3. Új Claude Code session
4. Paste-eld be a lenti promptot
5. Enter → végigviszi a scaffold-ot

---

## A PROMPT (ezt másold be)

```
# Páldi Tamás Barber — Next.js 15 scaffold

## Kontextus
Egy Dispatch orchestrator sessionben megbeszéltük a látványtervet és a tech-tervet.
Két dokumentum a mappában:
- LATVANYTERV.md — vizuális koncepció (dark + brushed gold + serif)
- TERV.md — implementációs terv (tech stack, fájl-struktúra, fázisok)

MINDKETTŐT OLVASD EL ELŐSZÖR, aztán indulj.

A projekt új, üres. Scaffoldolni kell egy Next.js 15 App Router + TS + Tailwind v4 projektet
a TERV.md 3. szekciójában leírt fájl-struktúrával.

## Feladat — Fázis 1 + 2 + 3 egyben (scaffold + UI csontváz + tartalom)

### 1) Scaffold
- cd E:\weboldalak\tamas-barber
- pnpm create next-app@latest . --typescript --tailwind --app --eslint --no-src-dir --import-alias "@/*"
  (ha pnpm nincs, használj npm-et)
- Package install végén dependency-k hozzáadása:
  - framer-motion
  - lucide-react
  - @calcom/embed-react
  - resend
  - zod
  - @vercel/analytics

### 2) Brand tokens — Tailwind config
A TERV.md 4. szekció szerint pontosan illeszd be a színeket, fontokat, letter-spacing-et a
tailwind.config.ts-be.

### 3) Fonts bekötése
app/layout.tsx-ben next/font/google:
- Playfair Display (weight: 400, 500, 600)
- Inter (weight: 400, 500, 600, 700)
CSS változókba: --font-playfair, --font-inter

### 4) lib/ konstansok
- lib/site.ts — a brand constants (név, email placeholder, telefon placeholder, város=Budapest,
  Black Barber mint helyszín, URL placeholder)
- lib/services.ts — 4 szolgáltatás (Hajvágás 6700, Haj+szakáll 10000, Gépi 4000, Szakáll 5000)
  TypeScript array-ben, mindegyiknek id + name + price + description + calEventSlug
- lib/gallery.ts — 8 placeholder Unsplash URL (barbershop/straight razor keresésből), alt
  szöveggel. Mindegyik /images/gallery-N.jpg-re mutat a végén, az Unsplash URL-eket tedd
  TODO kommenttel (letöltés később)
- lib/seo.ts — buildMetadata() + buildJsonLd() helper (LocalBusiness + Services + Person)

### 5) UI komponensek — components/ui/
- Button.tsx (variants: primary gold, secondary ghost)
- Card.tsx
- SectionTitle.tsx (eyebrow uppercase + H2 serif + optional lead)
- Divider.tsx (vékony réz vonal, opcionálisan középen ikonnal)
- Reveal.tsx (Framer Motion scroll-triggered fade, opacity 0→1 + 20px translateY)

### 6) Layout komponensek — components/layout/
- Navbar.tsx — sticky, backdrop-blur, mobil hamburger menu, jobb oldalon "Foglalás" primary
  gold gomb. Scrolláláskor háttér fade-in sötét
- Footer.tsx — minimalista, 3 oszlop (brand+helyszín / social links / copyright + Rádi László
  credit infinityreklam.hu linkkel)

### 7) Szekció komponensek — components/sections/
- Hero.tsx — 100vh, placeholder BG image Unsplash-ről (barbershop dark moody), overlay 70%
  opacity. Benne: eyebrow "PRECIZITÁS • STÍLUS • MINŐSÉG" gold uppercase letter-spaced,
  H1 serif "Találd meg a saját stílusod", subline, primary gold CTA "FOGLALJ IDŐPONTOT" → /foglalas
- Services.tsx — eyebrow SZOLGÁLTATÁSOK + H2 "Árak" + lead. 4 Card grid 2×2 desktop, 1-col
  mobil. Minden Card: szolgáltatás név (serif), vékony gold divider, ár (gold nagyban),
  "Foglalok →" link /foglalas-ra
- Gallery.tsx — eyebrow INSPIRÁCIÓ + H2 "Barber hangulat" + lead "Néhány hangulatkép...".
  CSS Grid masonry (grid-template-rows: masonry fallback: grid-auto-rows + aspect-ratio).
  8 kép Unsplash-ről (placeholder). Hover: zoom + gold tint overlay.
  Mobil: horizontal scroll snap carousel
- About.tsx — eyebrow BEMUTATKOZÁS + 2-oszlopos (desktop). Bal: nagy portré kép gold border.
  Jobb: H2 "Páldi Tamás Barber", body text a TERV.md szerint, divider, "Helyszín: Black Barber"
  ikonnal (MapPin)
- CTA.tsx — darker bg, centered, eyebrow IDŐPONTFOGLALÁS + H2 nagy "Készen állsz a frissítésre?",
  body, primary gold nagy gomb "FOGLALÁS MOST" → /foglalas

### 8) app/page.tsx
Import mind az 5 szekció komponenst, mindegyiket <Reveal> wrapperbe burkold.

### 9) app/layout.tsx
- Metadata export (title template, description, OG, Twitter, canonical)
- JSON-LD inline script a layout <head>-be a buildJsonLd() helperrel
- Vercel Analytics bekötés
- body bg-primary text-text-primary font-sans

### 10) app/foglalas/page.tsx
Teljes screen width, dark bg, középen container. Cím: "Foglalj időpontot". Alatta
<CalEmbed /> komponens iframe-mel.

### 11) components/booking/CalEmbed.tsx
Props: username, eventSlug (optional)
Egyszerű iframe-embed: <iframe src="https://cal.com/${username}/${eventSlug ?? ''}"
style="width: 100%; min-height: 800px; border: 0" />
Opcionálisan Cal.com embed script is OK, de MVP-nek iframe egyszerűbb.

### 12) SEO fájlok
- app/sitemap.ts — minden route-ra (/, /foglalas)
- app/robots.ts — allow /, plusz explicit allow user-agent-ek: GPTBot, ChatGPT-User,
  OAI-SearchBot, ClaudeBot, anthropic-ai, PerplexityBot, Perplexity-User, Google-Extended,
  CCBot, Applebot-Extended
- public/llms.txt route — AI-friendly oldalösszefoglaló (app/llms.txt/route.ts)

### 13) Globals.css
Tailwind base + custom:
- body: subtle grain overlay (SVG noise filter CSS)
- gold hover glow utility class

### 14) .env.example
A TERV.md 5. szekciójának tartalmával

### 15) README.md
- Rövid projekt leírás
- Setup lépések (pnpm install, pnpm dev)
- Env változók
- Deploy Vercel

### 16) .gitignore (Next.js default + .env.local)

### 17) git init + első commit
- git init
- git add .
- git commit -m "feat: initial Next.js 15 scaffold - Paldi Tamas Barber landing page"
- NE push még — a user átnézi előbb

## RIPORT a végén
- Fájlok száma + fő struktúra fa
- pnpm install sikeres-e
- pnpm dev elindul-e lokálban (http://localhost:3000 válaszol?)
- Lighthouse quick check (ha tudod futtatni)
- Mit vár a user-től (Rádi László): GitHub repo név, Resend kulcs, Cal.com username,
  fotók, domain

## SZABÁLYOK
- NE commit-olj .env-t vagy valódi kulcsot
- NE push GitHub-ra, user átnézi előbb
- Kis commit-sorozat OK (egy fázisonként), vagy egy nagy "feat: scaffold" OK — te döntsd el
- Ha egy dolog nem világos → kérdezz vissza a usertől, ne találj ki brand-dolgot
- Használd a LATVANYTERV.md-t a vizuális döntésekhez (színek, tipo, hangulat)
- Minden szöveg magyarul, kivéve ha az alias/slug URL-barát (pl. foglalas, services)
```

---

## Mi történik végig (összefoglaló)

Ez a Claude Code session:
1. Scaffold-olja a Next.js 15 projektet az `E:\weboldalak\tamas-barber\` üres mappában
2. Felépíti a TERV.md fájl-struktúráját végig
3. Minden szekció-komponenst elkészít placeholder Unsplash képekkel
4. Cal.com `/foglalas` route-ot bedrótol
5. Alap SEO-t + robots-t + sitemap-et beleteszi
6. Lokálban elindítja `pnpm dev`-vel és kipróbálja hogy fut

Utána te átnézed localhost:3000-en, commentelsz ha valamit változtatnál, aztán döntjük el
mikor megy GitHub-ra + Vercel-re.

**Idő:** 60-90 perc Claude Code munka.
