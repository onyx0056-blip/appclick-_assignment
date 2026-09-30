const video = document.getElementById('video');
const playBtn = document.getElementById('playBtn');

const rewindBtn = document.getElementById('rewindBtn');
const fastForwardBtn = document.getElementById('fastForwardBtn');

const progress=document.getElementById('progress');
const currentTime = document.getElementById('currentTime');
const duration = document.getElementById('duration');

const volume = document.getElementById('volume');

const muteBtn = document.getElementById('muteBtn');
const fullscreenBtn = document.getElementById('fullscreenBtn');

const errorMessage = document.getElementById('errorMessage');


playBtn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});

video.addEventListener('play', () => {
    playBtn.innerHTML = '&#10074;&#10074;';
});

video.addEventListener('pause', () => {
    playBtn.innerHTML = '&#9658;'; 
});

video.addEventListener('timeupdate', () => {
    progress.value = (video.currentTime / video.duration) * 100;
});

progress.addEventListener('input', () => {
    video.currentTime = (progress.value / 100) * video.duration;
});

volume.addEventListener('input', () => {
    video.volume = volume.value;
});

muteBtn.addEventListener('click', () => {
    video.muted = !video.muted;

    if (video.muted) {
        muteBtn.innerHTML = '&#128263;'; 
    } else {
        muteBtn.innerHTML = '&#128266;'; 
    }
});

fullscreenBtn.addEventListener('click', () => {
    videoContainer.requestFullscreen();
});

rewindBtn.addEventListener('click', () => {
    video.currentTime -= 10; 
});

fastForwardBtn.addEventListener('click', () => {
    video.currentTime += 10; 
});

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

video.addEventListener('timeupdate', () => {
    progress.value = (video.currentTime / video.duration) * 100;
    currentTime.textContent = formatTime(video.currentTime);
    duration.textContent = formatTime(video.duration);
});

video.addEventListener('error', () => {
    errorMessage.style.display = 'block';
    video.style.display = 'none';
});
