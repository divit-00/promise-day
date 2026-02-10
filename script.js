const heart = document.getElementById("heart");
const message = document.getElementById("message");

// save original content
const fullContent = message.innerHTML;
message.innerHTML = "";

heart.addEventListener("click", () => {
  heart.style.display = "none";
  message.style.display = "block";

  let index = 0;

  // ✍️ typing animation
  const typing = setInterval(() => {
    message.innerHTML = fullContent.slice(0, index);
    index++;

    if (index > fullContent.length) {
      clearInterval(typing);

      // 💖 I LOVE YOU POP after typing ends
      setTimeout(showLovePop, 400);
    }
  }, 18);

  // 🌹 roses
  setInterval(createPetal, 350);

  // ❤️ floating hearts
  for (let i = 0; i < 15; i++) {
    createHeart();
  }
});

// floating heart
function createHeart() {
  const h = document.createElement("div");
  h.className = "floating-heart";
  h.innerHTML = "❤️";
  h.style.left = Math.random() * 100 + "vw";
  h.style.fontSize = Math.random() * 15 + 15 + "px";
  document.body.appendChild(h);
  setTimeout(() => h.remove(), 4000);
}

// rose petal
function createPetal() {
  const p = document.createElement("div");
  p.className = "petal";
  p.innerHTML = "🌹";
  p.style.left = Math.random() * 100 + "vw";
  p.style.animationDuration = Math.random() * 3 + 3 + "s";
  document.body.appendChild(p);
  setTimeout(() => p.remove(), 6000);
}

// 💖 I LOVE YOU POP
function showLovePop() {
  const love = document.createElement("div");
  love.className = "love-pop";
  love.innerHTML = "❤️ I Love You ❤️";
  document.body.appendChild(love);

  setTimeout(() => love.remove(), 1800);
}
