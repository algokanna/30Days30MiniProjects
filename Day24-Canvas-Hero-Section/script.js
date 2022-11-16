/** @type {HTMLCanvasElement} */

class Particle {
  constructor(x, y, hue, size) {
    this.x = x;
    this.y = y;
    this.hue = hue;
    this.size = Math.random() * size + 1;
    this.speedX = Math.random() * 4 - 2;
    this.speedY = Math.random() * 4 - 2;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.2) {
      this.size -= 0.1;
    }
  }
  draw() {
    ctx.fillStyle = `hsla(${this.hue}, 100%, 30%, .7)`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function init() {
  for (let i = 0; i < 250; i++) {
    let hue = Math.random() * (300 - 143) + 143;
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    particleArr.push(new Particle(x, y, hue, 20));
  }
}

function handleParticle() {
  for (let i = 0; i < particleArr.length; i++) {
    particleArr[i].update();
    particleArr[i].draw();
    if (particleArr[i].size <= 0.3) {
      particleArr.splice(i, 1);
      i--;
    }
  }
}

function animate() {
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(0,0,0,0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  handleParticle();
  if (hue <= 360) {
    hue += 5;
  } else {
    hue = 143;
  }
  requestAnimationFrame(animate);
}

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const particleArr = [];
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mouse = {
  x: undefined,
  y: undefined,
};

let hue = 143;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

window.addEventListener("mousemove", (e) => {
  (mouse.x = e.clientX), (mouse.y = e.clientY);
  for (let i = 0; i < 25; i++) {
    particleArr.push(new Particle(mouse.x, mouse.y, hue, 20));
  }
});

init();
animate();
