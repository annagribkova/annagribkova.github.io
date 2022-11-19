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


// Photo Gallery
//start added by Chase
var a = document.getElementsByTagName("a");
var cfImg = document.getElementsByClassName("coverflow__image")

var scaleI = 0;
for (scaleI; scaleI < a.length; scaleI++) {
  if (scaleI === 3) {
    continue;
  } else {
    a[scaleI].style.cursor = "default";
    a[scaleI].addEventListener("click", prevDef);
  }
}

function prevDef(e) {
  e.preventDefault();
}

function forScale(coverflowPos) {
  for (scaleI = 0; scaleI < a.length; scaleI++) {
    a[scaleI].style.cursor = "default";
    a[scaleI].addEventListener("click", prevDef);
  }
  for (scaleI = 0; scaleI < cfImg.length; scaleI++) {
    if (cfImg[scaleI].getAttribute("data-coverflow-index") == coverflowPos) {
      cfImg[scaleI].parentElement.style.cursor = "pointer";
      cfImg[scaleI].parentElement.removeEventListener("click", prevDef);
    }
  }
}
//end added by Chase

function setupCoverflow(coverflowContainer) {
  var coverflowContainers;

  if (typeof coverflowContainer !== "undefined") {
    if (Array.isArray(coverflowContainer)) {
      coverflowContainers = coverflowContainer;
    } else {
      coverflowContainers = [coverflowContainer];
    }
  } else {
    coverflowContainers = Array.prototype.slice.apply(document.getElementsByClassName('coverflow'));
  }

  coverflowContainers.forEach(function(containerElement) {
    var coverflow = {};
    var prevArrows, nextArrows;

    //capture coverflow elements
    coverflow.container = containerElement;
    coverflow.images = Array.prototype.slice.apply(containerElement.getElementsByClassName('coverflow__image'));
    coverflow.position = Math.floor(coverflow.images.length / 2) + 1;

    //set indicies on images
    coverflow.images.forEach(function(coverflowImage, i) {
      coverflowImage.dataset.coverflowIndex = i + 1;
    });

    //set initial position
    coverflow.container.dataset.coverflowPosition = coverflow.position;

    //get prev/next arrows
    prevArrows = Array.prototype.slice.apply(coverflow.container.getElementsByClassName("prev-arrow"));
    nextArrows = Array.prototype.slice.apply(coverflow.container.getElementsByClassName("next-arrow"));

    //add event handlers
    function setPrevImage() {
      coverflow.position = Math.max(1, coverflow.position - 1);
      coverflow.container.dataset.coverflowPosition = coverflow.position;
      //call the functin forScale added
      forScale(coverflow.position);
    }

    function setNextImage() {
      coverflow.position = Math.min(coverflow.images.length, coverflow.position + 1);
      coverflow.container.dataset.coverflowPosition = coverflow.position;
      //call the function Chase added
      forScale(coverflow.position);
    }

    function jumpToImage(evt) {
      coverflow.position = Math.min(coverflow.images.length, Math.max(1, evt.target.dataset.coverflowIndex));
      coverflow.container.dataset.coverflowPosition = coverflow.position;
      //start added by Chase
      setTimeout(function() {
        forScale(coverflow.position);
      }, 1);
      //end added by Chase
    }

    function onKeyPress(evt) {
      switch (evt.which) {
        case 37: //left arrow
          setPrevImage();
          break;
        case 39: //right arrow
          setNextImage();
          break;
      }
    }
    prevArrows.forEach(function(prevArrow) {
      prevArrow.addEventListener('click', setPrevImage);
    });
    nextArrows.forEach(function(nextArrow) {
      nextArrow.addEventListener('click', setNextImage);
    });
    coverflow.images.forEach(function(image) {
      image.addEventListener('click', jumpToImage);
    });
    window.addEventListener('keyup', onKeyPress);
  });
}

setupCoverflow();