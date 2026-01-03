/* ==========================================
   INICIALIZACIÓN Y EVENT LISTENERS
   ========================================== */

import { GAME_CONFIG } from './config.js';
import { processInput, resetGame, shareResults } from './game.js';
import { elements } from './ui.js';

/**
 * Maneja el evento de scroll para animar el header
 */
function handleScroll() {
    const body = document.body;
    if (window.scrollY > GAME_CONFIG.SCROLL_THRESHOLD) {
        body.classList.add('scrolled');
    } else {
        body.classList.remove('scrolled');
    }
}

/**
 * Maneja el evento de tecla Enter en el input
 * @param {KeyboardEvent} event - Evento de teclado
 */
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        processInput();
    }
}

/**
 * Inicializa todos los event listeners
 */
function initEventListeners() {
    // Scroll para animación del header
    window.addEventListener('scroll', handleScroll);
    
    // Enter en el input
    elements.mainInput.addEventListener('keydown', handleKeyPress);
    
    // Botón principal de acción
    elements.actionBtn.addEventListener('click', processInput);
    
    // Botón de nuevo juego
    elements.newGameBtn.addEventListener('click', resetGame);
    
    // Botón de compartir
    elements.shareBtn.addEventListener('click', shareResults);
}

/**
 * Inicialización cuando el DOM está listo
 */
function init() {
    console.log('🔮 Toradamus iniciado correctamente');
    initEventListeners();
    
    // Focus en el input al cargar
    elements.mainInput.focus();
    
    // Verificar posición inicial del scroll
    handleScroll();
}

// Ejecutar cuando el DOM esté completamente cargado
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}