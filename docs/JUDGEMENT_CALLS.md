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

10. **YouTube:** 2 Videos eingebunden (IDs `spznxzhWLjU`, `0DyJ6HPcJuI`), cookie-konform
    (nocookie, Klick-zum-Laden), neutral betitelt („Einblicke", „Erfahrungen"). Kanal-URL
    `@gesundheitspraxissonnentor` ist geraten. → Echte Kanal-URL + gewünschte Videos
    bestätigen.

11. **Google Maps / Reviews:** Karte per Adresse eingebettet (cookie-sicher, click-to-load).
    Eine Place-ID wurde nicht gefunden; **es wurden KEINE Google-Bewertungen erfunden**.
    → Falls ein Google-Unternehmensprofil existiert: Place-ID liefern, dann echte
    Reviews + Aggregat-Rating.

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

15. **„Presse" der alten Seite (Spiegel 33/2011) NICHT übernommen** - die zitierten
    Spiegel-Artikel sind kritische/allgemeine Stücke, kein Praxis-Porträt; als „Presse"
    dargestellt wären sie irreführend.
