// ─────────────────────────────────────────────────────────────
// Heilmethoden - Inhalte verbatim-abgeleitet aus der alten Site
// (docs/research/methoden.md). Beschreibungen ruhig gefasst; die wenigen
// Garantie-/Quoten-Formeln (z. B. „nahezu 100 %", „Anti-Krebs") bewusst
// ausgelassen. RA-MARIA® = Methodenmarke der Praxis.
// ─────────────────────────────────────────────────────────────

export interface Method {
  slug: string;
  name: string;
  icon: string;
  image: string;
  imageAlt: string;
  kicker: string;
  short: string; // Karten-Text
  lead: string;  // Intro auf der Unterseite
  body: string[];
  highlights?: string[];
}

export const methods: Method[] = [
  {
    slug: 'geistheilung',
    name: 'Geistiges Heilen',
    icon: 'HandHeart',
    image: '/images/hands-light.jpg',
    imageAlt: 'Hände, durch die warmes Licht fällt',
    kicker: 'Die Kernmethode',
    short:
      'Universelle Lebensenergien wirken durch bestimmte Frequenzen in Körper und Geist - damit wieder ein harmonisches Gleichgewicht in Körper, Geist und Seele entsteht.',
    lead:
      'Als Bindeglied zwischen Schöpfung und Heilung Suchenden lasse ich universelle Heilkräfte in Körper und Geist fließen - geistig und durch Handauflegen.',
    body: [
      'Unser Körper wird von vielen Bio-Strömen durchflossen. Frequenzen sorgen dabei für einen sehr schnellen Transport von Befehlsenergien vom Gehirn zum Bestimmungsort. Der Geistheilungstherapeut kennt diese geistigen Schwingungsfrequenzen und versucht gezielt, auf ein Ungleichgewicht im Körper einzuwirken.',
      'Die gezielte Energiesteuerung ist eine Form der Geistheilung, mit der universelle Lebensenergien durch bestimmte Frequenzen sehr schnell und direkt in unserem Körper wirken. Negative Frequenzen werden aufgelöst, sodass wieder ein harmonisches Gleichgewicht in Körper, Geist und Seele entstehen kann.',
      'Chakrenausgleich, die Reinigung aller Energiebahnen, die Öffnung des Herzens sowie die körperliche und seelische Aufrichtung sind ebenfalls Bestandteile der Behandlung. Öffnet sich der Patient, lässt zu und nimmt vertrauensvoll an, geschieht die Heilung.',
    ],
    highlights: ['Therapiegespräch', 'Handauflegen & Energiearbeit', 'Chakrenausgleich', 'Reinigung der Energiebahnen'],
  },
  {
    slug: 'clearing',
    name: 'Clearing',
    icon: 'Wind',
    image: '/images/nature-detail.jpg',
    imageAlt: 'Tautropfen auf Gräsern im Morgenlicht',
    kicker: 'Raum & Gebäude',
    short:
      'Das Reinigen, Neutralisieren und Harmonisieren von Giften und negativen Kraftfeldern - bei Wohnungen, Häusern, Grundstücken und elektro-magnetischen Geräten.',
    lead:
      'Unter Clearing verstehe ich das Reinigen, Neutralisieren und Harmonisieren von Giften und negativen Kraftfeldern.',
    body: [
      'Das führe ich durch bei Wohnungen und Häusern, Firmengebäuden, Grundstücken, Autos und elektro-magnetischen Geräten. Negative Ursachen werden neutralisiert und zum Wohle aller Anwesenden in Harmonie gebracht.',
      'So entsteht wieder eine Wohlfühlatmosphäre. Genauso nutze ich diese energetische Kraft, um Räume und Gebäude zu klären und eine harmonische Wohnatmosphäre zu schaffen.',
    ],
  },
  {
    slug: 'hypnose',
    name: 'Hypnose',
    icon: 'MoonStar',
    image: '/images/candle-still.jpg',
    imageAlt: 'Ruhige Kerzenflamme vor dunklem, warmem Hintergrund',
    kicker: 'Das Unterbewusstsein',
    short:
      'Ein gewollter Wachzustand, in dem das Unterbewusstsein besonders ansprechbar ist und positive Informationen dort gespeichert werden.',
    lead:
      'Hypnose ist ein Wachzustand, in dem das Unterbewusstsein besonders ansprechbar ist - aber nur dann, wenn wir es zulassen.',
    body: [
      'Unser Unterbewusstsein steuert nicht nur Empfindungen, Bewegungen und Körperfunktionen, sondern übermittelt regelmäßig alle gespeicherten Informationen an sämtliche Zellen. In der Hypnose werden positive Informationen in das Unterbewusstsein geleitet und dort gespeichert.',
      'Hypnose ist also ein gewollter Zustand, bei dem geistige Programme im Gehirn positiv verändert werden. Sie dient der Entspannung, Vorbeugung und Aktivierung der Selbstheilungskräfte und ersetzt nicht die Tätigkeit eines Arztes, Heilpraktikers oder Psychologen.',
    ],
    highlights: ['Stressbewältigung', 'Raucherentwöhnung', 'Lernblockaden', 'Tiefenentspannung', 'Schlafstörungen', 'Prüfungsangst'],
  },
  {
    slug: 'meditation',
    name: 'Meditation',
    icon: 'Flower2',
    image: '/images/meditation-nature.jpg',
    imageAlt: 'Mensch in stiller Meditation in der Natur',
    kicker: 'Innere Ruhe',
    short:
      'Achtsamkeits- und Konzentrationsübungen, die unseren Geist sammeln und beruhigen - bis Körper und Geist in vollständige Harmonie gelangen.',
    lead:
      'Achtsamkeits- und Konzentrationsübungen sammeln und beruhigen unseren Geist.',
    body: [
      'Wir treten mit unserem Unterbewusstsein in Verbindung, kommen zu innerer Ruhe und Gelassenheit und erhalten Impulse, unser tägliches Leben zu meistern.',
      'Körper und Geist gelangen in totale Entspannung und damit in vollständige Harmonie. Allen Geschehnissen des Alltags begegnen wir dann mit unerschütterlicher Gelassenheit. Nur eine bewusste Meditation führt uns zu unseren inneren Kräften und Fähigkeiten.',
    ],
    highlights: ['Chakra- & Farb-Meditationen', 'Mantra-Meditationen', 'Geh- & Tanz-Meditationen', 'Geführte Meditationen'],
  },
  {
    slug: 'massage',
    name: 'Energiemassagen',
    icon: 'Hand',
    image: '/images/hands-back-gentle.jpg',
    imageAlt: 'Sanfte Hände bei einer energetischen Rückenbehandlung',
    kicker: 'Wohltat für den Rücken',
    short:
      'Energiemassagen für Entspannung, Schmerzlinderung, Abbau von Stress und bessere Durchblutung - die Wirkung erstreckt sich über den gesamten Organismus und schließt die Psyche mit ein.',
    lead:
      'Wohlfühl- und Entspannungsmassagen zur Vorbeugung, Stressbewältigung und Beruhigung, zur Stärkung der Abwehrkräfte und Aktivierung der Selbstheilungskräfte.',
    body: [
      'Die Massage beeinflusst Haut, Bindegewebe und Muskulatur durch Dehnungs-, Zug- und Druckreiz. Ihre Wirkung erstreckt sich von der behandelten Stelle über den gesamten Organismus - und schließt unsere Psyche mit ein.',
      'So erreichen wir unter anderem Entspannung von Muskulatur und Bindegewebe, Schmerzlinderung, Abbau von Stress, bessere Durchblutung und das Lösen von Verklebungen. Eine besondere Wohltat für die Bandscheiben ist die sanfte Wirbelsäulen-Energiemassage nach Breuss.',
      'Diese Methode ist keine medizinische Anwendung. Sie dient der Entspannung, Vorbeugung und Aktivierung der Selbstheilungskräfte und ersetzt nicht die Tätigkeit eines Arztes oder Psychologen.',
    ],
    highlights: ['Wirbelsäulen-Energiemassage nach Breuss', 'Klassische Rückenmassage', 'Lymphdrainage', 'Reflexzonenmassage'],
  },
  {
    slug: 'qi-gong',
    name: 'Qi Gong & Meditationen',
    icon: 'Sprout',
    image: '/images/stones-balance.jpg',
    imageAlt: 'Sanft geschichtete Steine als Sinnbild der Balance',
    kicker: 'Lebenskraft & Energie',
    short:
      'Qi Gong, Atemtechniken und Meditationen zur Beruhigung und Kräftigung von Körper, Geist und Seele - zur Selbstfindung und Selbstheilung.',
    lead:
      'Meditationen, Qi Gong Übungen, Atemtechniken und Körperwahrnehmung - zur Beruhigung und Kräftigung von Körper, Geist und Seele.',
    body: [
      'Qi Gong Übungen sind stimulierende Übungen für Lebenskraft und Lebensenergie. Eine einfache sinnbildliche Übersetzung wäre: In der Ruhe liegt die Kraft.',
      'Es gibt kraftspendendes Qi Gong für Körper, Geist und Seele und auch heilendes Qi Gong. In beiden Fällen wird im Körper Kraft aufgebaut, die Selbstheilungskräfte werden angeregt und unser Wohlbefinden wird gesteigert.',
    ],
    highlights: ['5-Organe Qi Gong', 'Gelenk Qi Gong', 'Atemtechnik & Körperwahrnehmung', 'Gruppenangebote'],
  },
];

// Vollständiges Leistungsverzeichnis (verbatim von der alten Site, Footer-Modul auf
// jeder Seite). Vier Kategorien, jeweils einer Methode zugeordnet. Wird auf der
// /methoden-Übersicht komplett und auf den jeweiligen Methoden-Unterseiten gezeigt.
export interface Angebot {
  key: string;
  title: string;       // verbatim Kategorie-Titel der alten Site
  intro: string;       // ruhiger Einleitungssatz
  method: string;      // slug der zugehörigen Methode
  methodName: string;
  icon: string;
  items: string[];
}

export const angebote: Angebot[] = [
  {
    key: 'behandeln',
    title: 'Wir behandeln bei',
    intro: 'Geistiges Heilen begleitet bei einem breiten Spektrum körperlicher Themen.',
    method: 'geistheilung',
    methodName: 'Geistiges Heilen',
    icon: 'HandHeart',
    items: [
      'Schmerzen aller Art',
      'Beinlängendifferenzen',
      'Diabetes',
      'Kinderkrankheiten',
      'Hautprobleme',
      'Beckenschiefstand',
      'Rheuma',
      'Innere Krankheiten',
      'Knochenerkrankungen',
      'Blutdruck',
      'Entzündungen',
      'Wirbelsäulenverkrümmung',
    ],
  },
  {
    key: 'helfen',
    title: 'Wir helfen bei',
    intro: 'Mit Hypnose lassen sich Verhaltensweisen dort verändern, wo sie entstehen - im Unterbewusstsein.',
    method: 'hypnose',
    methodName: 'Hypnose',
    icon: 'MoonStar',
    items: [
      'Raucherentwöhnung',
      'Stressbewältigung',
      'Lernblockaden',
      'Sportleistungssteigerung',
      'Gewichtsreduzierung',
      'Mentale Vorbereitung auf den Flug',
      'Prüfungsangst',
      'Auflösung von Lampenfieber',
      'Verstärkung von Fähigkeiten',
      'Schlafstörungen',
      'Charisma-Training',
      'Wunschhypnose',
      'Blockadenlösung',
      'Tiefenentspannung',
    ],
  },
  {
    key: 'wenden',
    title: 'Wir wenden an',
    intro: 'Wohlfühl- und Energiemassagen zur Beruhigung, Stärkung und tiefen Selbstheilung.',
    method: 'massage',
    methodName: 'Energiemassagen',
    icon: 'Hand',
    items: [
      'Wirbelsäulen-Energiemassage (Breuss / Dr. Usui)',
      'Klassische Rückenmassage',
      'Gesichts- und Dekolleté-Energiemassage',
      'Hand- und Arm-Energiemassage',
      'Blutrückholmassage',
      'Lymphdrainage',
      'Bindegewebsmassage',
      'Reflexzonenmassage',
    ],
  },
  {
    key: 'bieten',
    title: 'Wir bieten an',
    intro: 'Meditationen, Qi Gong und Atemtechniken zur Kräftigung von Körper, Geist und Seele.',
    method: 'qi-gong',
    methodName: 'Qi Gong & Meditationen',
    icon: 'Sprout',
    items: [
      'Chakra- & Farb-Meditationen',
      'Aktive & passive Meditationen',
      'Mantra-Meditationen',
      'Qi Gong Übungen',
      'Geh-Meditationen',
      'Tanz-Meditationen',
      'Benson-Methode',
      'Zazen-Meditationen',
      'Vokal-Meditationen',
      'Geführte Meditationen',
      'Vipassana-Meditationen',
      'Analytische Meditationen',
      'Pädagogische Interventionen',
      'Atemtechnik & Körperwahrnehmung',
    ],
  },
];

// Rückwärtskompatibler Alias (Geistiges-Heilen-Indikationen).
export const indications = angebote[0].items;
