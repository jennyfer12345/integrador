// JavaScript para mostrar o segundo card ao clicar no botão Iniciar
const startButton = document.getElementById("start-button");
const secondCard = document.querySelector(".second-card");

startButton.addEventListener("click", function () {
  // Torna o segundo card visível
  secondCard.style.display = "block";
});
