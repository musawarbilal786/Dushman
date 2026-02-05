const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const buttonWrap = document.getElementById("buttonWrap");
const result = document.getElementById("result");
const effects = document.getElementById("effects");

let noBtnMoved = 0;

const moveNoButton = () => {
  const wrapRect = buttonWrap.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const maxX = Math.max(0, wrapRect.width - btnRect.width);
  const maxY = Math.max(0, wrapRect.height - btnRect.height);

  const nextX = Math.random() * maxX;
  const nextY = Math.random() * maxY;

  noBtn.style.position = "absolute";
  noBtn.style.left = `${nextX}px`;
  noBtn.style.top = `${nextY}px`;
  noBtn.style.transition = "left 0.2s ease, top 0.2s ease";
};

noBtn.addEventListener("mouseenter", () => {
  noBtnMoved += 1;
  moveNoButton();
});

noBtn.addEventListener("click", () => {
  noBtnMoved += 1;
  moveNoButton();
});

yesBtn.addEventListener("click", () => {
  result.hidden = false;
  buttonWrap.style.opacity = "0.4";
  buttonWrap.style.pointerEvents = "none";
  yesBtn.textContent = "Yes!";
  launchHearts();
  launchFireworks();
});

window.addEventListener("resize", () => {
  if (noBtnMoved > 0) {
    moveNoButton();
  }
});

const launchHearts = () => {
  for (let i = 0; i < 18; i += 1) {
    const heart = document.createElement("span");
    heart.className = "heart";
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.bottom = `${Math.random() * 20 + 10}px`;
    heart.style.animationDelay = `${Math.random() * 0.8}s`;
    heart.style.background = Math.random() > 0.5 ? "#ff5b7a" : "#ff8fa3";
    effects.appendChild(heart);
    heart.addEventListener("animationend", () => {
      heart.remove();
    });
  }
};

const launchFireworks = () => {
  const bursts = 5;
  const sparksPerBurst = 18;

  for (let i = 0; i < bursts; i += 1) {
    const centerX = Math.random() * window.innerWidth * 0.8 + window.innerWidth * 0.1;
    const centerY = Math.random() * window.innerHeight * 0.4 + window.innerHeight * 0.15;

    for (let j = 0; j < sparksPerBurst; j += 1) {
      const spark = document.createElement("span");
      spark.className = "spark";

      const angle = (Math.PI * 2 * j) / sparksPerBurst;
      const distance = Math.random() * 110 + 50;
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;

      spark.style.left = `${centerX}px`;
      spark.style.top = `${centerY}px`;
      spark.style.setProperty("--x", `${x}px`);
      spark.style.setProperty("--y", `${y}px`);

      effects.appendChild(spark);
      spark.addEventListener("animationend", () => {
        spark.remove();
      });
    }
  }
};
