const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const buttonWrap = document.getElementById("buttonWrap");
const result = document.getElementById("result");

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
});

window.addEventListener("resize", () => {
  if (noBtnMoved > 0) {
    moveNoButton();
  }
});
