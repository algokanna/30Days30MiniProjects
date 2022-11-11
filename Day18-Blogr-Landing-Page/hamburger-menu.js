const mobileMenuIcon = document.querySelector("#menu-icon"),
  mobileMenuIconClose = document.querySelector("#menu-icon-close"),
  mobileNav = document.querySelector("#mobile-nav-block"),
  mobileMenuItems = document.querySelectorAll("#mobile-nav-block>ul>li");

function showMobileMenu() {
  mobileNav.classList.add("mobile-nav-show");
  mobileNav.classList.remove("mobile-nav-hide");
}

function hideMobileMenu() {
  mobileNav.classList.add("mobile-nav-hide");
  mobileNav.classList.remove("mobile-nav-show");
}

function toggleMenuIcon(element){
  element.classList.toggle("menu-icon-hide");
}

function toggleMobileSubmenu(e){
  e.target.classList.toggle("mobile-menu-item-active");
  e.target.parentElement.querySelector(".sub-menu").classList.toggle("mobile-submenu-hide");
}

mobileMenuIcon.addEventListener("click", ()=>{
  showMobileMenu();
  toggleMenuIcon(mobileMenuIcon);
  toggleMenuIcon(mobileMenuIconClose);
});
mobileMenuIconClose.addEventListener("click", ()=>{
  hideMobileMenu();
  toggleMenuIcon(mobileMenuIcon);
  toggleMenuIcon(mobileMenuIconClose);
});
mobileMenuItems.forEach(item =>{
  item.addEventListener("click", (e)=>{
    toggleMobileSubmenu(e);
  })
});