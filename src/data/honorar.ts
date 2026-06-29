// ─────────────────────────────────────────────────────────────
// Honorar. Signatur-Angebot „Die Woche bei mir" (Begleitung bei Krebs) wird auf
// der Kosten-Seite separat & prominent gezeigt (siehe wochenprogramm in
// treatments.ts: 1.800-3.000 €). Hier die weiteren, einzelnen Honorare.
// Meditation/Hypnose entfallen (werden nicht mehr angeboten).
// ─────────────────────────────────────────────────────────────

export interface HonorarGroup {
  title: string;
  note?: string;
  items: { label: string; price: string; sub?: string }[];
}

export const honorarGroups: HonorarGroup[] = [
  {
    title: 'Rücken & Wirbelsäule',
    note: 'Individueller Behandlungskomplex über mehrere Sitzungen.',
    items: [
      { label: 'Chronische Schmerzen', price: '1.840 €' },
      { label: 'Skoliose', price: '1.840 €' },
      { label: 'Bandscheibenvorfall', price: '1.840 €' },
      { label: 'Beinlängenausgleich', price: '640 €' },
    ],
  },
  {
    title: 'Einzelne Behandlungen',
    items: [
      { label: 'Akute Krankheitsbilder', price: '210 €', sub: 'z. B. akute Schmerzen, Migräne, Magen-/Darm- oder Atemwegsbeschwerden, Stärkung des Immunsystems' },
      { label: 'Kraft für Körper, Geist und Seele', price: '140 €', sub: 'Energie-Behandlung' },
      { label: 'Nervenstärke & Lebensfreude', price: '140 €', sub: 'Energie-Behandlung' },
    ],
  },
  {
    title: 'Kinder',
    items: [
      { label: 'Behandlung (je 60 Min.)', price: '450 €' },
      { label: 'Kraft für Körper, Geist und Seele (30 Min.)', price: '90 €' },
    ],
  },
  {
    title: 'Weitere Begleitung',
    note: 'Behandlungskomplexe sind individuell und werden im Therapiegespräch abgestimmt.',
    items: [
      { label: 'Psychische Leiden', price: '2.440 €' },
      { label: 'Autoimmunkrankheiten (außer Krebs)', price: '2.440 €' },
    ],
  },
];
