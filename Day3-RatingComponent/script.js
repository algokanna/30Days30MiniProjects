const level1 = document.querySelector("#level1"),
  level2 = document.querySelector("#level2"),
  level3 = document.querySelector("#level3"),
  level4 = document.querySelector("#level4"),
  level5 = document.querySelector("#level5"),
  ratingBox = document.querySelector("#rating-box");

const ratingLevel = [level1, level2, level3, level4, level5];

ratingBox.addEventListener("click", (e) => {
  let currentLevel = parseInt(e.target.id.replace("level", ""));
  for (let i = ratingLevel.length - 1; i >= 0; i--) {
    if (i > currentLevel - 1) {
      ratingLevel[i].classList.remove("rated");
    } else {
      if (!ratingLevel[i].classList.contains("rated")) {
        ratingLevel[i].classList.add("rated");
      }
    }
  }
});
