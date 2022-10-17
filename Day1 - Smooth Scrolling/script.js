const body = document.body,
  scrollWrap = document.querySelectorAll(".smooth-scroll-wrapper")[0],
  height = scrollWrap.getBoundingClientRect().height - 1,
  speed = window.innerWidth > 768 ? 0.05 : 1;

let offset = 0;

body.style.height = Math.floor(height) + "px";

function smoothScroll() {
  offset += (window.pageYOffset - offset) * speed;

  let scroll = "translateY(-" + offset + "px)";
  scrollWrap.style.transform = scroll;

  callScroll = requestAnimationFrame(smoothScroll);
}
smoothScroll();
