/* ==========================================
    MANIPULACIÓN DEL DOM
   ========================================== */

import { GAME_CONFIG } from './config.js';

// Referencias a elementos del DOM
export const elements = {
    mainInput: document.getElementById('main-input'),
    instruction: document.getElementById('instruction'),
    actionBtn: document.getElementById('action-btn'),
    userHistory: document.getElementById('user-history'),
    botHistory: document.getElementById('bot-history'),
    predictionBox: document.getElementById('prediction-box'),
    predictionVal: document.getElementById('prediction-val'),
    wisdomQuote: document.getElementById('wisdom-quote'),
    endGameButtons: document.getElementById('end-game-buttons'),
    runningSumContainer: document.getElementById('running-sum-container'),
    runningSumVal: document.getElementById('running-sum-val'),
    newGameBtn: document.getElementById('new-game-btn'),
    shareBtn: document.getElementById('share-btn')
};

/**
 * Efecto de escritura tipo máquina de escribir
 * @param {string} text - Texto a escribir
 * @param {string} elementId - ID del elemento donde escribir
 * @param {number} speed - Velocidad de escritura
 */
export async function typeWriter(text, elementId, speed = GAME_CONFIG.TYPEWRITER_SPEED) {
    const container = document.getElementById(elementId);
    const entry = document.createElement('div');
    entry.className = 'number-entry';
    container.appendChild(entry);
    
    for (let i = 0; i < text.length; i++) {
        entry.innerHTML += text.charAt(i);
        await new Promise(resolve => setTimeout(resolve, speed));
    }
}

/**
 * Escribe texto caracter por caracter en un elemento existente
 * @param {HTMLElement} element - Elemento donde escribir
 * @param {string} text - Texto a escribir
 * @param {number} speed - Velocidad de escritura
 */
export async function typeInElement(element, text, speed = GAME_CONFIG.TYPEWRITER_SPEED_FAST) {
    for (let i = 0; i < text.length; i++) {
        element.innerHTML += text.charAt(i);
        await new Promise(resolve => setTimeout(resolve, speed));
    }
}

/**
 * Actualiza el valor de la suma acumulada
 * @param {number} value - Nuevo valor de la suma
 */
export function updateRunningSum(value) {
    elements.runningSumVal.innerText = value;
}

/**
 * Muestra la suma acumulada
 */
export function showRunningSum() {
    elements.runningSumContainer.style.display = 'inline-block';
}

/**
 * Oculta la suma acumulada
 */
export function hideRunningSum() {
    elements.runningSumContainer.style.display = 'none';
}

/**
 * Muestra la predicción final
 * @param {number} prediction - Valor de la predicción
 */
export function showPrediction(prediction) {
    elements.predictionVal.innerText = prediction;
    elements.predictionBox.style.display = 'block';
}

/**
 * Oculta la predicción
 */
export function hidePrediction() {
    elements.predictionBox.style.display = 'none';
}

/**
 * Muestra mensaje de sabiduría
 * @param {string} quote - Frase a mostrar
 */
export function showWisdomQuote(quote) {
    elements.wisdomQuote.innerText = quote;
}

/**
 * Limpia el mensaje de sabiduría
 */
export function clearWisdomQuote() {
    elements.wisdomQuote.innerText = "";
}

/**
 * Actualiza el texto de instrucción
 * @param {string} text - Nuevo texto de instrucción
 */
export function updateInstruction(text) {
    elements.instruction.innerHTML = text;
}

/**
 * Limpia el historial de un panel
 * @param {string} panelId - ID del panel a limpiar
 */
export function clearHistory(panelId) {
    document.getElementById(panelId).innerHTML = "";
}

/**
 * Habilita o deshabilita el input
 * @param {boolean} enabled - true para habilitar, false para deshabilitar
 */
export function setInputEnabled(enabled) {
    elements.mainInput.disabled = !enabled;
    if (enabled) {
        elements.mainInput.focus();
    }
}

/**
 * Limpia el valor del input
 */
export function clearInput() {
    elements.mainInput.value = "";
}

/**
 * Obtiene el valor del input como número
 * @returns {number} Valor del input
 */
export function getInputValue() {
    return parseInt(elements.mainInput.value);
}

/**
 * Muestra u oculta un elemento
 * @param {HTMLElement} element - Elemento a mostrar/ocultar
 * @param {boolean} show - true para mostrar, false para ocultar
 */
export function toggleElement(element, show) {
    element.style.display = show ? 'inline-block' : 'none';
}

/**
 * Muestra los botones de fin de juego
 */
export function showEndGameButtons() {
    elements.endGameButtons.style.display = 'flex';
}

/**
 * Oculta los botones de fin de juego
 */
export function hideEndGameButtons() {
    elements.endGameButtons.style.display = 'none';
}