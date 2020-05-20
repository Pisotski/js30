// OBJECTIVE HTML5 videoplayer customization
// create objects:
  //  Play/pause button
  //  Stop button
  //  Rewind 10s button
  //  Move forward 25s button
  //  Volume up/down progress bar
  //  Video progress bar. timeline
// align objects as needed
//  FUNCTIONALITY
  //  Play/pause button
  //  on click anywhere on the video object plays and stops the video
  //  on press space button do the same
  //  toggle icons for play/plause on hover
  //  on hover
    //  highlight a background

const videoContainer = document.querySelector('#video-container');
const video = document.querySelector('video');
const videoControls = document.querySelector('#video-controls');
const playPause = document.querySelector('.btn.play');
const stop = document.querySelector('.btn.stop');
const mute = document.querySelector('.btn.mute');
const volume = document.querySelector('.volume-progress');
const volumeContainer = document.querySelector('.volume-container');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress-bar');

video.controls = false;
video.muted = true;
mute.style.backgroundColor = 'sandybrown'

const handlePlayPause = function(e) {

  togglePlayPause();
  video.paused || video.ended ? video.play() : video.pause();
  return;
};

const togglePlayPause = function(){

  if (playPause.classList.contains('play')){
    playPause.classList.remove('play');
    playPause.classList.add('pause');
  } else {
    playPause.classList.remove('pause');
    playPause.classList.add('play');
  }
  return;
}

const handleStop = function(e) {

  video.currentTime = 0;
  video.pause();
  stop.classList.toggle('stop-active')
  return;
}

const handleMute = function(){

  const isMuted = video.muted;
  video.muted = isMuted ? false : true;
  mute.style.backgroundColor = isMuted ? 'transparent' : 'var(--highlight-color)';
}

const handleProgress = function() {

  progressBar.value = video.currentTime;
  progress.style.width = Math.floor((video.currentTime / video.duration) * 100) + '%';
}

const handleRewind = function(e) {

  const pos = (e.pageX  - this.offsetLeft) / this.offsetWidth;
  video.currentTime = pos * video.duration;
}

const handleVolume = function(e) {
  
  video.muted = false;
  mute.style.backgroundColor = 'transparent';
  const pos = (e.pageX  - this.offsetLeft) / this.offsetWidth ;
  volume.value = pos;
  video.volume = pos;
}

const keyRouter = function(e) {

  switch (e.keyCode) {

    case 32 :
      e.preventDefault();
      handlePlayPause();
    break;

    case 83 :
      e.preventDefault();
      handleStop();
    break;

    case 77 :
      e.preventDefault();
      handleMute();
    break;
    }

  return;
}

   document.addEventListener('keydown', keyRouter);
      video.addEventListener('loadedmetadata', () => progressBar.setAttribute('max', video.duration));
      video.addEventListener('loadedmetadata', () => volume.value = 0.5);
      video.addEventListener('timeupdate', handleProgress);
      video.addEventListener('click', handlePlayPause);
  playPause.addEventListener('click', handlePlayPause);
       stop.addEventListener('click', handleStop);
       mute.addEventListener('click', handleMute)
progressBar.addEventListener('click', handleRewind);
     volume.addEventListener('click', handleVolume);
     volume.addEventListener('mousedown mouseup', handleVolume)
