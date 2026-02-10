const heartBtn = document.getElementById("heart");
const message = document.getElementById("message");

// Save original content for typing effect
const fullText = message.innerHTML;

heartBtn.addEventListener("click", () => {
  heartBtn.style.display = "none";
  message.style.display = "block";
  message.innerHTML = "";

  // Typing animation ✍️
  let i = 0;
  const typing = setInterval(() => {
    message.innerHTML = fullText.slice(0, i);
    i++;
    if (i > fullText.length) clearInterval(typing);
  }, 15);

  // Rose petals 🌹
  setInterval(createPetal, 300);

  // Floating hearts ❤️
  for (let j = 0; j < 15; j++) {
    createHeart();
  }
});

// Floating heart
function createHeart() {
  const h = document.createElement("div");
  h.innerHTML = "❤️";
  h.style.position = "fixed";
  h.style.left = Math.random() * 100 + "vw";
  h.style.bottom = "0";
  h.style.fontSize = Math.random() * 15 + 15 + "px";
  h.style.animation = "floatUp 4s linear";
  document.body.appendChild(h);

  setTimeout(() => h.remove(), 4000);
}

// Rose petal
function createPetal() {
  const petal = document.createElement("div");
  petal.classList.add("petal");
  petal.innerHTML = "🌹";
  petal.style.left = Math.random() * 100 + "vw";
  petal.style.animationDuration = Math.random() * 3 + 3 + "s";
  document.body.appendChild(petal);

  setTimeout(() => petal.remove(), 6000);
}
