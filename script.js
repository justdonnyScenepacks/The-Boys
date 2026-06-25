const titleScreen = document.getElementById('titleScreen');
const menuScreen = document.getElementById('menuScreen');
const startButton = document.getElementById('startButton');

// Simpele sound effects (je kan later betere mp3 toevoegen)
function playButtonSound() {
  const audio = new Audio('https://freesound.org/data/previews/387/387186_7258994-lq.mp3'); // button click sound
  audio.volume = 0.6;
  audio.play();
}

function playStartSound() {
  const audio = new Audio('https://freesound.org/data/previews/276/276951_5123853-lq.mp3'); // heavy button
  audio.volume = 0.7;
  audio.play();
}

// Start Game → Menu
startButton.addEventListener('click', () => {
  playStartSound();
  
  titleScreen.classList.remove('active');
  
  setTimeout(() => {
    menuScreen.classList.add('active');
  }, 400);
});

// Menu buttons
document.getElementById('newGameBtn').addEventListener('click', () => {
  playButtonSound();
  alert("🚀 Nieuwe game starten...");
  // Hier komt later je echte game
});

document.getElementById('loadGameBtn').addEventListener('click', () => {
  playButtonSound();
  alert("📂 Load game (nog niet geïmplementeerd)");
});

document.getElementById('settingsBtn').addEventListener('click', () => {
  playButtonSound();
  alert("⚙️ Settings menu komt eraan");
});

document.getElementById('quitBtn').addEventListener('click', () => {
  playButtonSound();
  if (confirm("Weet je zeker dat je wilt afsluiten?")) {
    window.close();
  }
});
