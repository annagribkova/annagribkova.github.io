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

// Expandable Career Section

// ********** CHANGE HERE TOO **********
function handleCareerExpand() {
  // Find a second text block in career section by its id (starts with "Hanna participated in masterclasses...")
  // Find a third text block in career section by its id ("Hanna is the First Prize winner...")
  // Find a fourth text block in career section by its id.
  // Find Hanna's second image in career section by its id (Should be after 2nd text block)
  // Target word "Read" in "Read full career" sentense by its id.

  // If word === "Read"
    // Change text content of the word to "Hide" (Google tip: 'JS how to change text content of HTML node')
    // Add a class 'arrowUp' to a button that was just clicked (Google tip: 'JS how to add a class to and HTML node')
    // Add style display: block to a second paragraph
    // Add style display: block to a third paragraph
    // Add style display: block to a fourth paragraph
    // Add style display: block to Hanna's image
  // Else
    // Change word back to "Read"
    // Remove a class 'arrowUp' from a button that was just clicked
    // Remove style arrtibute from a second paragraph
    // Remove style arrtibute from a third paragraph
    // Remove style arrtibute from a fourth paragraph
    // Remove style arrtibute from Hanna's image
}

// Navigation hamburger that triggers it's background change
const checkbox = document.getElementById('menu-toggle');
// Arrow that expands career text 
const careerButton = document.getElementById('career-arrow');

// Event listeners
checkbox.addEventListener('click', changeNavBackground);

// ********** CHANGE HERE TOO **********
// Add an event listener  to careerButton that triggers a function handleCareerExpand on click
