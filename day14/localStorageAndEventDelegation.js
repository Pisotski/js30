// create a list of initial tacos: 4
// checkbox should toggle its slyling on click
// display taco when added to the form
// added taco should preserve properties of original ones (click event)

const ingredients = [ 'Fish', 'Beef', 'Pork', 'Chicken' ];
const menu = document.querySelector('.taco-menu');
const display = document.querySelector('#counter-top');
const chef = document.querySelector('#chef');
const chefTable = document.querySelector('.chef-table');
const fridge = window.localStorage;
let allTacos;

const putInFridge = function( ingredient ) {

  const shelf = ingredient.length * ingredient.charCodeAt( 0 );

  if( !localStorage[shelf] ) fridge.setItem( shelf, ingredient );

};

const beforeService = function() {

  ingredients.forEach( ingredient => putInFridge( ingredient ) );

}

beforeService();

const initialize = function( e ) {

  // when page loaded remove 'loading' from list
  menu.removeChild(menu.children[0]);
  prepareForService();

  // when page loaded input box active
  display.focus();

};

const prepareForService = function() {

  const keys = Object.keys(fridge);
  for( let key of keys ) {

    makeTaco( fridge[ key ] );

  }

};

const makeTaco = function( ingredient ) {

  const taco = newTaco(ingredient);
  // adding eventListener with "closure" to every item
  taco.addEventListener( 'change', prepareForGuest );
  chefTable.before( taco );

};

const newTaco = function( ingredient ) {

  const tortilla = document.createElement( 'li' );
  tortilla.setAttribute( 'class', 'tacos' );
  tortilla.innerHTML = ingredient;
  tortilla.addEventListener('click', prepareForGuest);
  return tortilla;

}

const findRecipe = function( e ) {

  if ( !display.value || ( e.keyCode && e.keyCode !== 13 ) ) return;

  e.preventDefault();
  const newIngredient = display.value;
  putInFridge( newIngredient );
  makeTaco( newIngredient );
  display.value = '';

};



const prepareForGuest = function( e ) {

  this.classList.toggle('active');

}

window.addEventListener( 'load', initialize );
chef.addEventListener( 'mouseup', findRecipe );
window.addEventListener( 'keydown', findRecipe );

// adding eventListener with "event delegation" to parent item
// menu.addEventListener( 'change', prepareForGuest );
