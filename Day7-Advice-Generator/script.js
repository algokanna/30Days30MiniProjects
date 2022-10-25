const adviceId = document.querySelector("#advice-id"),
  adviceDisplay = document.querySelector("#advice"),
  generateBtn = document.querySelector("#generate-btn"),
  textDivider = document.querySelector("#text-divider");

function changeTextDivider() {
  if (window.innerWidth > 500) {
    textDivider.src = "./assets/pattern-divider-desktop.svg";
  } else {
    textDivider.src = "./assets/pattern-divider-mobile.svg";
  }
}

generateBtn.addEventListener("click", () => {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      adviceDisplay.innerHTML = data.slip.advice;
      adviceId.innerHTML = `Advice #${data.slip.id}`;
    });
});

window.addEventListener("load", changeTextDivider);
window.addEventListener("resize", changeTextDivider);
