const heart = document.getElementById("heart");
const message = document.getElementById("message");

heart.addEventListener("click", () => {
  heart.style.display = "none";
  message.style.display = "block";

  // Floating hearts magic
  for (let i = 0; i < 15; i++) {
    createHeart();
  }
});

function createHeart() {
  const heart = document.createElement("div");
  heart.innerHTML = "❤️";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "0px";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  heart.style.animation = "floatUp 4s linear";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}

const style = document.createElement("style");
style.innerHTML = `
@keyframes floatUp {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-100vh);
    opacity: 0;
  }
}`;
document.head.appendChild(style);
