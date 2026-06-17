# Style Guide: Gesundheitspraxis SonnenTor

Praxis für Alternative Heilmethoden · Neuglobsow am Stechlinsee · seit 2007
Inhaber & Heiler: Dr. Fabian Siegfried Forbrig

Die alte TYPO3-Site war die **Content-Quelle**, nicht die Stil-Vorlage. Charakter
der neuen Site: ruhig, warm, natürlich, vertrauensvoll, würdevoll - kein Marktschrei.

---

## Logo-Farben (pixel-extrahiert, sharp)

Logo = roter Kreis mit weißem Kreuz, „GPS" (Gesundheitspraxis SonnenTor).
Dominante Logofläche: **#DC4A3E** (Korall-Rot, ~79 %). Das Pixel-Ergebnis hat
Vorrang vor der ursprünglichen Gold-Annahme - die Marke ist rot.

Daraus ein warmes, ruhiges Heil-Klima: das Logo-Rot als geerdetes Terrakotta
(Signatur), dazu Sonnenaufgangs-Bernstein (zweite Wärme, „SonnenTor" + Hero-See),
ein ruhiges Salbei (Natur/Stechlinsee) und ein warmes Off-White-Fundament.

## Farbpalette

| Element | Hex | Quelle / Rolle |
|---|---|---|
| Brand Primary (clay) | `#DC4A3E` | Logo-Korall - Marken-Signatur |
| clay-deep (Buttons) | `#B83A2F` | AA weißer Text (5.7:1) |
| clay-ink (Akzent-Text) | `#8C2A22` | tiefes Terrakotta auf Hell (AA) |
| Amber (Sonnenaufgang) | `#E9A23C` | zweite Wärme - nur mit dunklem Text |
| amber-ink | `#855313` | Gold-Akzent-Text auf Hell (AA) |
| Sage (Natur) | `#7F9A6F` | ruhiger Dritter (Stechlinsee) |
| sage-deep | `#5C7A4E` | AA weißer Text (4.8:1) |
| Ink (Text) | `#2A2320` | warmes Espresso-Schwarz |
| Paper (Basis-BG) | `#FBF8F3` | warmes Off-White (~80 % der Seite) |
| Sand (Sektion) | `#F4EBDD` | warme Sand-Sektion |
| Mist (Sektion) | `#EAEEE6` | ruhige Salbei-getönte Sektion |
| Dark (CtaBand/Footer) | `#241C18` | warmes Espresso - KEIN kühles Anthrazit |

~80 % der Seite hell & warm. Dunkel nur in CtaBand + Footer (+ Video-Embeds).
Single Source of Truth: `src/styles/global.css :root` (RGB-Tripel),
referenziert über `tailwind.config.mjs`.

## Schrift

- **Display / Headlines:** Fraunces (variabler Serif, opsz+wght) - warm, organisch,
  spirituelle Wärme. Selbst-gehostet (latin), `font-display: optional` (kein CLS).
- **Body / UI:** Open Sans - ruhige humanistische Sans. Selbst-gehostet (latin),
  `font-display: optional`.
- Fließtext 17 px, line-height 1.75 - ruhig und gut lesbar.

## Voice (verbindlich)

Persönlich, ruhig, einladend, spirituell - in der **Ich-Stimme des Heilers**
(„Als Heiler lade ich Sie herzlich ein …"). Sie-Form zum Besucher. Selbstbewusst
in den erlaubten Aussagen (Begleitung, Unterstützung, Linderung, Stärkung der
Selbstheilungskräfte), ohne konkrete Heil-/Wirkungsgarantie. Würdevoll, nicht
marktschreierisch.

Test vor jeder Headline: „Würde der Heiler das einem Patienten im Gespräch so
sagen?" Wenn es nach Werbeschrei klingt → ruhiger fassen.

### Erlaubt (selbstbewusst stehen lassen)
Begleitung / begleitende Behandlung · Unterstützung · Linderung · Förderung des
Wohlbefindens · Stärkung der Selbstheilungskräfte · „an die Wurzeln gehen" ·
„Disharmonien" · „ein Stück Ihres Weges gemeinsam gehen".

### Grenze (HWG) - nur das vermeiden
Konkrete Heil-/Wirkungs-GARANTIE. Verbatim prominent gehalten:
**„Ich gebe keine Heilversprechen (gesetzlich vorgeschrieben)."**
Reißerische Video-Titel der alten Site („Wunderheilung von Krebs", „tödliche
Krankheiten heilen") NICHT als Überschrift; schwere Erkrankungen ausschließlich
als BEGLEITENDE Behandlung („ergänzt die ärztliche Behandlung, ersetzt sie nicht").

## Brand-Charakter

Geistiges Heilen · Stechlinsee/Natur · der Heiler als persönlicher Anker ·
Ausbildungsbetrieb (Reiki/Geistheilung/Meditation) · ruhig & warm.

## Bewegung & Layout

Dezent: sanftes Einblenden (scroll-reveal), kein Counter, keine grellen Hover.
Editorial-asymmetrische Hero/Split-Sektionen erlaubt; Karten-Sets immer
symmetrisch (Vielfache der Spaltenzahl, nie 4+3). Lucide-Icons, keine Emojis.
