
// this time instead of flexbox i'll try to use table.
// table content: 10 rows 2 colomns
// first colomn - input element with checkbox.
// OBJECTIVE: when one checkbox A is selected, the content of a corresponding text has to be crossed ou
// when checkbox B is selected all checkboxes have to be selected between checkbox A and checkbox B
// CONSTRAIN: the functionality has to be true in both directions. e.g. when selected chexbox A is 3rd element in a row and chexbox B is element 7, elements from 3 to 7 have to be crossed out. if checkbox A is 7 and checkbox B is 3 the same functionality should be applied.

// create a table 10X2.
//    first element of each row - input tag with type checkbox
//    second - lorem ipsum
// shadow to right low corner
// create function that when checkbox is clicked will cross out a correctoding text element
// keep track of is any of the checkboxes is already clicked
// if a second element is selected, find out how many elements are in the middle of selected ones   <==this will take the most time
// cross out all element in between selected once
// make sure selection work in both ways, from top to bottom and from bottom to top.
// ADDED FUNCTIONALITY: on click anywhere outside the table, all checkboxed should be deselected


const mail = document.querySelector('table');
// it seems like table cells in rows selection might be really helpfull to solve onwards\backwards selection problem
// in this case there is no need to make any calculations, just pure selection;
const letters = [...mail.rows];

const crossOutLetter = function(e) {
  // get text from selected row
  // this.lastChild.previousElementSibling.innerHTML
  const isCrossedOut = letters.some(letter => letter.classList.contains('crossed-out'));
  this.classList.toggle('crossed-out');

  if( isCrossedOut ) {

    var crossingOut = false;
    var hasStarted = false;

    letters.forEach((letter, ind) => {
      const decorated = letter.classList.contains('crossed-out');
      if( crossingOut ) {
        letter.classList.add('crossed-out');
        letter.querySelector('input').checked = true;
      }
      if( !hasStarted && decorated ) {
        hasStarted = true;
        crossingOut = true;
      } else if( hasStarted && decorated ) {
        crossingOut = false;
      }
    })
  }
}

// interesting workaround clicks outside of specified element

letters.forEach( letter => {
  letter.addEventListener('change', crossOutLetter);
})

document.addEventListener('click', function(event) {
  const isClickInside = mail.contains(event.target);

  if (!isClickInside) {
    letters.map(letter => {
      letter.classList.remove('crossed-out');
      letter.querySelector('input').checked = false;
    })
  }
});