const loadingAnimations = document.querySelectorAll("main>*"),
  switchBtn = document.querySelectorAll(".switches>*"),
  switchBlock = document.querySelector(".switches");

function toggleHide(index) {
  for (let i = 0; i < loadingAnimations.length; i++) {
    if (index - 1 === i) {
      loadingAnimations[i].classList.remove("hide");
    } else {
      loadingAnimations[i].classList.add("hide");
    }
  }
  switchBlock.classList.remove("hide");
}

switchBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.id === "switch-1") {
      toggleHide(1);
    }
    if (e.target.id === "switch-2") {
      toggleHide(2);
    }
    if (e.target.id === "switch-3") {
      toggleHide(3);
    }
  });
});
