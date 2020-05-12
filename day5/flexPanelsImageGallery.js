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

const pictures = document.querySelectorAll('.panel');

const assignPictures = function () {
  const pictureUrls = [
    'https://hdwallpaperim.com/wp-content/uploads/2017/08/22/435641-ultra-wide-space.jpg',
    'https://hdwallpaperim.com/wp-content/uploads/2017/08/22/433386-ultra-wide-space-space_art.jpg',
    'https://ak.picdn.net/shutterstock/videos/8191870/thumb/12.jpg',
    'https://i.pinimg.com/originals/3b/b4/09/3bb40988b874db3e06d1b717e7b90d89.jpg',
    'https://cdn.spacetelescope.org/archives/images/screen/heic1112e.jpg',
  ]
  pictures.forEach(picture => {
    const url = `url(${pictureUrls[pictureUrls.length - 1]})`
    picture.style.backgroundImage = url;
    pictureUrls.pop();
    });
}

assignPictures();

// first child should drop down

const open = function(e) {

  this.classList.toggle('open');
}

const showText = function(e) {

  if  (e.propertyName.includes('flex')){
    this.classList.toggle('open-active');
  }
}

pictures.forEach(picture => picture.addEventListener('click', open));
pictures.forEach(picture => picture.addEventListener('transitionend', showText));

