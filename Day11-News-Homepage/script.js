const mobileMenuIcon = document.querySelector("#menu-icon"),
  mobileMenuIconClose = document.querySelector("#menu-icon-close"),
  mobileNav = document.querySelector("#mobile-nav-block");

function showMobileMenu() {
  mobileNav.classList.add("mobile-nav-show");
  mobileNav.classList.remove("mobile-nav-hide");
}

function hideMobileMenu() {
  mobileNav.classList.add("mobile-nav-hide");
  mobileNav.classList.remove("mobile-nav-show");
}

function clicked(){
    console.log("Clicked");
}
mobileMenuIcon.addEventListener("click", showMobileMenu);
mobileMenuIconClose.addEventListener("click", hideMobileMenu);