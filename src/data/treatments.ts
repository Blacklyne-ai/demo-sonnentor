// ─────────────────────────────────────────────────────────────
// Behandlungsschwerpunkte - jetzt mit klarem Fokus auf die Begleitung bei Krebs
// und schweren Erkrankungen. Signatur-Angebot: eine Woche in der Praxis mit drei
// Behandlungen (1.800-3.000 €). Rücken/Kinder/Psyche bleiben als weitere Begleitung.
// Ton: warm, hoffnungsvoll, lebensbejahend - aber ohne Heil-/Wirkungsgarantie.
// ─────────────────────────────────────────────────────────────

export interface Treatment {
  slug: string;
  name: string;
  navName: string;
  icon: string;
  image: string;
  imageAlt: string;
  kicker: string;
  short: string;
  lead: string;
  body: string[];
  points?: { title: string; text: string }[];
  honorar?: { label: string; price: string }[];
  begleitend?: boolean; // dezenter Hinweis „ergänzt die ärztliche Behandlung"
}

export const treatments: Treatment[] = [
  {
    slug: 'begleitende-behandlung',
    name: 'Begleitung bei Krebs',
    navName: 'Begleitung bei Krebs',
    icon: 'HeartHandshake',
    image: '/images/toward-light.jpg',
    imageAlt: 'Mensch im warmen Licht eines neuen Tages',
    kicker: 'An Ihrer Seite',
    short:
      'Eine warme, kraftgebende Begleitung bei Krebs - eine Woche bei mir, drei Behandlungen, parallel zu Ihrer ärztlichen Therapie.',
    lead:
      'Eine Diagnose verändert alles. In dieser Zeit bin ich an Ihrer Seite - mit Wärme, Ruhe und Kraft, ergänzend zu Ihrer ärztlichen Behandlung, nie an ihrer Stelle.',
    body: [
      'Wer zu mir kommt, bleibt eine Woche. Diese Zeit schenkt Raum, um anzukommen, zur Ruhe zu finden und neue Kraft zu schöpfen. In dieser Woche begleite ich Sie mit drei intensiven Behandlungen.',
      'Ich führe energetische Beruhigungs- und Kraftbehandlungen für Körper, Geist und Seele durch, dazu Schmerz- und Entzündungsbegleitung. Im Mittelpunkt stehen die Stärkung des Immunsystems und die Bewältigung von Angst und Sorge - damit Sie der Erkrankung mit mehr Kraft und Zuversicht begegnen.',
      'Ob ab der Diagnose, vor einer Operation oder begleitend zur Chemotherapie: Mir geht es darum, Ihnen Kraft zu geben, zu stabilisieren und zu lindern. Die Entscheidung über jede medizinische Behandlung treffen Sie gemeinsam mit Ihren Ärzten.',
    ],
    points: [
      { title: 'Ab der Diagnose', text: 'Halt und Kraft in der ersten, oft überwältigenden Zeit.' },
      { title: 'Vor einer Operation', text: 'Beruhigung, Stärkung und ein ruhiger, zuversichtlicher Blick nach vorn.' },
      { title: 'Begleitend zur Chemo', text: 'Energetische Unterstützung, um die Therapie mit mehr Kraft zu tragen.' },
    ],
    honorar: [
      { label: 'Eine Woche · drei Behandlungen', price: '1.800 - 3.000 €' },
    ],
    begleitend: true,
  },
  {
    slug: 'ruecken',
    name: 'Rücken & Wirbelsäule',
    navName: 'Rücken',
    icon: 'PersonStanding',
    image: '/images/sun-through-trees.jpg',
    imageAlt: 'Warmes Sonnenlicht durch lichten Wald',
    kicker: 'Aufrecht durchs Leben',
    short:
      'Begleitung bei chronischen Rückenschmerzen, Skoliose, Bandscheibenthemen und Beckenschiefstand - ohne Operation, ohne Korsett.',
    lead:
      'Die häufigste Ursache chronischer Rückenschmerzen ist eine Wirbelsäulenfehlstellung - hervorgerufen durch seelische Belastung und einseitige Beanspruchung über einen längeren Zeitraum.',
    body: [
      'Ich arbeite bei Skoliose, Bandscheibenthemen, Beckenschiefstand und Beinlängenunterschied - sanft, ohne Operation, ohne Korsett. Im Mittelpunkt steht die körperliche Begradigung und Aufrichtung, verbunden mit dem Lösen der seelischen Ursachen.',
      'Zu jeder Begleitung gehören ein sehr ausführliches Therapiegespräch, ein auf Sie zugeschnittener Behandlungskomplex und ein anschließendes Trainingsprogramm für Geist und Körper.',
    ],
    points: [
      { title: 'Chronische Schmerzen', text: 'Begleitung, wenn Schmerzen bleiben, obwohl vieles schon versucht wurde.' },
      { title: 'Skoliose', text: 'Sanfte Arbeit an Aufrichtung und Beweglichkeit der Wirbelsäule.' },
      { title: 'Beckenschiefstand', text: 'Ausgleich von Schiefständen und Beinlängenunterschieden.' },
    ],
    honorar: [
      { label: 'Chronische Schmerzen', price: '1.840 €' },
      { label: 'Skoliose', price: '1.840 €' },
      { label: 'Bandscheibenvorfall', price: '1.840 €' },
      { label: 'Beinlängenausgleich', price: '640 €' },
    ],
  },
  {
    slug: 'kinder',
    name: 'Kinder',
    navName: 'Kinder',
    icon: 'Baby',
    image: '/images/new-life.jpg',
    imageAlt: 'Frisches Grün und warmes Licht',
    kicker: 'Für unsere kleinen Wesen',
    short:
      'Die ganzheitliche, energetische Begleitung der Gesundheit von Seele, Geist und Körper unserer Kinder - sanft und ohne Druck.',
    lead:
      'Kinderheilung bedeutet für mich die ganzheitliche, energetische Begleitung der Gesundheit von Seele, Geist und Körper unserer kleinen Wesen.',
    body: [
      'Kinder öffnen sich leicht und nehmen die Energiearbeit unmittelbar an - die Begleitung gelingt deshalb oft sanft und ruhig. Es macht Freude, mit Kindern zu arbeiten.',
      'Ich nehme mir Zeit für ein ausführliches Gespräch mit Kind und Eltern, stimme die Begleitung individuell ab und gebe ein kindgerechtes Übungsprogramm mit nach Hause.',
    ],
    honorar: [
      { label: 'Behandlung (je 60 Min.)', price: '450 €' },
      { label: 'Kraft für Körper, Geist und Seele (30 Min.)', price: '90 €' },
    ],
  },
  {
    slug: 'psyche',
    name: 'Psychische Leiden',
    navName: 'Psyche',
    icon: 'Brain',
    image: '/images/golden-water.jpg',
    imageAlt: 'Wasser im warmen, goldenen Licht',
    kicker: 'Ruhe & Nervenstärke',
    short:
      'Begleitung bei Erschöpfung, innerer Unruhe und seelischer Belastung - zurück zu Ruhe, Gelassenheit und innerer Kraft.',
    lead:
      'Psychische Leiden sind starke geistige und seelische Erschöpfungszustände, die sich auf den Körper übertragen und meist schleichend entwickeln.',
    body: [
      'Mein Ziel ist die Wiedererlangung von Ruhe und Gelassenheit, innerer Kraft, Nervenstärke und Ausgeglichenheit. Wir gehen an die Wurzeln: an Blockaden, Sorgen- und Angstmuster, die unbewusst mitgetragen werden.',
      'Die Begleitung verbindet ein ausführliches Therapiegespräch und energetische Arbeit mit einem Trainingsprogramm für den Alltag. Sie ersetzt nicht die Tätigkeit eines Arztes oder Psychologen, sondern kann sie ergänzen.',
    ],
    honorar: [
      { label: 'Behandlungskomplex psychische Leiden', price: '2.440 €' },
    ],
  },
];

// Signatur-Angebot: die Woche bei mir (Krebs-/Begleitungs-Fokus).
export const wochenprogramm = {
  kicker: 'Die Woche bei mir',
  title: 'Eine Woche, die Kraft gibt.',
  intro:
    'Wer zu mir kommt, bleibt eine Woche. Zeit, um anzukommen, zur Ruhe zu finden und neue Kraft zu schöpfen - begleitet von drei intensiven Behandlungen.',
  steps: [
    { n: '1', title: 'Ankommen & Gespräch', text: 'Sie kommen an und finden zur Ruhe. In einem sehr ausführlichen Gespräch schauen wir gemeinsam auf Ihre Situation.' },
    { n: '2', title: 'Drei intensive Behandlungen', text: 'Über die Woche verteilt drei Behandlungen - geistiges Heilen, energetische Beruhigung und Kraft für Körper, Geist und Seele.' },
    { n: '3', title: 'Kraft für zu Hause', text: 'Sie nehmen Übungen und neue Kraft mit nach Hause, die Sie im Alltag weiter tragen.' },
  ],
  priceLabel: 'Eine Woche · drei Behandlungen',
  price: '1.800 - 3.000 €',
  priceNote:
    'Der genaue Betrag richtet sich nach Ihrem individuellen Behandlungskomplex und wird vorab offen besprochen.',
} as const;
