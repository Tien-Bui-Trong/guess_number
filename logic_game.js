"use strict";

let scrNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 20;
let highScore2 = 0;

const init = function () {
  scrNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".quote").textContent = "?";
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".quote").style.width = "100px";
  document.querySelector(".notiGame").textContent = "Start guessing...";
  document.querySelector(".score").value = 0;
  score = 20;
  document.querySelector(".inputNumber").value = "";
};
init();
document.querySelector(".quote").textContent = scrNumber;
document.querySelector(".quote").textContent = "?";

document.querySelector(".check").addEventListener("click", function () {
  if (highScore2 > highScore) highScore2 = highScore;
});

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".inputNumber").value);
  if (score > 1) {
    if (!guess) {
      document.querySelector(".notiGame").textContent = "⛔ No number!";
      document.querySelector(".quote").textContent = "?";
    } else if (guess === scrNumber) {
      document.querySelector(".quote").textContent = scrNumber;
      document.querySelector(".notiGame").textContent = "🎉 Correct number!";
      document.querySelector("body").style.backgroundColor = "#37b24d";
      document.querySelector(".quote").style.width = "20rem";
      if (score > highScore) highScore = score;
      document.querySelector(".highScore").textContent = score;
    } else if (guess > scrNumber) {
      document.querySelector(".quote").textContent = "?";
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector(".notiGame").textContent = "📈 Too high!";
    } else if (guess < scrNumber) {
      document.querySelector(".quote").textContent = "?";
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector(".notiGame").textContent = "📉 Too Low!";
    }
  } else {
    document.querySelector(".quote").textContent = "?";
    document.querySelector(".notiGame").textContent = "You lose the game!";
    document.querySelector(".score").textContent = 0;
  }
});

document.querySelector(".again").addEventListener("click", init);
