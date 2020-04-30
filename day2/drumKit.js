function check() {
  var el = document.querySelector('#check');
  el.parentNode.removeChild(el);
  return;
}

check()
// day 2 challenge. 10:00
// Create a hollow square
// write a letter inside the square
// BLOCKER. Placing a letter in the middle may be achieve in multiple ways. Padding, margins, flexbox, table cell etc.
            // All of the above I don't like since all of them require unnecessary complexity for such a trivial task as vertical alignment.
            // Browsing web to choose my method
            // I will do different ways of alignment and see which one looks better
            // Placing Item in the middle using margin
            // 11:00 Break. Doctor/Lunch/computer fix
            // 2:00 returned to work
            // aligning using margins
                    // .margin {
                    //   width: 100px;
                    //   height: 100px;
                    //   border: 3px solid coral;
                    // }
                    // .margin p {
                    //   margin: 39% 24%;
                    // }
                // margin conclusion. Very easy way to find a placement you need inside of object. Works as shorttime measure since it is not responsive at all.
            // aligning using flexbox
                    // .flex-box {
                    //   display: flex;
                    //   width: 100px;
                    //   height: 100px;
                    //   border: 3px solid #ffcccb;
                    //   justify-content: center;
                    //   align-items: center;
                    // }
                // flex-box conclusion. Amazing tool. Fully automated. It seems like there may be some other restrictions when adding more items
            // aligning using table
                    // table, th, td {
                    //  border-collapse: collapse;
                    //  width: 100px;
                    //  height: 100px;
                    //  border: 3px solid lightgrey;
                    //}
                // table conclusion. Table tag immediatelly changed some other properties of text like font. Very easy to manage. Seems like a pretty powerful tool for my purpose. Versatile yet quircky
// place a square in the middle of the screen
// TECHDEBT: tag div and tag p work differently inside of flexbox. Why?
// create onClick event listener
const changeStyle = function() {
  const currentDrum = this;
  const audio = currentDrum.querySelector('audio');
  currentDrum.classList.add('drum-kick');
  audio.currentTime = 0; //rewinds to the 0s second every time
  audio.play();
}
const removeStyle = function(e) {
  if(e.propertyName !== 'transform') return;
  this.classList.remove('drum-kick')
}
document.querySelectorAll('.drum').forEach(drum => drum.addEventListener('click', changeStyle));
document.querySelectorAll('.drum').forEach(drum => drum.addEventListener('transitionend', removeStyle));

// change style of the button when clicked
  // make the button a bit larger
  // create a shadow
// play sound when clicked
// assign a corresponding keyboard letter ? or not
// create more squares with different letters and sounds
//ADDITIONAL change style when mouse over
// 5:00 dinner break