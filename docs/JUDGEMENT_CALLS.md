# Judgement Calls & Operator-TODOs — demo-sonnentor

Entscheidungen, die ich (Blacklyne) beim Redesign getroffen habe, plus offene Punkte,
die der Inhaber (Dr. Fabian Siegfried Forbrig) bestätigen / liefern sollte. Nichts wurde
erfunden; wo Substanz fehlte, steht hier ein TODO statt einer Erfindung.

---

## A. Rechtlich / HWG (am wichtigsten)

1. **„Wunderwaffe der Heilung" (Heil-Essenz) - BEWUSST NICHT übernommen.**
   Die alte Seite bewirbt eine „Energie-Reiki-Heil-Essenz" mit expliziten Heil-/
   Krebs-Versprechen („wundersamer Heilwirkung bei Tumoren", „Tumor Bekämpfer").
   Das ist HWG-rechtlich heikel und wurde komplett ausgelassen. → Operator-Entscheidung,
   ob ein Produkt überhaupt beworben werden soll - dann nur ohne jede Krankheits-/
   Heilaussage.

2. **Reißerische Formeln entschärft.** Hero der alten Site („Wunderheilung von Krebs
   und Skoliose", „Nichts ist unheilbar", „Erfahren Sie HEILUNG !!!") wurde NICHT als
   Überschrift übernommen. Die Diagnoseliste ist als ruhige Positionierung gefasst.
   Der Satz „Ich gebe keine Heilversprechen (gesetzlich vorgeschrieben)" steht prominent.

3. **Krebs → „Begleitende Behandlung".** Als ergänzende Begleitung positioniert, mit
   dezentem Hinweis „ergänzt die ärztliche Behandlung, ersetzt sie nicht". Garantie-
   verdächtige Sätze der alten Site („Die Tumore können aufhören zu wachsen … sich
   auflösen") wurden weggelassen.

4. **Impressum/Datenschutz vor Go-Live juristisch prüfen lassen.** Gesundheitskontext =
   sensible Daten. Der Inhaber führt **keinen Heilpraktiker-Titel** und keine Aufsichts-
   behörde - die Seite positioniert ihn als „Heiler / alternative Heilmethoden". Bitte
   berufsrechtliche Einordnung (HeilprG) und die Datenschutzerklärung anwaltlich /
   durch eine DSB bestätigen lassen.

## B. Inhalte / Substanz (Operator liefern)

5. **Echtes Portrait des Heilers fehlt.** Es gibt kein Foto von Dr. Forbrig. Für
   „Über mich" und die Startseiten-Karte wurden stimmungsvolle Natur-/Hand-Bilder
   genutzt. → Bitte ein echtes Portrait liefern (stärkster Vertrauensanker).

6. **Erfahrungsberichte:** 6 von 13 echten Stimmen (von /kommentare/) kuratiert und
   behutsam entschärft (konkrete medizinische Heil-Schlüsse wie Gradzahlen, „Krebs
   ohne Chemo", „Skoliose verschwunden" herausgenommen; Dankbarkeit/Wohlbefinden
   blieb). Originale vollständig in `docs/research/core.md`. → Bitte finale Auswahl &
   Wortlaut freigeben und **Einwilligung der genannten Personen zur Veröffentlichung**
   bestätigen. Hinweis: einige Stimmen nennen „Grömitz" (früherer Standort) bzw.
   „Sonja"/„Siggi" - bitte klären, ob/wie diese verwendet werden sollen.

7. **Karriere / Stellen:** Die alte Seite nennt nur 4 Ausbildungs-Tracks (Usui-Reiki,
   Karuna-Reiki, Geistheilung, Meditation - jeweils bis Lehrer, System RA-MARIA), aber
   KEINE konkreten bezahlten Stellen. Die Jobanzeigen sind deshalb ehrlich als
   „Ausbildung & Mitarbeit" und „Initiativbewerbung & Hospitanz" gehalten; Vergütung,
   Umfang, Beginn stehen als „im Erstgespräch klären wir". → Wenn echte Stellen mit
   Vergütung/Umfang ausgeschrieben werden sollen, bitte Daten liefern - dann wird daraus
   eine vollwertige Stellenanzeige (Komponente `Jobanzeige.astro` ist wiederverwendbar).
   **Keine Benefits/Gehälter/Teamgrößen erfunden.**

8. **Honorar** verbatim von der alten Site übernommen (210 / 140 / 1.840 / 640 / 450 /
   90 / 500 / 2.440 / 3.040 €). → Bitte Aktualität bestätigen.

## C. Technik / Daten

9. **Domain-Platzhalter:** `demo-sonnentor.pages.dev` in `src/data/site.ts`
   (url) sowie in SchemaOrg/canonical/OG. → Vor Go-Live auf echte Domain umstellen.

10. **YouTube:** Die 2 Videos der alten Startseite (IDs `spznxzhWLjU`, `0DyJ6HPcJuI`) sind
    auf der neuen Startseite eingebunden - cookie-konform (nocookie, Klick-zum-Laden) und
    bewusst **neutral betitelt** („Einblicke in meine Arbeit", „Erfahrungen & Geschichten").
    Es sind **Features des Kanals „Welt im Wandel.TV"** (kein eigener SonnenTor-Kanal); die
    Original-Titel („Wunderheilung von Krebs …", „Nichts ist unheilbar …") wurden NICHT als
    Überschrift übernommen. Den toten „YouTube-Kanal"-Link im Footer habe ich entfernt.
    → Falls es eigene Videos/einen eigenen Kanal gibt: liefern, dann ergänze ich sie.

11. **Google-Bewertungen (Glaseffekt-Sektion):** Es gibt ein echtes Google-Profil mit
    **Rating 5,0 - aber bisher nur 1 Bewertung**. Die neue Glas-Sektion zeigt das echte
    5,0-Rating + Link zum Profil und lädt zum Bewerten ein; **es wurden KEINE Google-
    Rezensionen erfunden**. Die Zitate daneben sind die echten /kommentare-Erfahrungs-
    berichte (klar als solche ausgewiesen, mit Disclaimer) - NICHT als Google ausgegeben.
    → (a) Mehr Google-Bewertungen sammeln (die Sektion skaliert automatisch). (b) Für ein
    Live-Widget mit echten Rezensionstexten Place-ID/Google-Business-Zugang liefern - ein
    statisches, cookie-armes Widget ist bewusst gewählt (DSGVO, Performance).

12b. **Podcast eingebunden:** Video `tqcq9mVs5sg` („Gesundheit für Empathen") ist auf
    Start- und Erfahrungsberichte-Seite eingebunden (cookie-sicher) und verlinkt - bewusst
    **neutral betitelt** („Podcast: Im Gespräch mit Fabian Forbrig"); der Original-Titel
    nennt „Wunder der Heilung - Krebs" und wird NICHT als Überschrift übernommen.

12. **Telefon:** Mobil `0177 3710662` (WhatsApp-fähig) als primärer CTA; Festnetz
    `033082 660975` als Terminleitung mit Sprechzeit Mo-Fr 18:45-20:00 („bitte lange
    klingeln lassen"). Die abweichende Nummer auf der alten Datenschutz-Seite
    (039603…) wurde als veraltete Vorlage ignoriert. → Bitte bestätigen.

13. **Bilder:** Alle Stimmungs-/Naturfotos sind lizenzfreie Pexels-Stockbilder (Liste in
    `docs/research/images-credits.md`). → Wo möglich durch echte Fotos (Praxis,
    Stechlinsee, Portrait) ersetzen.

14. **Kein Kontaktformular** (bewusst): WhatsApp/Telefon/E-Mail/Anfahrt als Tiles -
    datensparsam im Gesundheitskontext. Die alte Seite hatte ein Formular; bewusst nicht
    übernommen.

16. **Vollständiges Leistungsverzeichnis übernommen:** Die 4 Footer-Kategorien der alten
    Seite (Wir behandeln bei / helfen bei / wenden an / bieten an) sind jetzt komplett &
    verbatim auf `/methoden` („Anwendungen & Angebote im Überblick") und je relevant auch
    auf den Methoden-Unterseiten. Die B2B-Seite **/partner/** (Anfrageformular für
    ganzheitlich orientierte Ärzte/Heilpraktiker) wurde **nicht** übernommen - Nischen-
    Funktion. → Bei Bedarf liefere ich eine schlanke Partner-Sektion nach.

15. **„Presse" der alten Seite (Spiegel 33/2011) NICHT übernommen** - die zitierten
    Spiegel-Artikel sind kritische/allgemeine Stücke, kein Praxis-Porträt; als „Presse"
    dargestellt wären sie irreführend.
