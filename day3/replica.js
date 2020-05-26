// today, since there is no specific assignment. I want to replicate Wes Bos's page as precise as possible. I want to place every element on it's place as precise as possible.

// goals:
  // to learn and understand css variables usage
    // declaration
      // CODE:
        //:root{
        // --colorful: #FFEA00;
        // }
    // usage
      //CODE:
        // color: var(--colorful);
    // changing with js
      //CODE:
      // document.documentElement.style.setProperty('--variable', value)
  
  // train a precise object placement. not flexbox
  // learn more manipulations with css

  // steps:
  // create a blue page
  // place 3 elements
    // h? text bold
    // choose correct font and sizing as on video
    // h? text with 3 range input
    // a rectangle on top of the page that equals to 50% of given space
    // place a random picture on top of a rectangle described above.
  // bind a picture property with a certain range button
  // using range input change a picture spacing, then blur
    // create an 3 event listeners that tracks when mouse is clicked for each input

const imagePadding = document.querySelector(`.frame`);
const image = document.querySelector(`.frame img`);

// create 3 helper functions which will be invoked when related input element is updated
// const imageInputs = [].slice.call(document.querySelectorAll('input'));
// const imageInputs = Array.from(document.querySelectorAll('input'));
const imageInputs = document.querySelectorAll('input');

const handleUpdate = function(e) {

  const value = this.value;

  switch (this.dataset.type) {

  case 'spacing':

    const perc = `${value}%`
    image.style.top = perc;
    image.style.left = perc;
    break;

  case 'blur':

    image.style.filter  = `blur(${value}px)`;
    break;

  case 'base-color':

    document.documentElement.style.setProperty('--colorful', value)
    break;

  }

}

imageInputs.forEach(input => input.addEventListener('input', handleUpdate))
imageInputs.forEach(input => input.addEventListener('mousemove', handleUpdate))
imageInputs.forEach(input => input.addEventListener('change', handleUpdate))

// const spacingInput = document.querySelector(`input[data-type='spacing']`);
// const blurInput = document.querySelector(`input[data-type='blur']`);
// const baseColorInput = document.querySelector(`input[data-type='base-color']`);

// const spacingUpdate = function(e) {
//   const spaceController = `${this.value}%`;
//   image.style.top = spaceController;
//   image.style.left = spaceController;
// }
// const blurUpdate = function(e) {
//   const blurController = `${this.value}`;
//   image.style.filter = `blur(${blurController}px)`;
// }
//   // learn how to call for a color palatte
//   // ANSWER: <input type="color">

// const baseColorUpdate = function(e) {
//   const chosenColor = this.value;
//   // change a rectangle background color while color on the palatte is chosen
//   // bind change color input range to the palatte
//   document.documentElement.style.setProperty('--colorful', chosenColor)
// }

// spacingInput.addEventListener('input', spacingUpdate);
// blurInput.addEventListener('input', blurUpdate);
// baseColorInput.addEventListener('input', baseColorUpdate);




