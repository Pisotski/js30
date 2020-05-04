function greetings() {
  const bodyElement = document.body;
  const bodyBackgroundColor = window.getComputedStyle(bodyElement)['background-color'];
  const greetings = document.createTextNode(`hello, my I'm a Flex Panles Image Gallery and my background color is ${bodyBackgroundColor}`)
  bodyElement.appendChild(greetings);
}

greetings();

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
// every picture has to be 'shrinked' to its' center
// all grid has to be displayed on the screen
