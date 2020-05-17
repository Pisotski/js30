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
  //  toggle SVGs icons for play/plause
  //  on hover
    //  make SVG a bit bigger
    //  highlight a round background

const videoContainer = document.querySelector('#video-container');
const video = document.querySelector('video');
const videoControls = document.querySelector('#video-controls');
const playPause = document.querySelector('#playpause');
const stop = document.querySelector('#stop');


video.controls = false;
video.muted = true;

const handlePlayPause = function(e) {

  video.paused || video.ended ? video.play() : video.pause();
  return;
};

const keyRouter = function(e) {

  switch (e.keyCode) {
    case ( 32 && document.activeElement !== playPause ) :
        e.preventDefault();
        handlePlayPause();
    break;
  }

  return;
}

const handleStop = function(e) {
  console.log('clckd')

  return;
}

playPause.addEventListener('click', handlePlayPause);
video.addEventListener('click', handlePlayPause);
document.addEventListener('keydown', keyRouter);
stop.addEventListener('click', handleStop);