const titleScreen = document.getElementById('titleScreen');
const menuScreen = document.getElementById('menuScreen');
const mainLogo = document.getElementById('mainLogo');

// Button sound
function playButtonSound() {
  const audio = new Audio('https://freesound.org/data/previews/387/387186_7258994-lq.mp3');
  audio.volume = 0.6;
  audio.play();
}

function playStartSound() {
  const audio = new Audio('https://freesound.org/data/previews/276/276951_5123853-lq.mp3');
  audio.volume = 0.7;
  audio.play();
}

// Klik op het logo = start game
mainLogo.addEventListener('click', () => {
  playStartSound();
  
  titleScreen.classList.remove('active');
  
  setTimeout(() => {
    menuScreen.classList.add('active');
  }, 500);
});

// Menu buttons
document.getElementById('newGameBtn').addEventListener('click', () => {
  playButtonSound();
  alert("🚀 Nieuwe game starten...");
});

document.getElementById('loadGameBtn').addEventListener('click', () => {
  playButtonSound();
  alert("📂 Load game");
});

document.getElementById('settingsBtn').addEventListener('click', () => {
  playButtonSound();
  alert("⚙️ Settings");
});

document.getElementById('quitBtn').addEventListener('click', () => {
  playButtonSound();
  if (confirm("Weet je zeker dat je het spel wilt afsluiten?")) {
    window.close();
  }
});
