const canvas = document.querySelector("#draw");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let isDrawing = false;
let direction = true;
let lastX = 0;
let lastY = 0;
let hue = 0;

const draw = function(e) {
  if(!isDrawing) return

  ctx.strokeStyle = `hsl(${hue} 100% 50%)`

  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [ lastX, lastY ] = [ e.offsetX, e.offsetY ];
  hue++;

  if( ctx.lineWidth >= 50 || ctx.lineWidth <= 1) {
    console.log('toggle')
    direction = !direction;
  }
  if( direction ) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}

canvas.addEventListener('mousedown', (e) => {

  isDrawing = true;
  [ lastX, lastY ] = [ e.offsetX, e.offsetY ]

  });
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

