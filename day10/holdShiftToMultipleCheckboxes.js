document.body.innerHTML = 'hi';

// this time instead of flexbox i'll try to use table.
// table content: 10 rows 2 colomns
// first colomn - input element with checkbox.
// OBJECTIVE: when one checkbox A is selected, the content of a corresponding text has to be crossed ou
// when checkbox B is selected all checkboxes have to be selected between checkbox A and checkbox B
// CONSTRAIN: the functionality has to be true in both directions. e.g. when selected chexbox A is 3rd element in a row and chexbox B is element 7, elements from 3 to 7 have to be crossed out. if checkbox A is 7 and checkbox B is 3 the same functionality should be applied.

// create a table 10X2.
//    first element of each row - input tag with type checkbox
//    second - lorem ipsum
// a second line in a table has to be twice as thick as all others
// shadow to right low corner
// create function that when checkbox is clicked will cross out a correctoding text element
// keep track of is any of the checkboxes is already clicked
// if a second element is selected, find out how many elements are in the middle of selected ones   <==this will take the most time
// cross out all element in between selected once
// make sure selection work in both ways, from top to bottom and from bottom to top.
// ADDED FUNCTIONALITY: on click anywhere outside the table, all checkboxed should be deselected