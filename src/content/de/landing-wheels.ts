import type { LandingText } from "../types";

export const landingWheels: Record<string, LandingText> = {
  "spin-the-wheel": {
    name: "Glücksrad",
    card: "Ein Zufallsrad für jede beliebige Liste.",
    seoTitle: "Glücksrad online – Kostenloses Zufallsrad für jede Liste",
    metaDescription: "Dreh das Glücksrad online kostenlos. Optionen eingeben, drehen und in Sekunden ein faires Zufallsergebnis erhalten. Farben, Sounds, Gewichtung, ohne Anmeldung.",
    h1: "Glücksrad online drehen",
    lead: "Gib deine Optionen ein, dreh das Rad und lass den Zufall entscheiden. Kostenlos, fair und direkt im Browser.",
    presetTitle: "Wochenendpläne",
    presetEntries: ["Filmmarathon", "Brettspiele", "Picknick im Park", "Kekse backen", "Radtour", "Karaoke-Abend", "Neues Restaurant testen", "Museumsbesuch"],
    sections: [
      {
        heading: "Ein Rad für alles",
        paragraphs: [
          "Manche Entscheidungen verdienen keine lange Diskussion. Wo essen wir, wer fängt an, welche Hausarbeit ist heute dran – ein kurzer Dreh klärt das und macht dabei Spaß. Dieses Rad nimmt jede Liste, von zwei bis tausend Optionen, und macht daraus ein buntes Glücksrad für Laptop, Tablet oder Handy.",
          "Alle Änderungen werden automatisch in deinem Browser gespeichert, damit das Rad morgen noch da ist. Du brauchst nie ein Konto, und deine Einträge werden nie auf unsere Server hochgeladen.",
        ],
      },
      {
        heading: "So wird das Ergebnis bestimmt",
        paragraphs: [
          "Wenn du auf Drehen drückst, wird der Gewinner zuerst mit dem kryptografischen Zufallszahlengenerator deines Browsers bestimmt (derselben Web Crypto API, die für Sicherheit genutzt wird). Danach dreht sich das Rad so, dass das gewählte Segment genau unter dem Zeiger stoppt. Weil das Ergebnis vor der Animation feststeht, können weder die Geschwindigkeit deines Geräts noch der Zeitpunkt deines Klicks es beeinflussen.",
          "Im normalen Modus hat jeder Eintrag die gleiche Chance. Wechsle in den gewichteten Modus, wenn manche Optionen häufiger kommen sollen – die Segmente passen ihre Größe an, sodass das Rad immer die echten Chancen zeigt.",
        ],
      },
      {
        heading: "Beliebte Einsatzmöglichkeiten",
        list: [
          "Ein Restaurant oder Lieferessen wählen, wenn sich niemand entscheiden kann",
          "Ein Spiel, eine Aktivität oder einen Film für den Familienabend aussuchen",
          "Hausarbeiten fair zwischen Mitbewohnern oder Kindern verteilen",
          "Schnelle Verlosungen und Gewinnspiele im Livestream",
          "Ein Unentschieden in einer freundschaftlichen Diskussion auflösen",
        ],
      },
    ],
    howTo: [
      { title: "Optionen hinzufügen", text: "Tippe jede Option ein und drück Enter, oder füge eine ganze Liste auf einmal ein." },
      { title: "Anpassen", text: "Wähle im Tab „Design“ Farbschema, Zeiger, Schrift und Sounds." },
      { title: "Drehen", text: "Klick auf das Rad, drück Drehen oder die Leertaste." },
      { title: "Ergebnis nutzen", text: "Gewinner entfernen, nochmal drehen oder das Ergebnis kopieren und teilen." },
    ],
    benefits: [
      { title: "Fair durch Design", text: "Ergebnisse kommen aus kryptografischem Zufall und stehen fest, bevor sich das Rad bewegt." },
      { title: "Privat", text: "Deine Listen bleiben in deinem Browser. Keine Anmeldung." },
      { title: "Flexibel", text: "Gewichtung, Ausscheiden, Zählen und Geheimmodus sind eingebaut." },
      { title: "Teilbar", text: "Schick einen Link, und jeder kann eine Kopie deines Rads öffnen." },
    ],
    faqs: [
      { q: "Ist dieses Glücksrad wirklich zufällig?", a: "Ja. Jeder Dreh nutzt crypto.getRandomValues mit Rejection Sampling, sodass jeder Eintrag genau die angezeigte Wahrscheinlichkeit hat. Die Animation wird erst danach berechnet, um auf dem gewählten Segment zu landen." },
      { q: "Wie viele Optionen kann ich hinzufügen?", a: "Bis zu 1.000 Einträge pro Rad. Bei sehr langen Listen werden die Beschriftungen klein, der Dreh bleibt aber genau, und der Gewinner erscheint immer in einem Fenster." },
      { q: "Kann ich mein Rad speichern?", a: "Dein Rad wird automatisch in diesem Browser gespeichert. Um es auf ein anderes Gerät zu bringen, erstelle über Teilen einen Link oder lade die Konfiguration als JSON-Datei herunter." },
      { q: "Funktioniert es auf dem Handy?", a: "Ja. Das Rad passt sich jedem Bildschirm an, und Einträge und Einstellungen sind direkt unter dem Rad erreichbar." },
    ],
  },
  "wheel-of-names": {
    name: "Namensrad",
    card: "Zufällig einen Namen aus jeder Liste ziehen.",
    seoTitle: "Namensrad – Kostenloser Zufallsgenerator für Namen",
    metaDescription: "Zieh mit einem Dreh einen zufälligen Namen. Füge eine Klassen- oder Teamliste ein, dreh das Namensrad und entferne Gewinner. Kostenlos, privat, ohne Anmeldung.",
    h1: "Namensrad – Zufällig Namen ziehen",
    lead: "Füge eine Namensliste ein, dreh und erhalte jedes Mal eine faire Wahl. Perfekt für Unterricht, Meetings und Gewinnspiele.",
    presetTitle: "Namensauswahl",
    presetEntries: ["Sophie", "Maximilian", "Amara", "Diego", "Hannah", "Mateo", "Lea", "Kenji", "Greta", "Elias", "Nora", "Samir"],
    sections: [
      {
        heading: "Warum ein Namensrad so gut funktioniert",
        paragraphs: [
          "Jemanden mit Namen aufzurufen, kann sich persönlich anfühlen – irgendwer fragt sich immer, warum gerade er dran ist. Ein Glücksrad nimmt diesen Druck. Alle sehen die Liste, alle sehen den Dreh, und niemand kann der Lehrkraft, dem Gastgeber oder der Teamleitung Bevorzugung vorwerfen.",
          "Das Rad sorgt außerdem für etwas Spannung. Die Klasse richtet sich auf, Meeting-Teilnehmer schauen von ihren Laptops hoch, und im Livestream-Chat wird schon geraten, wen es trifft.",
        ],
      },
      {
        heading: "So kommt jeder dran",
        paragraphs: [
          "Schalte im Tab „Drehen“ den Ausscheidemodus ein, dann wird jeder Name nach dem Ziehen entfernt. Dreh weiter, bis das Rad leer ist, und du hast jede Person genau einmal in zufälliger Reihenfolge aufgerufen. Danach holst du mit „Alle wiederherstellen“ alle zurück.",
          "Sollen die Namen auf dem Rad bleiben? Der Zählmodus zählt, wie oft jede Person gezogen wurde – praktisch, um zu sehen, wer noch nicht dran war.",
        ],
      },
      {
        heading: "Tipps für Lehrkräfte und Gastgeber",
        list: [
          "Füge Namen direkt aus einer Google-Sheets- oder Excel-Spalte ein – ein Name pro Zeile.",
          "Leg für jede Klasse ein eigenes Rad an (bis zu acht), damit sich die Listen nicht vermischen.",
          "Hänge über versteckte Aufgaben an jeden Namen eine Frage – fertig sind spontane Abfragen.",
          "Nutze am Beamer oder geteilten Bildschirm den Vollbildmodus für eine aufgeräumte, werbefreie Ansicht.",
          "Schalte „Ergebnis vorlesen“ ein, damit der Gewinner für den ganzen Raum angesagt wird.",
        ],
      },
    ],
    howTo: [
      { title: "Namen einfügen", text: "Nutze „Liste einfügen“ oder „Importieren“, um eine ganze Liste aus einer Tabelle hinzuzufügen." },
      { title: "Modus wählen", text: "Normal lässt Namen auf dem Rad; Ausscheiden entfernt jeden Gewinner." },
      { title: "Drehen", text: "Klick auf Drehen oder drück die Leertaste. Der Gewinner wird mit Konfetti verkündet." },
      { title: "Wiederholen", text: "Gewinner entfernen oder behalten und erneut drehen. Der Verlauf speichert jede Ziehung." },
    ],
    benefits: [
      { title: "Sichtbar fair", text: "Alle sehen dieselbe Liste und denselben Dreh – keine Bevorzugung." },
      { title: "Schnell eingerichtet", text: "30 Namen in zwei Sekunden einfügen. Die Liste bleibt fürs nächste Mal gespeichert." },
      { title: "Bereit für den Unterricht", text: "Ausscheiden, Zählen und versteckte Fragen sind eingebaut." },
      { title: "Privat", text: "Schülernamen verlassen nie dein Gerät, außer du teilst sie bewusst." },
    ],
    faqs: [
      { q: "Wie entferne ich einen Namen nach dem Ziehen?", a: "Klick im Gewinnerfenster auf Entfernen oder wechsle in den Ausscheidemodus, damit jeder Gewinner automatisch entfernt wird. Entfernte Namen bleiben ausgegraut in der Liste, sodass du sie später wiederherstellen kannst." },
      { q: "Kann ich Namen aus Excel oder Google Sheets importieren?", a: "Ja. Kopiere die Spalte und nutze „Liste einfügen“, oder importiere eine .csv- oder .xlsx-Datei. Die erste Spalte wird zu den Namen; weitere Spalten können Gewichte, Farben oder versteckte Fragen festlegen." },
      { q: "Ist das Namensrad fair?", a: "Im normalen Modus hat jeder Name die gleiche Chance. Der Gewinner wird mit dem kryptografischen Zufallsgenerator deines Browsers bestimmt, bevor sich das Rad dreht." },
      { q: "Werden die Namen meiner Schüler irgendwo gespeichert?", a: "Nur im lokalen Speicher deines eigenen Browsers. Wir haben keine Konten und keine Datenbank, und Links zum Teilen entstehen nur, wenn du auf Teilen klickst." },
      { q: "Wie viele Namen kann ich hinzufügen?", a: "Bis zu 1.000 pro Rad, und du kannst bis zu acht Räder gleichzeitig offen haben." },
    ],
  },
  "random-picker": {
    name: "Zufallsauswahl",
    card: "Ein zufälliges Element aus jeder Liste wählen.",
    seoTitle: "Zufallsauswahl – Zufälliges Element aus jeder Liste",
    metaDescription: "Zufallsauswahl für Listen jeder Größe. Optionen einfügen, drehen und unverzerrt wählen. Gezogenes entfernen, Chancen gewichten oder mehrere Listen nutzen.",
    h1: "Zufallsauswahl",
    lead: "Du hast eine Liste und brauchst ein Element daraus? Füge sie hier ein und lass die Auswahl entscheiden – fair, sofort und unverzerrt.",
    presetTitle: "Hausarbeiten-Auswahl",
    presetEntries: ["Abwasch", "Wäsche", "Staubsaugen", "Müll rausbringen", "Staubwischen", "Einkaufen", "Pflanzen gießen", "Bad putzen"],
    sections: [
      {
        heading: "Ein Tool, unendlich viele Listen",
        paragraphs: [
          "Eine Zufallsauswahl ist die einfachste Entscheidungshilfe: Du gibst die Optionen vor, sie wählt eine. Nutze sie für Hausarbeiten, Draft-Reihenfolgen, das nächste Buch, den ersten Bug zum Beheben oder wer die Playlist bestimmt. Alles, was du als Liste schreiben kannst, kannst du auslosen.",
          "Weil die Auswahl auf einem Rad basiert, siehst du alle Optionen und ihre Wahrscheinlichkeit auf einen Blick. So lässt sich das Ergebnis allen Zuschauern leicht erklären.",
        ],
      },
      {
        heading: "Mehrere Elemente ziehen",
        paragraphs: [
          "Um mehrere Elemente ohne Wiederholung zu ziehen, aktiviere den Ausscheidemodus und dreh so oft wie nötig – jedes gezogene Element wird entfernt und kann nicht nochmal kommen. Die Ergebnisse stehen im Tab „Verlauf“, wo du sie kopieren oder als CSV-Datei exportieren kannst.",
          "Du brauchst gleichzeitig Ziehungen aus mehreren Listen, etwa Person, Aufgabe und Frist? Füge weitere Räder hinzu (bis zu acht) und drück „Alle drehen“. Jedes Rad dreht sich unabhängig und zeigt sein eigenes Ergebnis.",
        ],
      },
      {
        heading: "Ideen zum Ausprobieren",
        list: [
          "Wöchentlicher Putzplan für WG oder Kinder",
          "Reihenfolge von Präsentationen oder Redebeiträgen",
          "Welches ungelesene Buch, welcher Podcast oder welches Spiel als Nächstes",
          "Draft-Reihenfolge für Fantasy-Liga oder Turnier",
          "Zufälliger Wochenfokus für die Team-Retrospektive",
        ],
      },
    ],
    howTo: [
      { title: "Liste einfügen", text: "Ein Element pro Zeile, oder eine CSV- bzw. Excel-Datei importieren." },
      { title: "Regeln festlegen", text: "Gleiche Chancen, Gewichtung oder Ausscheiden wählen." },
      { title: "Ziehen", text: "Dreh das Rad für dein zufälliges Element." },
      { title: "Exportieren", text: "Ergebnisse kopieren oder den kompletten Verlauf als CSV herunterladen." },
    ],
    benefits: [
      { title: "Unverzerrt", text: "Rejection Sampling beseitigt die kleine Verzerrung, die einfacher Zufallscode haben kann." },
      { title: "Mehrere Ziehungen", text: "Der Ausscheidemodus zieht Elemente ohne Wiederholung." },
      { title: "Mehrere Listen", text: "Bis zu acht Räder gleichzeitig mit „Alle drehen“." },
      { title: "Exportierbar", text: "Lade jedes Ergebnis mit Zeitstempel für deine Unterlagen herunter." },
    ],
    faqs: [
      { q: "Kann ich mehrere Elemente auf einmal ziehen?", a: "Nutze den Ausscheidemodus und dreh einmal pro Element, oder mehrere Räder mit „Alle drehen“. Um Personen in Gruppen aufzuteilen, teilt der Teamgenerator eine ganze Liste mit einem Klick auf." },
      { q: "Können manche Elemente wahrscheinlicher sein?", a: "Ja. Im gewichteten Modus hat jeder Eintrag ein Gewicht. Ein Eintrag mit Gewicht 2 ist doppelt so wahrscheinlich wie einer mit Gewicht 1, und sein Segment ist doppelt so groß." },
      { q: "Gibt es eine Grenze für die Listengröße?", a: "Jedes Rad fasst bis zu 1.000 Einträge. Auch dann bleibt die Auswahl schnell und genau." },
      { q: "Kann ich es offline nutzen?", a: "Sobald die Seite geladen ist, funktioniert das Drehen ohne Verbindung. Deine Liste bleibt im Speicher deines Browsers." },
    ],
  },
  "decision-wheel": {
    name: "Entscheidungsrad",
    card: "Unentschieden mit einem Dreh auflösen.",
    seoTitle: "Entscheidungsrad – Mit einem Dreh schnell entscheiden",
    metaDescription: "Du kannst dich nicht entscheiden? Dreh das Entscheidungsrad. Optionen hinzufügen, Favoriten gewichten und das Rad entscheiden lassen. Kostenlos, ohne Anmeldung.",
    h1: "Entscheidungsrad",
    lead: "Du hängst zwischen Optionen fest? Pack sie aufs Rad und dreh. Manchmal merkt man am schnellsten, was man will, wenn man sieht, was das Rad wählt.",
    presetTitle: "Soll ich …",
    presetEntries: ["Einfach machen", "Eine Nacht drüber schlafen", "Jemanden fragen", "Heute noch erledigen", "Eine Woche warten", "Pro-und-Contra-Liste schreiben"],
    sections: [
      {
        heading: "Warum Drehen beim Entscheiden hilft",
        paragraphs: [
          "Entscheidungsmüdigkeit ist real. Nach einem langen Tag fühlen sich selbst kleine Entscheidungen – was kochen, womit anfangen, ob man noch ausgeht – schwer an. Wenn du unwichtige Entscheidungen einem Rad überlässt, bleibt mehr Energie für das, was zählt.",
          "Einen zweiten Effekt bemerken viele: In dem Moment, in dem das Rad stoppt, spürst du kurz Erleichterung oder Enttäuschung. Diese Bauchreaktion verrät dir, worauf du eigentlich gehofft hast. Dreh ruhig nochmal – niemand zählt mit.",
        ],
      },
      {
        heading: "Chancen in Richtung deiner Favoriten verschieben",
        paragraphs: [
          "Nicht jede Option ist gleich. Im gewichteten Modus gibst du einem Favoriten Gewicht 3 und einem Außenseiter Gewicht 1. Die Segmente passen ihre Größe an die echten Chancen an, sodass du immer weißt, wie entschieden wird.",
        ],
      },
      {
        heading: "Gute Entscheidungen fürs Rad",
        list: ["Was heute gekocht wird", "Welche Aufgabe zuerst drankommt", "Wohin der Tagesausflug am Wochenende geht", "Welches Workout heute dran ist", "Welches Brettspiel zum Spieleabend mitkommt"],
      },
    ],
    howTo: [
      { title: "Optionen auflisten", text: "Füge jede Option hinzu, die du in Betracht ziehst." },
      { title: "Gewichten (optional)", text: "Wechsle in den gewichteten Modus und gib Favoriten eine höhere Zahl." },
      { title: "Drehen", text: "Lass das Rad entscheiden." },
      { title: "Auf dein Bauchgefühl hören", text: "Zufrieden mit dem Ergebnis? Los geht’s. Nicht zufrieden? Auch das sagt dir etwas." },
    ],
    benefits: [
      { title: "Schluss mit Grübeln", text: "Macht aus einer festgefahrenen Entscheidung einen 5-Sekunden-Dreh." },
      { title: "Transparente Chancen", text: "Segmentgrößen entsprechen immer der echten Wahrscheinlichkeit." },
      { title: "Wiederverwendbar", text: "Deine Entscheidungsräder bleiben fürs nächste Mal gespeichert." },
      { title: "Spaß in der Gruppe", text: "Gruppendiskussionen klären, ohne dass sich jemand übergangen fühlt." },
    ],
    faqs: [
      { q: "Sollte ich wirklich ein Rad entscheiden lassen?", a: "Bei unwichtigen Entscheidungen auf jeden Fall – das spart Zeit und Stress. Bei großen Lebensentscheidungen nutze es eher, um dein Bauchgefühl sichtbar zu machen, als für das letzte Wort." },
      { q: "Wie funktionieren gewichtete Entscheidungen?", a: "Die Chance jeder Option ist ihr Gewicht geteilt durch die Summe aller Gewichte. Eine Option mit Gewicht 3 auf einem Rad mit Gesamtgewicht 6 hat 50 % Chance." },
      { q: "Kann ich die Optionen bis zum Stopp verbergen?", a: "Ja. Der Geheimmodus verbirgt alle Beschriftungen, bis das Rad stoppt – das sorgt in Gruppen für Spannung." },
      { q: "Gibt es eine einfache Ja-Nein-Version?", a: "Ja – probier das Ja-oder-Nein-Rad oder den sofortigen Ja-oder-Nein-Generator." },
    ],
  },
  "yes-or-no-wheel": {
    name: "Ja-oder-Nein-Rad",
    card: "Eine sofortige Ja-oder-Nein-Antwort.",
    seoTitle: "Ja-oder-Nein-Rad – Dreh für eine sofortige Antwort",
    metaDescription: "Stell eine Frage und dreh das Ja-oder-Nein-Rad für eine sofortige Zufallsantwort. Füge „Vielleicht“ hinzu, ändere die Chancen oder spiel Best of three.",
    h1: "Ja-oder-Nein-Rad",
    lead: "Stell deine Frage, dreh das Rad und erhalte eine klare Antwort. Füge ein „Vielleicht“ hinzu, wenn du unentschlossen bist.",
    presetTitle: "Ja oder Nein?",
    presetEntries: ["Ja", "Nein", "Ja", "Nein", "Ja", "Nein"],
    sections: [
      {
        heading: "Ein Münzwurf mit mehr Persönlichkeit",
        paragraphs: [
          "Ein Ja-oder-Nein-Rad erfüllt denselben Zweck wie ein Münzwurf, ist aber besser sichtbar, unterhaltsamer anzuschauen und leicht anpassbar. Das Rad startet mit drei Ja- und drei Nein-Segmenten, beide Antworten haben also genau 50 % Chance.",
          "Du willst eine dritte Option? Füge ein Segment „Vielleicht“ hinzu – oder benenne die Segmente in „Machen“ und „Lassen“, „Jetzt“ und „Später“ oder was sonst zu deiner Frage passt.",
        ],
      },
      {
        heading: "Die Chancen ändern",
        paragraphs: [
          "Wenn du zu einer Seite tendierst, füge ein zusätzliches Ja-Segment hinzu oder wechsle in den gewichteten Modus und setz Ja auf 2. Das Rad zeigt die neuen Chancen deutlich an – es bleibt also eine ehrliche Antwort, nur mit deiner Vorliebe eingebaut.",
        ],
      },
      {
        heading: "Lustige Fragen zum Ausprobieren",
        list: ["Bestellen wir heute Pizza?", "Soll ich zuerst schreiben?", "Ist heute Filmabend?", "Fahren wir am Wochenende an den See?", "Gibt es Nachtisch?"],
      },
    ],
    howTo: [
      { title: "Frage überlegen", text: "Jede Frage mit Ja oder Nein als Antwort funktioniert." },
      { title: "Drehen", text: "Drück Drehen oder die Leertaste." },
      { title: "Antwort lesen", text: "Das Gewinnersegment wird hervorgehoben und angesagt." },
      { title: "Best of three?", text: "Dreh nochmal und zähl im Zählmodus mit." },
    ],
    benefits: [
      { title: "Genau 50/50", text: "Gleiche Segmente bedeuten gleiche Chancen, außer du änderst sie." },
      { title: "Anpassbar", text: "„Vielleicht“ hinzufügen, Antworten umbenennen, Farben ändern." },
      { title: "Zählmodus", text: "Antworten über mehrere Drehungen zählen für Best-of-Spiele." },
      { title: "Funktioniert überall", text: "Handy, Tablet oder Laptop – keine App nötig." },
    ],
    faqs: [
      { q: "Ist das Ja-oder-Nein-Rad 50/50?", a: "Ja. Das Standardrad hat drei gleich große Ja- und drei Nein-Segmente, jede Antwort hat also genau 50 % Chance." },
      { q: "Kann ich „Vielleicht“ hinzufügen?", a: "Tipp „Vielleicht“ ins Eingabefeld und drück Enter. Mit zwei Ja-, zwei Nein- und zwei Vielleicht-Segmenten hat jede Antwort eine Chance von eins zu drei." },
      { q: "Was ist der Unterschied zum Ja-oder-Nein-Generator?", a: "Das Rad ist visuell und anpassbar. Der Ja-oder-Nein-Generator gibt ohne Animation sofort eine Antwort und bietet eine Best-of-three-Option." },
    ],
  },
  "prize-wheel": {
    name: "Gewinnrad",
    card: "Gewichtetes Gewinnrad für Events und Läden.",
    seoTitle: "Gewinnrad – Kostenloses Online-Glücksrad für Events",
    metaDescription: "Erstelle ein eigenes Gewinnrad für Gewinnspiele, Messen, Läden und Klassen. Chancen per Gewichtung festlegen, Bilder hinzufügen und im Vollbild drehen.",
    h1: "Gewinnrad zum Drehen",
    lead: "Baue in wenigen Minuten ein Gewinnrad für deinen Messestand, Laden, Stream oder deine Klasse. Chancen festlegen, Bilder im Logo-Stil hinzufügen und drehen.",
    presetTitle: "Gewinnrad",
    presetEntries: ["Gratis Kaffee", "10 % Rabatt", "Stickerset", "Nochmal versuchen", "Gratis Versand", "Überraschungsgeschenk", "5-€-Gutschein", "Hauptpreis"],
    sections: [
      {
        heading: "Realistische Gewinnchancen festlegen",
        paragraphs: [
          "Der häufigste Fehler bei Gewinnrädern: Der Hauptpreis bekommt ein genauso großes Segment wie ein Sticker. Dieses Rad startet im gewichteten Modus – Alltagspreise bekommen größere Gewichte, Premiumpreise kleinere. Jedes Segment passt seine Größe an die Chance an, sodass alle sehen, dass es ehrlich zugeht.",
          "Du willst eine feste Anzahl großer Preise? Nutze den Ausscheidemodus oder entferne einen Preis, sobald er gewonnen wurde, damit er nicht nochmal kommt.",
        ],
      },
      {
        heading: "Ein Gewinnrad auf einem Event betreiben",
        paragraphs: [
          "Öffne das Rad im Vollbild auf einem Laptop, der an einen Fernseher oder Monitor angeschlossen ist, und dreh mit der Leertaste oder einem kabellosen Presenter. Im Vollbild ist nur das Rad mit dem Ergebnis zu sehen – keine Menüs, keine Werbung. Schalte den Ton für Ticken und Gewinnsound ein; das belebt jeden Stand.",
          "Prüfe vor dem Event die örtlichen Regeln. Wenn Teilnehmer für die Teilnahme zahlen, gelten oft Vorschriften für Gewinnspiele oder Glücksspiel; ein kostenloses Gewinnrad ist meist einfacher, die Regeln unterscheiden sich aber.",
        ],
      },
      {
        heading: "Wo Gewinnräder glänzen",
        list: ["Messe- und Konferenzstände", "Ladeneröffnungen und Kundentage", "Belohnungssysteme in der Klasse", "Gewinnspiele im Livestream und in sozialen Medien", "Firmenfeiern und Teamfeste"],
      },
    ],
    howTo: [
      { title: "Preise auflisten", text: "Füge jeden Preis hinzu, gern mit Emoji oder Bild." },
      { title: "Chancen festlegen", text: "Gib seltenen Preisen im gewichteten Modus ein kleineres Gewicht." },
      { title: "Vollbild", text: "Zeig das Rad deinem Publikum auf einem großen Bildschirm." },
      { title: "Gewinner festhalten", text: "Der Verlauf speichert jeden Preis mit Zeitstempel." },
    ],
    benefits: [
      { title: "Ehrliche Chancen", text: "Die Segmentgröße zeigt immer die echte Gewinnchance." },
      { title: "Bereit fürs Event", text: "Vollbild, Sounds, Konfetti und Tastatursteuerung." },
      { title: "Bestandskontrolle", text: "Entferne Preise, wenn sie ausgehen." },
      { title: "Dokumentation", text: "Exportiere jeden Dreh als CSV für deine Unterlagen." },
    ],
    faqs: [
      { q: "Wie mache ich den Hauptpreis selten?", a: "Lass den gewichteten Modus an und gib dem Hauptpreis ein kleines Gewicht wie 0,5, während häufige Preise 3 oder mehr bekommen. Die Chance jedes Preises steht im Gewinnerfenster." },
      { q: "Kann ich Bilder zum Gewinnrad hinzufügen?", a: "Ja. Öffne die Optionen eines Eintrags und lade ein PNG-, JPG- oder WebP-Bild (bis 2 MB) hoch oder füge einen https-Bildlink ein." },
      { q: "Kann ich es auf einer Messe ohne Internet nutzen?", a: "Lade die Seite einmal mit Verbindung; das Drehen funktioniert weiter, wenn die Verbindung abbricht. Dein Rad ist im Browser gespeichert." },
      { q: "Ist ein Gewinnrad rechtlich erlaubt?", a: "Kostenlose Gewinnräder sind in der Regel unproblematisch, aber die Regeln für Gewinnspiele unterscheiden sich je nach Land. Wenn Leute zahlen oder etwas kaufen müssen, um zu drehen, prüfe vorher die örtlichen Vorschriften." },
    ],
  },
  "classroom-spinner": {
    name: "Klassenrad",
    card: "Klassendienste, Aktivitäten und Belohnungen.",
    seoTitle: "Klassenrad – Kostenloses Glücksrad für Lehrkräfte",
    metaDescription: "Ein kostenloses Klassenrad, um Schüler auszuwählen, Klassendienste zu verteilen, Aktivitäten zu wählen und Wiederholungsspiele zu leiten. Beamertauglich und privat.",
    h1: "Klassenrad für Lehrkräfte",
    lead: "Verteile Klassendienste, wähle Aktivitäten und leite Wiederholungsspiele mit einem Rad, das deine Klasse wirklich sehen will.",
    presetTitle: "Klassendienste",
    presetEntries: ["Reihenführer", "Türdienst", "Blätter austeilen", "Tafeldienst", "Blumendienst", "Klassenbibliothek", "Botendienst", "Technikhelfer", "Materialdienst", "Kalenderdienst"],
    sections: [
      {
        heading: "Mehr als eine Namensauswahl",
        paragraphs: [
          "Lehrkräfte nutzen Glücksräder für viel mehr als das Aufrufen von Schülern. Dieses Rad startet mit typischen Klassendiensten, doch in Sekunden tauschst du Wiederholungsthemen, Bewegungspausen, Leseimpulse, Partnerzuordnungen oder Belohnungen ein.",
          "Öffne bis zu acht Räder gleichzeitig und kombiniere sie – zum Beispiel eines mit Schülernamen und eines mit Diskussionsfragen. Drück „Alle drehen“, und beide wählen gleichzeitig.",
        ],
      },
      {
        heading: "Gemacht für vorne im Klassenzimmer",
        paragraphs: [
          "Der Vollbildmodus zeigt ein aufgeräumtes Rad ohne Menüs und Werbung – ideal für Beamer und interaktive Tafel. Die Kinder können den großen Drehen-Knopf selbst drücken, und mit einer kabellosen Tastatur funktioniert auch die Leertaste.",
          "Schalte „Ergebnis vorlesen“ ein, damit das Ergebnis gesprochen wird, und hänge mit versteckten Aufgaben an jedes Segment eine Frage oder Aufgabe, die erst nach dem Dreh erscheint.",
        ],
      },
      {
        heading: "Ideen für den Unterricht",
        list: [
          "Wöchentliche Verteilung der Klassendienste",
          "Die nächste Wiederholungsfrage oder das nächste Thema wählen",
          "Eine Bewegungspause wählen, wenn die Energie sinkt",
          "Lese- oder Tagebuchimpulse auswählen",
          "Gutes Verhalten mit einem Belohnungsrad würdigen",
          "Zufällig Partner oder Gruppen bilden (probier den Teamgenerator)",
        ],
      },
    ],
    howTo: [
      { title: "Startliste wählen", text: "Nutze die Dienste hier oder öffne eine Vorlage für den Unterricht." },
      { title: "Personalisieren", text: "Segmente umbenennen, Klassenfarben wählen und Emojis hinzufügen." },
      { title: "Projizieren", text: "Klick auf Vollbild für eine ablenkungsfreie Ansicht." },
      { title: "Kinder drehen lassen", text: "Klicken, tippen oder Leertaste – Ergebnisse landen im Verlauf." },
    ],
    benefits: [
      { title: "Schülerdatenschutz", text: "Keine Konten, und Namen bleiben auf deinem Gerät." },
      { title: "Fesselnd", text: "Sound, Konfetti und Spannung halten die Aufmerksamkeit bei der Stunde." },
      { title: "Flexibel", text: "Dienste, Fragen, Belohnungen oder Gruppen – ein Tool für alles." },
      { title: "Fair", text: "Der Ausscheidemodus garantiert, dass jedes Kind drankommt." },
    ],
    faqs: [
      { q: "Ist das Klassenrad sicher für Kinder?", a: "Ja. Keine Anmeldung, kein Chat und keine Inhalte von anderen Nutzern. Deine Listen werden nur in deinem Browser gespeichert." },
      { q: "Kann ich es auf einem Smartboard oder Promethean-Board nutzen?", a: "Ja. Öffne die Website im Browser der Tafel, geh in den Vollbildmodus und tippe zum Drehen aufs Rad." },
      { q: "Kann ich für jede Klasse ein eigenes Rad speichern?", a: "Du kannst bis zu acht Räder auf dieser Seite haben, die alle automatisch gespeichert werden. Exportiere sie als JSON zur Sicherung oder um sie auf einen anderen Computer zu übertragen." },
      { q: "Kann ich die Antwort bis zum Dreh verbergen?", a: "Füge die Frage oder Aufgabe als versteckte Aufgabe zu jedem Eintrag hinzu. Sie erscheint erst im Fenster, wenn das Rad stoppt." },
    ],
  },
  "random-number-wheel": {
    name: "Zahlenrad",
    card: "Dreh eine Zahl von 1 bis 10 oder in jedem Bereich.",
    seoTitle: "Zahlenrad – Dreh eine zufällige Zahl",
    metaDescription: "Dreh ein Zahlenrad von 1 bis 10, 1 bis 100 oder in jedem Bereich. Ideal für Tombolas, Mathespiele und Aktivitäten in der Klasse. Kostenlos und fair.",
    h1: "Zahlenrad",
    lead: "Dreh eine Zahl. Starte mit 1 bis 10 oder füge jeden Bereich ein, den du für Tombolas, Mathespiele und Bingo-Ziehungen brauchst.",
    presetTitle: "Zahlen 1–10",
    sections: [
      {
        heading: "Jeder Bereich, jede Größe",
        paragraphs: [
          "Das Rad startet mit 1 bis 10. Du brauchst einen anderen Bereich? Öffne „Liste einfügen“ und gib eine Zahl pro Zeile ein – am schnellsten füllst du eine Spalte in Google Sheets oder Excel und fügst sie ein. Das Rad schafft bis zu 1.000 Zahlen.",
          "Für sehr große Bereiche wie 1 bis 1.000.000 eignet sich der Zufallszahlengenerator besser: Er zieht sofort aus jedem Bereich, ohne für jede Zahl ein Segment zu brauchen.",
        ],
      },
      {
        heading: "Zahlen ohne Wiederholung ziehen",
        paragraphs: [
          "Für Tombolas und Bingo-Spiele schalte den Ausscheidemodus ein. Jede Zahl wird nach dem Ziehen entfernt und kann nicht zweimal kommen. Deine Ziehungen stehen der Reihe nach im Tab „Verlauf“ und lassen sich als CSV exportieren.",
        ],
      },
      {
        heading: "Ideen für ein Zahlenrad",
        list: ["Losnummern bei der Tombola ziehen", "Einmaleins üben (zwei Räder drehen und multiplizieren)", "Eine Seite, Aufgabe oder ein Kapitel wählen", "Einen zufälligen Sitz- oder Tischplatz bestimmen", "Partyspiele, die eine zufällige Anzahl brauchen"],
      },
    ],
    howTo: [
      { title: "Zahlen festlegen", text: "Bleib bei 1–10 oder füge deinen eigenen Bereich ein." },
      { title: "Wiederholungen wählen", text: "Normal erlaubt Wiederholungen; Ausscheiden zieht jede Zahl einmal." },
      { title: "Drehen", text: "Das Ergebnis erscheint im Fenster und im Verlauf." },
      { title: "Exportieren", text: "Lade deinen Ziehungsverlauf als CSV herunter, falls du einen Nachweis brauchst." },
    ],
    benefits: [
      { title: "Gleichverteilt", text: "Jede Zahl hat genau die gleiche Chance." },
      { title: "Ohne Wiederholung", text: "Ausscheidemodus für Tombola und Bingo." },
      { title: "Visuell", text: "Ideal für Klassen und Publikum, das gern zuschaut." },
      { title: "Mathe mit mehreren Rädern", text: "Dreh zwei Zahlenräder zusammen für Mathespiele." },
    ],
    faqs: [
      { q: "Wie erstelle ich ein Rad von 1 bis 100?", a: "Öffne die Vorlage „Zahlenrad 1–100“ oder nutze „Liste einfügen“ mit den Zahlen 1 bis 100 in einzelnen Zeilen." },
      { q: "Kann ich mehrere Zahlen ziehen?", a: "Dreh mehrmals mit eingeschaltetem Ausscheidemodus, oder nutze den Zufallszahlengenerator, um viele Zahlen auf einmal zu ziehen." },
      { q: "Sind die Zahlen wirklich zufällig?", a: "Sie stammen aus dem kryptografischen Zufallszahlengenerator deines Browsers, mit Rejection Sampling gegen Verzerrung." },
    ],
  },
  "random-letter-wheel": {
    name: "Buchstabenrad",
    card: "Dreh einen zufälligen Buchstaben von A bis Z.",
    seoTitle: "Buchstabenrad – Dreh einen Buchstaben von A bis Z",
    metaDescription: "Dreh das Alphabet-Rad für einen zufälligen Buchstaben von A bis Z. Perfekt für Stadt-Land-Fluss, Wortspiele, Lautübungen und Einstiege in der Klasse.",
    h1: "Buchstabenrad (A–Z)",
    lead: "Dreh das Alphabet für einen zufälligen Buchstaben – für Wortspiele, Lautübungen und Stadt-Land-Fluss.",
    presetTitle: "Alphabet",
    sections: [
      {
        heading: "Perfekt für Wort- und Kategoriespiele",
        paragraphs: [
          "Viele klassische Party- und Klassenspiele starten mit einem zufälligen Buchstaben: Nenne Stadt, Land, Fluss mit diesem Anfangsbuchstaben, schreib einen Satz, in dem jedes Wort damit beginnt, oder sammle in einer Minute so viele Wörter wie möglich.",
          "Manche Buchstaben (wie Q, X und Y) machen diese Spiele sehr schwer. Blende sie mit dem Augensymbol aus, ohne sie zu löschen, und hol sie jederzeit mit „Alle wiederherstellen“ zurück.",
        ],
      },
      {
        heading: "Laute und erstes Lesen",
        paragraphs: [
          "Für Leseanfänger: Dreh einen Buchstaben und frag nach seinem Laut, einem Wort, das damit beginnt, oder einem Gegenstand im Raum mit diesem Anfangsbuchstaben. Füge jedem Buchstaben ein Emoji als Bildhilfe hinzu oder probier die Vorlage „Alphabet-Rad“, die jedem Buchstaben ein vertrautes Wort zuordnet.",
        ],
      },
      {
        heading: "Schnelle Spielideen",
        list: ["Stadt-Land-Fluss: Stadt, Land und Tier mit dem Buchstaben nennen", "Wortrennen: Das längste Wort mit dem Anfangsbuchstaben gewinnt", "Alliterationen: einen lustigen Satz bilden", "Lautübung: Laut sagen und ein passendes Wort nennen", "Suchspiel: etwas im Raum finden, das damit beginnt"],
      },
    ],
    howTo: [
      { title: "Mit A–Z starten", text: "Alle 26 Buchstaben sind schon auf dem Rad." },
      { title: "Schwere Buchstaben entfernen", text: "Blende Q, X oder Y bei Bedarf mit dem Augensymbol aus." },
      { title: "Drehen", text: "Klicken, tippen oder Leertaste drücken." },
      { title: "Spielen", text: "Nutze den Buchstaben für dein Wort- oder Kategoriespiel." },
    ],
    benefits: [
      { title: "Klassentauglich", text: "Große, klare Buchstaben, die am Beamer gut lesbar sind." },
      { title: "Anpassbar", text: "Kleinbuchstaben, nur Vokale oder jede beliebige Auswahl." },
      { title: "Ohne Wiederholung", text: "Der Ausscheidemodus zieht jeden Buchstaben einmal." },
      { title: "Sofort startklar", text: "Keine Einrichtung – das Alphabet ist bereit." },
    ],
    faqs: [
      { q: "Kann ich Kleinbuchstaben verwenden?", a: "Ja. Bearbeite die Einträge oder füge a–z in Kleinbuchstaben mit „Liste einfügen“ ein und wähle „Vorhandene Einträge ersetzen“." },
      { q: "Wie drehe ich nur Vokale?", a: "Blende die Konsonanten mit dem Augensymbol aus oder erstelle ein neues Rad mit A, E, I, O und U." },
      { q: "Gibt es eine Version ohne Rad?", a: "Der Buchstabengenerator zieht sofort einen oder mehrere Buchstaben, mit Optionen für Vokale, Konsonanten und das Auslassen schwerer Buchstaben." },
    ],
  },
  "truth-or-dare-wheel": {
    name: "Wahrheit-oder-Pflicht-Rad",
    card: "Versteckte Fragen und Aufgaben nach jedem Dreh.",
    seoTitle: "Wahrheit-oder-Pflicht-Rad – Dreh Wahrheit oder Pflicht",
    metaDescription: "Dreh das Wahrheit-oder-Pflicht-Rad und deck eine versteckte Frage oder Aufgabe auf. Familienfreundliche Vorlagen inklusive, oder schreib eigene für Partys.",
    h1: "Wahrheit-oder-Pflicht-Rad",
    lead: "Dreh, um auf Wahrheit oder Pflicht zu landen – und deck dann die versteckte Frage oder Aufgabe unter dem Segment auf.",
    presetTitle: "Wahrheit oder Pflicht",
    presetEntries: [
      { text: "Wahrheit", hidden: "Was ist das Albernste, das du je in der Schule gemacht hast?" },
      { text: "Pflicht", hidden: "Sprich bis zu deiner nächsten Runde wie ein Roboter." },
      { text: "Wahrheit", hidden: "Wenn du einen Tag unsichtbar wärst, was würdest du zuerst tun?" },
      { text: "Pflicht", hidden: "Mach deine beste Hühner-Imitation." },
      { text: "Wahrheit", hidden: "Welches Lied singst du, wenn niemand zuhört?" },
      { text: "Pflicht", hidden: "Sprich eine Runde lang nur in Reimen." },
      { text: "Wahrheit", hidden: "Welche Regel würdest du aufstellen, wenn du der Chef wärst?" },
      { text: "Pflicht", hidden: "Lauf wie ein Krebs durch den Raum." },
    ],
    sections: [
      {
        heading: "Versteckte Aufgaben machen es spannend",
        paragraphs: [
          "Jedes Segment dieses Rads verbirgt eine bestimmte Frage oder Aufgabe. Während des Drehens sehen die Spieler nur „Wahrheit“ oder „Pflicht“; die eigentliche Aufgabe erscheint erst im Fenster, wenn das Rad stoppt. So kann niemand auf eine leichte Aufgabe zielen.",
          "Die Startaufgaben sind familienfreundlich und für Kinder geeignet. Öffne die Optionen eines Eintrags, um die versteckte Aufgabe zu bearbeiten, oder füge neue Segmente mit eigenen Ideen für Teens oder Spieleabende unter Erwachsenen hinzu.",
        ],
      },
      {
        heading: "Damit es allen Spaß macht",
        list: [
          "Vereinbart vorher eine Joker-Regel – jede Person darf einmal aussetzen.",
          "Pflichtaufgaben sollen sicher, freundlich und im Raum machbar sein.",
          "Fordere niemanden auf, private Infos preiszugeben oder etwas online zu posten.",
          "Nutze den Ausscheidemodus, damit dieselbe Aufgabe nicht zweimal kommt.",
          "Für eine größere Auswahl nach Altersgruppe probier den Wahrheit-oder-Pflicht-Generator.",
        ],
      },
      {
        heading: "Mach deine eigene Version",
        paragraphs: [
          "Tausche die Aufgaben gegen ein Thema: Feiertagsfragen fürs Familientreffen, Teambuilding-Fragen fürs Büro oder alberne Bewegungsaufgaben für den Kindergeburtstag. Schick das Rad dann über Teilen an Freunde – die versteckten Aufgaben kommen mit.",
        ],
      },
    ],
    howTo: [
      { title: "Spieler versammeln", text: "Setzt euch in einen Kreis oder trefft euch im Videocall." },
      { title: "Drehen", text: "Jede Person dreht, wenn sie an der Reihe ist." },
      { title: "Aufdecken", text: "Die versteckte Frage oder Aufgabe erscheint, wenn das Rad stoppt." },
      { title: "Anpassen", text: "Bearbeite die versteckten Aufgaben passend zu deiner Gruppe." },
    ],
    benefits: [
      { title: "Kein Spicken", text: "Aufgaben bleiben verborgen, bis der Dreh endet." },
      { title: "Familienfreundlicher Start", text: "Die Startaufgaben sind für Kinder geeignet." },
      { title: "Komplett bearbeitbar", text: "Schreib eigene Fragen und Aufgaben." },
      { title: "Teilbar", text: "Schick dein eigenes Rad an Freunde." },
    ],
    faqs: [
      { q: "Sind die Fragen kindgerecht?", a: "Die Startaufgaben auf diesem Rad sind für Kinder und Familien geschrieben. Du kannst jede bearbeiten, und im Wahrheit-oder-Pflicht-Generator wählst du Aufgaben für Kinder, Teens oder Erwachsene." },
      { q: "Wie füge ich eigene Pflichtaufgaben hinzu?", a: "Füge einen Eintrag „Pflicht“ hinzu, öffne seine Optionen über die Pfeiltaste und schreib deine Aufgabe ins Feld „Versteckte Aufgabe“." },
      { q: "Können wir per Videochat spielen?", a: "Ja. Teile deinen Bildschirm und dreh für jeden Spieler, oder schick allen den Link, damit jeder auf seinem Gerät drehen kann." },
    ],
  },
  "food-wheel": {
    name: "Essensrad",
    card: "Dreh und entscheide, was es zu essen gibt.",
    seoTitle: "Essensrad – Dreh und entscheide, was ihr esst",
    metaDescription: "Keine Ahnung, was ihr essen sollt? Dreh das Essensrad für Ideen zum Abendessen, Mittagessen oder Bestellen. Mit deinen Lieblingsgerichten anpassbar. Kostenlos.",
    h1: "Essensrad – Was soll ich essen?",
    lead: "Schluss mit „Weiß nicht, was willst du?“. Dreh das Essensrad, und das Abendessen steht fest.",
    presetTitle: "Was gibt’s heute?",
    presetEntries: ["Pizza", "Tacos", "Sushi", "Burger", "Pasta", "Wok-Gericht", "Grillen", "Salat-Bowl", "Curry", "Pfannkuchen"],
    sections: [
      {
        heading: "Der schnellste Weg zum Essen",
        paragraphs: [
          "Was gegessen wird, gehört in jedem Haushalt zu den häufigsten Alltagsdiskussionen. Das Essensrad startet mit zehn beliebten Optionen, die zum Kochen wie zum Bestellen passen. Ersetze sie durch deine Lieblingsgerichte, deine Lieblingsrestaurants oder das, was im Kühlschrank ist.",
          "Wenn jemand heute auf keinen Fall Sushi will, klick auf das Augensymbol, um es vorerst vom Rad zu nehmen, ohne es zu löschen.",
        ],
      },
      {
        heading: "Fair für den ganzen Tisch",
        paragraphs: [
          "Lass jeden ein oder zwei Optionen hinzufügen, dann dreh. Weil das Ergebnis zufällig und für alle sichtbar ist, lässt sich schwer dagegen argumentieren. Soll der Wunsch des Geburtstagskinds bessere Chancen haben? Wechsle in den gewichteten Modus und erhöhe sein Gewicht.",
        ],
      },
      {
        heading: "Weitere Essensräder",
        list: ["Ideen fürs Mittagessen bei der Arbeit oder in der Schule", "Restaurantauswahl für den Date-Abend", "Dessertrad für etwas Süßes", "Ideen fürs Abendessen unter der Woche", "Was essen mit kleinem Budget"],
      },
    ],
    howTo: [
      { title: "Gerichte hinzufügen", text: "Behalte die Startliste oder füge deine Favoriten hinzu." },
      { title: "Vetos ausblenden", text: "Blende Optionen aus, auf die jemand keine Lust hat." },
      { title: "Drehen", text: "Lass das Rad das Abendessen wählen." },
      { title: "Genießen", text: "Keine Diskussion mehr – nur noch essen." },
    ],
    benefits: [
      { title: "Beendet die Diskussion", text: "Ein fairer Dreh, dem alle vorher zustimmen." },
      { title: "Persönlich", text: "Eigene Gerichte, Restaurants und Emojis hinzufügen." },
      { title: "Gespeichert", text: "Dein Essensrad wartet, wenn du das nächste Mal Hunger hast." },
      { title: "Familienfreundlich", text: "Kinder lieben es, selbst zu drehen." },
    ],
    faqs: [
      { q: "Kann ich meine Lieblingsrestaurants hinzufügen?", a: "Ja. Tipp jeden Restaurantnamen ein und drück Enter, oder nutze die Vorlage „Restaurantauswahl“ als Start." },
      { q: "Wie verhindere ich, dass jeden Abend dasselbe kommt?", a: "Nutze die Woche über den Ausscheidemodus: Jedes Gericht wird nach dem Ziehen entfernt. Klick auf „Alle wiederherstellen“, wenn du die ganze Liste zurückwillst." },
      { q: "Kann ich mehr als ein Essensrad speichern?", a: "Ja. Füge hier bis zu acht Räder hinzu – zum Beispiel eines fürs Abendessen und eines für Desserts." },
    ],
  },
  "movie-wheel": {
    name: "Filmrad",
    card: "Wähle das Genre für den Filmabend.",
    seoTitle: "Filmrad – Dreh einen Film oder ein Genre",
    metaDescription: "Dreh das Filmrad und wähle ein Genre oder einen Titel von deiner Merkliste. Perfekt für den Filmabend mit Freunden, Familie oder Partner. Kostenlos und anpassbar.",
    h1: "Filmrad – Wähle den Film für heute",
    lead: "40 Minuten gescrollt und nichts geschaut? Dreh das Filmrad für ein Genre – oder lade deine eigene Merkliste.",
    presetTitle: "Genre für den Filmabend",
    presetEntries: ["Action", "Komödie", "Horror", "Liebeskomödie", "Science-Fiction", "Animation", "Dokumentarfilm", "Thriller", "Fantasy", "Klassiker"],
    sections: [
      {
        heading: "Schluss mit der Qual der Wahl",
        paragraphs: [
          "Bei Tausenden Titeln über alle Streamingdienste dauert das Aussuchen oft länger als der Film selbst. Grenz es mit einem Dreh ein: erst ein Genre, dann ein Titel darin. Oder füge deine ganze Merkliste aufs Rad und lass es direkt wählen.",
          "Nutze für einen lustigen Twist zwei Räder – eines fürs Genre, eines fürs Jahrzehnt – und drück „Alle drehen“, um zu sehen, welche Kombination herauskommt.",
        ],
      },
      {
        heading: "Ein gemeinsames Merklisten-Rad",
        paragraphs: [
          "Paare und Freundesgruppen können jeweils ein paar Titel auf ein Rad setzen und dann den Link teilen, damit alle dieselbe Liste haben. Schalte den Ausscheidemodus ein, um die Liste über mehrere Filmabende ohne Wiederholung abzuarbeiten.",
        ],
      },
      {
        heading: "Ideen für den Filmabend",
        list: ["Erst Genre, dann Titel", "Merklisten-Roulette für Paare", "Jahrzehnte-Rad: 70er, 80er, 90er, 2000er, 2010er", "Kinder-Abend mit Animationsfavoriten", "Reihenfolge für den Weihnachtsfilm-Marathon"],
      },
    ],
    howTo: [
      { title: "Genres oder Titel wählen", text: "Behalte die Genreliste oder füge deine Merkliste ein." },
      { title: "Zweites Rad hinzufügen", text: "Optional: Jahrzehnte, Snacks oder wer als Nächstes wählt." },
      { title: "Drehen", text: "Lass das Rad entscheiden, was heute läuft." },
      { title: "Play drücken", text: "Kein endloses Scrollen mehr." },
    ],
    benefits: [
      { title: "Spart Zeit", text: "In Sekunden entscheiden statt eine Stunde scrollen." },
      { title: "Alle machen mit", text: "Jede Person fügt Titel zum gemeinsamen Rad hinzu." },
      { title: "Räder kombinieren", text: "Genre-, Jahrzehnt- und Snackräder drehen zusammen." },
      { title: "Merkt sich alles", text: "Dein Merklisten-Rad bleibt im Browser gespeichert." },
    ],
    faqs: [
      { q: "Kann ich meine Streaming-Merkliste aufs Rad setzen?", a: "Ja. Kopiere die Titel in „Liste einfügen“, einen pro Zeile. Das Rad fasst bis zu 1.000 Titel." },
      { q: "Gibt es ein Rad nur für Netflix?", a: "Probier die Vorlage „Streaming-Genre-Auswahl“ mit beliebten Kategorien. SpinWheelGe ist nicht mit Netflix verbunden." },
      { q: "Wie vermeide ich Filme, die wir schon gesehen haben?", a: "Nutze den Ausscheidemodus oder klick auf das Augensymbol, um gesehene Titel auszublenden." },
    ],
  },
};
