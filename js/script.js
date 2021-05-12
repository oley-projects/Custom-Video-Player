const video = document.getElementById('video'),
      play = document.getElementById('play'), 
      stop = document.getElementById('stop'), 
      progress = document.getElementById('progress'), 
      timestamp = document.getElementById('timestamp');

// Play and pause video
function toggleVideoStatus() {
    if(video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// Update play, pause icon
function updatePlayIcon() {
    if(video.paused) {
        play.classList.add('paused');
    } else {
        play.classList.remove('paused');
    }
}

// Update progress and timestamp
function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100;

    let mins = Math.floor(video.currentTime / 60);
    if (mins < 10) {
        mins = `0${mins}`;
    }

    let secs = Math.floor(video.currentTime % 60);
    if (secs < 10) {
        secs = `0${secs}`;
    }

    timestamp.innerHTML = `${mins}:${secs}`;
}

// Set video time to progress
function setVideoProgress() {
    video.currentTime = (+progress.value * video.duration) / 100;
}

// Stop video
function stopVideo() {
    video.currentTime = 0;
    video.pause();
}

// Event listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);