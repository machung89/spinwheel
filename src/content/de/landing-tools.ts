import type { LandingText } from "../types";

export const landingTools: Record<string, LandingText> = {
  "team-generator": {
    name: "Teamgenerator",
    card: "Teile eine Namensliste in faire, zufällige Teams.",
    seoTitle: "Teamgenerator – Namen fair in zufällige Teams aufteilen",
    metaDescription: "Kostenloser Teamgenerator. Füge eine Namensliste ein, wähle die Anzahl der Teams oder Personen pro Team und erhalte mit einem Klick ausgewogene Gruppen.",
    h1: "Zufälliger Teamgenerator",
    lead: "Füge deine Liste ein, wähle, wie viele Teams du brauchst, und erhalte mit einem Klick ausgewogene Zufallsgruppen.",
    sections: [
      {
        heading: "Jedes Mal ausgewogene Teams",
        paragraphs: [
          "Der Generator mischt deine Liste kryptografisch sicher und verteilt die Namen dann einzeln wie Spielkarten. So unterscheiden sich die Teamgrößen nie um mehr als eine Person – teilst du 13 Personen in 3 Teams, erhältst du Teams mit 5, 4 und 4.",
          "Du kannst nach Anzahl der Teams aufteilen (zum Beispiel vier Gruppen für Stationen) oder nach Personen pro Team (zum Beispiel Paare oder Dreiergruppen). Gib den Teams Namen wie Rot, Blau und Grün und kopiere das Ergebnis in einen Chat, ein Dokument oder eine Folie.",
        ],
      },
      {
        heading: "Wo Zufallsteams helfen",
        list: [
          "Gruppenarbeiten und Laborpartner im Unterricht",
          "Spontane Basketball-, Fußball- oder Völkerballspiele",
          "Teambuilding-Aktivitäten und Hackathons",
          "Quizabende und Partyspiele",
          "Breakout-Räume in Online-Meetings",
        ],
      },
      {
        heading: "Warum Zufall besser ist als Mannschaftswählen",
        paragraphs: [
          "Mannschaftskapitäne wählen zu lassen, ist Tradition – und ein verlässlicher Weg, jemanden auszugrenzen. Zufallsteams sind schneller, mischen Cliquen durch und lassen keinen Verdacht auf Bevorzugung aufkommen. Brauchst du ausgeglichene Stärken, erzeuge mehrere Male und nimm die ausgewogenste Aufteilung, oder teile erfahrene und neue Spieler getrennt auf und kombiniere die Ergebnisse.",
        ],
      },
    ],
    howTo: [
      { title: "Namen einfügen", text: "Einer pro Zeile oder durch Kommas getrennt. Doppelte werden entfernt." },
      { title: "Aufteilung wählen", text: "Lege die Anzahl der Teams oder Personen pro Team fest." },
      { title: "Teams benennen", text: "Optional: Teamnamen durch Kommas getrennt eingeben." },
      { title: "Erzeugen", text: "Ergebnis kopieren oder für eine neue Mischung erneut mischen." },
    ],
    benefits: [
      { title: "Gleiche Größen", text: "Teams unterscheiden sich nie um mehr als eine Person." },
      { title: "Echt zufällig", text: "Nutzt einen kryptografisch sicheren Fisher-Yates-Mix." },
      { title: "Schnell geteilt", text: "Alle Teams mit einem Klick als Text kopieren." },
      { title: "Privat", text: "Namen werden nur in deinem Browser verarbeitet." },
    ],
    faqs: [
      { q: "Wie werden die Teams fair?", a: "Die Liste wird mit einem unverzerrten Fisher-Yates-Mix gemischt, der den kryptografischen Zufallsgenerator deines Browsers nutzt. Danach werden die Namen reihum verteilt, damit die Größen ausgeglichen bleiben." },
      { q: "Kann ich Paare bilden?", a: "Ja. Wähle „Personen pro Team“ und gib 2 ein. Bei ungerader Personenzahl hat eine Gruppe drei Mitglieder." },
      { q: "Gibt es eine Grenze für Namen?", a: "Du kannst Hunderte Namen einfügen; der Generator arbeitet sofort." },
      { q: "Kann ich bestimmte Personen zusammen lassen?", a: "Nicht automatisch. Ein einfacher Trick: Trag sie in eine Zeile ein, etwa „Sam & Alex“, dann zählen sie als ein Eintrag." },
    ],
  },
  "random-number-generator": {
    name: "Zufallszahlengenerator",
    card: "Zufallszahlen in jedem Bereich, mit oder ohne Wiederholung.",
    seoTitle: "Zufallszahlengenerator – Zahlen in jedem Bereich ziehen",
    metaDescription: "Erzeuge Zufallszahlen zwischen beliebigem Minimum und Maximum. Eine bis 1.000 Zahlen, mit oder ohne Wiederholung, sortiert oder nicht. Kostenlos und sicher.",
    h1: "Zufallszahlengenerator",
    lead: "Wähle einen Bereich und wie viele Zahlen du brauchst, und erhalte sofort unverzerrte Zufallsergebnisse.",
    sections: [
      {
        heading: "Sichere, unverzerrte Zahlen",
        paragraphs: [
          "Viele einfache Zufallstools nutzen Math.random – gut für Spiele, aber nicht darauf ausgelegt, unvorhersehbar zu sein. Dieser Generator nutzt die Web Crypto API mit Rejection Sampling, denselben Ansatz, der für sicherheitskritischen Code empfohlen wird. Jede Zahl in deinem Bereich hat genau die gleiche Chance, auch bei riesigen Bereichen.",
          "Schalte „Keine Wiederholungen“ ein, um eindeutige Zahlen zu ziehen – praktisch für Tombolas, Verlosungen unter Freunden oder zufällige IDs. Du kannst bis zu 1.000 Zahlen auf einmal erzeugen und auf Wunsch sortieren.",
        ],
      },
      {
        heading: "Häufige Einsatzzwecke",
        list: [
          "Tombola- und Türpreis-Ziehungen",
          "Einen Gewinner per Losnummer bestimmen",
          "Unterricht zu Statistik und Wahrscheinlichkeit",
          "Eine zufällige Seite, Frage oder einen Platz wählen",
          "Brettspiele, für die dir ein Würfel fehlt",
        ],
      },
    ],
    howTo: [
      { title: "Bereich festlegen", text: "Minimum und Maximum eingeben. Negative Zahlen gehen auch." },
      { title: "Anzahl wählen", text: "Eine oder bis zu 1.000 Zahlen." },
      { title: "Optionen setzen", text: "Wiederholungen erlauben oder verhindern und Sortierung wählen." },
      { title: "Erzeugen", text: "Ergebnis kopieren oder erneut erzeugen." },
    ],
    benefits: [
      { title: "Jeder Bereich", text: "Von 1–6 bis plus/minus vier Billiarden." },
      { title: "Ohne Wiederholung", text: "Eindeutige Ziehungen für Tombolas und Verlosungen." },
      { title: "Krypto-Qualität", text: "Nutzt crypto.getRandomValues statt Math.random." },
      { title: "Verlauf", text: "Frühere Ergebnisse stehen unter dem Generator." },
    ],
    faqs: [
      { q: "Ist dieser Zufallszahlengenerator wirklich zufällig?", a: "Er nutzt den kryptografisch sicheren Zufallszahlengenerator deines Geräts, der sich auch für Sicherheitszwecke eignet. Rejection Sampling beseitigt die kleine Verzerrung naiver Modulo-Rechnung." },
      { q: "Wie ziehe ich Lottozahlen?", a: "Setz den Bereich (zum Beispiel 1 bis 49), „Wie viele Zahlen?“ auf 6 und schalte „Keine Wiederholungen“ ein. Die Ergebnisse sind nur zum Spaß und verbessern deine Chancen im echten Lotto nicht." },
      { q: "Kann ich Dezimalzahlen erzeugen?", a: "Der Generator erzeugt ganze Zahlen. Für Dezimalzahlen erzeuge einen größeren Bereich und teile – zum Beispiel 1 bis 1000 geteilt durch 100 ergibt zwei Nachkommastellen." },
    ],
  },
  "random-letter-generator": {
    name: "Buchstabengenerator",
    card: "Zufällige Buchstaben für Wortspiele und Lautübungen.",
    seoTitle: "Buchstabengenerator – Zufällige Buchstaben von A bis Z",
    metaDescription: "Erzeuge zufällige Buchstaben von A bis Z. Vokale oder Konsonanten, Groß- oder Kleinbuchstaben, schwere Buchstaben auslassen und mehrere ohne Wiederholung ziehen.",
    h1: "Zufälliger Buchstabengenerator",
    lead: "Zieh einen zufälligen Buchstaben oder gleich mehrere – mit Optionen für Vokale, Konsonanten und das Auslassen schwieriger Buchstaben.",
    sections: [
      {
        heading: "Gemacht für Wortspiele",
        paragraphs: [
          "Stadt-Land-Fluss, Buchstabensalat und Rechtschreib-Challenges beginnen alle mit einem zufälligen Buchstaben. Die Option „Schwere Buchstaben auslassen“ lässt Q, U, V, X, Y und Z weg, die Kategoriespiele oft ins Stocken bringen.",
          "Du brauchst Steine für ein Wortbauspiel? Zieh sieben Buchstaben ohne Wiederholung, oder mische Vokale und Konsonanten, indem du aus beiden Sets getrennt ziehst.",
        ],
      },
      {
        heading: "Für Lehrkräfte und Eltern",
        paragraphs: [
          "Nutze Paare aus Groß- und Kleinbuchstaben (Aa, Bb) zum Buchstabenerkennen, nur Vokale für Vokalübungen oder eine Reihe Buchstaben als kurzes Rechtschreib-Warm-up. Der Generator funktioniert super am Beamer oder Tablet.",
        ],
        list: ["Laut-Aufwärmübungen", "Nenne drei Dinge, die anfangen mit …", "Bilde das längste Wort aus diesen Buchstaben", "Impulse für Schreibübungen"],
      },
    ],
    howTo: [
      { title: "Buchstabenset wählen", text: "Alle Buchstaben, nur Vokale oder nur Konsonanten." },
      { title: "Schreibweise wählen", text: "Großbuchstaben, Kleinbuchstaben oder beides." },
      { title: "Anzahl festlegen", text: "1 bis 26 Buchstaben, mit oder ohne Wiederholung." },
      { title: "Erzeugen", text: "Deine Buchstaben erscheinen sofort." },
    ],
    benefits: [
      { title: "Spielefreundlich", text: "Schwere Buchstaben auslassen für flüssigere Kategoriespiele." },
      { title: "Flexible Sets", text: "Vokale, Konsonanten oder das ganze Alphabet." },
      { title: "Ohne Wiederholung", text: "Eindeutige Buchstaben für Legespiele." },
      { title: "Fair", text: "Jeder Buchstabe hat die gleiche Chance." },
    ],
    faqs: [
      { q: "Kann ich bestimmte Buchstaben ausschließen?", a: "Nutze „Schwere Buchstaben auslassen“, um Q, U, V, X, Y und Z zu entfernen, oder das Buchstabenrad, auf dem du jeden Buchstaben ausblenden kannst." },
      { q: "Sind Umlaute enthalten?", a: "Der Generator nutzt das Alphabet mit 26 Buchstaben ohne Ä, Ö, Ü und ß. Du kannst sie einem eigenen Rad hinzufügen." },
      { q: "Zählt Y hier als Vokal?", a: "Y gilt bei den Filtern für Vokale und Konsonanten als Konsonant." },
    ],
  },
  "dice-roller": {
    name: "Würfel",
    card: "Bis zu 12 Würfel werfen – W4, W6, W8, W10, W12, W20 oder W100.",
    seoTitle: "Online-Würfel – Virtuelle Würfel werfen (W4 bis W100)",
    metaDescription: "Wirf bis zu 12 virtuelle Würfel online: W4, W6, W8, W10, W12, W20 oder W100. Modifikatoren hinzufügen, Summen sehen und Wurfverlauf behalten. Fair und kostenlos.",
    h1: "Online-Würfel",
    lead: "Würfel verloren? Wirf bis zu zwölf auf einmal, vom vierseitigen W4 bis zum hundertseitigen W100.",
    sections: [
      {
        heading: "Jeder Würfel, den du brauchst",
        paragraphs: [
          "Brettspiele brauchen meist sechsseitige Würfel, Pen-and-Paper-Rollenspiele aber ein ganzes Set: W4, W6, W8, W10, W12, W20 und den Prozentwürfel W100. Wähle Art und Anzahl, füge einen Modifikator für Boni oder Mali hinzu, und der Würfel zeigt jeden Wurf und die Summe.",
          "Deine letzten Würfe stehen unter den Würfeln, sodass du nachsehen kannst, was vor zwei Runden passiert ist – praktisch, wenn sich der Tisch nicht einig ist.",
        ],
      },
      {
        heading: "Faire Würfe",
        paragraphs: [
          "Echte Würfel können durch die Herstellung leicht unausgewogen sein; virtuelle Würfel haben dieses Problem nicht. Jeder Wurf nutzt den kryptografischen Zufallsgenerator deines Browsers, sodass jede Seite genau die gleiche Chance hat.",
        ],
      },
      {
        heading: "Ideal für",
        list: ["Brettspiele mit fehlenden Würfeln", "Pen-and-Paper-Runden (2W6, 1W20+5, 4W6 und mehr)", "Mathe und Wahrscheinlichkeit im Unterricht", "Partyspiele und Familien-Spieleabende", "Schnelle Zufallsentscheidungen"],
      },
    ],
    howTo: [
      { title: "Würfel wählen", text: "Wähle Anzahl (1–12) und Seitenzahl." },
      { title: "Modifikator hinzufügen", text: "Optional: eine Zahl zur Summe addieren oder abziehen." },
      { title: "Würfeln", text: "Sieh jeden Würfel und die Summe." },
      { title: "Verlauf prüfen", text: "Die letzten Würfe stehen darunter." },
    ],
    benefits: [
      { title: "Sieben Würfelarten", text: "W4, W6, W8, W10, W12, W20 und W100." },
      { title: "Summen und Modifikatoren", text: "Kein Kopfrechnen nötig." },
      { title: "Perfekt fair", text: "Keine gezinkten oder abgenutzten Seiten." },
      { title: "Immer dabei", text: "Funktioniert auf jedem Handy – ohne App." },
    ],
    faqs: [
      { q: "Sind Online-Würfel fair?", a: "Diese schon. Jede Seite wird mit einem kryptografisch sicheren Zufallszahlengenerator und Rejection Sampling bestimmt, alle Seiten sind also gleich wahrscheinlich." },
      { q: "Wie würfle ich 1W20+5?", a: "Setz die Anzahl auf 1, die Seiten auf W20 und den Modifikator auf 5, dann drück auf Würfeln." },
      { q: "Kann ich verschiedene Würfelarten gleichzeitig werfen?", a: "Wirf jeweils eine Art. Für gemischte Würfe wirf die Arten nacheinander – der Verlauf behält beide im Blick." },
    ],
  },
  "coin-flip": {
    name: "Münzwurf",
    card: "Wirf eine faire virtuelle Münze, einmal oder hundertmal.",
    seoTitle: "Münzwurf online – Kopf oder Zahl werfen",
    metaDescription: "Wirf online eine virtuelle Münze für ein faires Kopf oder Zahl. Einmal oder 100-mal werfen, Serien verfolgen und das Verhältnis sehen. Kostenlos und sofort.",
    h1: "Münze werfen online",
    lead: "Kopf oder Zahl? Wirf eine perfekt faire virtuelle Münze – einmal für eine Entscheidung oder hundertmal, um Wahrscheinlichkeit in Aktion zu sehen.",
    sections: [
      {
        heading: "Eine perfekt faire Münze",
        paragraphs: [
          "Forschende haben herausgefunden, dass echte Münzen etwas häufiger als in der Hälfte der Fälle auf der Seite landen, mit der sie gestartet sind. Eine virtuelle Münze hat keine Startseite und keine Daumentechnik: Jeder Wurf ist eine neue 50/50-Ziehung aus dem kryptografischen Zufallsgenerator deines Browsers.",
          "Mit „10× werfen“ oder „100× werfen“ machst du ein schnelles Experiment. Du siehst, wie das Kopf-Zahl-Verhältnis um 50 % schwankt und sich mit mehr Würfen annähert – das Gesetz der großen Zahlen in Aktion.",
        ],
      },
      {
        heading: "Wann man eine Münze wirft",
        list: ["Entscheiden, wer anfängt oder Anstoß hat", "Ein Unentschieden zwischen zwei Optionen auflösen", "Schnelle Ja-Nein-Entscheidungen", "Wahrscheinlichkeit im Unterricht", "Seitenwahl im Spiel"],
      },
    ],
    howTo: [
      { title: "Ansagen", text: "Kopf oder Zahl? Sag es laut." },
      { title: "Werfen", text: "Drück „Münze werfen“ und sieh sie kreiseln." },
      { title: "Ergebnis sehen", text: "Kopf oder Zahl erscheint mit deiner laufenden Statistik." },
      { title: "Experimentieren", text: "Probier „100× werfen“, um das Verhältnis gegen 50 % gehen zu sehen." },
    ],
    benefits: [
      { title: "Genau 50/50", text: "Keine Verzerrung durch Gewicht, Abnutzung oder Technik." },
      { title: "Serienwürfe", text: "10 oder 100 Münzen sofort werfen." },
      { title: "Statistik", text: "Summen, Serien und letzte Ergebnisse verfolgen." },
      { title: "Barrierefrei", text: "Ergebnisse werden Screenreadern angesagt." },
    ],
    faqs: [
      { q: "Ist ein virtueller Münzwurf 50/50?", a: "Ja. Jeder Wurf hat genau 50 % Chance auf Kopf, bestimmt mit dem kryptografischen Zufallszahlengenerator deines Browsers." },
      { q: "Warum kam fünfmal hintereinander Kopf?", a: "Serien sind normal! Fünfmal Kopf in Folge hat etwa eine Chance von 1 zu 32 und kommt bei vielen Würfen ziemlich oft vor." },
      { q: "Kann ich mehr als eine Münze werfen?", a: "Nutze „10× werfen“ oder „100× werfen“, um viele auf einmal zu werfen und die Summen zu sehen." },
    ],
  },
  "yes-or-no-picker": {
    name: "Ja-oder-Nein-Generator",
    card: "Sofort eine Antwort: Ja, Nein oder Vielleicht.",
    seoTitle: "Ja-oder-Nein-Generator – Sofort eine Zufallsantwort",
    metaDescription: "Stell eine Frage und erhalte sofort eine zufällige Ja-oder-Nein-Antwort. Mit „Vielleicht“ oder Best of three. Schnell und fair für kleine Entscheidungen.",
    h1: "Ja-oder-Nein-Generator",
    lead: "Tipp deine Frage ein (oder nicht) und erhalte sofort Ja oder Nein. Kein Drehen, kein Warten.",
    sections: [
      {
        heading: "Wenn du einfach eine Antwort brauchst",
        paragraphs: [
          "Das Ja-oder-Nein-Rad ist toll, wenn du Spannung willst. Dieser Generator ist für den Moment, in dem du sofort eine Antwort brauchst. Drück den Knopf, und du bekommst Ja oder Nein mit exakt gleicher Chance – oder schalte „Vielleicht“ für drei Antworten ein.",
          "„Best of three“ wirft dreimal und folgt der Mehrheit, was manche überzeugender finden als ein einzelnes Ergebnis. Deine letzten Fragen und Antworten stehen darunter, damit du zurückblicken kannst.",
        ],
      },
      {
        heading: "Mit Bedacht nutzen",
        paragraphs: [
          "Eine Zufallsantwort ist perfekt für kleine, umkehrbare Entscheidungen: Nachtisch oder nicht, laufen oder fahren, jetzt anfangen oder nach dem Mittagessen. Für Wichtiges nutze sie, um dein Bauchgefühl zu prüfen – enttäuscht dich die Antwort, weißt du, was du wirklich willst.",
        ],
      },
    ],
    howTo: [
      { title: "Fragen", text: "Tipp eine Ja-Nein-Frage ein oder denk dir eine." },
      { title: "Optionen", text: "„Vielleicht“ hinzufügen oder Best of three wählen." },
      { title: "Antwort holen", text: "Drück den Knopf für ein sofortiges Ergebnis." },
      { title: "Zurückblicken", text: "Die letzten Antworten stehen darunter." },
    ],
    benefits: [
      { title: "Sofort", text: "Keine Animation – die Antwort erscheint direkt." },
      { title: "Fair", text: "Gleiche Chancen für jede Antwort." },
      { title: "Best of three", text: "Mehrheitsentscheid für mehr Sicherheit." },
      { title: "Privat", text: "Deine Fragen verlassen nie dein Gerät." },
    ],
    faqs: [
      { q: "Ist die Ja-oder-Nein-Antwort zufällig?", a: "Ja. Jede Antwort wird mit einem kryptografisch sicheren Zufallszahlengenerator mit exakt gleichen Chancen bestimmt." },
      { q: "Wie funktioniert Best of three?", a: "Der Generator zieht bis zu dreimal Ja oder Nein und hört auf, sobald eine Antwort zwei Stimmen hat. Die einzelnen Stimmen siehst du unter der Antwort." },
      { q: "Wird meine Frage gespeichert?", a: "Nur auf dieser Seite, solange sie geöffnet ist. Fragen werden nirgendwohin gesendet." },
    ],
  },
  "truth-or-dare-generator": {
    name: "Wahrheit-oder-Pflicht-Generator",
    card: "Familienfreundliche Fragen und Aufgaben nach Altersgruppe.",
    seoTitle: "Wahrheit-oder-Pflicht-Generator – Jugendfreie Fragen",
    metaDescription: "Kostenloser Wahrheit-oder-Pflicht-Generator mit jugendfreien Fragen und Aufgaben für Kinder, Teens und Erwachsene. Ohne Wiederholungen, mit Spielerrunden.",
    h1: "Wahrheit-oder-Pflicht-Generator",
    lead: "Zieh mit einem Tipp eine neue Wahrheit oder Pflicht. Altersgruppe wählen, Spieler hinzufügen und das Spiel läuft von allein.",
    sections: [
      {
        heading: "Jugendfreie Aufgaben für jede Runde",
        paragraphs: [
          "Jede Aufgabe hier ist so geschrieben, dass das Spiel lustig und angenehm bleibt. Die Kinderfragen sind albern und harmlos, die Teen-Fragen passen zu Übernachtungspartys und Jugendgruppen, und das Erwachsenen-Set ist für Partys gedacht, auf denen gelacht statt gezappelt werden soll.",
          "Aufgaben wiederholen sich erst, wenn du die ganze Liste dieser Altersgruppe und Art gesehen hast – so bleiben auch lange Spiele frisch.",
        ],
      },
      {
        heading: "Hausregeln für mehr Spaß",
        list: [
          "Jede Person darf pro Spiel einmal ohne Begründung aussetzen.",
          "Pflichtaufgaben müssen sicher und im Raum machbar sein.",
          "Keine Aufgaben mit Handy, Online-Posts oder Kontakt zu Leuten außerhalb des Spiels ohne deren Okay.",
          "Wirkt jemand unwohl, macht weiter – es soll Spaß machen.",
        ],
      },
      {
        heading: "Lieber ein Rad?",
        paragraphs: ["Das Wahrheit-oder-Pflicht-Rad versteckt unter jedem Segment eine Aufgabe und deckt sie nach dem Dreh auf. Du kannst eigene Aufgaben schreiben und das Rad mit Freunden teilen."],
      },
    ],
    howTo: [
      { title: "Altersgruppe wählen", text: "Kinder, Teens oder Erwachsene." },
      { title: "Spieler hinzufügen", text: "Optional: Namen eingeben, um zu sehen, wer dran ist." },
      { title: "Ziehen", text: "Wähle Wahrheit, Pflicht oder Zufall." },
      { title: "Nächster Spieler", text: "Gib die Runde weiter und zieh erneut." },
    ],
    benefits: [
      { title: "Altersgerecht", text: "Drei sorgfältig zusammengestellte Sets." },
      { title: "Ohne Wiederholung", text: "Erst wird die ganze Liste durchlaufen." },
      { title: "Rundenanzeige", text: "Zeigt, wer an der Reihe ist." },
      { title: "Sofort", text: "Keine Einrichtung oder Anmeldung nötig." },
    ],
    faqs: [
      { q: "Sind die Fragen für Kinder geeignet?", a: "Das Kinder-Set ist für etwa 6- bis 12-Jährige geschrieben und bleibt albern und harmlos. Wähle immer das Set, das zum jüngsten Spieler passt." },
      { q: "Kann ich eigene Fragen und Aufgaben hinzufügen?", a: "Nutze das Wahrheit-oder-Pflicht-Rad, um eigene Aufgaben zu schreiben, zu speichern und mit Freunden zu teilen." },
      { q: "Wie viele Aufgaben gibt es?", a: "Jede Altersgruppe hat 15 Wahrheitsfragen und 15 Pflichtaufgaben, und keine wiederholt sich, bis du alle gezogen hast." },
    ],
  },
  "youtube-comment-picker": {
    name: "YouTube-Kommentar-Auslosung",
    card: "Einen zufälligen Gewinner aus YouTube-Kommentaren ziehen.",
    seoTitle: "YouTube-Kommentar-Auslosung – Zufälliger Gewinner",
    metaDescription: "Zieh einen zufälligen Gewinner aus YouTube-Kommentaren. Nach Stichwort filtern, eigenen Kanal ausschließen, eine Teilnahme pro Person, mehrere Gewinner.",
    h1: "YouTube-Kommentar-Auslosung",
    lead: "Veranstalte ein faires Gewinnspiel: Zieh zufällige Gewinner aus den Kommentaren eines Videos, mit Filtern für Stichwörter, Duplikate und ausgeschlossene Konten.",
    sections: [
      {
        heading: "So funktioniert es",
        paragraphs: [
          "Füge den Link zu einem öffentlichen YouTube-Video ein, und die Auslosung lädt dessen Hauptkommentare über die offizielle YouTube Data API. Dann legst du deine Regeln fest – ein Stichwort, das Teilnehmende nennen mussten, auszuschließende Konten und ob jede Person eine Teilnahme oder eine pro Kommentar hat – und ziehst so viele Gewinner, wie du brauchst.",
          "Ist automatisches Laden nicht verfügbar, kannst du Kommentare stattdessen einfügen (einer pro Zeile als „Name: Kommentar“). Kopiere sie aus der Kommentaransicht von YouTube Studio oder einem Export.",
        ],
      },
      {
        heading: "Ein Gewinnspiel, dem alle vertrauen",
        list: [
          "Gib die Regeln vor dem Start bekannt, inklusive Enddatum und Gewinnerauswahl.",
          "Schalte „Ein Eintrag pro Person“ ein, damit Spam-Kommentare nichts bringen.",
          "Schließe deinen eigenen Kanal, Moderatoren und Teammitglieder aus.",
          "Nimm die Ziehung auf oder zeig sie live, damit alle sehen, dass es fair ist.",
          "Beachte die Wettbewerbsrichtlinien von YouTube und die für dein Gewinnspiel geltenden Gesetze.",
        ],
      },
      {
        heading: "Fairness",
        paragraphs: [
          "Gewinner werden mit einem kryptografisch sicheren Teilmischen aus den gültigen Kommentaren gezogen, sodass jede gültige Teilnahme die gleiche Chance hat und dieselbe Person in einer Ziehung nicht zweimal gewinnen kann.",
        ],
      },
    ],
    howTo: [
      { title: "Videolink einfügen", text: "Jede öffentliche Video-URL oder jeder Shorts-Link." },
      { title: "Kommentare laden", text: "Hauptkommentare werden automatisch abgerufen." },
      { title: "Filter setzen", text: "Stichwort, Ausschlüsse und ein Eintrag pro Person." },
      { title: "Gewinner ziehen", text: "Einen oder mehrere Gewinner auf einmal ziehen." },
    ],
    benefits: [
      { title: "Faire Ziehungen", text: "Gleiche Chancen für jede gültige Teilnahme." },
      { title: "Anti-Spam", text: "Option für eine Teilnahme pro Konto." },
      { title: "Flexibel", text: "Stichwortfilter und Ausschlusslisten." },
      { title: "Ohne Login", text: "Wir fragen nie nach deinem YouTube-Konto." },
    ],
    faqs: [
      { q: "Muss ich mich bei YouTube anmelden?", a: "Nein. Die Auslosung liest nur öffentliche Kommentare, eine Anmeldung ist also nicht nötig." },
      { q: "Wie viele Kommentare kann sie laden?", a: "Bis zu 4.000 Hauptkommentare pro Video. Für größere Gewinnspiele füge Kommentare aus einem Export ein." },
      { q: "Werden Antworten berücksichtigt?", a: "Es werden nur Hauptkommentare geladen – die übliche Regel bei Kommentar-Gewinnspielen." },
      { q: "Ist SpinWheelGe mit YouTube verbunden?", a: "Nein. SpinWheelGe ist ein unabhängiges Tool, das die öffentliche YouTube Data API nutzt. YouTube ist eine Marke von Google LLC." },
    ],
  },
};
