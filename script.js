// === THE BOYS GAME - Met Achtergrond Muziek ===

const titleScreen = document.getElementById('titleScreen');
const menuScreen = document.getElementById('menuScreen');
const settingsScreen = document.getElementById('settingsScreen');
const startButton = document.getElementById('startButton');
const mainLogo = document.getElementById('mainLogo');

// Background Music
const bgMusic = document.getElementById('bgMusic');

// Volume instellingen
let musicVolume = 0.7;
let sfxVolume = 0.8;

// Geluiden
const buttonSound = new Audio('https://freesound.org/data/previews/387/387186_7258994-lq.mp3');
const startSound = new Audio('https://freesound.org/data/previews/276/276951_5123853-lq.mp3');

function playStartSound() {
    startSound.volume = sfxVolume;
    startSound.currentTime = 0;
    startSound.play().catch(() => {});
}

function playButtonSound() {
    buttonSound.volume = sfxVolume;
    buttonSound.currentTime = 0;
    buttonSound.play().catch(() => {});
}

// ==================== NETFLIX INTRO ====================
window.addEventListener('load', () => {
      setTimeout(() => {
        if (mainLogo) {
            mainLogo.style.animation = 'logoIntro 2.5s ease-out forwards';
        }
    }, 300);
});

// ==================== TITLE SCREEN ====================
startButton.addEventListener('click', () => {

    bgMusic.volume = musicVolume;

    bgMusic.play().catch(err => {
        console.error(err);
    });

    playStartSound();
    titleScreen.classList.add('fade-out');

    setTimeout(() => {
        titleScreen.classList.remove('active');
        menuScreen.classList.add('active');
    }, 700);
});

// ==================== MENU BUTTONS ====================
document.getElementById('newGameBtn').addEventListener('click', () => {
    playButtonSound();
    alert("🚀 Nieuwe game starten...");
});

document.getElementById('loadGameBtn').addEventListener('click', () => {
    playButtonSound();
    alert("📂 Load Game");
});

document.getElementById('quitBtn').addEventListener('click', () => {
    playButtonSound();
    if (confirm("Weet je zeker dat je wilt afsluiten?")) {
        window.close();
    }
});

// ==================== SETTINGS ====================
const settingsBtn = document.getElementById('settingsBtn');
const backToMenuBtn = document.getElementById('backToMenuBtn');

settingsBtn.addEventListener('click', () => {
    playButtonSound();
    menuScreen.classList.remove('active');
    settingsScreen.classList.add('active');
});

backToMenuBtn.addEventListener('click', () => {
    playButtonSound();
    settingsScreen.classList.remove('active');
    menuScreen.classList.add('active');
});

// ==================== VOLUME CONTROLS ====================
// Muziek volume
document.getElementById('musicVolume').addEventListener('input', (e) => {
    musicVolume = e.target.value / 100;
    document.getElementById('musicValue').textContent = e.target.value + '%';
    bgMusic.volume = musicVolume;
});

// Sound Effects volume
document.getElementById('sfxVolume').addEventListener('input', (e) => {
    sfxVolume = e.target.value / 100;
    document.getElementById('sfxValue').textContent = e.target.value + '%';
});
