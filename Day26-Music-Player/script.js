const tracks = [
  {
    trackName: "Talking to Yourself",
    artist: "Carly Rae Jepsen",
    source: "./assets/Carly-Rae-Jepsen-Talking-To-Yourself.mp3",
    coverArt: "./assets/carly-rae-jepsen-the-loneliest-time-Cover-Art.jpg",
  },
  {
    trackName: "Take a Chance",
    artist: "Flume feat Little Dragon",
    source: "./assets/Flume-Take-a-Chance-ft-Little-Dragon.mp3",
    coverArt: "./assets/flume-skin-Cover-Art.jpg",
  },
  {
    trackName: "Secrets (Your Fire)",
    artist: "Magdalena Bay",
    source: "./assets/Magdalena-Bay-Secrets-(Your-Fire).mp3",
    coverArt: "./assets/magdalena-bay-mercurial-world-Cover-Art.jpg",
  },
  {
    trackName: "Divinity",
    artist: "Porter Robinson feat Amy Millian",
    source: "./assets/Porter-Robinson-ft-Amy-Millan-Divinity.mp3",
    coverArt: "./assets/porter-robinson-worlds-Cover-Art.jpg",
  },
  {
    trackName: "Only Seeing God When I Come",
    artist: "Sega Bodega",
    source: "./assets/Sega-Bodega-Only-Seeing-God-When-I-Come.mp3",
    coverArt: "./assets/sega-bodega-romeo-Cover-Art.jpg",
  },
  {
    trackName: "Sugar for the Pill",
    artist: "Slow Dive",
    source: "./assets/Slowdive-Sugar-for-the-Pill.mp3",
    coverArt: "./assets/slowdive-slowdive-Cover-Art.jpg",
  },
  {
    trackName: "Ya Hey",
    artist: "Vampire Weekend",
    source: "./assets/Vampire-Weekend-Ya-Hey.mp3",
    coverArt:
      "./assets/vampire-weekend-modern-vampires-of-the-city-Cover-Art.jpg",
  },
];

function toggleActiveState(e) {
  e.target.classList.toggle("active-state");
}
function togglePlayPause(e) {
  if (!isPlaying) {
    audio.play();
    e.currentTarget.innerHTML = `<ion-icon name="pause"></ion-icon>`;
    isPlaying = true;
  } else {
    audio.pause();
    e.currentTarget.innerHTML = `<ion-icon name="play"></ion-icon>`;
    isPlaying = false;
  }
}
function setLoopState() {
  if (isLoop) {
    isLoop = false;
    audio.loop = false;
  } else {
    isLoop = true;
    audio.loop = true;
  }
}
function trackLoad(i) {
  audioSource.src = tracks[i].source;
  coverArt.src = tracks[i].coverArt;
  trackTitle.innerHTML = tracks[i].trackName;
  artist.innerHTML = tracks[i].artist;
  audio.load();
  audio.value = 0.7;
}
function updateDuration() {
  audio.addEventListener("loadedmetadata", () => {
    let minutes = Math.floor(audio.duration / 60);
    let seconds = Math.floor(audio.duration % 60);
    minutes = minutes < 10 ? "0" + minutes.toString() : minutes;
    seconds = seconds < 10 ? "0" + seconds.toString() : seconds;
    totalDuration.innerHTML = `${minutes} : ${seconds}`;
    totalTime = audio.duration;
  });
}

function updateCurrentTime() {
  let minutes = Math.floor(audio.currentTime / 60);
  let seconds = Math.floor(audio.currentTime % 60);
  minutes = minutes < 10 ? "0" + minutes.toString() : minutes;
  seconds = seconds < 10 ? "0" + seconds.toString() : seconds;
  currentDuration.innerHTML = `${minutes} : ${seconds}`;
  currentProgress.style = `width:${(audio.currentTime / totalTime) * 100}%`;
}
function seeking(e){
    let mouseX = e.offsetX;
    let width = e.currentTarget.clientWidth;
    audio.currentTime = (mouseX / width) * audio.duration;
    updateCurrentTime();
}
const loveBtn = document.querySelector(".love-btn");
const loopBtn = document.querySelector(".loop-btn");
const previousBtn = document.querySelector(".previous-btn");
const playBtn = document.querySelector(".play-btn");
const nextBtn = document.querySelector(".next-btn");
const audio = document.querySelector("#audio");
const audioSource = document.querySelector("#audio>source");
const trackTitle = document.querySelector(".track-title");
const artist = document.querySelector(".artist-name");
const coverArt = document.querySelector(".album-cover>img");
const totalDuration = document.querySelector(".total-time");
const currentDuration = document.querySelector(".current-time");
const currentProgress = document.querySelector(".current-progress");
const progressBar = document.querySelector(".progress-bar");
const volumeBtn = document.querySelector(".volume-slider>ion-icon");
const volumeSlider = document.querySelector(
  ".volume-slider>input[type='range']"
);
let trackIndex = 0;
let isPlaying = false;
let isLoop = false;
let isMuted = false;
let totalTime = 0;

loveBtn.addEventListener("click", (e) => {
  toggleActiveState(e);
});
loopBtn.addEventListener("click", (e) => {
  toggleActiveState(e);
  setLoopState();
});
playBtn.addEventListener("click", (e) => {
  togglePlayPause(e);
});

window.addEventListener("load", () => {
  trackLoad(trackIndex);
  updateDuration(audio);
});

previousBtn.addEventListener("click", () => {
  if (trackIndex > 0) {
    trackIndex--;
  } else {
    trackIndex = tracks.length - 1;
  }
  trackLoad(trackIndex);
  audio.play();
  isPlaying = true;
});

nextBtn.addEventListener("click", () => {
  if (trackIndex < tracks.length - 1) {
    trackIndex++;
  } else {
    trackIndex = 0;
  }
  trackLoad(trackIndex);
  audio.play();
  isPlaying = true;
});
audio.addEventListener("play", () => {
  const updateCurrent = setInterval(updateCurrentTime, 1000);
});
audio.addEventListener("ended", () => {
  clearInterval(updateCurrentTime);

  if (trackIndex < tracks.length - 1) {
    trackIndex++;
  } else {
    trackIndex = 0;
  }
  trackLoad(trackIndex);
  audio.play();
  isPlaying = true;
});

volumeBtn.addEventListener("click", (e) => {
  toggleActiveState(e);
  if (isMuted === false) {
    audio.volume = 0;
    isMuted = true;
    e.target.name = "volume-mute";
    volumeSlider.value = 0;
  } else {
    audio.volume = 0.7;
    isMuted = false;
    e.target.name = "volume-high";
    volumeSlider.value = 70;
  }
});

volumeSlider.addEventListener("input", (e) => {
  let volume = e.target.value / 100;
  audio.volume = volume;
});

progressBar.addEventListener("click", (e) => {
    seeking(e);
});
