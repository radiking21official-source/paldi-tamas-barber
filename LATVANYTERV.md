# Páldi Tamás Barber — Látványterv v1

**Dátum:** 2026-11-11
**Repo mappa:** `E:\weboldalak\tamas-barber\`

---

## 🎯 Pozicionálás

**Páldi Tamás** nem egy generikus barber — **prémium, klasszikus, személyre szabott**. A Black Barber szalon kontextusa segít: már van egy kőkemény, markáns brand-háttér. Az új oldal nem konkurál ezzel — **személyes márkát épít Tamás köré**, miközben finoman odatesz a szalonhoz is.

**Három brand-szó:** PRECIZITÁS • STÍLUS • MINŐSÉG — ez marad a tagline tengelye.

---

## 🎨 Vizuális koncepció — "Éjszakai borbélyműhely"

**Alaphangulat:** Félhomályos, prémium, kézműves. Olyan érzés mint egy klasszikus whisky-bár, de barber-eszközökkel. NEM hipster-startup, NEM fotó-stock, NEM pláza-szalon.

### Színpaletta
| Szerep | HEX | Használat |
|---|---|---|
| Elsődleges háttér | `#0A0A0A` — szinte-fekete | fő háttér, nagy felületek |
| Másodlagos háttér | `#1A1715` — melegített fekete | kártyák, szekciók váltása |
| Textus elsődleges | `#F5F1EA` — törtfehér (nem tiszta white) | főszövegek, címek |
| Textus másodlagos | `#B8ADA0` — bézs-szürke | leírások, meta |
| Accent — réz / arany | `#C9A96E` — brushed gold | CTA gombok, árak, ikonok |
| Accent — mély bordó | `#5C1F1F` — opcionális, 2-3 helyen | hover state, kiemelés |

**Miért ezek:** a fekete + brushed gold a klasszikus barber-pole modern értelmezése. A bordó helyettesíti a hagyományos piros csíkot, de érettebb. A törtfehér textúra-érzést ad (nem tiszta digitális).

### Tipográfia
- **Főcím (hero + section title):** `Playfair Display` VAGY `Cormorant Garamond` — serif, elegáns, kicsi "régi mester" érzés
- **Szöveg:** `Inter` vagy `Manrope` — modern sans-serif, tiszta olvashatóság
- **Accent / tagline:** letter-spacing: 0.3em, uppercase — mint egy klasszikus borbély cégtábla
- Hierarchia:
  - Hero cím: 72-96 px, serif, light weight
  - H2: 42-56 px, serif
  - Body: 16-18 px, sans-serif
  - Tagline / eyebrow: 12-14 px, uppercase, letter-spaced

### Textúrák + részletek
- **Noise / grain overlay** a hátteren (5-8% opacity) — filmes érzés
- **Thin hairline borders** réz-színű 1px — kártya-elválasztóknak
- **Nagy fekete+gold ornamentális divider** szekciók között (vékony vízszintes vonal + középen egy borotva-sziluett)
- **Soft shadow** NINCS — éles kontraszt (fekete alapon törtfehér = elég)

### Fotó-stílus (javaslat Tamásnak)
- **Portré fotók**: alulról világítva, részben árnyékban — moody. Ne mosolyogjon, legyen koncentráló, dolgozik.
- **Műhely-fotók**: tárgy-portrék (borotva közelről, fésűk sorban, tükörben a hajvágó), nem wide-angle room shot
- **Ügyfél-fotók**: before/after nem kell, inkább középtávú oldalnézet, elegáns férfi vendéggel
- **Színkorrektúra**: desaturated, warm shadows (barnás árnyak), hidegebb highlight

Ha most nincs ilyen fotó → **stock képek elérhetők (Unsplash: "barbershop", "straight razor"), de azokat is ezzel a desaturated filterrel kell**.

---

## 📐 Oldal-struktúra (scroll sorrend)

### 1. HERO (fullscreen, 100vh)
- Háttér: lassú zoom-effekt nagy fekete-fehér portré fotón (Tamás a szalonban dolgozik)
- Felső overlay: logo (PÁLDI TAMÁS BARBER — serif, nagyban)
- Közép: tagline `PRECIZITÁS • STÍLUS • MINŐSÉG` (uppercase, letter-spaced, réz-arany színű)
- Headline: *"Találd meg a saját stílusod"* (serif, nagy)
- Subline: *"Igényes férfi hajvágás, szakállformázás és klasszikus barber hangulat. Várlak a Black Barber szalonban."*
- CTA: **"FOGLALJ IDŐPONTOT"** — réz-arany gomb, fekete szöveggel, 2px thin border, subtle hover-glow
- Scroll-cue animáció alul

### 2. SZOLGÁLTATÁSOK + ÁRAK
- Szekció eyebrow: `SZOLGÁLTATÁSOK`
- H2: *"Árak"*
- Alcím: "Minőségi munka, személyre szabott megjelenés. Válaszd ki a hozzád illő szolgáltatást."
- **4 kártya grid** (2×2 desktop, 1-oszlop mobil):
  - **Hajvágás** — 6 700 Ft
  - **Haj + szakáll** — 10 000 Ft
  - **Gépi hajvágás** — 4 000 Ft
  - **Szakáll** — 5 000 Ft
- Minden kártya: nagy szolgáltatásnév (serif), vékony rézvonal, ár (réz-arany), "Foglalok →" link
- Hover: kártya finom emelkedés + rézvonal kitolódik

### 3. INSPIRÁCIÓ — BARBER HANGULAT (galéria)
- Eyebrow: `INSPIRÁCIÓ`
- H2: *"Barber hangulat"*
- Alcím: "Néhány hangulatkép — cseréld le őket saját munkáid fotóira."
- **6-8 képes Masonry grid** (különböző magasságú kártyák) — fekete-fehér, moody
- Minden kép hover: enyhe zoom + bronz-overlay
- Mobil: carousel (swipe), 2-3 kép látható

### 4. BEMUTATKOZÁS — Páldi Tamás
- 2 oszlopos szekció (desktop)
- Bal: nagy portré fotó Tamásról (3:4 arányú, fekete-fehér, keretes rézvonallal)
- Jobb:
  - Eyebrow: `BEMUTATKOZÁS`
  - H2: *"Páldi Tamás Barber"*
  - Body: *"4–5 éve foglalkozom barber szakmával. Fontos számomra a precíz, igényes munka, a részletekre való odafigyelés és hogy minden vendég elégedetten távozzon."*
  - Divider
  - Helyszín: **Black Barber** (ikonnal + link a szalon weboldalára, ha van)

### 5. CTA — Időpontfoglalás (középponti szekció)
- Egészen sötét háttér, teljes szélesség
- Eyebrow: `IDŐPONTFOGLALÁS`
- H2 (nagy, central): *"Készen állsz a frissítésre?"*
- Body: "Foglalj időpontot, és találkozzunk a szalonban!"
- CTA: **"FOGLALÁS MOST"** — nagy réz-arany gomb

### 6. FOOTER
- Minimalista fekete sáv
- Bal: logo + `Black Barber • Budapest`
- Közép: Instagram / Facebook link ikonokkal (ha van Tamásnak)
- Jobb: `© 2026 Páldi Tamás Barber`
- Alatta kis sor: `Weboldalt készítette: Rádi László` — rézszín link az infinityreklam.hu-ra

---

## 📱 Reszponzív viselkedés

- **Desktop (1200+)**: nagy hero, 2-oszlopos szolgáltatás-grid, 3-4 oszlopos galéria
- **Tablet (768-1199)**: 2-oszlopos minden, hero 70vh
- **Mobil (<768)**: 1-oszlop minden, hero 90vh fix header-rel, CTA sticky bottom-bar
- **Tap-target min. 44px**, mobil olvasási font-size min. 16px

---

## 🎬 Mikroanimációk (prémium érzés)

- Scroll-triggered fade-in minden szekciónak (NE slide-in, csak opacity 0→1 + 20px eltolás)
- CTA gomb hover: réz-glow + 2px feljebb emelkedik (200ms ease)
- Hero portré lassú (30s) zoom-out ken burns effect
- Scrollolásnál a hero cím finom parallax (half-speed)
- Galéria kép hover: rézszín overlay fade-in (300ms)
- **NINCS** carousel auto-play, NINCS popup, NINCS cookies-flash

---

## 🔌 Integrációs vázlat (már most átgondolandó)

1. **Időpontfoglalás** — kritikus. 3 opció:
   - **A)** Bookwize / SimplyBook / Minutes — magyar foglalórendszerek, iframe-be ágyazva
   - **B)** Cal.com (ingyen self-host vagy EU hosted) — modern, mobile-first, ingyenes
   - **C)** Google Calendar + Resend-email form (ha Tamás még nem tud/akar rendszert)
   - **Javaslatom:** B) Cal.com — ingyen, szép, mobil-barát

2. **Kapcsolatfelvétel email:** Resend (mint az ExtraTable-n) — form submit → email Tamásnak + visszaigazolás az ügyfélnek

3. **Analitika:** Vercel Analytics (ingyenes) + opcionálisan GA4 ha Tamás akar

4. **Fotók / képek:** `public/images/` + Next.js Image optimalizáció

5. **SEO** (következő fázisban): meta + OG + llms.txt + schema.org `LocalBusiness` + `Person`

---

## ✅ Mit szeretnék TŐLED (döntések mielőtt a terv)

1. **Látványterv tetszik?** Dark + réz-arany + serif tipo — vagy inkább valami másat?
2. **Fotó-anyag:** van már Tamásnak saját portré / munka-fotó, vagy stock-tal indulunk?
3. **Időpontfoglalás:** Cal.com OK, vagy már van valami rendszere?
4. **Black Barber viszonya:** csak megemlítjük mint helyszín, vagy aktív link a szalon weboldalára (ha van)?
5. **Domain:** van már (pl. paldi-tamas.hu, tamas-barber.hu), vagy regisztrálnunk kell?
6. **Social media** linkek — van Tamásnak Instagram / Facebook üzleti profil?

---

**Ha a látványterv OK → jön a részletes technikai + implementációs terv** (Next.js 15 setup, komponens-fa, deploy, SEO, Cal.com integráció lépésről lépésre).
</parameter>
