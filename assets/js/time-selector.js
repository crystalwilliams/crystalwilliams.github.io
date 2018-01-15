// write a script that brings the user to a menu when one of the checkboxes is tapped on a touch device
window.addEventListener('touchstart', function onFirstTouch() {
  window.USER_IS_TOUCHING = true;
  window.removeEventListener('touchstart', onFirstTouch, false);
}, false);

var x = {
  document.getElementsByClass("time checkbox");
  x.ontouchstart = openMenu() {
    alert("This is my menu.");
  }
}

// The menu should give the user the ability to select a start time, an end time,

// and when the user is done with the menu, the checkboxes in the calendar should be selected based on the user's inputs.

// Users should be able to repeat this process to select as many blocks of checkboxes as they want.




// While adding this functionality, make sure to follow progressive enhancement and that none of the existing functionalities are broken.
