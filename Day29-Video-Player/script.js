const videoPlaylist = [
  {
    videoName: "Wolf",
    source: "./assets/Wolf.mp4",
    thumbnailImage: "./assets/Wolf-thumbnail.png",
  },
  {
    videoName: "Trees",
    source: "./assets/Trees.mp4",
    thumbnailImage: "./assets/Trees-thumbnail.png",
  },
  {
    videoName: "River",
    source: "./assets/River.mp4",
    thumbnailImage: "./assets/River-thumbnail.png",
  },
  {
    videoName: "Into the Nature - Cinematic Travel Video",
    source: "./assets/Into-The-Nature-Cinematic-Travel-Video.mp4",
    thumbnailImage:
      "./assets/Into-The-Nature-Cinematic-Travel-Video-thumbnail.png",
  },
];
const previousBtn = document.querySelector(".previous-btn");
const playBtn = document.querySelector("button.play");
const nextBtn = document.querySelector(".next-btn");
const video = document.querySelector("#video");
const videoPlayer = document.querySelector(".video-player");
const videoControlWrapper = document.querySelector(".wrapper");
const videoSource = document.querySelector("#video>source");
const videoTitle = document.querySelector(".video-title");
const thumbnailImage = document.querySelector(".thumbnail-image>img");
const totalDuration = document.querySelector(".video-duration");
const currentTime = document.querySelector(".current-time");
const currentProgress = document.querySelector(".progress-bar");
const progressBar = document.querySelector(".progress-area");
const volumeBtn = document.querySelector(".volume>ion-icon");
const volumeSlider = document.querySelector("#volume-slider");
const skipBackwardBtn = document.querySelector(".skip-backward");
const skipForwardBtn = document.querySelector(".skip-forward");
const timelinePreview = document.querySelector(".progress-area>span");
const fullscreenBtn = document.querySelector(".fullscreen");
const invisiblePlayPause = document.querySelector(".invisible-play-pause-trigger");
const playbackSpeedBtn = document.querySelector(".playback-speed");
const playbackSpeedModal = document.querySelector(".playback-speed-modal");
const playbackOptions = document.querySelectorAll(".playback-speed-option");
let videoIndex = 3;
let isPlaying = false;
let isMuted = false;
let totalTime = 0;
let isFullscreen = false;
let playbackSpeed = 1;
let timer;


function togglePlayPause() {
  if (!isPlaying) {
    video.play();
    playBtn.innerHTML = `<ion-icon name="pause"></ion-icon>`;
    isPlaying = true;
  } else {
    video.pause();
    playBtn.innerHTML = `<ion-icon name="play"></ion-icon>`;
    isPlaying = false;
  }
}
function videoLoad(i) {
  videoSource.src = videoPlaylist[i].source;
  thumbnailImage.src = videoPlaylist[i].thumbnailImage;
  videoTitle.innerHTML = videoPlaylist[i].videoName;
  video.load();
  video.volume = 0.7;
}
function updateDuration() {
  video.addEventListener("loadedmetadata", () => {
    let minutes = Math.floor(video.duration / 60);
    let seconds = Math.floor(video.duration % 60);
    minutes = minutes < 10 ? "0" + minutes.toString() : minutes;
    seconds = seconds < 10 ? "0" + seconds.toString() : seconds;
    totalDuration.innerHTML = `${minutes} : ${seconds}`;
    totalTime = video.duration;
  });
}

function updateCurrentTime() {
  let minutes = Math.floor(video.currentTime / 60);
  let seconds = Math.floor(video.currentTime % 60);
  minutes = minutes < 10 ? "0" + minutes.toString() : minutes;
  seconds = seconds < 10 ? "0" + seconds.toString() : seconds;
  currentTime.innerHTML = `${minutes} : ${seconds}`;
  currentProgress.style = `width:${(video.currentTime / totalTime) * 100}%`;
}
function seeking(e) {
  let mouseX = e.offsetX;
  let width = e.currentTarget.clientWidth;
  video.currentTime = (mouseX / width) * video.duration;
  updateCurrentTime();
}
function skipBackward() {
  if (video.currentTime >= 5) {
    video.currentTime -= 5;
    updateCurrentTime();
  }
}
function skipForward() {
  if (video.currentTime < video.duration - 5) {
    video.currentTime += 5;
    updateCurrentTime();
  }
}
const hideControls = () => {
  timer = setTimeout(()=>{
    videoControlWrapper.classList.remove("show-control");
    document.querySelector(".fading-overlay-top").classList.remove("show-control");
    document.querySelector(".fading-overlay-bottom").classList.remove("show-control");
    document.querySelector(".video-title").classList.remove("show-control");
  },3000)
}
hideControls();
//Trigger show and hide when hover mouse over the video controls

videoPlayer.addEventListener("mousemove", () => {
  videoControlWrapper.classList.add("show-control");
  document.querySelector(".fading-overlay-top").classList.add("show-control");
  document.querySelector(".fading-overlay-bottom").classList.add("show-control");
  document.querySelector(".video-title").classList.add("show-control");
  clearTimeout(timer);
  hideControls();
});
// Skipping Buttons
skipBackwardBtn.addEventListener("click", (e) => { 
  skipBackward();
});
skipForwardBtn.addEventListener("click", (e) => {
  skipForward();
});
// Trigger Play / Pause
invisiblePlayPause.addEventListener("click", (e) => {
  togglePlayPause();
});
playBtn.addEventListener("click", (e) => {
  togglePlayPause();
});
// Set up video loading on page load
window.addEventListener("load", () => {
  videoLoad(videoIndex);
  updateDuration(video);
});
// Update current time when video is playing
video.addEventListener("play", () => {
  const updateCurrent = setInterval(updateCurrentTime, 1000);
});
// Auto play the next video when one ends
video.addEventListener("ended", () => {
  clearInterval(updateCurrentTime);
  if (videoIndex < videoPlaylist.length - 1) {
    videoIndex++;
  } else {
    videoIndex = 0;
  }
  videoLoad(videoIndex);
  video.play();
  isPlaying = true;
});
// Volume button and slider
volumeBtn.addEventListener("click", (e) => {
  if (isMuted === false) {
    video.volume = 0;
    isMuted = true;
    e.target.name = "volume-mute";
    volumeSlider.value = 0;
  } else {
    video.volume = 0.7;
    isMuted = false;
    e.target.name = "volume-high";
    volumeSlider.value = 70;
  }
});
volumeSlider.addEventListener("input", (e) => {
  let volume = e.target.value / 100;
  video.volume = volume;
});
volumeSlider.addEventListener("click", (e) => {
});
// Seeking when clicking on progress bar
progressBar.addEventListener("click", (e) => { 
  seeking(e);
});
// Show preview when hover over progress bar
progressBar.addEventListener("mousemove", (e) => {
  let mouseX = e.offsetX;
  let width = e.currentTarget.clientWidth;
  let movingX;
  let previewTimeMark = (mouseX / width) * video.duration;
  let minutes = Math.floor(previewTimeMark / 60);
  let seconds = Math.floor(previewTimeMark % 60);
  minutes = minutes < 10 ? "0" + minutes.toString() : minutes;
  seconds = seconds < 10 ? "0" + seconds.toString() : seconds;
  timelinePreview.innerHTML = `${minutes} : ${seconds}`;
  if (e.offsetX <= 80) {
    movingX = 80;
  } else if (e.offsetX > 80 && e.offsetX < width - 80) {
    movingX = e.offsetX;
  } else {
    movingX = width - 80;
  }
  timelinePreview.style = `left: ${movingX}px; opacity:1`;
});
progressBar.addEventListener("mouseout", () => {
  timelinePreview.innerHTML = ``;
  timelinePreview.style = ``;
});
// Trigger fullscreen
fullscreenBtn.addEventListener("click", (e) => {
  if (isFullscreen) {
    if (document.exitFullscreen) {
      document.exitFullscreen();
      isFullscreen = false;
    } else if (document.webkitExitFullscreen) {
      /* Safari */
      document.webkitExitFullscreen();
      isFullscreen = false;
    } else if (document.msExitFullscreen) {
      /* IE11 */
      document.msExitFullscreen();
      isFullscreen = false;
    }
  } else {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
      isFullscreen = true;
    } else if (document.documentElement.webkitRequestFullscreen) {
      /* Safari */
      document.documentElement.webkitRequestFullscreen();
      isFullscreen = true;
    } else if (document.msRequestFullscreen) {
      /* IE11 */
      document.documentElement.msRequestFullscreen();
      isFullscreen = true;
    }
  }
  videoPlayer.classList.toggle("fullscreen-mode");
});
// Playback speed 
playbackSpeedBtn.addEventListener("click", (e)=>{
  playbackSpeedModal.classList.toggle("show-modal");
})
playbackOptions.forEach(option => {
  option.addEventListener("click", (e) => {
    playbackSpeed = parseFloat(e.currentTarget.innerHTML);
    video.playbackRate = playbackSpeed;
    for (let i = 0; i < playbackOptions.length; i++){
      playbackOptions[i].classList.remove("active-option");
    }
    e.currentTarget.classList.add("active-option");
  });
})