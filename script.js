// === THE BOYS GAME - Main Script ===

const titleScreen = document.getElementById('titleScreen');
const menuScreen = document.getElementById('menuScreen');
const startButton = document.getElementById('startButton');

// === Geluiden ===
function playStartSound() {
    const audio = new Audio('https://freesound.org/data/previews/276/276951_5123853-lq.mp3');
    audio.volume = 0.7;
    audio.play().catch(() => {}); // voorkomt errors als geluid geblokkeerd is
}

function playButtonSound() {
    const audio = new Audio('https://freesound.org/data/previews/387/387186_7258994-lq.mp3');
    audio.volume = 0.6;
    audio.play().catch(() => {});
}

// === Start knop op title screen ===
startButton.addEventListener('click', () => {
    playStartSound();
    
    titleScreen.classList.remove('active');
    
    setTimeout(() => {
        menuScreen.classList.add('active');
    }, 450);
});

// === Menu knoppen ===
document.getElementById('newGameBtn').addEventListener('click', () => {
    playButtonSound();
    alert("🚀 Nieuwe game starten...\n\n(Volgende stap: hier komt het echte spel)");
});

document.getElementById('loadGameBtn').addEventListener('click', () => {
    playButtonSound();
    alert("📂 Load Game\n\n(Nog niet beschikbaar)");
});

document.getElementById('settingsBtn').addEventListener('click', () => {
    playButtonSound();
    alert("⚙️ Settings\n\n(Komt later)");
});

document.getElementById('quitBtn').addEventListener('click', () => {
    playButtonSound();
    if (confirm("Weet je zeker dat je het spel wilt afsluiten?")) {
        window.close();
    }
});

// Extra: Logo ook klikbaar maken (bonus)
const mainLogo = document.getElementById('mainLogo');
if (mainLogo) {
    mainLogo.addEventListener('click', () => {
        startButton.click(); // simuleert klik op start knop
    });
}

// Keyboard support (Enter om te starten)
document.addEventListener('keydown', (e) => {
    if (e.key === "Enter" && titleScreen.classList.contains('active')) {
        startButton.click();
    }
});
