jQuery( document ).ready(function( $ ) {
  // Inside of this function, $() will work as an alias for jQuery()
  // and other libraries also using $ will not be accessible under this shortcut
  // https://codex.wordpress.org/Function_Reference/wp_enqueue_script#jQuery_noConflict_Wrappers

  // Touch Device Detection
  var isTouchDevice = 'ontouchstart' in document.documentElement;
  if( isTouchDevice ) {
    $('body').removeClass('no-touch');
  }

// });
//   // Touch Device Detection
//   var isTouchDevice = "ontouchstart" in document.documentElement;
//   if( isTouchDevice ) {
//     document.documentElement.removeClass("no-touch");
// }

// when checkbox is tapped, open a menu:
var calendar = document.getElementByClass("time checkbox");
calendar.ontouchstart = timeSelectorMenu();
function timeSelectorMenu() {
  alert("hello world");
}


// includes the following:

function timeSelectorMenu() {
  alert("hello world");
}

// the ability to select a start time and an end time

// based on the selections, all boxes are selected

// function timeSelectorHighlight() {

}
// ability to repeat the process (loop?)

