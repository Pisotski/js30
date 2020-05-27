const paragraph = document.querySelector( 'p' );
const images = document.querySelectorAll( 'img' );

const scroll = window.requestAnimationFrame ||
            function(callback){ window.setTimeout(callback, 100)};

const loop = function() {

  Array.prototype.forEach.call( images, function ( image ) {
    if ( isElementInViewport( image ) ) {
      image.setAttribute( "style", "transform: translateX(0); opacity: 1;" );
    } else {
      image.setAttribute( "style", "transform: translateX(1); opacity: 0;" );
    }
  });

  scroll( loop );
};

const isElementInViewport = function( el ) {

  const rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );

};

loop();
