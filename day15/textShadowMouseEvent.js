// create a banner with name of a website with shadow
// shadow should change it's shape according to position of mouse
// ADDITIONAL: make Letters color "shimmer" on mouse move and setTimeout? wih hsl
const hero = document.querySelector( '#hero' );
const text = document.querySelector( '#text' );
const walk = 100;

const shadowTransform = function( e ) {

  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;

  if ( this !== e.target ) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = -(Math.round( ( x / width * walk ) - ( walk / 2 ) ));
  const yWalk = -(Math.round( ( y / height * walk ) - (walk / 2) ));

  text.style.transform = `translate(${xWalk}px, ${yWalk}px)`

}

let alpha1 = 0;
let alpha2 = 25;

const changeColor = function() {

  text.style.background = `linear-gradient(to right, hsl(${alpha1}, 75%, 50%), hsl(${alpha2}, 75%, 50%))`;
  
  text.style.backgroundClip = `text`;
  text.style.webkitBackgroundClip = `text`;
  alpha1 = alpha1 === 360 ? 0 : alpha1 + 0.5;
  alpha2 = alpha2 === 360 ? 0 : alpha2 + 0.5;

}

setInterval(changeColor, 1);

window.addEventListener( 'mousemove', shadowTransform );