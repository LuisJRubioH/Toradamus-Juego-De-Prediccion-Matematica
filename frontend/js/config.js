/* ==========================================
    CONFIGURACIÓN Y CONSTANTES
   ========================================== */

// Frases de sabiduría de Toradamus
export const WISDOM_QUOTES = [
    "«El destino es un hilo de lana que yo ya he desenredado.»",
    "«Los números no mienten, aunque a veces ronronean.»",
    "«He visto el futuro en el fondo de un cuenco de leche.»",
    "«Siete vidas no bastan para entender mi poder matemático.»",
    "«Incluso un gato negro sabe que 2+2 son 4... si yo lo digo.»",
    "«Pitágoras era un aficionado comparado con un gato persiguiendo un láser.»",
    "«Tu mente humana suma; mi mente felina trasciende el cálculo.»",
    "«He calculado la trayectoria de esta suma antes de que tocaras el teclado.»",
    "«El caos del universo se ordena cuando me afilo las uñas.»",
    "«¿Schrödinger? Él dudaba. Yo siempre sé el resultado exacto.»",
    "«Mis bigotes detectan vibraciones numéricas que tú no puedes ver.»",
    "«Esta predicción estaba escrita en las estrellas... y en mi caja de arena.»",
    "«No es magia, es lógica felina superior.»",
    "«Humanos... siempre necesitan comprobarlo todo. Yo solo lo sé.»",
    "«La respuesta correcta brilla en la oscuridad, como mis ojos.»"
];

// Configuración del juego
export const GAME_CONFIG = {
    MIN_NUMBER: 100,
    MAX_NUMBER: 9999,
    MAX_TURNS: 3,
    TYPEWRITER_SPEED: 50,
    TYPEWRITER_SPEED_FAST: 100,
    SPARKLE_COUNT: 30,
    EXPLOSION_COUNT: 120,
    SCROLL_THRESHOLD: 100
};

// Mensajes del juego
export const MESSAGES = {
    INITIAL_INSTRUCTION: "Introduce un número de 4 cifras:",
    NEXT_INSTRUCTION: "Ingresa el siguiente número:",
    FINAL_INSTRUCTION: "Un último número:",
    PROPHECY_FULFILLED: "<strong>✨ PROFECÍA CUMPLIDA ✨</strong>",
    ERROR_INVALID: "¡Miau! Necesito un número de 3 o 4 cifras.",
    PREDICTION_LABEL: "Predicción Final:"
};

// Colores para las partículas
export const PARTICLE_COLORS = [
    '#ffd700',  // Oro
    '#ffffff',  // Blanco
    '#e0e0e0',  // Diamante
    '#f4d03f',  // Oro claro
    '#a569bd'   // Violeta
];