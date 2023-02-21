// Store the current screen in a variable
let currentScreen = "upload";

// Handle the back button click event
window.onpopstate = function(event) {
  if (event.state) {
    showScreen(event.state.screen);
  }
};

// Function to show a screen
function showScreen(screen) {
  // Hide the current screen
  document.querySelector(`#${currentScreen}`).style.display = "none";

  // Show the new screen
  document.querySelector(`#${screen}`).style.display = "block";

  // Update the current screen variable
  currentScreen = screen;

  // Update the history
  history.pushState({screen: currentScreen}, "", "");
}
