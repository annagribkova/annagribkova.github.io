function changeNavBackground() {
  const nav = document.getElementById('navigation');
  nav.removeAttribute('style');

  if (checkbox.checked) {
    nav.style.backgroundColor = '#FFF9ED';
    nav.style.transition = 'background-color 100ms ease-out';
  } else {
    nav.style.backgroundColor = '#B47250';
    nav.style.transition = 'background-color 100ms ease-out';
    nav.style.transitionDelay = '200ms';
  }
}


const checkbox = document.getElementById('menu-toggle');
checkbox.addEventListener('click', changeNavBackground)

// // Opens navigation in mobile version
// function openNav() {
//   // Get element where we will add/hide gradient
//   const navBackground = document.getElementById('nav-background');
//   // Get element with items in the navigation
//   const menuItems = document.getElementById('menu-items');
//   // Get each line in hanburger menu that should change color of nav opened/closed
//   // If getIlementById finds one element with that specific ID, querySelectorAll will find *all* elements with the corresponsing class and store them as an array
//   const burgerLines = document.querySelectorAll('.toggle-line');

//   // If navigation is already opened then on click we need to close it
//   if (navBackground.style.display === 'block') {
//     // removeAttribute('style') will remove all style overrides from those element that we added when navigation opens
//     navBackground.removeAttribute('style');
//     menuItems.removeAttribute('style');
//     // Change color of hamburger menu lines to white
//     // burgerLines.forEach(line => line.style.backgroundColor = 'var(--white)');
//     changeHamburgerMenuColor(burgerLines, 'white')
//   } else {
//     navBackground.style.display = 'block';
//     menuItems.style.display = 'flex';
//     // Change color of hamburger menu lines to black
//     // burgerLines.forEach(line => line.style.backgroundColor = 'var(--black)');
//     changeHamburgerMenuColor(burgerLines, 'black')
//   }
// }

// // Iterates over an array of lines and change color to what we pass in the function
// // Instead of writing forEach loop twice (inside of if and else) we can wrap it into a function and just pass a different color we need
// function changeHamburgerMenuColor(linesArr, color) {
//   linesArr.forEach(line => line.style.backgroundColor = `var(--${color})`);
// }

// // Get hamburger navigation
// const navBurger = document.getElementById('nav-toggle');
// // Add event that triggers function to open navigation
// navBurger.addEventListener('click', openNav);
