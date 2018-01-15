// is the device mobile?
function isTouchDevice() {
  return 'ontouchstart' in document.documentElement;
}

if (isTouchDevice) {
  document.documentElement.className -= "no-touch";
}


// when checkbox is tapped, open a menu:
var calendar = body.getElementById("calendar");
calendar.ontouchstart = timeSelectorMenu();

// includes the following:
function timeSelectorMenu() {
  alert("hello world");
}

// the ability to select a start time and an end time

// based on the selections, all boxes are selected

function timeSelectorHighlight() {

}
// ability to repeat the process (loop?)

