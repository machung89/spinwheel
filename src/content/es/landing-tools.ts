import type { LandingText } from "../types";

export const landingTools: Record<string, LandingText> = {
  "team-generator": {
    name: "Generador de equipos",
    card: "Divide una lista de nombres en equipos justos y aleatorios.",
    seoTitle: "Generador de equipos aleatorios – Haz grupos justos",
    metaDescription: "Generador de equipos aleatorios gratis. Pega una lista de nombres, elige el número de equipos o de personas por equipo y obtén grupos equilibrados en un clic.",
    h1: "Generador de equipos aleatorios",
    lead: "Pega tu lista, elige cuántos equipos necesitas y obtén grupos aleatorios y equilibrados en un clic.",
    sections: [
      {
        heading: "Equipos equilibrados siempre",
        paragraphs: [
          "El generador mezcla tu lista con un barajado criptográficamente seguro y reparte los nombres uno a uno, como cartas. Así los equipos nunca difieren en más de una persona: si divides a 13 personas en 3 equipos, salen equipos de 5, 4 y 4.",
          "Puedes dividir por número de equipos (por ejemplo, cuatro grupos para cuatro estaciones) o por personas por equipo (parejas o tríos). Pon nombres a los equipos, como Rojo, Azul y Verde, y copia el resultado para pegarlo en un chat, documento o diapositiva.",
        ],
      },
      { heading: "Cuándo ayudan los equipos aleatorios", list: ["Proyectos en grupo y parejas de laboratorio", "Partidos de fútbol, baloncesto o quemados", "Actividades de team building y hackatones", "Noches de trivia y juegos de fiesta", "Salas de grupos en reuniones online"] },
      { heading: "Por qué el azar es mejor que elegir capitanes", paragraphs: ["Que los capitanes elijan equipo es una tradición… y una manera segura de que alguien se sienta excluido. Los equipos aleatorios son más rápidos, mezclan grupos sociales y eliminan cualquier sospecha de favoritismo. Si necesitas equilibrar niveles, genera varias veces y quédate con la división más pareja, o genera por separado a los expertos y a los nuevos y combina los resultados."] },
    ],
    howTo: [
      { title: "Pega los nombres", text: "Uno por línea o separados por comas. Se quitan duplicados." },
      { title: "Elige la división", text: "Número de equipos o personas por equipo." },
      { title: "Nombra los equipos", text: "Opcional: nombres separados por comas." },
      { title: "Genera", text: "Copia el resultado o mezcla otra vez." },
    ],
    benefits: [
      { title: "Tamaños parejos", text: "Los equipos nunca difieren en más de una persona." },
      { title: "Azar real", text: "Barajado Fisher–Yates criptográficamente seguro." },
      { title: "Fácil de compartir", text: "Copia todos los equipos en un clic." },
      { title: "Privado", text: "Los nombres se procesan solo en tu navegador." },
    ],
    faqs: [
      { q: "¿Cómo se consiguen equipos justos?", a: "La lista se mezcla con un barajado Fisher–Yates sin sesgos usando el generador criptográfico del navegador, y luego se reparte por turnos para equilibrar tamaños." },
      { q: "¿Puedo hacer parejas?", a: "Sí. Elige Personas por equipo y escribe 2. Si el número es impar, un grupo tendrá tres." },
      { q: "¿Hay límite de nombres?", a: "Puedes pegar cientos de nombres; el generador funciona al instante." },
      { q: "¿Puedo mantener juntas a ciertas personas?", a: "No automáticamente. Un truco: escríbelas en una sola línea, como «Sam y Álex», para que cuenten como una entrada." },
    ],
  },
  "random-number-generator": {
    name: "Generador de números aleatorios",
    card: "Números aleatorios en cualquier rango, con o sin repetición.",
    seoTitle: "Generador de números aleatorios – Cualquier rango",
    metaDescription: "Genera números aleatorios entre cualquier mínimo y máximo. Saca uno o hasta 1.000 números, con o sin repetición, ordenados o no. Gratis y seguro.",
    h1: "Generador de números aleatorios",
    lead: "Elige un rango y cuántos números necesitas, y obtén resultados aleatorios sin sesgos al instante.",
    sections: [
      {
        heading: "Números seguros y sin sesgos",
        paragraphs: [
          "Muchas herramientas simples usan Math.random, que sirve para juegos pero no está diseñado para ser impredecible. Este generador usa la Web Crypto API con muestreo por rechazo, el método recomendado para código sensible a la seguridad. Cada número del rango tiene exactamente la misma probabilidad, incluso en rangos enormes.",
          "Activa Sin repetir para sacar números únicos: útil para rifas, loterías entre amigos o asignar códigos al azar. Puedes generar hasta 1.000 números a la vez y ordenarlos.",
        ],
      },
      { heading: "Usos habituales", list: ["Rifas y sorteos de puerta", "Elegir ganador por número de boleto", "Clases de estadística y probabilidad", "Elegir página, pregunta o asiento al azar", "Juegos de mesa cuando falta un dado"] },
    ],
    howTo: [
      { title: "Fija el rango", text: "Escribe mínimo y máximo. Los negativos también valen." },
      { title: "Elige la cantidad", text: "Saca 1 o hasta 1.000 números." },
      { title: "Opciones", text: "Permite o evita repeticiones y elige si ordenar." },
      { title: "Genera", text: "Copia el resultado o genera de nuevo." },
    ],
    benefits: [
      { title: "Cualquier rango", text: "Del 1–6 a más o menos cuatro mil billones." },
      { title: "Sin repetir", text: "Sorteos únicos para rifas y loterías." },
      { title: "Nivel criptográfico", text: "Usa crypto.getRandomValues, no Math.random." },
      { title: "Historial", text: "Consulta tus resultados anteriores debajo." },
    ],
    faqs: [
      { q: "¿Este generador es realmente aleatorio?", a: "Usa el generador criptográficamente seguro de tu dispositivo, apto para usos de seguridad. El muestreo por rechazo elimina el pequeño sesgo de la aritmética de módulo simple." },
      { q: "¿Cómo saco números tipo lotería?", a: "Fija el rango (por ejemplo, del 1 al 49), pon 6 en cantidad y activa Sin repetir. Recuerda que es solo por diversión y no mejora tus probabilidades en una lotería real." },
      { q: "¿Puedo generar decimales?", a: "El generador produce enteros. Para decimales, genera un rango mayor y divide: por ejemplo, del 1 al 1000 entre 100 da dos decimales." },
    ],
  },
  "random-letter-generator": {
    name: "Generador de letras aleatorias",
    card: "Saca letras al azar para juegos de palabras y fonética.",
    seoTitle: "Generador de letras aleatorias – Letras al azar A–Z",
    metaDescription: "Genera letras aleatorias de la A a la Z. Elige vocales o consonantes, mayúsculas o minúsculas, omite letras difíciles y saca varias letras sin repetir.",
    h1: "Generador de letras aleatorias",
    lead: "Saca una letra al azar o varias a la vez, con opciones de vocales, consonantes y para omitir las letras difíciles.",
    sections: [
      {
        heading: "Hecho para juegos de palabras",
        paragraphs: [
          "Los juegos de categorías como el tutti frutti, los anagramas y los retos de deletreo empiezan con una letra al azar. La opción Omitir letras difíciles excluye Q, U, V, X, Y y Z, que suelen atascar los juegos en los que hay que encontrar una palabra para cada tema.",
          "¿Necesitas fichas para un juego de formar palabras? Saca siete letras sin repetir o combina vocales y consonantes sacándolas por separado.",
        ],
      },
      { heading: "Para docentes y familias", paragraphs: ["Usa pares de mayúscula y minúscula (Aa, Bb) para reconocer letras, solo vocales para practicar sonidos o un grupo de letras para un calentamiento de deletreo. Funciona muy bien en proyector o tableta."], list: ["Calentamiento de sonidos", "Di tres cosas que empiecen por…", "Forma la palabra más larga con estas letras", "Práctica de caligrafía"] },
    ],
    howTo: [
      { title: "Elige el grupo", text: "Todas, solo vocales o solo consonantes." },
      { title: "Elige el formato", text: "Mayúsculas, minúsculas o ambas." },
      { title: "Fija la cantidad", text: "Saca de 1 a 26 letras, con o sin repetir." },
      { title: "Genera", text: "Tus letras aparecen al instante." },
    ],
    benefits: [
      { title: "Ideal para jugar", text: "Omite letras difíciles para juegos más fluidos." },
      { title: "Grupos flexibles", text: "Vocales, consonantes o el abecedario completo." },
      { title: "Sin repetir", text: "Letras únicas para juegos de fichas." },
      { title: "Justo", text: "Cada letra tiene la misma probabilidad." },
    ],
    faqs: [
      { q: "¿Puedo excluir ciertas letras?", a: "Usa Omitir letras difíciles para quitar Q, U, V, X, Y y Z, o usa la Ruleta de letras, donde puedes ocultar cualquier letra." },
      { q: "¿Incluye la Ñ o letras con tilde?", a: "El generador usa las 26 letras del alfabeto inglés. Puedes añadir la Ñ a una ruleta personalizada." },
      { q: "¿La Y cuenta como vocal?", a: "En los filtros de vocales y consonantes, la Y se trata como consonante." },
    ],
  },
  "dice-roller": {
    name: "Lanzador de dados",
    card: "Lanza hasta 12 dados: d4, d6, d8, d10, d12, d20 o d100.",
    seoTitle: "Lanzar dados online – Dados virtuales de d4 a d100",
    metaDescription: "Lanza hasta 12 dados virtuales online: d4, d6, d8, d10, d12, d20 o d100. Añade modificadores, mira el total y guarda el historial de tiradas. Justo y gratis.",
    h1: "Lanzar dados online",
    lead: "¿Perdiste los dados? Lanza hasta doce a la vez, desde un d4 de cuatro caras hasta un d100 de cien.",
    sections: [
      {
        heading: "Todos los dados que necesitas",
        paragraphs: [
          "Los juegos de mesa suelen usar dados de seis caras, pero los juegos de rol usan un juego completo: d4, d6, d8, d10, d12, d20 y d100. Elige el tipo y cuántos lanzar, añade un modificador para bonificaciones o penalizaciones, y el lanzador muestra cada dado y el total.",
          "Las tiradas recientes aparecen debajo para que compruebes qué pasó hace dos turnos, muy útil cuando la mesa no se pone de acuerdo.",
        ],
      },
      { heading: "Tiradas justas", paragraphs: ["Los dados físicos pueden estar ligeramente desequilibrados; los virtuales no. Cada tirada usa el generador criptográfico del navegador, así que cada cara tiene exactamente la misma probabilidad."] },
      { heading: "Ideal para", list: ["Juegos de mesa a los que les falta un dado", "Partidas de rol (2d6, 1d20+5, 4d6 y más)", "Clases de matemáticas y probabilidad", "Juegos de fiesta y noches en familia", "Decisiones rápidas al azar"] },
    ],
    howTo: [
      { title: "Elige los dados", text: "Cuántos dados (1–12) y cuántas caras." },
      { title: "Añade un modificador", text: "Opcional: suma o resta un número al total." },
      { title: "Lanza", text: "Mira cada dado y el total." },
      { title: "Revisa el historial", text: "Las tiradas recientes aparecen debajo." },
    ],
    benefits: [
      { title: "Siete tipos de dado", text: "d4, d6, d8, d10, d12, d20 y d100." },
      { title: "Totales y modificadores", text: "Sin cálculo mental." },
      { title: "Totalmente justos", text: "Sin caras desgastadas ni cargadas." },
      { title: "Siempre a mano", text: "Funciona en cualquier móvil, sin app." },
    ],
    faqs: [
      { q: "¿Los dados online son justos?", a: "Estos sí. Cada cara se elige con un generador criptográficamente seguro y muestreo por rechazo, así que todas son igual de probables." },
      { q: "¿Cómo lanzo 1d20+5?", a: "Pon Número de dados en 1, Caras en d20 y Modificador en 5, y pulsa Tirar." },
      { q: "¿Puedo lanzar distintos tipos de dado a la vez?", a: "Lanza un tipo cada vez. Para tiradas mixtas, lanza cada tipo por turnos: el historial registra ambos." },
    ],
  },
  "coin-flip": {
    name: "Lanzar una moneda",
    card: "Lanza una moneda virtual justa, una o cien veces.",
    seoTitle: "Lanzar una moneda online – ¿Cara o cruz?",
    metaDescription: "Lanza una moneda virtual online para un cara o cruz justo. Lanza una vez o 100, sigue las rachas y mira la proporción de caras y cruces. Gratis e instantáneo.",
    h1: "Lanza una moneda online",
    lead: "¿Cara o cruz? Lanza una moneda virtual perfectamente justa: una vez para decidir o cien para ver la probabilidad en acción.",
    sections: [
      {
        heading: "Una moneda perfectamente justa",
        paragraphs: [
          "Los investigadores han visto que una moneda real cae ligeramente más veces del lado con el que empezó. Una moneda virtual no tiene lado inicial ni técnica de pulgar: cada lanzamiento es un 50/50 nuevo del generador criptográfico del navegador.",
          "Pulsa Lanzar 10 o Lanzar 100 para un experimento rápido. Verás la proporción de caras oscilar alrededor del 50 % y acercarse más cuanto más lances: la ley de los grandes números en acción.",
        ],
      },
      { heading: "Cuándo lanzar una moneda", list: ["Decidir quién empieza o saca", "Desempatar entre dos opciones", "Decisiones rápidas de sí o no", "Clases de probabilidad", "Elegir campo en un juego"] },
    ],
    howTo: [
      { title: "Elige", text: "¿Cara o cruz? Dilo en voz alta." },
      { title: "Lanza", text: "Pulsa Lanzar moneda y mírala girar." },
      { title: "Mira el resultado", text: "Cara o cruz aparece con tus estadísticas." },
      { title: "Experimenta", text: "Prueba Lanzar 100 para ver la proporción acercarse al 50 %." },
    ],
    benefits: [
      { title: "50/50 exacto", text: "Sin sesgo por peso, desgaste o técnica." },
      { title: "Lanzamientos en lote", text: "Lanza 10 o 100 monedas al instante." },
      { title: "Estadísticas", text: "Totales, rachas y resultados recientes." },
      { title: "Accesible", text: "Los resultados se anuncian a lectores de pantalla." },
    ],
    faqs: [
      { q: "¿Lanzar una moneda virtual es 50/50?", a: "Sí. Cada lanzamiento tiene exactamente un 50 % de salir cara, elegido con el generador criptográfico del navegador." },
      { q: "¿Por qué me salieron cinco caras seguidas?", a: "¡Las rachas son normales! Cinco caras seguidas tienen una probabilidad de 1 entre 32, así que pasa a menudo en muchos lanzamientos." },
      { q: "¿Puedo lanzar más de una moneda?", a: "Usa Lanzar 10 o Lanzar 100 para lanzar muchas a la vez y ver los totales." },
    ],
  },
  "yes-or-no-picker": {
    name: "Selector de sí o no",
    card: "Obtén un sí, no o quizás al instante.",
    seoTitle: "Selector de sí o no – Respuesta aleatoria al instante",
    metaDescription: "Haz una pregunta y recibe un sí o un no aleatorio al instante. Añade Quizás o usa al mejor de tres. Una forma rápida y justa de tomar decisiones pequeñas.",
    h1: "¿Sí o no?",
    lead: "Escribe tu pregunta (o no) y recibe un sí o un no al instante. Sin girar, sin esperar.",
    sections: [
      {
        heading: "Cuando solo necesitas una respuesta",
        paragraphs: [
          "La Ruleta de sí o no es genial cuando quieres suspense. Este selector es para cuando quieres la respuesta ya. Pulsa el botón y tendrás Sí o No con exactamente la misma probabilidad, o activa Quizás para tres respuestas.",
          "Al mejor de tres lanza tres veces y gana la mayoría, algo que a mucha gente le convence más que un solo resultado. Tus preguntas y respuestas recientes aparecen debajo.",
        ],
      },
      { heading: "Úsalo con cabeza", paragraphs: ["Una respuesta aleatoria es perfecta para elecciones pequeñas y reversibles: postre o no, caminar o ir en coche, empezar ahora o después de comer. Para lo importante, úsala para escuchar tu intuición: si la respuesta te decepciona, ya sabes lo que de verdad quieres."] },
    ],
    howTo: [
      { title: "Pregunta", text: "Escribe una pregunta de sí o no, o solo piénsala." },
      { title: "Opciones", text: "Añade Quizás o elige al mejor de tres." },
      { title: "Obtén la respuesta", text: "Pulsa el botón para un resultado inmediato." },
      { title: "Revisa", text: "Las respuestas recientes aparecen debajo." },
    ],
    benefits: [
      { title: "Instantáneo", text: "Sin animación: la respuesta aparece al momento." },
      { title: "Justo", text: "Todas las respuestas con la misma probabilidad." },
      { title: "Al mejor de tres", text: "Voto por mayoría para más confianza." },
      { title: "Privado", text: "Tus preguntas no salen de tu dispositivo." },
    ],
    faqs: [
      { q: "¿La respuesta es aleatoria?", a: "Sí. Cada respuesta se elige con un generador criptográficamente seguro con probabilidades exactamente iguales." },
      { q: "¿Cómo funciona al mejor de tres?", a: "El selector saca sí o no hasta tres veces y se detiene en cuanto una respuesta tiene dos votos. Verás los votos debajo de la respuesta." },
      { q: "¿Se guarda mi pregunta?", a: "Solo en esta página mientras está abierta. Las preguntas no se envían a ningún sitio." },
    ],
  },
  "truth-or-dare-generator": {
    name: "Generador de verdad o reto",
    card: "Preguntas y retos sanos por grupo de edad.",
    seoTitle: "Generador de verdad o reto – Preguntas y retos sanos",
    metaDescription: "Generador de verdad o reto gratis con preguntas y retos apropiados para niños, adolescentes y adultos. Sin repeticiones, con turnos y tarjetas al instante.",
    h1: "Generador de verdad o reto",
    lead: "Saca una verdad o un reto nuevo con un toque. Elige la edad, añade jugadores y deja que el juego fluya solo.",
    sections: [
      {
        heading: "Preguntas sanas para cada grupo",
        paragraphs: [
          "Todas las preguntas están escritas para que el juego sea divertido y cómodo. Las de niños son graciosas y suaves, las de adolescentes encajan en pijamadas y grupos juveniles, y las de adultos están pensadas para fiestas donde la gente quiere reír, no pasar vergüenza.",
          "Las preguntas no se repiten hasta que hayas visto toda la lista de esa edad y tipo, así que las partidas largas siguen siendo frescas.",
        ],
      },
      { heading: "Reglas para que sea divertido", list: ["Cada persona puede pasar una vez por partida, sin explicaciones.", "Los retos deben ser seguros y posibles en la sala.", "Nada de retos con el móvil, publicaciones o contactar a gente fuera del juego sin su permiso.", "Si alguien parece incómodo, pasad a lo siguiente: es para divertirse."] },
      { heading: "¿Prefieres una ruleta?", paragraphs: ["La Ruleta de verdad o reto esconde una pregunta bajo cada segmento y la revela tras el giro. Puedes escribir tus propias preguntas y compartir la ruleta con amigos."] },
    ],
    howTo: [
      { title: "Elige la edad", text: "Niños, adolescentes o adultos." },
      { title: "Añade jugadores", text: "Opcional: escribe nombres para seguir los turnos." },
      { title: "Saca una tarjeta", text: "Elige Verdad, Reto o Al azar." },
      { title: "Siguiente jugador", text: "Pasa el turno y saca otra." },
    ],
    benefits: [
      { title: "Apropiado por edad", text: "Tres grupos de preguntas seleccionadas." },
      { title: "Sin repeticiones", text: "Recorre toda la lista antes de repetir." },
      { title: "Turnos", text: "Muestra a quién le toca." },
      { title: "Instantáneo", text: "Sin preparación ni registro." },
    ],
    faqs: [
      { q: "¿Las preguntas son aptas para niños?", a: "El grupo Niños está pensado para unos 6 a 12 años y mantiene todo divertido y suave. Elige siempre el grupo adecuado para el jugador más pequeño." },
      { q: "¿Puedo añadir mis propias verdades y retos?", a: "Usa la Ruleta de verdad o reto para escribir y guardar tus preguntas y compartirlas con amigos." },
      { q: "¿Cuántas preguntas hay?", a: "Cada edad tiene 15 verdades y 15 retos, y ninguno se repite hasta que salen todos." },
    ],
  },
  "youtube-comment-picker": {
    name: "Selector de comentarios de YouTube",
    card: "Elige un ganador al azar entre los comentarios de YouTube.",
    seoTitle: "Selector de comentarios de YouTube – Ganador aleatorio",
    metaDescription: "Elige un ganador al azar entre los comentarios de YouTube. Filtra por palabra clave, excluye tu canal, una participación por persona y varios ganadores.",
    h1: "Selector de comentarios de YouTube",
    lead: "Haz un sorteo justo: elige ganadores al azar entre los comentarios de un video, con filtros de palabra clave, duplicados y cuentas excluidas.",
    sections: [
      {
        heading: "Cómo funciona",
        paragraphs: [
          "Pega el enlace de un video público de YouTube y el selector carga sus comentarios principales mediante la API oficial de datos de YouTube. Después define tus reglas —una palabra clave obligatoria, cuentas excluidas y si cada persona cuenta una vez o una vez por comentario— y saca los ganadores que necesites.",
          "Si la carga automática no está disponible, puedes pegar los comentarios (uno por línea, como «Nombre: comentario»). Cópialos desde la vista de comentarios de YouTube Studio o de cualquier exportación.",
        ],
      },
      { heading: "Un sorteo en el que la gente confía", list: ["Anuncia las reglas antes de empezar, con fecha de cierre y cómo se elige al ganador.", "Activa Una participación por persona para que comentar muchas veces no ayude.", "Excluye tu canal, moderadores y miembros del equipo.", "Graba la pantalla o haz el sorteo en directo para que se vea que es justo.", "Sigue las políticas de concursos de YouTube y las leyes que apliquen."] },
      { heading: "Justicia", paragraphs: ["Los ganadores se sacan entre los comentarios válidos con un barajado parcial criptográficamente seguro, así que cada participación válida tiene la misma probabilidad y nadie puede ganar dos veces en el mismo sorteo."] },
    ],
    howTo: [
      { title: "Pega el enlace", text: "Cualquier video público o Short." },
      { title: "Carga los comentarios", text: "Los comentarios principales se cargan solos." },
      { title: "Define filtros", text: "Palabra clave, exclusiones y una por persona." },
      { title: "Elige ganadores", text: "Saca uno o varios a la vez." },
    ],
    benefits: [
      { title: "Sorteos justos", text: "Igual probabilidad para cada participación válida." },
      { title: "Antispam", text: "Opción de una participación por cuenta." },
      { title: "Flexible", text: "Filtros por palabra y listas de exclusión." },
      { title: "Sin iniciar sesión", text: "Nunca pedimos tu cuenta de YouTube." },
    ],
    faqs: [
      { q: "¿Tengo que iniciar sesión en YouTube?", a: "No. El selector solo lee comentarios públicos, así que no hace falta iniciar sesión." },
      { q: "¿Cuántos comentarios puede cargar?", a: "Hasta 4.000 comentarios principales por video. Para sorteos más grandes, pega los comentarios desde una exportación." },
      { q: "¿Se incluyen las respuestas?", a: "Solo se cargan los comentarios principales, que es la regla habitual en los sorteos por comentarios." },
      { q: "¿SpinWheelGe está afiliado a YouTube?", a: "No. SpinWheelGe es una herramienta independiente que usa la API pública de YouTube. YouTube es una marca de Google LLC." },
    ],
  },
};
