// ─────────────────────────────────────────────────────────────
// Behandlungsschwerpunkte - verbatim-abgeleitet (docs/research/behandlung.md).
// Selbstbewusst beschreibend (Unterstützung, Linderung, Begleitung). Schwere
// Erkrankungen ausschließlich als BEGLEITENDE Behandlung; reißerische bzw.
// garantieartige Formeln der alten Site bewusst nicht übernommen.
// Honorar verbatim von den jeweiligen Honorar-Unterseiten.
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
    slug: 'ruecken',
    name: 'Rücken & Wirbelsäule',
    navName: 'Rücken',
    icon: 'PersonStanding',
    image: '/images/path-forest.jpg',
    imageAlt: 'Ruhiger Pfad durch lichten Wald',
    kicker: 'Aufrecht durchs Leben',
    short:
      'Begleitung bei chronischen Rückenschmerzen, Skoliose, Bandscheibenthemen und Beckenschiefstand - ohne Operation, ohne Korsett.',
    lead:
      'Die häufigste Ursache bei chronischen Schmerzen und Rückenschmerzen ist eine Wirbelsäulenfehlstellung - hervorgerufen durch anhaltende seelische Belastung und einseitige körperliche Beanspruchung über einen längeren Zeitraum.',
    body: [
      'Ich arbeite bei Skoliose, Bandscheibenthemen, Beckenschiefstand und Beinlängenunterschied - sanft, ohne Operation, ohne Korsett und ohne Gestelle. Im Mittelpunkt steht die körperliche Begradigung und Aufrichtung, verbunden mit dem Lösen der seelischen Ursachen.',
      'Zu jeder Begleitung gehören ein sehr ausführliches Therapiegespräch, ein auf Sie zugeschnittener Behandlungskomplex und ein anschließendes Trainingsprogramm für Geist und Körper, das die Wirkung im Alltag trägt.',
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
    name: 'Kinderheilung',
    navName: 'Kinder',
    icon: 'Baby',
    image: '/images/forest-light.jpg',
    imageAlt: 'Warmes Licht fällt durch einen ruhigen Wald',
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
      { label: 'Hypno-Therapie (je 60 Min.)', price: '500 €' },
    ],
  },
  {
    slug: 'psyche',
    name: 'Psychische Leiden',
    navName: 'Psyche',
    icon: 'Brain',
    image: '/images/water-calm.jpg',
    imageAlt: 'Ruhige Wasseroberfläche mit sanften Reflexen',
    kicker: 'Ruhe & Nervenstärke',
    short:
      'Begleitung bei Erschöpfung, innerer Unruhe und seelischer Belastung - zurück zu Ruhe, Gelassenheit und innerer Kraft.',
    lead:
      'Psychische Leiden sind starke geistige und seelische Erschöpfungszustände, die sich auf den Körper übertragen und sich meist schleichend entwickeln - und dadurch nicht sofort bemerkt werden.',
    body: [
      'Mein Ziel ist die Wiedererlangung von Ruhe und Gelassenheit, innerer Kraft, Nervenstärke und Ausgeglichenheit. Wir gehen an die Wurzeln: an Blockaden, Sorgen- und Angstmuster, die unbewusst mitgetragen werden.',
      'Die Begleitung verbindet ein ausführliches Therapiegespräch, energetische Arbeit und Hypnose mit einem Trainingsprogramm für den Alltag. Sie ersetzt nicht die Tätigkeit eines Arztes oder Psychologen, sondern kann sie ergänzen.',
    ],
    honorar: [
      { label: 'Behandlungskomplex psychische Leiden', price: '2.440 €' },
    ],
  },
  {
    slug: 'begleitende-behandlung',
    name: 'Begleitende Behandlung',
    navName: 'Begleitung',
    icon: 'HeartHandshake',
    image: '/images/reed-lake.jpg',
    imageAlt: 'Schilf am stillen See im warmen Gegenlicht',
    kicker: 'An Ihrer Seite',
    short:
      'Eine ergänzende, kraftgebende Begleitung bei schweren Erkrankungen - parallel zur ärztlichen Behandlung, in Würde und Ruhe.',
    lead:
      'Bei schweren Erkrankungen bin ich als Begleitung an Ihrer Seite - ergänzend zu Ihrer ärztlichen Behandlung, nie an ihrer Stelle.',
    body: [
      'Ich führe energetische Beruhigungs- und Kraftbehandlungen für Körper, Geist und Seele durch, dazu Schmerz- und Entzündungsbegleitung. Im Mittelpunkt stehen die Stärkung des Immunsystems sowie die Bewältigung von Angst- und Lebenskrisen - für einen besseren Umgang mit der Erkrankung und ihren Auswirkungen auf die persönliche Lebenssituation.',
      'Ob ab der Diagnose, vor einer Operation oder begleitend zu einer Chemotherapie: Mir geht es darum, Ihnen Kraft zu geben, zu stabilisieren und zu lindern. Die Entscheidung über jede medizinische Behandlung treffen Sie gemeinsam mit Ihren Ärzten.',
    ],
    honorar: [
      { label: 'Begleitender Behandlungskomplex', price: '3.040 €' },
    ],
    begleitend: true,
  },
];
