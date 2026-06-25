// Netflix-style intro delay
window.addEventListener('load', () => {
    // Eventueel extra vertraging als je wilt
    setTimeout(() => {
        const logo = document.getElementById('mainLogo');
        if (logo) logo.style.animationPlayState = 'running';
    }, 300);
});

const titleScreen = document.getElementById('titleScreen');
const menuScreen = document.getElementById('menuScreen');
const startButton = document.getElementById('startButton');

function playStartSound() {
    const audio = new Audio('https://freesound.org/data/previews/276/276951_5123853-lq.mp3');
    audio.volume = 0.7;
    audio.play().catch(() => {});
}

function playButtonSound() {
    const audio = new Audio('https://freesound.org/data/previews/387/387186_7258994-lq.mp3');
    audio.volume = 0.6;
    audio.play().catch(() => {});
}

// Klik op START GAME → mooie overgang naar menu
startButton.addEventListener('click', () => {
    playStartSound();
    
    titleScreen.classList.add('fade-out');
    
    setTimeout(() => {
        titleScreen.classList.remove('active');
        menuScreen.classList.add('active');
    }, 700);
});

// Menu knoppen
document.getElementById('newGameBtn').addEventListener('click', () => {
    playButtonSound();
    alert("🚀 Nieuwe game starten...");
});

document.getElementById('loadGameBtn').addEventListener('click', () => {
    playButtonSound();
    alert("📂 Load Game");
});

document.getElementById('settingsBtn').addEventListener('click', () => {
    playButtonSound();
    alert("⚙️ Settings");
});

document.getElementById('quitBtn').addEventListener('click', () => {
    playButtonSound();
    if (confirm("Weet je zeker dat je wilt afsluiten?")) {
        window.close();
    }
});

// ==================== SETTINGS ====================
const settingsScreen = document.getElementById('settingsScreen');
const settingsBtn = document.getElementById('settingsBtn');
const backToMenuBtn = document.getElementById('backToMenuBtn');

// Open Settings
settingsBtn.addEventListener('click', () => {
    playButtonSound();
    menuScreen.classList.remove('active');
    settingsScreen.classList.add('active');
});

// Back to Menu
backToMenuBtn.addEventListener('click', () => {
    playButtonSound();
    settingsScreen.classList.remove('active');
    menuScreen.classList.add('active');
});

// Volume sliders
const musicSlider = document.getElementById('musicVolume');
const sfxSlider = document.getElementById('sfxVolume');

musicSlider.addEventListener('input', () => {
    document.getElementById('musicValue').textContent = musicSlider.value + '%';
});

sfxSlider.addEventListener('input', () => {
    document.getElementById('sfxValue').textContent = sfxSlider.value + '%';
});

// Fullscreen
document.getElementById('fullscreenBtn').addEventListener('click', () => {
    playButtonSound();
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
});

// Reset Progress
document.getElementById('resetProgressBtn').addEventListener('click', () => {
    playButtonSound();
    if (confirm("⚠️ ALLE progress wissen?\nDit kan NIET ongedaan gemaakt worden!")) {
        alert("✅ Progress is volledig gereset.");
    }
});

// Credits
document.getElementById('creditsBtn').addEventListener('click', () => {
    playButtonSound();
    alert("The Boys Game\n\nGemaakt met ❤️ door jou + Grok");
});
