/* ==========================================
    EFECTOS VISUALES Y ANIMACIONES
   ========================================== */

import { PARTICLE_COLORS, GAME_CONFIG } from './config.js';

/**
 * Crea chispas/partículas alrededor de un elemento
 * @param {HTMLElement} el - Elemento desde donde se generan las chispas
 */
export function createSparkles(el) {
    const rect = el.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    for (let i = 0; i < GAME_CONFIG.SPARKLE_COUNT; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = centerX + 'px';
        sparkle.style.top = centerY + 'px';
        sparkle.style.setProperty('--x', `${(Math.random() - 0.5) * 250}px`);
        sparkle.style.setProperty('--y', `${(Math.random() - 0.5) * 250}px`);
        sparkle.style.backgroundColor = Math.random() > 0.5 ? '#ffd700' : '#ffffff';
        
        el.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 800);
    }
}

/**
 * Crea una explosión de partículas en toda la pantalla
 */
export function screenExplosion() {
    for (let i = 0; i < GAME_CONFIG.EXPLOSION_COUNT; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        
        // Posición inicial aleatoria en toda la ventana visible
        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight;
        
        // Ajustamos la posición considerando el scroll actual
        sparkle.style.left = posX + 'px';
        sparkle.style.top = (posY + window.scrollY) + 'px';
        
        // Dirección de explosión
        const angle = Math.random() * Math.PI * 2;
        const distance = 100 + Math.random() * 200;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        
        sparkle.style.setProperty('--x', `${x}px`);
        sparkle.style.setProperty('--y', `${y}px`);
        
        // Color aleatorio de la paleta
        const color = PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)];
        sparkle.style.backgroundColor = color;
        sparkle.style.boxShadow = `0 0 15px ${color}`;
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 800);
    }
}

/**
 * Anima el elemento de suma acumulada
 * @param {HTMLElement} element - Elemento a animar
 */
export function animateRunningSum(element) {
    element.style.transform = "scale(1.2)";
    setTimeout(() => {
        element.style.transform = "scale(1)";
    }, 200);
}

/**
 * Realiza scroll suave hacia una posición
 * @param {number} position - Posición a la que hacer scroll
 */
export function smoothScroll(position) {
    window.scrollTo({ 
        top: position, 
        behavior: 'smooth' 
    });
}