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
    if(video.pause) {

    } else {
        
    }
}

// Update progress and timestamp
function updateProgress() {
    return true;
}

// Set video time to progress
function setVideoProgress() {
    return true;
}

// Stop video
function stopVideo() {
    return true;
}

// Event listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);