const bodyHeight = document.body.offsetHeight;
const topBanner = document.querySelector(".top-banner");
const galleryCards = document.querySelectorAll(".gallery-card");
const titles = document.querySelectorAll(".title");



window.addEventListener("scroll", (e)=>{
    const bodyHeight = document.body.offsetHeight;
    const currentHeight = document.scrollingElement.scrollTop;
    topBanner.style = `transform: translateX(${currentHeight / bodyHeight * topBanner.clientWidth * 0.125 * -1}px)`
});


let options_1 = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
}
let options_2 = {
    root: null,
    rootMargin: '0px',
    threshold: 0.7
}

const observer1 = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting){
            entry.target.querySelector(".img-overlay").style = `opacity:0`;
            entry.target.style = `transform: scale(1.1)`
            if (window.innerWidth > 600){
                entry.target.querySelector(".preview>img").style = `transform: rotate(-1.2deg)`;
            } else {
                entry.target.querySelector(".preview>img").style = `transform: scale(1.2)`;
            }
        } else {
            entry.target.querySelector(".img-overlay").style = ``;
            entry.target.querySelector(".preview>img").style = ``;
            entry.target.style = `transform: scale(1)`
        }
    });
}, options_1)

const observer2 = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting){
            entry.target.querySelector(".title").style = `top:-11px; opacity:0`;
            if (window.innerWidth > 739){
                entry.target.querySelector(".id").style = `top: 80px`;
            } else {
                entry.target.querySelector(".id").style = `top: 35px`;
            }
        } else {
            entry.target.querySelector(".title").style = ``;
            entry.target.querySelector(".id").style = ``;
        }
    });
}, options_2)

galleryCards.forEach(card => observer1.observe(card));
galleryCards.forEach(card => observer2.observe(card));

