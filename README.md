# Gesundheitspraxis SonnenTor — Website (2026 Redesign)

Warme, lebensbejahende, vertrauensvolle Website für die **Gesundheitspraxis SonnenTor** -
Praxis für Alternative Heilmethoden in **Neuglobsow am Stechlinsee** (Brandenburg).
**Fokus: begleitende Behandlung bei Krebs und schweren Erkrankungen** - Patienten
bleiben eine Woche in der Praxis und erhalten drei Behandlungen (1.800-3.000 €).
Methoden: geistiges Heilen, Energiemassagen, Qi Gong & Atemarbeit, Clearing; daneben
Rücken, Kinder und psychische Leiden. Inhaber & Heiler: Dr. Fabian Siegfried Forbrig,
seit 2007.

Ersetzt die alte TYPO3-Seite (gesundheitspraxis-sonnentor.de). Die alte Seite war
**Content-Quelle**, nicht Stil-Vorlage - Design, Code und Struktur sind komplett neu.
Meditation, Hypnose und Weiterbildung/Ausbildung werden nicht mehr angeboten und sind
entfernt.

## Tech-Stack

- **Astro 5** (statisch, kein SSR, kein Adapter) → `/dist` als reines HTML
- **Tailwind CSS v3.4** via `@astrojs/tailwind`
- **@lucide/astro** für Icons (Brand-/Social-Logos als inline SVG)
- Selbst gehostete Schriften: **Fraunces** (Display-Serif, spirituelle Wärme) +
  **Open Sans** (Text), `font-display: optional` → kein CLS
- `@astrojs/sitemap`

## Entwicklung

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # → dist/
npm run preview    # dist/ lokal servieren (Port 4366 via .claude/launch.json)
```

## Deploy — Cloudflare Pages

- Framework-Preset: **Astro**
- Build-Befehl: `npm run build`
- Output-Verzeichnis: `dist`
- Kein SSR-Adapter (rein statisch). `build.format: 'file'` → No-Trailing-Slash-URLs.

## Struktur

```
src/
  data/        site.ts (Marke/Kontakt/Nav/Sprechzeit/Disclaimer), methods.ts,
               treatments.ts, testimonials.ts, honorar.ts, jobs.ts
  layouts/     Layout.astro (SEO, Head, JS für Reveal/Menu/Embeds/Back-to-top)
  components/  Header, Footer, CookieBanner, SchemaOrg, Icon, Social, PageHero,
               SectionHeading, CtaBand, ContactTiles, Sprechzeiten, LiveStatus,
               VideoEmbed, MapBlock, ServiceCard, Testimonials, Jobanzeige
  pages/       index · ueber-mich · methoden (+6 Methoden) · behandlung (+4 Schwerpunkte)
               · erfahrungsberichte · ausbildung-karriere · kosten · kontakt
               · impressum · datenschutz · 404
  styles/      global.css (Design-Tokens in :root, @layer base/components)
public/
  images/      lizenzfreie Stimmungs-/Naturfotos (Pexels) + og.jpg
  fonts/       woff2 (latin) · logo.png (1:1 Original) · favicon/apple-touch-icon
docs/
  STYLE-GUIDE.md       Farben (Logo-Pixel-Analyse: #DC4A3E Rot), Schrift, Voice
  JUDGEMENT_CALLS.md   Entscheidungen + Operator-TODOs (Portrait, Stellen-Daten,
                       Place-ID, Video-/Kanal-Provenienz, HWG/Datenschutz-Prüfung)
```

## Besonderheiten

- **Würdevoll & HWG-bewusst**: „Ich gebe keine Heilversprechen" prominent; schwere
  Erkrankungen ausschließlich als begleitende Behandlung („ergänzt die ärztliche
  Behandlung, ersetzt sie nicht"); reißerische Video-Titel der alten Seite nicht
  übernommen.
- **Employer Branding**: eigene Karriereseite + prominente Startseiten-Section +
  wiederverwendbare `Jobanzeige.astro`. Bewerbung per Telefon/E-Mail (kein Formular).
- **Live-Status**: Telefonische Sprechzeit (Mo-Fr 18:45-20:00) client-seitig als
  „Jetzt erreichbar / Heute ab … / Erreichbar morgen …".
- **Cookie-sicher**: YouTube (nocookie) und Maps laden erst nach Klick; DSGVO-Banner.

## Qualität

- **Lighthouse (mobil, lokal gemessen): Performance 95 · Accessibility 100 ·
  Best Practices 100 · SEO 100** - CLS 0, TBT 0 ms, LCP ~2,6 s (responsive WebP-Hero
  900/1600 px + Preload; auf dem CDN nochmals schneller)
- font-display:optional, inlined CSS, Embeds erst nach Klick (0 Third-Party beim Laden),
  keine Render-Blocker
- Umlaute korrekt, keine Emojis (Lucide), DSGVO-Banner
- Inhalte verbatim aus der Original-Seite - nichts erfunden (siehe JUDGEMENT_CALLS.md)
