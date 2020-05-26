let secretCode = [ 32, 113, 119, 101 ];
const secretCodeCheck = function( e ) {

  e.keyCode === secretCode[ 0 ] ? secretCode.shift() : removeEvent( document, 'keypress' );
  return secretCode.length === 0 && document.body.classList.add( 'hooray' );
}
const removeEvent = function( element, event ) {

  element.removeEventListener( event, secretCodeCheck );
}

document.addEventListener( 'keypress', secretCodeCheck );