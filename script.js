const heart = document.getElementById("heart");
const message = document.getElementById("message");

// Save original message for typing
const fullContent = message.innerHTML;
message.innerHTML = "";

heart.addEventListener("click", () => {
  heart.style.display = "none";
  message.style.display = "block";

  let index = 0;

  // ✍️ Typing animation
  const typer = setInterval(() => {
    message.innerHTML = fullContent.slice(0, index);
    index++;

    if (index > fullContent.length) {
      clearInterval(typer);
    }
  }, 18); // speed (lower = faster)

  // 🌹 Rose petals rain
  setInterval(createPetal, 350);

  // ❤️ Floating hearts
  for (let i = 0; i < 15; i++) {
    createHeart();
  }
});

// Floating heart function
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "floating-heart";
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 15 + 15 + "px";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 4000);
}

// Rose petal function
function createPetal() {
  const petal = document.createElement("div");
  petal.className = "petal";
  petal.innerHTML = "🌹";
  petal.style.left = Math.random() * 100 + "vw";
  petal.style.animationDuration = Math.random() * 3 + 3 + "s";
  document.body.appendChild(petal);

  setTimeout(() => petal.remove(), 6000);
}
