async function fetchData() {
  const response = await fetch("https://dog.ceo/api/breeds/list/all");
  const data = await response.json();
  createBreedList(data.message);
}

function createBreedList(breedList) {
  document.querySelector(
    "#breed"
  ).innerHTML = `<select onchange=loadByBreed(this.value)>
    <option value="default">Choose a dog breed</option>
    ${Object.keys(breedList)
      .map((breed) => {
        return `<option>${breed}</option>`;
      })
      .join("")}
    </select>`;
}

function hoverToggle() {
  const imgDisplayWrappers = document.querySelectorAll(".img-wrapper"),
    imgDisplays = document.querySelectorAll(".dog-img");

  for (let i = 0; i < imgDisplayWrappers.length; i++) {
    imgDisplayWrappers[i].addEventListener("mouseover", () => {
      imgDisplays[i].classList.add("img-hover");
      for (let j = 0; j < imgDisplays.length; j++) {
        if (i !== j) {
          imgDisplays[j].classList.add("sepia");
        }
      }
    });

    imgDisplayWrappers[i].addEventListener("mouseout", () => {
      for(let j = 0; j < imgDisplays.length; j++){
        imgDisplays[j].classList.remove("img-hover");
        imgDisplays[j].classList.remove("sepia");
      }
    });
  }
}

async function loadByBreed(breed) {
  if (breed !== "default") {
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
    const data = await response.json();
    const imgLinks = await data.message;
    let generatedHTML = "";

    for (link of imgLinks) {
      generatedHTML += `<a href="${link}" class="img-wrapper"><img src="${link}" class="dog-img"></a>`;
    }
    document.querySelector("#gallery").innerHTML = generatedHTML;
  }
  hoverToggle();
}

window.addEventListener("load", fetchData);
