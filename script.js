const startBtn = document.getElementById("startBtn");
const intro = document.getElementById("intro");

startBtn.addEventListener("click", () => {
  intro.style.display = "none";
  startGame();
});

function startGame() {
  document.body.innerHTML = "<h1 style='text-align:center;margin-top:50vh;'>GAME START!</h1>";
}
