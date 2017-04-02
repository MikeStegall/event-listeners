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

// Task 2
// add items to guest list
document.querySelector('#add-guest input').addEventListener('keypress', function (x) {
  var liEl = document.createElement('li')
  var ulEl = document.querySelector('#add-guest .guest-list')
  liEl.classList.add('guest')
  if (x.keyCode === 13) {
    if (this.value !== '') {
      liEl.textContent = this.value
      ulEl.appendChild(liEl)
      this.value = ''
    }
  }
})

// Task 3
// add a remove button to every guest that is inputted.
document.querySelector('#add-guest-bonus input').addEventListener('keypress', function (x) {
  var liEl = document.createElement('li')
  var ulEl = document.querySelector('#add-guest-bonus .guest-list')
  liEl.classList.add('guest')
  if (x.keyCode === 13) {
    if (this.value !== '') {
      // create button element
      var btn = document.createElement('button')
      btn.textContent = 'X'
      btn.addEventListener('click', function () {
        this.parentElement.remove()
      })
      liEl.textContent = this.value
      liEl.appendChild(btn)
      ulEl.appendChild(liEl)
      this.value = ''
    }
  }
})
