// Lógica de Scroll
window.addEventListener('scroll', () => {
    const body = document.body;
    if (window.scrollY > 100) {
        body.classList.add('scrolled');
    } else {
        body.classList.remove('scrolled');
    }
});

// Lógica del Juego
let gameState = "START"; 
let prediction = 0;
let turnCount = 0;
let userNumbers = []; 
let currentRunningSum = 0;

const quotes = [
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

const mainInput = document.getElementById('main-input');
const instruction = document.getElementById('instruction');
const actionBtn = document.getElementById('action-btn');
const userHistory = document.getElementById('user-history');
const botHistory = document.getElementById('bot-history');
const predictionBox = document.getElementById('prediction-box');
const predictionVal = document.getElementById('prediction-val');
const wisdomQuote = document.getElementById('wisdom-quote');
const endGameButtons = document.getElementById('end-game-buttons');
const runningSumContainer = document.getElementById('running-sum-container');
const runningSumVal = document.getElementById('running-sum-val');

async function typeWriter(text, elementId, speed = 50) {
    const el = document.createElement('div');
    el.className = 'number-entry';
    document.getElementById(elementId).appendChild(el);
    for (let i = 0; i < text.length; i++) {
        el.innerHTML += text.charAt(i);
        await new Promise(r => setTimeout(r, speed));
    }
}

function createSparkles(el) {
    const rect = el.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Ajuste para cuando el botón está fixed o en flow diferente
    // Usamos coordenadas relativas al elemento
    for (let i = 0; i < 30; i++) {
        const s = document.createElement('div');
        s.className = 'sparkle';
        s.style.left = centerX + 'px';
        s.style.top = centerY + 'px';
        s.style.setProperty('--x', `${(Math.random() - 0.5) * 250}px`);
        s.style.setProperty('--y', `${(Math.random() - 0.5) * 250}px`);
        s.style.backgroundColor = Math.random() > 0.5 ? '#ffd700' : '#ffffff';
        el.appendChild(s);
        setTimeout(() => s.remove(), 800);
    }
}

function screenExplosion() {
    const burstCount = 120; // Cantidad de estrellas
    
    for (let i = 0; i < burstCount; i++) {
        const s = document.createElement('div');
        s.className = 'sparkle';
        
        // Posición inicial aleatoria en toda la ventana visible
        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight;
        
        // Ajustamos la posición considerando el scroll actual
        s.style.left = posX + 'px';
        s.style.top = (posY + window.scrollY) + 'px';
        
        // Dirección de explosión (más amplia para las estrellas)
        const angle = Math.random() * Math.PI * 2;
        const distance = 100 + Math.random() * 200;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        
        s.style.setProperty('--x', `${x}px`);
        s.style.setProperty('--y', `${y}px`);
        
        // Colores de oráculo: Oro, Blanco, Diamante y Violeta
        const colors = ['#ffd700', '#ffffff', '#e0e0e0', '#f4d03f', '#a569bd'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        s.style.backgroundColor = color;
        s.style.boxShadow = `0 0 15px ${color}`;
        
        document.body.appendChild(s);
        
        // Eliminación del elemento para no saturar la memoria
        setTimeout(() => s.remove(), 800);
    }
}

function updateRunningSum(val) {
    currentRunningSum += val;
    runningSumVal.innerText = currentRunningSum;
    // Pequeña animación de escala cada vez que se actualiza
    runningSumContainer.style.transform = "scale(1.2)";
    setTimeout(() => runningSumContainer.style.transform = "scale(1)", 200);
}

async function processInput() {
    const val = parseInt(mainInput.value);
    if (isNaN(val) || val < 100 || val > 9999) return alert("¡Miau! Necesito un número de 3 o 4 cifras.");

    userNumbers.push(val);

    if (gameState === "START") {
        // Explosión inicial dramática desde el botón
        createSparkles(actionBtn);
        createSparkles(runningSumContainer);
        
        // Oleadas adicionales con más intensidad
        setTimeout(() => {
            createSparkles(actionBtn);
            createSparkles(runningSumContainer);
        }, 200);
        
        setTimeout(() => {
            createSparkles(actionBtn);
            createSparkles(runningSumContainer);
        }, 400);
        
        setTimeout(() => {
            createSparkles(actionBtn);
            createSparkles(runningSumContainer);
        }, 600);

        
        prediction = 20000 + val - 2;
        predictionVal.innerText = prediction;
        predictionBox.style.display = 'block';
        
        runningSumContainer.style.display = 'inline-block';
        updateRunningSum(val);

        await typeWriter(`Humano: ${val}`, 'user-history');
        gameState = "PLAYING";
        instruction.innerText = "Ingresa el siguiente número:";
        mainInput.value = "";
        turnCount = 1;
        
        // Auto scroll suave hacia abajo para asegurar que se ve el juego
        window.scrollTo({ top: window.innerHeight*0.9, behavior: 'smooth' });
    } 
    else if (gameState === "PLAYING") {
        turnCount++;
        updateRunningSum(val);
        await typeWriter(`Humano: ${val}`, 'user-history');
        
        let response = 9999 - val;
        mainInput.value = "";
        mainInput.disabled = true;
        
        updateRunningSum(response); 

        await typeWriter(`Toradamus: `, 'bot-history');
        const lastEntry = botHistory.lastElementChild;
        for (let i = 0; i < response.toString().length; i++) {
            lastEntry.innerHTML += response.toString().charAt(i);
            await new Promise(r => setTimeout(r, 100));
        }

        if (turnCount < 3) {
            mainInput.disabled = false;
            instruction.innerText = "Un último número:";
            mainInput.focus();
        } else {
            document.body.classList.add('magic-end');
            // Cuando se cumple la profecía
            screenExplosion();
            // Una segunda oleada 200 milisegundos después para dar profundidad
            setTimeout(screenExplosion, 200);
            instruction.innerHTML = "<strong>✨ PROFECÍA CUMPLIDA ✨</strong>";
            actionBtn.style.display = 'none';
            mainInput.style.display = 'none';
            wisdomQuote.innerText = quotes[Math.floor(Math.random() * quotes.length)];
            endGameButtons.style.display = 'flex';
            
            // Explosión de chispas en toda la pantalla
            createSparkles(document.body);
        }
    }
}

function shareResults() {
    const finalSum = predictionVal.innerText;
    const shareText = `🔮 Toradamus predijo la suma exacta de mis números: ${finalSum}.\n\n "Incluso un gato negro sabe que 2+2 son 4... si yo lo digo." \n\n ¡Juega ahora!`;
    const fullMessage = `${shareText}\n\n${window.location.href}`;
    
    // Detectar si estamos en móvil para usar navigator.share
    if (navigator.share && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        // En móvil, incluir URL en el texto para asegurar que aparezca
        navigator.share({
            title: 'Toradamus - El Oráculo Aritmético',
            text: fullMessage
        }).catch(err => {
            console.log('Error al compartir:', err);
            copyToClipboard(fullMessage);
        });
    } else {
        // En desktop o si falla, copiar al portapapeles
        copyToClipboard(fullMessage);
    }
}

function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            alert("✅ Mensaje copiado al portapapeles:\n\n" + text);
        }).catch(() => {
            fallbackCopyTextToClipboard(text);
        });
    } else {
        fallbackCopyTextToClipboard(text);
    }
}

function fallbackCopyTextToClipboard(text) {
    // Intentar con el método de selección si clipboard API no está disponible
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.width = "2em";
    textArea.style.height = "2em";
    textArea.style.padding = "0";
    textArea.style.border = "none";
    textArea.style.outline = "none";
    textArea.style.boxShadow = "none";
    textArea.style.background = "transparent";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    // Mostrar el mensaje para que el usuario copie manualmente
    const userMessage = "📋 Selecciona y copia el texto:\n\n" + text;
    
    // Crear un modal personalizado en lugar de alert
    showCopyModal(text);
    
    document.body.removeChild(textArea);
}

function showCopyModal(text) {
    // Crear overlay
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    overlay.style.zIndex = '10000';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    
    // Crear modal
    const modal = document.createElement('div');
    modal.style.backgroundColor = '#fdf6e3';
    modal.style.padding = '30px';
    modal.style.borderRadius = '15px';
    modal.style.maxWidth = '500px';
    modal.style.width = '90%';
    modal.style.boxShadow = '0 10px 40px rgba(0,0,0,0.5)';
    
    modal.innerHTML = `
        <h3 style="margin-top: 0; color: #3e2723; font-family: 'Cinzel', serif;">📋 Copia tu resultado</h3>
        <textarea readonly style="width: 100%; height: 120px; padding: 10px; border: 2px solid #3e2723; border-radius: 5px; font-family: 'Quicksand', sans-serif; resize: none; margin: 15px 0;">${text}</textarea>
        <button style="width: 100%; padding: 12px; background-color: #efb810; border: none; border-radius: 50px; cursor: pointer; font-weight: 800; font-size: 1rem; color: #2c0b38;">CERRAR</button>
    `;
    
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    
    // Seleccionar el texto automáticamente
    const textarea = modal.querySelector('textarea');
    textarea.select();
    
    // Cerrar modal
    const closeBtn = modal.querySelector('button');
    closeBtn.onclick = () => document.body.removeChild(overlay);
    overlay.onclick = (e) => {
        if (e.target === overlay) document.body.removeChild(overlay);
    };
}



function resetGame() {
    document.body.classList.remove('magic-end');
    gameState = "START";
    turnCount = 0;
    userNumbers = [];
    currentRunningSum = 0;
    runningSumVal.innerText = "0";
    runningSumContainer.style.display = 'none';

    userHistory.innerHTML = "";
    botHistory.innerHTML = "";
    predictionBox.style.display = 'none';
    mainInput.style.display = 'inline-block';
    mainInput.disabled = false;
    mainInput.value = "";
    actionBtn.style.display = 'inline-block';
    endGameButtons.style.display = 'none';
    wisdomQuote.innerText = "";
    instruction.innerText = "Introduce un número de 4 cifras:";
    
    // Scroll hacia arriba suavemente
    window.scrollTo({ top: 0, behavior: 'smooth' });
}