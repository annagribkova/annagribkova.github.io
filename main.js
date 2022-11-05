// Naviggation

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

// Expandable Career

function handleCareerExpand() {
  // Find a second paragraph in career section by its id.
  // Find a third paragraph in career section by its id.
  // Find a fourth paragraph in career section by its id.
  // Find Hanna's second image in career section by its id.
  // Target word "Read" in "Read full career" by its id.
  

  // If word === "Read"
    // Change word to "Hide"
    // Add a class 'arrowUp' to a button that was just clicked
    // Add block display style to a second paragraph
    // Add block display style to a third paragraph
    // Add block display style to a fourth paragraph
    // Add block display style to Hanna's image
  // Else
    // Change word back to "Read"
    // Remove a class 'arrowUp' from a button that was just clicked
    // Remove block display style from a second paragraph
    // Remove block display style from a third paragraph
    // Remove block display style from a fourth paragraph
    // Remove block display style from Hanna's image
}


// Navigation hamburger that triggers it's background change
const checkbox = document.getElementById('menu-toggle');
// Arrow that expands career text 
const careerButton = document.getElementById('career-arrow');

// Event listeners
checkbox.addEventListener('click', changeNavBackground);
// Add an event listener  to careerButton that triggers a function handleCareerExpand on click