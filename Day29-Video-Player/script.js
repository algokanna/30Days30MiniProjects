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
      thumbnailImage: "./assets/Into-The-Nature-Cinematic-Travel-Video-thumbnail.png",
    }
  ];

const videoControlWrapper = document.querySelector(".wrapper");

//Trigger show and hide when hover mouse over the video controls
videoControlWrapper.addEventListener("mouseover", (e)=>{
    e.currentTarget.style = `opacity:1`;
    e.currentTarget.parentElement.querySelector(".fading-overlay-top").style = `opacity:1`;
    e.currentTarget.parentElement.querySelector(".fading-overlay-bottom").style = `opacity:1`;
    e.currentTarget.parentElement.querySelector(".video-title").style = `opacity:1`;
})
videoControlWrapper.addEventListener("mouseout", (e)=>{
    e.currentTarget.style = `opacity:0`;
    e.currentTarget.parentElement.querySelector(".fading-overlay-top").style = `opacity:0`;
    e.currentTarget.parentElement.querySelector(".fading-overlay-bottom").style = `opacity:0`;
    e.currentTarget.parentElement.querySelector(".video-title").style = `opacity:0`;
})


  
//   function toggleActiveState(e) {
//     e.target.classList.toggle("active-state");
//   }
  function togglePlayPause(e) {
    if (!isPlaying) {
      video.play();
      e.currentTarget.innerHTML = `<ion-icon name="pause"></ion-icon>`;
      isPlaying = true;
    } else {
      video.pause();
      e.currentTarget.innerHTML = `<ion-icon name="play"></ion-icon>`;
      isPlaying = false;
    }
  }
  function setLoopState() {
    if (isLoop) {
      isLoop = false;
      video.loop = false;
    } else {
      isLoop = true;
      video.loop = true;
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
  function seeking(e){
      let mouseX = e.offsetX;
      let width = e.currentTarget.clientWidth;
      video.currentTime = (mouseX / width) * video.duration;
      updateCurrentTime();
  }
  const previousBtn = document.querySelector(".previous-btn");
  const playBtn = document.querySelector("button.play");
  const nextBtn = document.querySelector(".next-btn");
  const video = document.querySelector("#video");
  const videoSource = document.querySelector("#video>source");
  const videoTitle = document.querySelector(".video-title");
  const thumbnailImage = document.querySelector(".thumbnail-image>img");
  const totalDuration = document.querySelector(".video-duration");
  const currentTime = document.querySelector(".current-time");
  const currentProgress = document.querySelector(".progress-bar");
  const progressBar = document.querySelector(".progress-area");
  const volumeBtn = document.querySelector(".volume>ion-icon");
  const volumeSlider = document.querySelector("#volume-slider");
  let videoIndex = 0;
  let isPlaying = false;
  let isLoop = false;
  let isMuted = false;
  let totalTime = 0;
  
  playBtn.addEventListener("click", (e) => {
    togglePlayPause(e);
  });
  
  window.addEventListener("load", () => {
    videoLoad(videoIndex);
    updateDuration(video);
  });
  
//   previousBtn.addEventListener("click", () => {
//     if (videoIndex > 0) {
//       videoIndex--;
//     } else {
//       videoIndex = videos.length - 1;
//     }
//     videoLoad(videoIndex);
//     video.play();
//     isPlaying = true;
//   });
  
//   nextBtn.addEventListener("click", () => {
//     if (videoIndex < videos.length - 1) {
//       videoIndex++;
//     } else {
//       videoIndex = 0;
//     }
//     videoLoad(videoIndex);
//     video.play();
//     isPlaying = true;
//   });
//   video.addEventListener("play", () => {
//     const updateCurrent = setInterval(updateCurrentTime, 1000);
//   });
//   video.addEventListener("ended", () => {
//     clearInterval(updateCurrentTime);
  
//     if (videoIndex < videos.length - 1) {
//       videoIndex++;
//     } else {
//       videoIndex = 0;
//     }
//     videoLoad(videoIndex);
//     video.play();
//     isPlaying = true;
//   });
  
  volumeBtn.addEventListener("click", (e) => {
    toggleActiveState(e);
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
  
  progressBar.addEventListener("click", (e) => {
      seeking(e);
  });
  