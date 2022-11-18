/** @type {HTMLCanvasElement} */

// canvas setup
const canvas = document.querySelector("#canvas-1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particleArr = [];
const particleArrWhite = [];
const numberOfParticle = 120;

// get mouse position
const mouse = {
  x: undefined,
  y: undefined,
};

window.addEventListener("mousemove", (event) => {
  const e = event;
  setTimeout(() => {
    mouse.x = e.offsetX;
    mouse.y = e.offsetY;
  }, 50);
});

// Create Particles

class Particle {
  constructor(x, y, size, color, weight) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.weight = weight;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
  update() {
    this.size -= 0.25;
    if (this.size < 0) {
      this.x = mouse.x + Math.random() * 100;
      this.y = mouse.y + Math.random() * 20;
      this.size = Math.random() * 25 + 15;
      this.weight = Math.random() * 2 - 0.5;
    }
    this.y += this.weight;
    this.weight += 0.2;

    if (this.y > canvas.height - this.size) {
      this.weight *= -1;
    }
    this.color = `hsla(0, 100%, 40%, 1)`;
  }
}

class ParticleWhite {
  constructor(x, y, size, color, weight) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.weight = weight;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
  update() {
    this.size -= 0.1;
    if (this.size < 0) {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 15 + 1;
      this.weight = Math.random() * 2 - 0.5;
    }
    this.y += this.weight;
    this.weight += 0.2;

    if (this.y > canvas.height - this.size) {
      this.weight *= -1;
    }
  }
}

function init() {
  for (let i = 0; i < numberOfParticle; i++) {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let size = Math.random() * 25 + 15;
    let color = `hsla(${Math.random() * 360},100%, 50%, .3)`;
    let weight = 1;
    particleArr.push(new Particle(x, y, size, color, weight));
  }
  for (let i = 0; i < numberOfParticle / 2; i++) {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let size = Math.random() * 10 + 1;
    let color = `hsla(0, 0%, 100%, 0.2)`;
    let weight = 0.5;
    particleArrWhite.push(new ParticleWhite(x, y, size, color, weight));
  }
}

function loopAnim() {
  ctx.fillStyle = `hsla(0, 0%, 5%, 0.1)`;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particleArr.length; i++) {
    particleArr[i].update();
    particleArr[i].draw();
  }
  for (let i = 0; i < particleArrWhite.length; i++) {
    particleArrWhite[i].update();
    particleArrWhite[i].draw();
  }
  requestAnimationFrame(loopAnim);
}

init();
loopAnim();
