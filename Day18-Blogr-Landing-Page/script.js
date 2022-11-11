// RESPONSIVE
function responsive() {
  const header = document.querySelector("header"),
    desktopNav = document.querySelector("#desktop-nav"),
    mainMenu = document.querySelector(".main-menu"),
    mobileNav = document.querySelector("#mobile-nav"),
    section1 = document.querySelector(".section-1"),
    section3 = document.querySelector(".section-3"),
    h2Section1 = section1.querySelector("h2"),
    textBlockSection3 = section3.querySelector(".text-block"),
    wrapperSection2 = document.querySelector(".wrapper-bg-img-2"),
    footer = document.querySelector("footer");

  changeNavStyle(desktopNav);
  changeNavStyle(mainMenu);
  toggleFlexCenter(desktopNav);
  addingMobileIllustration1(h2Section1);
  addingMobileIllustration2(textBlockSection3);
  changeImageWrapperStyle(wrapperSection2);
  changeSection3Style(section3);
  changeFooterStyle(footer);
}
function changeNavStyle(nav) {
  if (window.innerWidth <= 760) {
    if (nav.classList.contains("space-between")) {
      nav.classList.remove("space-between");
    }
    if (!nav.classList.contains("gap-2r")) {
      nav.classList.add("gap-2r");
    }
  } else {
    if (nav.classList.contains("gap-2r")) {
      nav.classList.remove("gap-2r");
    }
    if (!nav.classList.contains("space-between")) {
      nav.classList.add("space-between");
    }
  }
}
function changeImageWrapperStyle(wrapper) {
  if (window.innerWidth <= 600) {
    wrapper.classList.remove("align-end");
    wrapper.classList.add("align-center");
  } else {
    wrapper.classList.add("align-end");
    wrapper.classList.remove("align-center");
  }
}
function toggleFlexCenter(element) {
  if (window.innerWidth <= 760) {
    element.classList.add("flex-center");
  } else {
    element.classList.remove("flex-center");
  }
}

function addingMobileIllustration1(element) {
  if (
    window.innerWidth <= 600 &&
    !element.parentElement.querySelector(".mobile-illustration")
  ) {
    element.insertAdjacentHTML(
      "afterend",
      `
        <img src="./assets/illustration-editor-mobile.svg" alt="illustration" class="mobile-illustration"> 
     `
    );
  }
  if (
    window.innerWidth > 600 &&
    element.parentElement.querySelector(".mobile-illustration")
  ) {
    element.parentElement.querySelector(".mobile-illustration").remove();
  }
}

function addingMobileIllustration2(element) {
  if (
    window.innerWidth <= 600 &&
    !element.parentElement.querySelector(".mobile-illustration")
  ) {
    element.insertAdjacentHTML(
      "beforebegin",
      `
        <img src="./assets/illustration-laptop-mobile.svg" alt="illustration" class="mobile-illustration">
    `
    );
  }
  if (
    window.innerWidth > 600 &&
    element.parentElement.querySelector(".mobile-illustration")
  ) {
    element.parentElement.querySelector(".mobile-illustration").remove();
  }
}

function changeSection3Style(section){
    if(window.innerWidth <= 600){
        section.classList.remove("align-end");
    } else {
        section.classList.add("align-end")
    }
}

function changeFooterStyle(footer){
    if (window.innerWidth <= 600){
        footer.classList.remove("row");
        footer.classList.remove("flex-start");
        footer.classList.remove("align-start");
        footer.classList.add("column");
        footer.classList.add("align-center");
        footer.classList.add("flex-center");
    } else {
        footer.classList.add("row");
        footer.classList.add("flex-start");
        footer.classList.add("align-start");
        footer.classList.remove("column");
        footer.classList.remove("align-center");
        footer.classList.remove("flex-center");
    }
}

window.addEventListener("load", responsive);
window.addEventListener("resize", responsive);
