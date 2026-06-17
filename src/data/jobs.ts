// ─────────────────────────────────────────────────────────────
// Ausbildung & Karriere - Employer Branding.
// Belegt ist NUR die Ausbildung (4 Tracks, verbatim /heilmethoden/wir-bilden-aus/).
// Konkrete bezahlte Stellen, Vergütung, Umfang, Teamgröße: NICHT auf der alten
// Site -> hier ehrlich als „im Erstgespräch zu besprechen" gehalten, Operator-TODO
// (docs/JUDGEMENT_CALLS.md). KEINE erfundenen Benefits/Gehälter/Teamgrößen.
// ─────────────────────────────────────────────────────────────

// Was ausgebildet wird (verbatim, * = RA-MARIA®).
export const ausbildungen = [
  { name: 'Usui-Reiki', detail: 'Alle Grade und Lehrer', icon: 'HandHeart' },
  { name: 'Karuna-Reiki®', detail: 'Alle Grade und Lehrer', icon: 'Sparkles' },
  { name: 'Geistheilung', detail: 'Geistheilungs-Therapeut und Lehrer', icon: 'Sun' },
  { name: 'Meditation', detail: 'Meditations-Trainer und Lehrer', icon: 'Flower2' },
];

// „So arbeiten wir" - ehrlich aus Haltung + Ort + Lehre abgeleitet.
export const werte = [
  {
    icon: 'Footprints',
    title: 'Persönliche Lehre',
    text: 'Du lernst direkt an meiner Seite - im Gespräch, in der Behandlung, Schritt für Schritt. Keine anonyme Schulung, sondern ein echtes Mentoring.',
  },
  {
    icon: 'TreePine',
    title: 'Der Ort',
    text: 'Wir arbeiten in Neuglobsow am Stechlinsee - umgeben von Wald, Wasser und Stille. Ein Ort, der die Arbeit trägt.',
  },
  {
    icon: 'Heart',
    title: 'Arbeit mit Sinn',
    text: 'Menschen ein Stück ihres Weges zu begleiten, gibt jedem Tag Tiefe. Hier zählt nicht Tempo, sondern Achtsamkeit.',
  },
  {
    icon: 'Sprout',
    title: 'Echtes Wachstum',
    text: 'Eine Ausbildung bis zur Lehrbefähigung - in Geistheilung, Reiki und Meditation. Du entwickelst Dich fachlich und persönlich.',
  },
];

export interface Job {
  slug: string;
  title: string;
  tag: string;
  summary: string;
  aufgabenTitle: string;
  aufgaben: string[];
  muss: string[];
  kann: string[];
  bekommst: string[];
  offen: string[]; // ehrlich offen, im Erstgespräch zu klären
  ablauf: string;
}

export const jobs: Job[] = [
  {
    slug: 'ausbildung-mitarbeit',
    title: 'Ausbildung & Mitarbeit in der Praxis',
    tag: 'Lernen & mitwirken',
    summary:
      'Lerne das geistige Heilen von Grund auf - in einem ruhigen, persönlichen Rahmen, direkt an meiner Seite.',
    aufgabenTitle: 'Deine Aufgaben',
    aufgaben: [
      'In Therapiegesprächen und Behandlungen mitwirken und dabei lernen',
      'Die Methoden Schritt für Schritt übernehmen - Geistheilung, Reiki, Meditation',
      'Den ruhigen Praxisalltag in Neuglobsow mittragen',
      'Menschen mit Offenheit, Ruhe und Achtsamkeit begegnen',
    ],
    muss: [
      'Aufrichtiges Interesse an geistigem Heilen und alternativen Methoden',
      'Einfühlungsvermögen, Ruhe und Verlässlichkeit',
      'Die Offenheit, über längere Zeit zu lernen',
    ],
    kann: [
      'Erste Erfahrung mit Reiki, Meditation oder Energiearbeit',
      'Erfahrung im Umgang mit Menschen (Pflege, Beratung, Pädagogik)',
    ],
    bekommst: [
      'Eine fundierte Ausbildung bis zur Lehrbefähigung - in Geistheilung, Usui- und Karuna-Reiki und Meditation',
      'Persönliches Mentoring direkt durch Dr. Fabian Forbrig',
      'Einen besonderen Arbeitsplatz am Stechlinsee, in Wald und Stille',
      'Eine Arbeit mit Sinn - Menschen ein Stück ihres Weges begleiten',
    ],
    offen: ['Umfang & Zeitmodell', 'Ausbildungs- bzw. Vergütungsmodell', 'Beginn'],
    ablauf:
      'Wir lernen uns in einem persönlichen Erstgespräch kennen - telefonisch oder vor Ort. Alles Weitere besprechen wir in Ruhe.',
  },
  {
    slug: 'initiativ-hospitanz',
    title: 'Initiativbewerbung & Hospitanz',
    tag: 'Reinschnuppern',
    summary:
      'Du fühlst Dich angesprochen, aber nichts passt genau? Dann schreib mir - ich freue mich über Menschen, die zu uns passen.',
    aufgabenTitle: 'Worum es geht',
    aufgaben: [
      'Hospitieren und die Praxis in Ruhe kennenlernen',
      'Herausfinden, ob der Weg des Heilens zu Dir passt',
      'Ein offenes Gespräch über Deinen Beweggrund',
    ],
    muss: [
      'Aufrichtiges Interesse und Respekt vor der Arbeit',
      'Ein paar Sätze über Dich und das, was Dich antreibt',
    ],
    kann: [
      'Ein Hintergrund in Gesundheit, Pädagogik oder Beratung',
    ],
    bekommst: [
      'Ein offenes, ehrliches Gespräch auf Augenhöhe',
      'Einen echten Einblick in die Praxis und die Methoden',
    ],
    offen: ['Dauer & Form der Hospitanz'],
    ablauf:
      'Ruf einfach an oder schreib eine E-Mail - wir finden gemeinsam heraus, was passt.',
  },
];
