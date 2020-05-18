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
const playPause = document.querySelector('.btn');
const stop = document.querySelector('#stop');

video.controls = false;
video.muted = true;

const handlePlayPause = function(e) {

  togglePlayPause()
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
const keyRouter = function(e) {

  console.log(document.activeElement === playPause)
  switch (e.keyCode) {
    case 32 :
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
// stop.addEventListener('click', handleStop);