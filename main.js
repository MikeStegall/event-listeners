// GO!

// Task #1
// Hide the nav menu
document.querySelector('#hide-nav button').addEventListener('click', function () {
  var navMenu = document.querySelector('.nav-menu')
  var NavMenuVis = window.getComputedStyle(navMenu, null).getPropertyValue('visibility')
  if (NavMenuVis === 'visible' && this.textContent === 'Hide nav bar') {
    this.textContent = 'Show nav bar'
    navMenu.style.visibility = 'hidden'
  } else {
    this.textContent = 'Hide nav bar'
    navMenu.style.visibility = 'visible'
  }
})
