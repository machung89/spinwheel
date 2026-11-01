import type { LandingText } from "../types";

export const landingWheels: Record<string, LandingText> = {
  "spin-the-wheel": {
    name: "Girar la ruleta",
    card: "Ruleta aleatoria para cualquier lista.",
    seoTitle: "Girar la ruleta – Ruleta online gratis para cualquier lista",
    metaDescription: "Gira la ruleta online gratis. Escribe tus opciones, pulsa girar y obtén un resultado aleatorio y justo en segundos. Colores, sonidos, pesos y sin registro.",
    h1: "Gira la ruleta online",
    lead: "Escribe tus opciones, gira la ruleta y deja que el azar decida. Gratis, justa y directamente en tu navegador.",
    presetTitle: "Plan de fin de semana",
    presetEntries: ["Maratón de películas", "Juegos de mesa", "Pícnic en el parque", "Hornear galletas", "Paseo en bici", "Noche de karaoke", "Probar un restaurante", "Visitar un museo"],
    sections: [
      {
        heading: "Una ruleta que sirve para todo",
        paragraphs: [
          "Hay decisiones que no merecen un debate largo. Dónde comer, quién empieza, qué tarea de casa toca hoy: un giro lo resuelve y además es divertido. Esta ruleta acepta cualquier lista, desde dos opciones hasta mil, y la convierte en una ruleta colorida que puedes usar en el ordenador, la tableta o el móvil.",
          "Todo lo que cambias se guarda automáticamente en tu navegador, así que la ruleta seguirá ahí mañana. No necesitas cuenta y tus opciones nunca se suben a nuestros servidores.",
        ],
      },
      {
        heading: "Cómo se decide el resultado",
        paragraphs: [
          "Cuando pulsas Girar, primero se elige el ganador con el generador criptográfico de números aleatorios del navegador (la misma Web Crypto API que se usa en seguridad). Después la ruleta se anima para que el segmento elegido se detenga justo bajo el puntero. Como el resultado se decide antes de la animación, ni la velocidad de tu dispositivo ni el momento del clic pueden influir.",
          "En modo normal, todas las opciones tienen la misma probabilidad. Cambia al modo con pesos si quieres que algunas salgan más a menudo: los segmentos cambian de tamaño para mostrar siempre las probabilidades reales.",
        ],
      },
      {
        heading: "Usos más populares",
        list: ["Elegir restaurante o comida a domicilio cuando nadie se decide", "Escoger juego, actividad o película para la noche en familia", "Repartir tareas del hogar de forma justa entre compañeros de piso o hijos", "Hacer sorteos rápidos en directo", "Desempatar una discusión amistosa"],
      },
    ],
    howTo: [
      { title: "Añade tus opciones", text: "Escribe cada opción y pulsa Enter, o pega una lista entera." },
      { title: "Personalízala", text: "Elige tema de color, puntero, fuente y sonidos en la pestaña Diseño." },
      { title: "Gira", text: "Haz clic en la ruleta, pulsa Girar o la barra espaciadora." },
      { title: "Usa el resultado", text: "Quita al ganador, gira otra vez o copia y comparte el resultado." },
    ],
    benefits: [
      { title: "Justa por diseño", text: "Azar de nivel criptográfico, decidido antes de que la ruleta se mueva." },
      { title: "Privada", text: "Tus listas se quedan en tu navegador. Sin registro." },
      { title: "Flexible", text: "Modos con pesos, eliminación, marcador y misterio incluidos." },
      { title: "Para compartir", text: "Envía un enlace y cualquiera abre una copia de tu ruleta." },
    ],
    faqs: [
      { q: "¿Esta ruleta es realmente aleatoria?", a: "Sí. Cada giro usa crypto.getRandomValues con muestreo por rechazo, así que cada opción tiene exactamente la probabilidad que se muestra. La animación se calcula después para detenerse en el segmento elegido." },
      { q: "¿Cuántas opciones puedo añadir?", a: "Hasta 1.000 por ruleta. Con listas muy largas las etiquetas se hacen pequeñas, pero el giro sigue siendo exacto y el ganador siempre aparece en una ventana." },
      { q: "¿Puedo guardar mi ruleta?", a: "Se guarda automáticamente en este navegador. Para llevarla a otro dispositivo, usa Compartir para crear un enlace o descarga la configuración en JSON." },
      { q: "¿Funciona en el móvil?", a: "Sí. La ruleta se adapta a cualquier pantalla y las opciones y ajustes están a un toque debajo de la ruleta." },
    ],
  },
  "wheel-of-names": {
    name: "Ruleta de nombres",
    card: "Pega una lista de nombres y elige uno al azar.",
    seoTitle: "Ruleta de nombres – Elegir nombres al azar gratis",
    metaDescription: "Elige un nombre al azar en un solo giro. Pega una lista de clase o de equipo, gira la ruleta de nombres y quita a los ganadores. Gratis, privada y sin registro.",
    h1: "Ruleta de nombres – Selector aleatorio",
    lead: "Pega una lista de nombres, gira y obtén una elección justa cada vez. Perfecta para clases, reuniones y sorteos.",
    presetTitle: "Selector de nombres",
    presetEntries: ["Valentina", "Mateo", "Camila", "Santiago", "Isabella", "Sebastián", "Lucía", "Diego", "Mariana", "Nicolás", "Sofía", "Andrés"],
    sections: [
      {
        heading: "Por qué funciona tan bien una ruleta de nombres",
        paragraphs: [
          "Llamar a alguien por su nombre puede sentirse personal: siempre hay quien se pregunta por qué le tocó. Una ruleta quita esa presión. Todos ven la lista, todos ven el giro y nadie puede acusar al docente, al anfitrión o al jefe de equipo de tener favoritos.",
          "Además añade suspense. Los alumnos se enderezan, los asistentes levantan la vista del portátil y el chat del directo empieza a adivinar quién saldrá.",
        ],
      },
      {
        heading: "Que todos tengan su turno",
        paragraphs: [
          "Activa el modo Eliminación en la pestaña Giro y cada nombre se quitará después de salir. Sigue girando hasta vaciar la ruleta y habrás llamado a cada persona exactamente una vez, en orden aleatorio. Al terminar, pulsa Restaurar todo para devolver a todos.",
          "¿Prefieres que los nombres se queden? El modo Marcador cuenta cuántas veces sale cada persona, muy útil para ver quién no ha tenido turno.",
        ],
      },
      {
        heading: "Consejos para docentes y anfitriones",
        list: ["Pega los nombres directamente desde una columna de Google Sheets o Excel, uno por fila.", "Crea una ruleta por grupo (hasta ocho) para no mezclar listas.", "Asocia una pregunta a cada nombre con Actividades ocultas para preguntas al instante.", "Usa la pantalla completa en el proyector para una vista limpia y sin anuncios.", "Activa “Leer el resultado en voz alta” para que toda la sala oiga al ganador."],
      },
    ],
    howTo: [
      { title: "Pega los nombres", text: "Usa Pegar lista o Importar para añadir una lista completa desde una hoja de cálculo." },
      { title: "Elige un modo", text: "Normal mantiene los nombres; Eliminación quita a cada ganador." },
      { title: "Gira", text: "Pulsa Girar o la barra espaciadora. El ganador aparece con confeti." },
      { title: "Repite", text: "Quita o mantén al ganador y vuelve a girar. El historial registra cada elección." },
    ],
    benefits: [
      { title: "Visiblemente justa", text: "Todos ven la misma lista y el mismo giro: sin favoritismos." },
      { title: "Lista en segundos", text: "Pega 30 nombres en dos segundos. La lista se guarda para la próxima vez." },
      { title: "Lista para el aula", text: "Incluye eliminación, marcador y preguntas ocultas." },
      { title: "Privada", text: "Los nombres de tus alumnos no salen de tu dispositivo salvo que decidas compartir." },
    ],
    faqs: [
      { q: "¿Cómo quito un nombre después de que sale?", a: "Pulsa Quitar en la ventana del ganador o cambia al modo Eliminación para quitar a cada ganador automáticamente. Los nombres quitados quedan atenuados en la lista para restaurarlos después." },
      { q: "¿Puedo importar nombres desde Excel o Google Sheets?", a: "Sí. Copia la columna y usa Pegar lista, o importa un archivo .csv o .xlsx. La primera columna son los nombres; las columnas extra pueden definir pesos, colores o preguntas ocultas." },
      { q: "¿La ruleta de nombres es justa?", a: "En modo normal todos los nombres tienen la misma probabilidad. El ganador se elige con el generador criptográfico del navegador antes de que la ruleta empiece a girar." },
      { q: "¿Se guardan los nombres de mis alumnos en algún sitio?", a: "Solo en el almacenamiento local de tu navegador. No tenemos cuentas ni base de datos, y los enlaces solo se crean si pulsas Compartir." },
      { q: "¿Cuántos nombres puedo añadir?", a: "Hasta 1.000 por ruleta, y puedes tener hasta ocho ruletas abiertas a la vez." },
    ],
  },
  "random-picker": {
    name: "Selector aleatorio",
    card: "Elige un elemento al azar de cualquier lista.",
    seoTitle: "Selector aleatorio – Elige al azar de cualquier lista",
    metaDescription: "Selector aleatorio para listas de cualquier tamaño. Pega opciones, gira y obtén una elección sin sesgos. Quita elegidos, usa pesos o combina varias listas.",
    h1: "Selector aleatorio",
    lead: "¿Tienes una lista y necesitas un elemento? Pégala aquí y deja que el selector elija: justo, al instante y sin sesgos.",
    presetTitle: "Reparto de tareas",
    presetEntries: ["Lavar los platos", "Poner la lavadora", "Pasar la aspiradora", "Sacar la basura", "Quitar el polvo", "Hacer la compra", "Regar las plantas", "Limpiar el baño"],
    sections: [
      {
        heading: "Una herramienta, listas infinitas",
        paragraphs: [
          "Un selector aleatorio es la forma más simple de decidir: tú das las opciones y él elige una. Úsalo para tareas, orden de turnos, qué libro leer después, qué error arreglar primero o quién pone la música. Todo lo que puedas escribir como lista se puede sortear.",
          "Como funciona sobre una ruleta, además ves cada opción y su probabilidad. Así es fácil explicar el resultado a quien esté mirando.",
        ],
      },
      {
        heading: "Elegir más de un elemento",
        paragraphs: [
          "Para sacar varios elementos sin repetir, activa el modo Eliminación y gira las veces que necesites: cada elegido se quita para que no vuelva a salir. Los resultados aparecen en la pestaña Historial, donde puedes copiarlos o exportarlos a CSV.",
          "¿Necesitas elegir de varias listas a la vez, como persona, tarea y fecha límite? Añade más ruletas (hasta ocho) y pulsa Girar las ruletas. Cada una gira de forma independiente y muestra su propio resultado.",
        ],
      },
      {
        heading: "Ideas para probar",
        list: ["Rotación semanal de tareas para compañeros de piso o niños", "Orden de presentaciones u oradores", "Qué libro, pódcast o videojuego empezar", "Orden de elección en un torneo o liga", "Tema semanal aleatorio para una retrospectiva"],
      },
    ],
    howTo: [
      { title: "Pega la lista", text: "Un elemento por línea, o importa un CSV o Excel." },
      { title: "Fija las reglas", text: "Elige probabilidades iguales, con pesos o eliminación." },
      { title: "Elige", text: "Gira la ruleta para obtener tu elemento al azar." },
      { title: "Exporta", text: "Copia los resultados o descarga todo el historial en CSV." },
    ],
    benefits: [
      { title: "Sin sesgos", text: "El muestreo por rechazo elimina el pequeño sesgo del código aleatorio simple." },
      { title: "Varias elecciones", text: "El modo eliminación saca elementos sin repetir." },
      { title: "Varias listas", text: "Gira hasta ocho ruletas a la vez." },
      { title: "Exportable", text: "Descarga cada resultado con fecha y hora." },
    ],
    faqs: [
      { q: "¿Puedo elegir varios elementos a la vez?", a: "Usa el modo Eliminación y gira una vez por elemento, o usa varias ruletas a la vez. Para formar grupos de personas, el Generador de equipos divide una lista completa en un clic." },
      { q: "¿Algunos elementos pueden tener más probabilidad?", a: "Sí. En el modo Con pesos cada opción tiene un peso. Una con peso 2 tiene el doble de probabilidad que una con peso 1, y su segmento es el doble de grande." },
      { q: "¿Hay límite de tamaño?", a: "Cada ruleta admite hasta 1.000 opciones. La elección sigue siendo rápida y exacta." },
      { q: "¿Funciona sin conexión?", a: "Una vez cargada la página, puedes girar sin conexión. Tu lista se guarda en el navegador." },
    ],
  },
  "decision-wheel": {
    name: "Ruleta de decisiones",
    card: "Desempata entre cualquier conjunto de opciones.",
    seoTitle: "Ruleta de decisiones – Gira para decidir rápido",
    metaDescription: "¿No te decides? Gira la ruleta de decisiones. Añade tus opciones, da más peso a tus favoritas y deja que la ruleta desempate. Gratis y sin registro.",
    h1: "Ruleta de decisiones",
    lead: "¿Atascado entre varias opciones? Ponlas en la ruleta y gira. A veces la forma más rápida de saber qué quieres es ver qué elige la ruleta.",
    presetTitle: "¿Debería…?",
    presetEntries: ["Hacerlo ya", "Consultarlo con la almohada", "Preguntar a un amigo", "Hacerlo hoy", "Esperar una semana", "Hacer una lista de pros y contras"],
    sections: [
      {
        heading: "Por qué girar ayuda a decidir",
        paragraphs: [
          "La fatiga de decisión existe. Tras un día largo, incluso las elecciones pequeñas —qué cocinar, qué tarea empezar, si salir o no— se hacen pesadas. Dejar una decisión menor a la ruleta libera energía para lo que importa.",
          "Hay otro beneficio: en cuanto la ruleta se detiene, sentirás alivio o decepción. Esa reacción te dice qué esperabas en realidad. Gira de nuevo si lo necesitas; nadie lleva la cuenta.",
        ],
      },
      { heading: "Inclina la balanza hacia lo que prefieres", paragraphs: ["No todas las opciones son iguales. En el modo Con pesos puedes dar peso 3 a tu favorita y 1 a la menos probable. Los segmentos cambian de tamaño para mostrar las probabilidades reales, así siempre sabes cómo se toma la decisión."] },
      { heading: "Buenas decisiones para una ruleta", list: ["Qué cocinar esta noche", "Qué tarea abordar primero", "Adónde ir de excursión el fin de semana", "Qué entrenamiento hacer hoy", "Qué juego de mesa llevar a la quedada"] },
    ],
    howTo: [
      { title: "Escribe tus opciones", text: "Añade todas las opciones que estás considerando." },
      { title: "Dales peso (opcional)", text: "Cambia al modo Con pesos y da números más altos a tus favoritas." },
      { title: "Gira", text: "Deja que la ruleta decida." },
      { title: "Confía en tu instinto", text: "¿Contento con el resultado? Adelante. ¿No? Eso también te dice algo." },
    ],
    benefits: [
      { title: "Adiós a darle vueltas", text: "Convierte una decisión atascada en un giro de 5 segundos." },
      { title: "Probabilidades claras", text: "El tamaño de cada segmento coincide con su probabilidad real." },
      { title: "Reutilizable", text: "Tus ruletas de decisión se guardan para la próxima vez." },
      { title: "Divertida en grupo", text: "Resuelve debates sin que nadie se sienta ignorado." },
    ],
    faqs: [
      { q: "¿De verdad debería dejar que una ruleta decida?", a: "Para elecciones de poca importancia, sin duda: ahorra tiempo y estrés. Para decisiones grandes, úsala para descubrir tu intuición más que como palabra final." },
      { q: "¿Cómo funcionan las decisiones con pesos?", a: "La probabilidad de cada opción es su peso dividido entre la suma de pesos. Una opción de peso 3 en una ruleta que suma 6 tiene un 50 % de probabilidad." },
      { q: "¿Puedo ocultar las opciones hasta que se detenga?", a: "Sí. El modo Misterio oculta todas las etiquetas hasta que la ruleta se detiene, ideal para dar emoción en grupo." },
      { q: "¿Hay una versión simple de sí o no?", a: "Sí: prueba la Ruleta de sí o no o el Selector de sí o no instantáneo." },
    ],
  },
  "yes-or-no-wheel": {
    name: "Ruleta de sí o no",
    card: "Respuesta 50/50 a cualquier pregunta de sí o no.",
    seoTitle: "Ruleta de sí o no – Gira para una respuesta al instante",
    metaDescription: "Haz una pregunta y gira la ruleta de sí o no para una respuesta aleatoria al instante. Añade “Quizás”, cambia las probabilidades o juega al mejor de tres.",
    h1: "Ruleta de sí o no",
    lead: "Haz tu pregunta, gira la ruleta y recibe una respuesta directa. Añade un Quizás si estás indeciso.",
    presetTitle: "¿Sí o no?",
    presetEntries: ["Sí", "No", "Sí", "No", "Sí", "No"],
    sections: [
      {
        heading: "Como lanzar una moneda, pero con más estilo",
        paragraphs: [
          "Una ruleta de sí o no hace lo mismo que una moneda, pero se ve mejor, es más divertida y se personaliza fácilmente. Empieza con tres segmentos Sí y tres No, así que ambas respuestas tienen exactamente un 50 % de probabilidad.",
          "¿Quieres una tercera opción? Añade Quizás, o renombra los segmentos como «Hazlo» y «Déjalo», «Ahora» y «Luego», o lo que encaje con tu pregunta.",
        ],
      },
      { heading: "Cambiar las probabilidades", paragraphs: ["Si te inclinas por un lado, añade otro segmento Sí o cambia al modo Con pesos y pon el Sí en 2. La ruleta mostrará claramente las nuevas probabilidades: sigue siendo una respuesta honesta, solo que con tu preferencia incluida."] },
      { heading: "Preguntas divertidas", list: ["¿Pedimos pizza esta noche?", "¿Le escribo primero?", "¿Hoy toca peli?", "¿Vamos a la playa este fin de semana?", "¿Me toca postre?"] },
    ],
    howTo: [
      { title: "Piensa una pregunta", text: "Sirve cualquier pregunta de sí o no." },
      { title: "Gira", text: "Pulsa Girar o la barra espaciadora." },
      { title: "Lee la respuesta", text: "El segmento ganador se resalta y se anuncia." },
      { title: "¿Al mejor de tres?", text: "Vuelve a girar y lleva la cuenta en modo Marcador." },
    ],
    benefits: [
      { title: "50/50 exacto", text: "Segmentos iguales, probabilidades iguales, salvo que las cambies." },
      { title: "Personalizable", text: "Añade Quizás, renombra respuestas, cambia colores." },
      { title: "Modo marcador", text: "Cuenta respuestas en varios giros para jugar al mejor de." },
      { title: "En cualquier sitio", text: "Móvil, tableta o portátil: sin apps." },
    ],
    faqs: [
      { q: "¿La ruleta de sí o no es 50/50?", a: "Sí. La ruleta por defecto tiene tres segmentos Sí y tres No del mismo tamaño, así que cada respuesta tiene exactamente un 50 % de probabilidad." },
      { q: "¿Puedo añadir Quizás?", a: "Escribe Quizás en el cuadro de opciones y pulsa Enter. Con dos Sí, dos No y dos Quizás, cada respuesta tiene una probabilidad de un tercio." },
      { q: "¿En qué se diferencia del Selector de sí o no?", a: "La ruleta es visual y personalizable. El Selector de sí o no da una respuesta instantánea sin animación e incluye la opción al mejor de tres." },
    ],
  },
  "prize-wheel": {
    name: "Ruleta de premios",
    card: "Ruleta con pesos para eventos y tiendas.",
    seoTitle: "Ruleta de premios – Ruleta online gratis para eventos",
    metaDescription: "Crea una ruleta de premios para sorteos, ferias, tiendas y aulas. Fija la probabilidad de cada premio con pesos, añade imágenes y gira en pantalla completa. Gratis.",
    h1: "Ruleta de premios",
    lead: "Monta una ruleta de premios para tu stand, tienda, directo o aula en minutos. Fija las probabilidades, añade imágenes y gira.",
    presetTitle: "Ruleta de premios",
    presetEntries: ["Café gratis", "10 % de descuento", "Pack de stickers", "Sigue intentando", "Envío gratis", "Regalo sorpresa", "Tarjeta regalo de 5 $", "Gran premio"],
    sections: [
      {
        heading: "Probabilidades realistas",
        paragraphs: [
          "El error más común en las ruletas de premios es dar al gran premio el mismo segmento que a un sticker. Esta ruleta empieza en modo Con pesos: los premios comunes tienen pesos altos y los mejores, pesos bajos. Cada segmento cambia de tamaño para coincidir con su probabilidad, así los participantes ven que es honesta.",
          "¿Quieres un número fijo de premios grandes? Usa el modo Eliminación o quita un premio de la ruleta cuando alguien lo gane.",
        ],
      },
      {
        heading: "Usar una ruleta de premios en un evento",
        paragraphs: [
          "Abre la ruleta en pantalla completa en un portátil conectado a una TV o monitor y usa la barra espaciadora o un presentador inalámbrico para girar. La pantalla completa oculta todo menos la ruleta y el resultado: sin menús ni anuncios. Activa el sonido para el tictac y la celebración; animan cualquier stand.",
          "Antes del evento, revisa las normas locales. Muchos países y estados regulan los concursos en los que hay que pagar o comprar para participar; una ruleta gratuita suele ser más sencilla, pero las normas varían.",
        ],
      },
      { heading: "Dónde brillan las ruletas de premios", list: ["Stands de ferias y congresos", "Inauguraciones y días de agradecimiento a clientes", "Sistemas de recompensas en el aula", "Sorteos en directo y redes sociales", "Fiestas de empresa y celebraciones de equipo"] },
    ],
    howTo: [
      { title: "Escribe los premios", text: "Añade cada premio, con emoji o imagen si quieres." },
      { title: "Fija las probabilidades", text: "En modo Con pesos, da un peso menor a los premios raros." },
      { title: "Pantalla completa", text: "Muestra la ruleta en una pantalla grande." },
      { title: "Registra ganadores", text: "El historial guarda cada premio con fecha y hora." },
    ],
    benefits: [
      { title: "Probabilidades honestas", text: "El tamaño del segmento refleja siempre la probabilidad real." },
      { title: "Lista para eventos", text: "Pantalla completa, sonidos, confeti y control por teclado." },
      { title: "Control de inventario", text: "Quita premios cuando se agoten." },
      { title: "Registro", text: "Exporta un CSV de cada giro para tus registros." },
    ],
    faqs: [
      { q: "¿Cómo hago que el gran premio sea raro?", a: "Mantén el modo Con pesos y da al gran premio un peso pequeño, como 0,5, mientras los comunes tienen 3 o más. La probabilidad de cada premio aparece en la ventana del ganador." },
      { q: "¿Puedo añadir imágenes a la ruleta?", a: "Sí. Abre las opciones de una entrada y sube una imagen PNG, JPG o WebP (hasta 2 MB), o pega un enlace https a una imagen." },
      { q: "¿Puedo usarla en una feria sin internet?", a: "Carga la página una vez con conexión; los giros siguen funcionando si la conexión se cae. Tu ruleta se guarda en el navegador." },
      { q: "¿Es legal hacer una ruleta de premios?", a: "Las ruletas gratuitas suelen estar bien, pero las normas de concursos y sorteos cambian según el país o estado. Si hay que pagar o comprar para girar, consulta la normativa local primero." },
    ],
  },
  "classroom-spinner": {
    name: "Ruleta para el aula",
    card: "Responsabilidades, actividades y premios en una ruleta.",
    seoTitle: "Ruleta para el aula – Ruleta gratis para docentes",
    metaDescription: "Ruleta gratis para el aula: elige alumnos, reparte responsabilidades, escoge actividades y organiza juegos de repaso. Ideal para proyector y privada.",
    h1: "Ruleta para el aula",
    lead: "Reparte responsabilidades, elige actividades y organiza juegos de repaso con una ruleta que tus alumnos querrán ver.",
    presetTitle: "Responsabilidades de clase",
    presetEntries: ["Encargado de la fila", "Abre la puerta", "Reparte hojas", "Borra la pizarra", "Riega las plantas", "Bibliotecario", "Mensajero", "Ayudante de tecnología", "Material", "Calendario"],
    sections: [
      {
        heading: "Mucho más que un selector de nombres",
        paragraphs: [
          "Los docentes usan ruletas para mucho más que preguntar. Esta empieza con responsabilidades de clase habituales, pero puedes cambiarlas en segundos por temas de repaso, pausas activas, preguntas de lectura, parejas o recompensas.",
          "Abre hasta ocho ruletas para combinarlas, por ejemplo una de nombres y otra de preguntas. Pulsa Girar las ruletas y ambas eligen a la vez.",
        ],
      },
      {
        heading: "Pensada para el frente de la clase",
        paragraphs: [
          "La pantalla completa ofrece una ruleta limpia sin menús ni anuncios, ideal para proyector o pizarra digital. Los alumnos pueden pulsar el gran botón Girar, y la barra espaciadora también funciona con un teclado inalámbrico.",
          "Activa “Leer el resultado en voz alta” y usa Actividades ocultas para asociar a cada segmento una pregunta o tarea que solo se revela tras el giro.",
        ],
      },
      { heading: "Ideas para el aula", list: ["Responsabilidades semanales", "Elegir la siguiente pregunta o tema de repaso", "Escoger una pausa activa cuando baja la energía", "Seleccionar preguntas de diario de lectura", "Premiar el buen comportamiento con una ruleta de recompensas", "Formar parejas o grupos al azar (prueba el Generador de equipos)"] },
    ],
    howTo: [
      { title: "Elige una lista inicial", text: "Usa las responsabilidades o abre una plantilla de aula." },
      { title: "Personaliza", text: "Renombra segmentos, elige los colores de tu clase y añade emojis." },
      { title: "Proyéctala", text: "Pulsa pantalla completa para una vista sin distracciones." },
      { title: "Deja girar a los alumnos", text: "Clic, toque o Espacio: los resultados quedan en el Historial." },
    ],
    benefits: [
      { title: "Privacidad del alumnado", text: "Sin cuentas, y los nombres se quedan en tu dispositivo." },
      { title: "Motivadora", text: "Sonido, confeti y suspense mantienen la atención." },
      { title: "Flexible", text: "Responsabilidades, preguntas, premios o grupos: una sola herramienta." },
      { title: "Justa", text: "El modo Eliminación garantiza un turno para cada alumno." },
    ],
    faqs: [
      { q: "¿La ruleta es segura para los alumnos?", a: "Sí. Sin registro, sin chat y sin contenido de otras personas. Tus listas se guardan solo en tu navegador." },
      { q: "¿Puedo usarla en una pizarra digital?", a: "Sí. Abre el sitio en el navegador de la pizarra, activa la pantalla completa y toca la ruleta para girar." },
      { q: "¿Puedo guardar una ruleta por cada grupo?", a: "Puedes tener hasta ocho ruletas en esta página y cada una se guarda sola. Expórtalas en JSON para hacer copia o llevarlas a otro ordenador." },
      { q: "¿Puedo ocultar la respuesta hasta el giro?", a: "Añade la pregunta o tarea como Actividad oculta en cada opción. Solo se revela en la ventana tras detenerse la ruleta." },
    ],
  },
  "random-number-wheel": {
    name: "Ruleta de números",
    card: "Gira para sacar un número del 1 al 10.",
    seoTitle: "Ruleta de números aleatorios – Gira para elegir un número",
    metaDescription: "Gira una ruleta de números del 1 al 10, del 1 al 100 o del rango que quieras. Ideal para rifas, juegos de matemáticas y actividades de clase. Gratis y justa.",
    h1: "Ruleta de números aleatorios",
    lead: "Gira para elegir un número. Empieza con el 1 al 10 o pega el rango que necesites para rifas, juegos de matemáticas o bingo.",
    presetTitle: "Números del 1 al 10",
    sections: [
      {
        heading: "Cualquier rango, cualquier tamaño",
        paragraphs: [
          "La ruleta empieza con los números del 1 al 10. ¿Necesitas otro rango? Abre Pegar lista y escribe un número por línea; lo más rápido es rellenar una columna en Google Sheets o Excel y pegarla. La ruleta admite hasta 1.000 números.",
          "Para rangos muy grandes, como del 1 al 1.000.000, el Generador de números aleatorios es mejor: elige en cualquier rango al instante sin necesitar un segmento por número.",
        ],
      },
      { heading: "Sacar números sin repetir", paragraphs: ["Para rifas y bingo, activa el modo Eliminación. Cada número se quita al salir, así no se canta dos veces. Los números salidos quedan en orden en la pestaña Historial y puedes exportarlos a CSV."] },
      { heading: "Usos de una ruleta de números", list: ["Sorteo de boletos de rifa", "Práctica de tablas (gira dos ruletas y multiplica)", "Elegir número de página, ejercicio o capítulo", "Elegir asiento o mesa al azar", "Juegos de fiesta que necesitan una cantidad al azar"] },
    ],
    howTo: [
      { title: "Define los números", text: "Usa del 1 al 10 o pega tu propio rango." },
      { title: "Elige si se repiten", text: "Normal permite repetir; Eliminación saca cada número una vez." },
      { title: "Gira", text: "El resultado aparece en una ventana y en el Historial." },
      { title: "Exporta", text: "Descarga el historial en CSV si necesitas un registro." },
    ],
    benefits: [
      { title: "Uniforme", text: "Cada número tiene exactamente la misma probabilidad." },
      { title: "Sin repetir", text: "Modo eliminación para rifas y bingo." },
      { title: "Visual", text: "Ideal para clases y públicos que quieren mirar." },
      { title: "Matemáticas con varias ruletas", text: "Gira dos ruletas de números a la vez para juegos de cálculo." },
    ],
    faqs: [
      { q: "¿Cómo hago una ruleta del 1 al 100?", a: "Abre la plantilla de números del 1 al 100 o usa Pegar lista con los números del 1 al 100 en líneas separadas." },
      { q: "¿Puedo elegir varios números?", a: "Gira varias veces con el modo Eliminación, o usa el Generador de números aleatorios para sacar muchos de golpe." },
      { q: "¿Los números son realmente aleatorios?", a: "Vienen del generador criptográfico de tu navegador, con muestreo por rechazo para evitar sesgos." },
    ],
  },
  "random-letter-wheel": {
    name: "Ruleta de letras",
    card: "Gira para sacar una letra de la A a la Z.",
    seoTitle: "Ruleta de letras – Gira para elegir una letra de la A a la Z",
    metaDescription: "Gira la ruleta del abecedario para elegir una letra al azar de la A a la Z. Perfecta para juegos de palabras, fonética, tutti frutti y calentamientos en clase.",
    h1: "Ruleta de letras (A–Z)",
    lead: "Gira el abecedario para elegir una letra al azar para juegos de palabras, fonética y retos por categorías.",
    presetTitle: "Abecedario",
    sections: [
      {
        heading: "Perfecta para juegos de palabras y categorías",
        paragraphs: [
          "Muchos juegos clásicos empiezan con una letra al azar: el tutti frutti (o «basta»), donde hay que decir un animal, una ciudad y una comida con esa letra; escribir una frase en la que todas las palabras empiecen por ella; o competir por la lista más larga en un minuto.",
          "Algunas letras (como Q, X o W) complican mucho estos juegos. Ocúltalas con el icono del ojo sin borrarlas y recupéralas cuando quieras con Restaurar todo. ¿Juegas en español? Añade la Ñ.",
        ],
      },
      { heading: "Fonética y primeras letras", paragraphs: ["Con los más pequeños, gira una letra y pide su sonido, una palabra que empiece por ella o un objeto de la sala con esa inicial. Añade un emoji a cada letra como pista visual, o prueba la plantilla del Abecedario en inglés, que asocia cada letra con una palabra."] },
      { heading: "Ideas rápidas de juego", list: ["Tutti frutti: comida, lugar y animal con esa letra", "Deletreo rápido: gana la palabra más larga", "Reto de aliteración: inventa una frase divertida", "Calentamiento fonético: di el sonido y una palabra", "Búsqueda del tesoro: encuentra algo que empiece por esa letra"] },
    ],
    howTo: [
      { title: "Empieza con A–Z", text: "Las 26 letras ya están en la ruleta." },
      { title: "Quita las difíciles", text: "Oculta Q, X o W con el icono del ojo si quieres." },
      { title: "Gira", text: "Clic, toque o barra espaciadora." },
      { title: "Juega", text: "Usa la letra para tu juego de palabras o categorías." },
    ],
    benefits: [
      { title: "Lista para el aula", text: "Letras grandes y claras que se leen bien en el proyector." },
      { title: "Personalizable", text: "Minúsculas, solo vocales o cualquier grupo de letras." },
      { title: "Sin repetir", text: "El modo eliminación saca cada letra una vez." },
      { title: "Instantánea", text: "Sin preparación: el abecedario ya está listo." },
    ],
    faqs: [
      { q: "¿Puedo usar minúsculas?", a: "Sí. Edita las opciones o pega a–z en minúsculas con Pegar lista y elige Reemplazar las opciones existentes." },
      { q: "¿Cómo giro solo vocales?", a: "Oculta las consonantes con el icono del ojo o crea una ruleta nueva con A, E, I, O y U." },
      { q: "¿Hay una versión sin ruleta?", a: "El Generador de letras aleatorias saca una o varias letras al instante, con opciones de vocales, consonantes y omitir letras difíciles." },
    ],
  },
  "truth-or-dare-wheel": {
    name: "Ruleta de verdad o reto",
    card: "Verdades y retos ocultos que se revelan en cada giro.",
    seoTitle: "Ruleta de verdad o reto – Gira para una verdad o un reto",
    metaDescription: "Gira la ruleta de verdad o reto para revelar una pregunta o desafío oculto. Incluye preguntas sanas para toda la familia, o escribe las tuyas para fiestas.",
    h1: "Ruleta de verdad o reto",
    lead: "Gira para caer en Verdad o Reto y descubre la pregunta o el desafío escondido bajo ese segmento.",
    presetTitle: "Verdad o reto",
    presetEntries: [
      { text: "Verdad", hidden: "¿Qué es lo más tonto que has hecho en el colegio?" },
      { text: "Reto", hidden: "Habla como un robot hasta tu próximo turno." },
      { text: "Verdad", hidden: "Si fueras invisible un día, ¿qué harías primero?" },
      { text: "Reto", hidden: "Haz tu mejor imitación de una gallina." },
      { text: "Verdad", hidden: "¿Qué canción cantas cuando nadie te escucha?" },
      { text: "Reto", hidden: "Habla solo en rimas durante una ronda." },
      { text: "Verdad", hidden: "Si mandaras tú, ¿qué regla pondrías?" },
      { text: "Reto", hidden: "Cruza la sala caminando como un cangrejo." },
    ],
    sections: [
      {
        heading: "Las preguntas ocultas le dan emoción",
        paragraphs: [
          "Cada segmento de esta ruleta esconde una pregunta o un reto concreto. Mientras gira, los jugadores solo ven Verdad o Reto; el contenido aparece en la ventana cuando se detiene. Así nadie puede apuntar a uno fácil.",
          "Las preguntas iniciales son aptas para toda la familia y para niños. Abre las opciones de cualquier entrada para editar su contenido oculto o añade segmentos nuevos con tus ideas para adolescentes o adultos.",
        ],
      },
      { heading: "Que sea divertido para todos", list: ["Acordad una regla de «paso» antes de empezar: un comodín por persona.", "Los retos deben ser seguros, amables y posibles en la sala donde estéis.", "No retes a nadie a compartir información privada ni a publicar en internet.", "Usa el modo Eliminación para que no se repita la misma pregunta.", "Para más preguntas por edades, prueba el Generador de verdad o reto."] },
      { heading: "Haz tu propia versión", paragraphs: ["Cambia las preguntas por un tema: preguntas navideñas para una reunión familiar, verdades para conocer al equipo o retos físicos para un cumpleaños. Después usa Compartir para enviar la ruleta a tus amigos: las preguntas ocultas van incluidas."] },
    ],
    howTo: [
      { title: "Reúne a los jugadores", text: "Sentaos en círculo o entrad en una videollamada." },
      { title: "Gira", text: "Cada jugador gira en su turno." },
      { title: "Revela", text: "La verdad o el reto aparece cuando la ruleta se detiene." },
      { title: "Personaliza", text: "Edita las preguntas ocultas para tu grupo." },
    ],
    benefits: [
      { title: "Sin espiar", text: "Las preguntas quedan ocultas hasta el final del giro." },
      { title: "Inicio familiar", text: "Las preguntas iniciales son aptas para niños." },
      { title: "Totalmente editable", text: "Escribe tus propias verdades y retos." },
      { title: "Para compartir", text: "Envía tu ruleta personalizada a tus amigos." },
    ],
    faqs: [
      { q: "¿Las preguntas son aptas para niños?", a: "Las preguntas iniciales de esta ruleta están pensadas para niños y familias. Puedes editarlas, y el Generador de verdad o reto permite elegir preguntas para niños, adolescentes o adultos." },
      { q: "¿Cómo añado mis propios retos?", a: "Añade una opción llamada Reto, abre sus opciones con la flecha y escribe el desafío en el cuadro Actividad oculta." },
      { q: "¿Podemos jugar por videollamada?", a: "Sí. Comparte pantalla y gira para cada jugador, o envía el enlace para que cada uno gire en su dispositivo." },
    ],
  },
  "food-wheel": {
    name: "Ruleta de comida",
    card: "Diez comidas favoritas para girar.",
    seoTitle: "Ruleta de comida – Gira para decidir qué comer",
    metaDescription: "¿No sabes qué comer? Gira la ruleta de comida para ideas de cena, almuerzo o comida a domicilio. Personalízala con tus platos y restaurantes favoritos. Gratis.",
    h1: "Ruleta de comida – ¿Qué como hoy?",
    lead: "Acaba con el bucle de «no sé, ¿tú qué quieres?». Gira la ruleta de comida y la cena queda decidida.",
    presetTitle: "¿Qué cenamos?",
    presetEntries: ["Pizza", "Tacos", "Sushi", "Hamburguesas", "Pasta", "Salteado", "Barbacoa", "Ensalada", "Curry", { text: "Arepas", emoji: "🫓" }],
    sections: [
      {
        heading: "La forma más rápida de elegir comida",
        paragraphs: [
          "Decidir qué comer es uno de los debates diarios más comunes en cualquier casa. La ruleta de comida empieza con diez opciones que gustan a todos, tanto si cocinas como si pides a domicilio. Cámbialas por tus platos de siempre, tus restaurantes favoritos o lo que haya en la nevera.",
          "Si alguien de verdad no quiere sushi hoy, pulsa el icono del ojo para quitarlo de la ruleta por ahora sin borrarlo.",
        ],
      },
      { heading: "Que sea justo para toda la mesa", paragraphs: ["Que cada uno añada una o dos opciones y luego gira. Como el resultado es aleatorio y visible para todos, es difícil discutirlo. ¿Quieres dar más oportunidades a lo que pide el cumpleañero? Cambia al modo Con pesos y súbele el peso."] },
      { heading: "Más ruletas de comida", list: ["Ideas de almuerzo para el trabajo o el cole", "Selector de restaurante para una cita", "Ruleta de postres", "Ideas de cena para entre semana", "Qué comer con poco presupuesto"] },
    ],
    howTo: [
      { title: "Añade comidas", text: "Mantén la lista inicial o añade tus favoritas." },
      { title: "Quita los vetos", text: "Oculta lo que alguien no tenga ganas de comer." },
      { title: "Gira", text: "Deja que la ruleta elija la cena." },
      { title: "Disfruta", text: "Se acabó discutir: solo queda comer." },
    ],
    benefits: [
      { title: "Fin del debate", text: "Un giro justo que todos aceptan de antemano." },
      { title: "Personal", text: "Añade tus platos, restaurantes y emojis." },
      { title: "Guardada", text: "Tu ruleta te espera la próxima vez que tengas hambre." },
      { title: "Para toda la familia", text: "A los niños les encanta girarla." },
    ],
    faqs: [
      { q: "¿Puedo añadir mis restaurantes favoritos?", a: "Sí. Escribe cada restaurante y pulsa Enter, o usa la plantilla Selector de restaurantes como punto de partida." },
      { q: "¿Cómo evito que salga la misma comida cada noche?", a: "Usa el modo Eliminación durante la semana: cada comida se quita cuando sale. Pulsa Restaurar todo cuando quieras la lista completa." },
      { q: "¿Puedo guardar más de una ruleta de comida?", a: "Sí. Añade hasta ocho ruletas aquí, por ejemplo una de cenas y otra de postres." },
    ],
  },
  "movie-wheel": {
    name: "Ruleta de películas",
    card: "Elige un género para la noche de cine.",
    seoTitle: "Ruleta de películas – Gira para elegir peli o género",
    metaDescription: "Gira la ruleta de películas para elegir un género o un título de tu lista. Perfecta para la noche de cine con amigos, familia o pareja. Gratis y personalizable.",
    h1: "Ruleta de películas – ¿Qué vemos hoy?",
    lead: "¿Cuarenta minutos navegando y nada visto? Gira la ruleta para elegir un género o carga tu lista de pendientes.",
    presetTitle: "Género para esta noche",
    presetEntries: ["Acción", "Comedia", "Terror", "Comedia romántica", "Ciencia ficción", "Animación", "Documental", "Suspense", "Fantasía", "Clásico"],
    sections: [
      {
        heading: "Vence la parálisis en la noche de cine",
        paragraphs: [
          "Con miles de títulos en las plataformas, elegir una película puede durar más que verla. Acota con un giro: primero el género y luego un título dentro de él. O pega toda tu lista de pendientes en la ruleta y deja que elija directamente.",
          "Prueba dos ruletas a la vez, una de géneros y otra de décadas, y pulsa Girar las ruletas para ver qué combinación sale.",
        ],
      },
      { heading: "Una lista compartida", paragraphs: ["Las parejas y grupos de amigos pueden añadir cada uno unos títulos a una misma ruleta y compartir el enlace para que todos tengan la lista. Activa el modo Eliminación para recorrerla en varias noches sin repetir."] },
      { heading: "Ideas para girar", list: ["Primero el género, luego el título", "Ruleta de pendientes en pareja", "Ruleta de décadas: 70, 80, 90, 2000, 2010", "Noche de animación para los peques", "Orden de maratón de pelis navideñas"] },
    ],
    howTo: [
      { title: "Elige géneros o títulos", text: "Usa la lista de géneros o pega tus pendientes." },
      { title: "Añade otra ruleta", text: "Opcional: décadas, snacks o quién elige la próxima vez." },
      { title: "Gira", text: "Que la ruleta decida qué se ve esta noche." },
      { title: "Dale al play", text: "Se acabó el scroll infinito." },
    ],
    benefits: [
      { title: "Ahorra tiempo", text: "Decide en segundos en vez de navegar una hora." },
      { title: "Todos aportan", text: "Cada uno añade títulos a una ruleta compartida." },
      { title: "Combina ruletas", text: "Género, década y snacks giran juntos." },
      { title: "La recuerda", text: "Tu lista se guarda en el navegador." },
    ],
    faqs: [
      { q: "¿Puedo poner mi lista de pendientes en la ruleta?", a: "Sí. Copia los títulos en Pegar lista, uno por línea. La ruleta admite hasta 1.000 títulos." },
      { q: "¿Hay una ruleta solo para Netflix?", a: "Prueba la plantilla de géneros de Netflix, con categorías populares. SpinWheelGe no está afiliado a Netflix." },
      { q: "¿Cómo evito elegir una peli que ya vimos?", a: "Usa el modo Eliminación o pulsa el icono del ojo para ocultar los títulos vistos." },
    ],
  },
};
