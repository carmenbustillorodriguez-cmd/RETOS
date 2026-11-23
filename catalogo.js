/* ============================================================
   CATÁLOGO DE JUEGOS
   Para añadir un juego nuevo:
   1) Sube su archivo .html a la carpeta que corresponda.
   2) Copia una línea de abajo, pégala debajo y cambia los datos.

   grupo: 1 = páginas Verde, Azul y Morada
          2 = páginas Orión, Vega, Sirio, Lyra y Nova
   para:  (solo grupo 2) páginas donde el juego sale como «recomendado».
          En el resto de páginas del grupo 2 sale en «Más retos».
   ============================================================ */
const CATALOGO = [
  // ---------- GRUPO 1 · Lengua ----------
  { grupo: 1, area: "Lengua", archivo: "lengua/1-sustantivos.html",              emoji: "🏁", titulo: "Garaje de los Sustantivos", tema: "Sustantivos" },
  { grupo: 1, area: "Lengua", archivo: "lengua/2-puntuacion.html",               emoji: "❗", titulo: "Pit Stop de la Puntuación",  tema: "Signos de puntuación" },
  { grupo: 1, area: "Lengua", archivo: "lengua/3-comunicacion.html",             emoji: "📻", titulo: "Radio de Equipo",            tema: "Elementos de la comunicación" },
  { grupo: 1, area: "Lengua", archivo: "lengua/4-redaccion.html",                emoji: "🧱", titulo: "Constructor de Frases",      tema: "Expresión escrita y redacción" },
  { grupo: 1, area: "Lengua", archivo: "lengua/5-comprension.html",              emoji: "📖", titulo: "Lectura en Pista",           tema: "Comprensión lectora" },
  { grupo: 1, area: "Lengua", archivo: "lengua/6-determinantes-pronombres.html", emoji: "🔎", titulo: "Detective D o P",            tema: "Determinantes y pronombres" },
  { grupo: 1, area: "Lengua", archivo: "lengua/7-ortografia.html",               emoji: "⏱️", titulo: "Contrarreloj Ortográfica",   tema: "Ortografía" },

  // ---------- GRUPO 2 · Habilidades y retos ----------
  { grupo: 2, area: "Habilidades y retos", archivo: "habilidades/1-var-conversacion.html",   emoji: "📺", titulo: "El VAR de la Conversación",        tema: "Comunicación y turnos",           para: ["orion", "lyra", "nova"] },
  { grupo: 2, area: "Habilidades y retos", archivo: "habilidades/2-semaforo-interior.html",  emoji: "🚦", titulo: "Semáforo Interior",                tema: "Emociones y autorregulación",     para: ["orion", "vega"] },
  { grupo: 2, area: "Habilidades y retos", archivo: "habilidades/3-plan-b.html",             emoji: "🔄", titulo: "Plan B",                           tema: "Flexibilidad e imprevistos",      para: ["vega", "lyra"] },
  { grupo: 2, area: "Habilidades y retos", archivo: "habilidades/4-abogado-otra-idea.html",  emoji: "⚖️", titulo: "El Abogado de la Otra Idea",       tema: "Argumentación y pensamiento crítico", para: ["orion", "vega", "sirio", "lyra"] },
  { grupo: 2, area: "Habilidades y retos", archivo: "habilidades/5-arquitectos-acuerdo.html",emoji: "🏗️", titulo: "Arquitectos del Acuerdo",          tema: "Negociación y conflictos",        para: ["sirio", "lyra", "nova"] },
  { grupo: 2, area: "Habilidades y retos", archivo: "habilidades/6-caso-pistas.html",        emoji: "🕵️", titulo: "El Caso de las Pistas Incompletas", tema: "Lógica y deducción",              para: ["orion", "vega", "sirio"] },
  { grupo: 2, area: "Habilidades y retos", archivo: "habilidades/7-separa-y-venceras.html",  emoji: "✂️", titulo: "Separa y Vencerás",                tema: "Separar palabras al escribir",    para: ["nova"] },
];
