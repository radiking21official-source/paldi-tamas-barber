# Páldi Tamás Barber — Látványterv v2 (delta v1→v2)

**Dátum:** 2026-11-11
**Alap:** `LATVANYTERV.md` v1 (változatlanul érvényes mindenre, ami itt nincs felsorolva)
**Forrás:** `RESEARCH.md` kutatás a top magyar barber oldalakhoz

---

## Mi MARAD v1-ből

- Szín-paletta (dark #0A0A0A + brushed gold #C9A96E + törtfehér #F5F1EA + bordó accent)
- Tipográfia (Playfair Display serif + Inter sans-serif + 0.3em letter-spaced eyebrow)
- Dark + "éjszakai borbélyműhely" koncepció — a kutatás megerősítette: ezzel differenciálunk
- Szekciósorrend: Hero → Szolgáltatások+Árak → Galéria → Bemutatkozás → CTA → Footer
- Grain overlay, hairline borders, thin gold dividers
- Scroll-triggered fade-in, hero ken-burns, CTA hover glow

## Mi VÁLTOZIK v1-hez képest

### 1. Hero — Subline erősítése
- v1 subline: *"Igényes férfi hajvágás, szakállformázás és klasszikus barber hangulat. Várlak a Black Barber szalonban."*
- v2 subline: *"4+ év tapasztalat precíz hajvágásban és szakállformázásban. Minden vendégnek a saját stílusa — a Black Barber szalonban."*
- Indok: a magyar top szalonok mind kiemelik a "több éve dolgozó mesterborbélyok" üzenetet. Ha ez már a Hero-ban megvan, hitelesebb.

### 2. Hero — Fotó-kompozíció
- v1 javaslat: nagy portré fotó Tamásról
- v2 javaslat: **interior + barber-dolgozás kombó** — oldalnézet, Tamás dolgozás közben, háttérben barber-eszközök homályban
- Indok: a magyar barber-kép-standard (Fresha + welovebudapest cikkek) a dolgozás-pillanatot mutatja, nem statikus portrét. A vendégek a HELYET is látni akarják.

### 3. Új szekció: "HOGYAN DOLGOZOM" (4.5 pozíció, a Bemutatkozás alatt)
- 3-4 lépés ikonos sorban: **Konzultáció → Hajvágás → Szakáll / Finishing → Elégedettség-ellenőrzés**
- Kompakt, 1 képernyős sáv, nem új fullscreen szekció
- Indok: Black Sheep + Elegance is "process-pontokkal" dolgozik — a vendég tudja mit vár

### 4. Új UI elem: Sticky bottom-bar mobilon
- Mobil-only sticky "FOGLALJ IDŐPONTOT" gomb (bottom fixed, full-width, gold BG)
- Desktop-on nincs — a navbar jobb sarkán lévő gold CTA átvállalja
- Indok: a magyar barber-piac 100%-a sticky mobil CTA-t használ

### 5. Új UI elem (opcionális): Pet/kid/multi-language ikonsor
- Hero-ban az árak előtt egy diszkrét 3-4 ikonos sor (pl. pet-friendly, magyar+angol, akadálymentes, kártyás fizetés — Tamás válasza alapján)
- Ha Tamás nem tud válaszolni rá → kihagyva
- Indok: a Fresha-oldalakon ezek az ikonok visszatérő bizalom-jelek

### 6. Vélemények szekció — csak FELTÉTELESEN
- Ha Tamás 2-3 vendég-véleményt tud adni (Google/FB screenshot + engedély) → szekció a Bemutatkozás és a CTA között
- Ha NEM → kihagyjuk, NE találjunk ki fake véleményeket
- Indok: a top szalonok mind social proof-ot használnak, de a hiteltelen placeholder rosszabb mint a hiány

---

## Vizuális finomítások (kisebb változások)

- **Navbar scroll-fade**: az első 100px után sötét backdrop-blur háttér fade-in (a konkurensek is ezt csinálják)
- **Services kártya hover**: ne csak emelkedjen, hanem a rézvonal is "húzódjon végig" bal→jobb (micro-animation)
- **Gallery mobil**: horizontal snap-scroll carousel (natív, nem JS) — a Fresha-oldalak is így

## Változatlan

- Minden más v1 szerint. Ha valami itt nincs említve, v1 az irányadó.
