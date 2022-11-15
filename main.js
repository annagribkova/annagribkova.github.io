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

function handleCareerExpand() {
  const careerAction = document.getElementById('career-action');
  const careerReadHide = document.getElementsByClassName('career-read-hide');
  console.log(careerReadHide);
  if (careerAction.textContent === 'Read') {
    careerAction.textContent = 'Hide';
    careerButton.classList.add('arrowUp');
    // for (let i = 0; i < careerReadHide.length; i++) {
    // const content = careerReadHide[i];
    // content.style.display = 'block'; 
    // } 
    Array.from(careerReadHide).forEach(element => element.style.display = 'block');
  } else {
    careerAction.textContent = 'Read';
    careerButton.classList.remove('arrowUp');
    // for (let i = 0; i < careerReadHide.length; i++) {
    // const content = careerReadHide[i];
    // content.removeAttribute('style'); 
    // } 
    Array.from(careerReadHide).forEach(element => element.removeAttribute('style'));
  }
}
// Navigation hamburger that triggers it's background change
const checkbox = document.getElementById('menu-toggle');
// Arrow that expands career text 
const careerButton = document.getElementById('career-arrow');
// Event listeners
checkbox.addEventListener('click', changeNavBackground);
// Triggers a function that shows content on click
careerButton.addEventListener('click', handleCareerExpand); 