const dayDisplay = document.querySelector(".day-count");
const hourDisplay = document.querySelector(".hour-count");
const minuteDisplay = document.querySelector(".minute-count");
const secondDisplay = document.querySelector(".second-count");

const currentTime = new Date();
const currentYear = currentTime.getFullYear();
const newYearTime = new Date(`January 1 ${currentYear + 1} 00:00:00`);

function updateCountdown(){
    const currentTime = new Date();
    const difference = newYearTime - currentTime;
    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const month = day * 30;
    const year = day * 365;
    const d = Math.floor(difference / day);
    const h = Math.floor(difference / hour) % 24;
    const m = Math.floor(difference / minute) % 60;
    const s = Math.floor(difference / 1000) % 60;
    dayDisplay.innerHTML = (d < 10) ? '0' + d : d;
    hourDisplay.innerHTML = (h < 10) ? '0' + h : h;
    minuteDisplay.innerHTML = (m < 10) ? '0' + m : m;
    secondDisplay.innerHTML = (s < 10) ? '0' + s : s;
}

let countDown = setInterval(updateCountdown, 1000);