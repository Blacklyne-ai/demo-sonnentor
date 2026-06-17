// ─────────────────────────────────────────────────────────────
// Zentrale Marken- & Kontaktdaten — Single Source of Truth.
// Alles verbatim aus Impressum / Kontakt der alten Site. NICHTS erfunden.
// Offene Punkte siehe docs/JUDGEMENT_CALLS.md.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Gesundheitspraxis SonnenTor',
  shortName: 'SonnenTor',
  legalName: 'Gesundheitspraxis SonnenTor',
  kicker: 'Praxis für Alternative Heilmethoden',
  place: 'Neuglobsow am Stechlinsee',
  region: 'Brandenburg',
  since: 2007, // © 2007–2026
  domain: 'demo-sonnentor.pages.dev',
  url: 'https://demo-sonnentor.pages.dev',

  // Inhaber & Heiler (Impressum, verbatim)
  founder: 'Dr. Fabian Siegfried Forbrig',
  founderRole: 'Heiler für Mensch und Tier',

  // Mobil = primäre, WhatsApp-fähige Nummer (Brief-Vorgabe tel:+491773710662).
  phone: { display: '0177 3710662', href: 'tel:+491773710662', intl: '+49 177 3710662' },
  // Festnetz = Terminleitung (Sprechzeit Mo–Fr 18:45–20:00, „bitte lange klingeln lassen").
  landline: { display: '033082 660975', href: 'tel:+4933082660975' },
  whatsapp: { display: '0177 3710662', href: 'https://wa.me/491773710662' },
  email: 'heilen@gesundheitspraxis-sonnentor.de',

  address: {
    street: 'Bahnhofsweg 6 B',
    zip: '16775',
    city: 'Neuglobsow',
    district: 'Stechlin',
    region: 'Brandenburg',
  },

  maps: {
    embed: 'https://www.google.com/maps?q=Bahnhofsweg+6B,+16775+Neuglobsow,+Stechlin&output=embed',
    link: 'https://www.google.com/maps/search/?api=1&query=Gesundheitspraxis+SonnenTor+Bahnhofsweg+6B+16775+Neuglobsow',
  },

  // YouTube-Kanal vorhanden (Videos eingebunden). Genaue Kanal-URL: Operator-TODO #6.
  youtube: 'https://www.youtube.com/@gesundheitspraxissonnentor',

  impressum: {
    responsible: 'Dr. Fabian Siegfried Forbrig',
    taxNumber: '25/035/05526',
  },
} as const;

// Telefonische Sprechzeit (verbatim /kontakt): keine festen Öffnungszeiten, Termine
// und Fragen ausschließlich telefonisch. `window` für den Live-Status (Client).
export const sprechzeit = {
  label: 'Telefonische Sprechzeit',
  daysLabel: 'Montag – Freitag',
  timeLabel: '18:45 – 20:00 Uhr',
  hint: 'Bitte lange klingeln lassen.',
  window: { days: [1, 2, 3, 4, 5], open: 18 * 60 + 45, close: 20 * 60 }, // 1125–1200 Min.
} as const;

// Verbatim Termin-Hinweis (alte Site /kontakt).
export const terminHinweis =
  'Termine und Fragen besprechen wir am liebsten persönlich am Telefon - Montag bis Freitag von 18:45 bis 20:00 Uhr. Bitte lassen Sie es lange klingeln, ich rufe auch gern zurück.';

// Rechtlich tragende Bausteine — verbatim bzw. eng am Impressum (HWG-konform).
export const disclaimer = {
  // Der zentrale Vertrauenssatz (Brief: prominent halten).
  noPromise: 'Ich gebe keine Heilversprechen (gesetzlich vorgeschrieben).',
  // Impressum, Grammatik geglättet:
  full:
    'Ich stelle keine Diagnosen und gebe keine Heilversprechen. Meine Methoden dienen der Aktivierung der Selbstheilungskräfte und ersetzen nicht die Tätigkeit eines Arztes oder Psychologen. Sie wirken ganzheitlich, sind überkonfessionell und stehen in keinem Widerspruch zu christlichen Religionen.',
  // Für die Begleitende Behandlung (Brief: dezenter Hinweis):
  begleitend:
    'Meine Arbeit versteht sich als Begleitung. Sie ergänzt die ärztliche Behandlung und ersetzt sie nicht.',
  // Unter Erfahrungsberichten:
  testimonial:
    'Erfahrungsberichte schildern persönliche Eindrücke einzelner Menschen. Sie sind kein Versprechen für einen Behandlungserfolg.',
} as const;

// Schlanke Hauptnavigation (Patienten + Karriere klar getrennt).
export const primaryNav = [
  { label: 'Behandlung', href: '/behandlung' },
  { label: 'Methoden', href: '/methoden' },
  { label: 'Über mich', href: '/ueber-mich' },
  { label: 'Erfahrungsberichte', href: '/erfahrungsberichte' },
  { label: 'Karriere', href: '/ausbildung-karriere' },
  { label: 'Kosten', href: '/kosten' },
] as const;

export const footerNav = [
  {
    title: 'Behandlung',
    links: [
      { label: 'Rücken & Wirbelsäule', href: '/behandlung/ruecken' },
      { label: 'Kinder', href: '/behandlung/kinder' },
      { label: 'Psychische Leiden', href: '/behandlung/psyche' },
      { label: 'Begleitende Behandlung', href: '/behandlung/begleitende-behandlung' },
    ],
  },
  {
    title: 'Methoden',
    links: [
      { label: 'Geistiges Heilen', href: '/methoden/geistheilung' },
      { label: 'Clearing', href: '/methoden/clearing' },
      { label: 'Hypnose', href: '/methoden/hypnose' },
      { label: 'Meditation', href: '/methoden/meditation' },
      { label: 'Energiemassagen', href: '/methoden/massage' },
      { label: 'Qi Gong', href: '/methoden/qi-gong' },
    ],
  },
  {
    title: 'Praxis',
    links: [
      { label: 'Über mich', href: '/ueber-mich' },
      { label: 'Erfahrungsberichte', href: '/erfahrungsberichte' },
      { label: 'Ausbildung & Karriere', href: '/ausbildung-karriere' },
      { label: 'Kosten', href: '/kosten' },
      { label: 'Kontakt', href: '/kontakt' },
    ],
  },
  {
    title: 'Rechtliches',
    links: [
      { label: 'Impressum', href: '/impressum' },
      { label: 'Datenschutz', href: '/datenschutz' },
    ],
  },
] as const;
