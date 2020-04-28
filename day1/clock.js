//Tracker
//draw a round in css
//1:30 make a whole in it
//2:17 instead of making any wholes in a round used:   
//USEFULL =>>>>> background: -webkit-radial-gradient(50% 50%, circle, transparent 60%, rgb(104, 29, 88) 10%);
//created a pretty useless function yet practical "css track", that appends some colorful text after previously existed paragraph
//2:18 create 3 lines inside of a circle. make sure they are a part of the whole clock object
//2:20 15 minutes break
//2:41 back to work. Making 3 lines
//3:13 created second, minute and hour arrows/lines using positioning method (parent{position:relative}, child1{position:absolute}, child2{position:absolute})
//Arrows are a part of clock/main object
//3:16 write a function to create a watch arrow that moves an existing line forward with time
    //to create an imitation of the clock arrow movement arrow-angle/seconds-in-real-life relation has to be established.
      //initiate seconds using new Date() native js method
      //find the arrow that needs to be moved
//3:35 BLOCKER need to find a way to make an arrow to act like a ray. (starting point at the end of the line)
//Right now the arrow changes an angle relatively to its own center instead of a center of the clock
//WORKAROUND: Option 1 move the angle changing point to the end of the line
//            Option 2 make a line longer with it's center in the center of the clock. Then make a half of the line transparent
//ANSWER: "transform-origin: bottom" will do the trick.
//3:40 break
//4:30 returned to work
//5:00 end of work. Have to do some other job
//10:00am started to work. Found out transform-origin property trying to apply it to clock-arrows
//CSS TECHDEBT: reading about flexbox again. Didn't get why margin property has to applied even after all items aligned to center.
//Dealt with class nameing renamed all divs id's to classes
//still have prolems with correct rotation of the arrow. The line doesn't act as needed. Transform-origin has to be applied in a different way
//11:00 15 minute break
//11:19 back to work
//USEFULL: querySelector() 11:29 getElementsByClassName will return an object with the items of the specified class even if there is only one item. If the item itself needed to be returned without making id, querySelector() should be used.
//NOTE: querySelector() has to have a reference to the type of the element that will be returned. Class, id, etc. signs have to be put before the items' name. e.g. querySelector('.class-name')
//NOTE2: querySelector() will return only the first item within the document that matches the specified selector.
//11:46 got the arrow on its place
//CSS TECHDEBT(tiny) figure out how to control the arrow size inside the clock face
const runTheClock = function() {
  initClock();
  timeTracker();
  return;
}

const initClock = function() {
  const degrees = degreeCalculator();
  const time = now();
  updateArrow( time.second, degrees.seconds, `.arrow-seconds` );
  updateArrow( time.minute, degrees.minutes, `.arrow-minutes` );
  updateArrow( time.hour, degrees.hours, `.arrow-hours` );
  return;
}
//create a function that keeps track of the seconds in real time.
    //Establish correct place of an arrow on the clock.
    //Rotate the arrow accordingly.
//12:19 Seconds Arrow is working properly.
//PRETTIFY later
//DONE
const now = function() {
  const date = new Date();
  const second = date.getSeconds();
  const minute = date.getMinutes();
  const hours = date.getHours();
  const hour = hours > 12 ? hours - 12 : hours;
  const time = {
    second,
    minute,
    hour,
  }
  return time;
}

const degreeCalculator = function() {
  const seconds = 360 / 60;
  const minutes = 360 / 60;
  const hours = 360 / 12; //30 dergees every hour
  const degrees = {
    seconds,
    minutes,
    hours,
  }
  return degrees;
}

const timeTracker = function() {
  const degrees = degreeCalculator();
  setInterval(() => {
    const time = now();
    updateArrow( time.second, degrees.seconds, `.arrow-seconds` );
    if( time.second === 0 ) {
      updateArrow( time.minute, degrees.minutes, `.arrow-minutes` );
      //the step that makes the hour arrow doesn't really matter, so for cleaner codebase I will update the hour arrow every minute
      const additionalDegree =  degrees.hours / 60 * time.minute;
      updateArrow( time.hour, degrees.hours, `.arrow-hours`, additionalDegree );
    }
  }, 1000);
}

const updateArrow = function( time, degree, selector, additionalDegree ) {
  const arrowPlace = additionalDegree ? time * degree + additionalDegree : time * degree;
  const secondsArrow = document.querySelector( selector );
  secondsArrow.style.transform = `rotate(${arrowPlace}deg)`;
}

runTheClock()

//12:42 back to work
//make a minute arrow. reutilize seconds arrow helper function to update Minute arrow when seconds are at 0
//1:18 JS part of clock is finished.
//CHALLENGE place numbers of a rim of the clock
//BUG: HOUR arrow doesn't update properly. most likely update arrow function bug or degree calculator
//1:48 lunch
//3:00 back to work
//3:23 BUG Fixed by adding another agrument to updateArrow function for computation additional degree every minute for hour's arrow.
