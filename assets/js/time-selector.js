
  // Touch Device Detection
  var isTouchDevice = "ontouchstart" in document.documentElement;
  if( isTouchDevice ) {
    document.documentElement.removeClass("no-touch");
}

// when checkbox is tapped, open a menu:
var calendar = document.getElementByClass("time checkbox");
calendar.ontouchstart = timeSelectorMenu();
function timeSelectorMenu() {
  alert("hello world");
}


// includes the following:
// function timeSelectorMenu() {
//   alert("hello world");
// }

// the ability to select a start time and an end time

// based on the selections, all boxes are selected

// function timeSelectorHighlight() {

}
// ability to repeat the process (loop?)

