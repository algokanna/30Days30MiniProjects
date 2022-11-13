const menuIcon = document.querySelector(".menu-icon"),
      mobileMenu = document.querySelector(".mobile-nav-wrapper");

menuIcon.addEventListener("click",()=>{
    mobileMenu.classList.toggle("mobile-menu-hide");
})