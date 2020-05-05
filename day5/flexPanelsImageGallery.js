// goal:
//  to create a flexible grid with 5 pictures in a row
// description:
//  each picture from the grid has to be display partially (~20% of the pictures' width has to be visible)
//    visible part: full height and 10% from the center to the left and right.
//  each picture has to have a word written in the center of it.
// functionality:
//  when user hovering mouse over a picture that picture has to expand to both sides, showing the hidden part of it
//  along with expanding of the picture two sententes are showing up from top and bottom moving to the center and stop when reach a certain position(~25% of pictures' height)

// create flexbox grid
// create 5 boxes place them in the grid
// shrink them so they all fit on the screen
//  by the flexbox defaults the picture is shrinked to its' left top corner
//  find a way to shrink the picture to its' center:
//  CODE:   background-size: cover;
//          background-position: center;
// place 5 pictures in the row
// all grid has to be displayed on the screen
// display text in the middle of the picture
  // create a function that will change the elements' size on hover over
  // unhide text on a current element
  // do the opposite when mouse is away from that element

const pictures = Array.from(document.querySelectorAll(".panel div"));

const handleElementChange = function(e) {

  toggleElementSize(this);
  toggleHide(this);
}

const toggleElementSize = function(DOMelement) {
  //changes the picture size to flex: 5 if flex is 1 and backwards
  // DOMelement.style.flex = DOMelement.style.flex === 5 ? 1 : 5;
  if(DOMelement.style.flex === '5 1 0%') {
    DOMelement.style.flex = 1
  } else {
    DOMelement.style.flex = 5;
  }
}
const toggleHide = function(DOMelement) {
  Array.from(DOMelement.children).map((child, i) => (i % 2 === 0) ? (child.style.display !== 'block') ? child.style.display = 'block' : child.style.display = 'none' : '');
}

pictures.forEach(element => element.addEventListener('mouseover', handleElementChange));
pictures.forEach(element => element.addEventListener('mouseout', handleElementChange));
