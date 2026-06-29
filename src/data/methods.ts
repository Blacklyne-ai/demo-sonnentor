// ─────────────────────────────────────────────────────────────
// Methoden - auf den Krebs-/Begleitungs-Fokus reduziert.
// Meditation & Hypnose bietet die Praxis NICHT mehr an (entfernt).
// Es geht um die Begleitung des Menschen: geistiges Heilen, Energiemassagen,
// Qi Gong & Atemarbeit. Clearing bleibt als ergänzendes Angebot.
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
    image: '/images/hands-warm-light.jpg',
    imageAlt: 'Hände, durch die warmes Licht fällt',
    kicker: 'Die Kernmethode',
    short:
      'Universelle Lebensenergien fließen durch Handauflegen und geistige Arbeit in Körper und Geist - sie geben Kraft, lösen Blockaden und stärken die Selbstheilung.',
    lead:
      'Als Bindeglied zwischen Schöpfung und Heilung Suchenden lasse ich universelle Heilkräfte in Körper und Geist fließen - geistig und durch Handauflegen.',
    body: [
      'Gerade in einer schweren Zeit braucht der Mensch Kraft. Im geistigen Heilen lasse ich universelle Lebensenergien in Körper und Geist fließen - sie wirken beruhigend, lösen Blockaden und stärken von innen.',
      'Chakrenausgleich, die Reinigung der Energiebahnen, die Öffnung des Herzens sowie die körperliche und seelische Aufrichtung sind Teil der Behandlung. Öffnet sich ein Mensch, lässt zu und nimmt vertrauensvoll an, geschieht die Heilung.',
      'Es geht nie um ein Versprechen, sondern um Kraft, Ruhe und die Stärkung der eigenen Selbstheilungskräfte - begleitend zur ärztlichen Behandlung.',
    ],
    highlights: ['Ausführliches Therapiegespräch', 'Handauflegen & Energiearbeit', 'Chakrenausgleich', 'Stärkung des Immunsystems'],
  },
  {
    slug: 'massage',
    name: 'Energiemassagen',
    icon: 'Hand',
    image: '/images/comfort.jpg',
    imageAlt: 'Sanfte, stärkende Energiebehandlung',
    kicker: 'Lösen & stärken',
    short:
      'Sanfte Energiemassagen lösen Verspannungen, lindern Schmerzen, fördern die Durchblutung und bringen Kraft und Ruhe in den ganzen Organismus.',
    lead:
      'Wohlfühl- und Energiemassagen zur Beruhigung und Stärkung - sie lösen Verspannungen und aktivieren die Selbstheilungskräfte.',
    body: [
      'Sanfte Energiemassagen beeinflussen Haut, Bindegewebe und Muskulatur und wirken über den gesamten Organismus - sie schließen auch die Psyche mit ein.',
      'So erreichen wir Entspannung, Schmerzlinderung, den Abbau von Stress und eine bessere Durchblutung. Eine besondere Wohltat ist die sanfte Wirbelsäulen-Energiemassage nach Breuss.',
      'Diese Methode ist keine medizinische Anwendung. Sie dient der Entspannung, Vorbeugung und Aktivierung der Selbstheilungskräfte und ersetzt nicht die Tätigkeit eines Arztes.',
    ],
    highlights: ['Wirbelsäulen-Energiemassage nach Breuss', 'Lymphdrainage', 'Reflexzonenmassage', 'Sanfte Schmerzlinderung'],
  },
  {
    slug: 'qi-gong',
    name: 'Qi Gong & Atemarbeit',
    icon: 'Sprout',
    image: '/images/new-life.jpg',
    imageAlt: 'Frisches Grün im warmen Licht',
    kicker: 'Lebenskraft',
    short:
      'Sanfte Qi-Gong-Übungen und Atemarbeit bauen Lebenskraft auf, regen die Selbstheilung an und steigern das Wohlbefinden - auch für zu Hause.',
    lead:
      'Qi Gong und Atemarbeit zur Kräftigung von Körper, Geist und Seele - leicht erlernbar und auch für zu Hause.',
    body: [
      'Qi Gong Übungen sind stimulierende Übungen für Lebenskraft und Lebensenergie. Eine einfache Übersetzung wäre: In der Ruhe liegt die Kraft.',
      'Es gibt kraftspendendes und heilendes Qi Gong. In beiden Fällen wird im Körper Kraft aufgebaut, die Selbstheilungskräfte werden angeregt und das Wohlbefinden gesteigert - eine wertvolle Unterstützung, die Sie mit nach Hause nehmen.',
    ],
    highlights: ['Kraftspendendes Qi Gong', 'Heilendes Qi Gong', 'Atemtechnik & Körperwahrnehmung', 'Übungen für zu Hause'],
  },
  {
    slug: 'clearing',
    name: 'Raum- & Gebäudeclearing',
    icon: 'Wind',
    image: '/images/sun-through-trees.jpg',
    imageAlt: 'Warmes Sonnenlicht durch Bäume',
    kicker: 'Ergänzendes Angebot',
    short:
      'Das Reinigen, Neutralisieren und Harmonisieren von negativen Kraftfeldern in Räumen und Gebäuden - für eine ruhige, gesunde Wohnatmosphäre.',
    lead:
      'Unter Clearing verstehe ich das Reinigen, Neutralisieren und Harmonisieren von Giften und negativen Kraftfeldern in Räumen und Gebäuden.',
    body: [
      'Negative Ursachen werden neutralisiert und zum Wohle aller Anwesenden in Harmonie gebracht - so entsteht wieder eine Wohlfühlatmosphäre.',
      'Genauso nutze ich diese energetische Kraft, um Wohnungen und Häuser zu klären und eine harmonische, gesunde Wohnatmosphäre zu schaffen.',
    ],
  },
];

// Wobei das geistige Heilen begleitet (auf Begleitung bei Krebs & schweren
// Erkrankungen ausgerichtet - ruhig, ohne Garantie).
export const indications = [
  'Schmerzen und Entzündungen',
  'Erschöpfung und Schwäche',
  'ein geschwächtes Immunsystem',
  'innere Unruhe, Angst und Sorgen',
  'Schlafstörungen',
  'die Belastung durch Diagnose, Operation oder Chemotherapie',
];
