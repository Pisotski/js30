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
const muteSVG = document.querySelector('.icon.speaker');
const volume = document.querySelector('.volume-progress');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress-bar');
const forwardRewind = document.querySelector('.forward-container')
const backwardRewind = document.querySelector('.backward-container')
const fullScreen = document.querySelector('.full-screen-container')
const fullScreenEnabled = !!(document.fullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled || document.webkitSupportsFullscreen || document.webkitFullscreenEnabled || document.createElement('video').webkitRequestFullScreen);
let cacheVolume = 0.5;
let cacheVolumeProgressBarPosition;

if (!fullScreenEnabled) {
  fullscreen.style.display = 'none';
}
video.controls = false;

const handlePlayPause = function( e ) {

  togglePlayPause();
  video.paused || video.ended ? video.play() : video.pause();
  return;

};

const togglePlayPause = function() {

  if ( playPause.classList.contains( 'play' ) ) {
    playPause.classList.remove( 'play' );
    playPause.classList.add( 'pause' );
  } else {
    playPause.classList.remove( 'pause' );
    playPause.classList.add( 'play' );
  }
  return;

};

const handleStop = function( e ) {

  video.currentTime = 0;
  video.pause();
  stop.classList.toggle( 'stop-active' );
  return;

};

const handleMute = function( e ) {

  const isMuted = video.muted;
  if( isMuted ) {
    video.muted = false;
    video.volume = cacheVolume; 
    volume.value = cacheVolumeProgressBarPosition;
  } else {

    // memoize it if have time
    cacheVolume = video.volume;
    cacheVolumeProgressBarPosition = volume.value;
    volume.value = 0;
    video.volume = 0;
    video.muted = true;
  }
};

const handleProgress = function( e ) {

  progressBar.value = video.currentTime;
  progress.style.width = Math.floor( ( video.currentTime / video.duration ) * 100 ) + '%';

};

const handleRewind = function( e ) {
  
  if(this !== progressBar) {

    const isForward = this === forwardRewind;
    const step = isForward ? 25 : -10;
    const isOut = outOfTimeFrame(step);

    if( isOut ) {

      isForward ? video.currentTime = video.duration : video.currentTime = 0;
      return;

    }

    video.currentTime += step;
    return;

    }

  const pos = (e.pageX  - this.offsetLeft) / this.offsetWidth;
  video.currentTime = pos * video.duration;
  return;

};

const outOfTimeFrame = function( seconds ) {

  const futureTimeMark = video.currentTime + seconds;

  if( seconds < 0 ) {

    return futureTimeMark < 0

  } else {

    return futureTimeMark > video.duration

  }
}

const handleVolume = function( e ) {

  const pos = (e.pageX  - this.offsetLeft) / this.offsetWidth;
  volume.value = pos;
  video.volume = pos;
};

const keyRouter = function( e ) {

  switch ( e.keyCode ) {

    case 32 :
      e.preventDefault();
      playPause.classList.add('active');
      playPause.click();
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

};

const handleFullScreen = function( e ) {
  if (isFullScreen()) {
     if (document.exitFullscreen) document.exitFullscreen();
     else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
     else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();
     else if (document.msExitFullscreen) document.msExitFullscreen();
     setFullscreenData(false);
  }
  else {
     if (videoContainer.requestFullscreen) videoContainer.requestFullscreen();
     else if (videoContainer.mozRequestFullScreen) videoContainer.mozRequestFullScreen();
     else if (videoContainer.webkitRequestFullScreen) videoContainer.webkitRequestFullScreen();
     else if (videoContainer.msRequestFullscreen) videoContainer.msRequestFullscreen();
     setFullscreenData(true);
  }
};

const isFullScreen = function() {
  return !!(document.fullScreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement);
};

const setFullscreenData = function(state) {
  videoContainer.setAttribute('data-fullscreen', !!state);
};

      document.addEventListener('keydown', keyRouter);
         video.addEventListener('loadedmetadata', () => progressBar.setAttribute('max', video.duration));
         video.addEventListener('loadedmetadata', () => volume.value = 0.5);
         video.addEventListener('timeupdate', handleProgress);
         video.addEventListener('click', handlePlayPause);
     playPause.addEventListener('click', handlePlayPause);
          stop.addEventListener('click', handleStop);
          mute.addEventListener('onclick', handleMute);
       muteSVG.addEventListener('click', handleMute);
   progressBar.addEventListener('click', handleRewind);
 forwardRewind.addEventListener('click', handleRewind);
backwardRewind.addEventListener('click', handleRewind);
    fullScreen.addEventListener('click', handleFullScreen);
        volume.addEventListener('click', handleVolume);
