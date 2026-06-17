// ─────────────────────────────────────────────────────────────
// Erfahrungsberichte - echte Patientenstimmen von /kommentare/ (verbatim),
// kuratiert auf die ruhigsten 6 und behutsam entschärft: konkrete medizinische
// Heil-/Garantie-Schlüsse (Gradzahlen, „Krebs ohne Chemo", „verschwunden") sind
// herausgenommen, die persönliche Dankbarkeit & das Wohlbefinden bleiben.
// Vollständige Original-Stimmen + Auswahl-Begründung: docs/JUDGEMENT_CALLS.md.
// Disclaimer dazu: site.disclaimer.testimonial.
// ─────────────────────────────────────────────────────────────

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
  context: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Ich war ganz entspannt und hatte keine Ahnung, was Sie da gemacht haben. Das Gesamtpaket hat mir neben einer Stärkung der Lebensfreude eine gut wahrnehmbare Gesundheit und Vitalität gebracht. Mit dazu beigetragen hat bestimmt auch Ihre sehr freundliche, einfühlende Wesensart.',
    author: 'E. Lehnst',
    location: '',
    context: 'Begleitende Behandlung',
  },
  {
    quote:
      'Ich kann wieder aufrecht durchs Leben gehen, ohne Schmerzen und ganz gerade. Vielen, vielen Dank.',
    author: 'U. Kohlscheen',
    location: 'Oldenburg',
    context: 'Rücken',
  },
  {
    quote:
      'Die Behandlung hat nicht nur meine Blockaden und Verspannungen im Rücken gelöst, sondern auch im Kopf neue Blickrichtungen eröffnet. Ich gehe die Dinge gelassener und ruhiger an. Anfangs war ich skeptisch - jetzt bin ich total froh, dass ich auf mein Bauchgefühl gehört habe.',
    author: 'Annette Rosenstiel-Miehm',
    location: 'Blumberg',
    context: 'Rücken & Psyche',
  },
  {
    quote:
      'Etliche Behandlungen konnten mir bei meinen Rücken- und Kopfschmerzen nicht helfen. Heute geht es mir sehr gut, und wir haben neue Energie gewonnen. Es gibt doch etwas zwischen Himmel und Erde - davon bin ich jetzt überzeugt.',
    author: 'H. Maybaum',
    location: 'Grömitz',
    context: 'Chronische Schmerzen',
  },
  {
    quote:
      'Herzlichen Dank für die vielen Hilfestellungen innerhalb meiner Familie. Bei uns ist einiges in Bewegung gekommen, und mein Sohn konnte in der Schule und im Sport große Schritte machen. Ich kann die Praxis uneingeschränkt empfehlen.',
    author: 'S. Fritsche',
    location: '',
    context: 'Kinder & Familie',
  },
  {
    quote:
      'Ich habe meine Lebensqualität zurückgewonnen und fühle mich wie neu geboren. Dieser Zustand ist einfach unbeschreiblich. Ich bin so dankbar - machen Sie weiter so und helfen Sie vielen anderen Menschen.',
    author: 'Corinna B.',
    location: 'Berlin',
    context: 'Rücken',
  },
];
