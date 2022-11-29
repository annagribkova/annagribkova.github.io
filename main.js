// document.addEventListener('readystatechange', (event) => {
//   if (document.readyState === "complete") {
//     document.getElementById('main').classList.remove('loading-state');
//     document.getElementById('loader-container').style.display = 'none';
//     document.getElementById('loader-container').classList.remove('loading-state');
//   }
// });
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
  }
}

// Expandable Career Section

function handleCareerExpand() {
  const careerAction = document.getElementById('career-action');
  const careerReadHide = document.getElementsByClassName('career-read-hide');

  if (careerAction.textContent === 'Read') {
    careerAction.textContent = 'Hide';
    careerButton.classList.add('arrowUp');
    Array.from(careerReadHide).forEach(element => element.style.display = 'block');
  } else {
    careerAction.textContent = 'Read';
    careerButton.classList.remove('arrowUp');
    careerAction.scrollIntoView();

    Array.from(careerReadHide).forEach(element => element.removeAttribute('style'));
  }
}

// Photo Gallery

function setupCoverflow() {
  let coverflowContainers = Array.from(document.getElementsByClassName('coverflow'));

  coverflowContainers.forEach((containerElement) => {
    const coverflow = {};
    let prevArrow, nexArrow;

    //capture coverflow elements
    coverflow.container = containerElement;
    coverflow.images = Array.from(containerElement.getElementsByClassName('coverflow__image'));
    coverflow.position = Math.floor(coverflow.images.length / 2) + 1;

    //set indicies on images
    coverflow.images.forEach(function(coverflowImage, i) {
      coverflowImage.dataset.coverflowIndex = i + 1;
    });

    changeImagePosition(coverflow.position - 1, coverflow.images);

    //set initial position // >>>>> 5
    coverflow.container.dataset.coverflowPosition = coverflow.position;

    //get prev/next arrows
    prevArrow = document.getElementById("prev-arrow");
    nexArrow = document.getElementById("next-arrow");

    //add event handlers
    function setPrevImage() {
      coverflow.position = Math.max(1, coverflow.position - 1);
      coverflow.container.dataset.coverflowPosition = coverflow.position;
      changeImagePosition(coverflow.position - 1, coverflow.images);
    }

    function setNextImage() {
      coverflow.position = Math.min(coverflow.images.length, coverflow.position + 1);
      coverflow.container.dataset.coverflowPosition = coverflow.position;
      changeImagePosition(coverflow.position - 1, coverflow.images);
    }

    function jumpToImage(evt) {
      coverflow.position = Math.min(coverflow.images.length, Math.max(1, evt.target.dataset.coverflowIndex));
      coverflow.container.dataset.coverflowPosition = coverflow.position;
      changeImagePosition(coverflow.position - 1, coverflow.images);
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
    prevArrow.addEventListener('click', setPrevImage);
    nexArrow.addEventListener('click', setNextImage);
    coverflow.images.forEach(function(image) {
      image.addEventListener('click', jumpToImage);
    });
    window.addEventListener('keyup', onKeyPress);
  });
}
const generateOffsetOrSizeArray = (min, step, length) => {
  return new Array(length).fill(0).map((_, i) => min + step * i);
}

const changeImagePosition = (coverFlowPosition, images) => {
  // Need to change size in CSS as well
  const imgSize = 25;
  const step = imgSize / 100;
  const offsetRight = imgSize / 1000;
  const offsetLeft = -1 - (offsetRight + (step * (images.length - 1)));
  const minSize = -(imgSize / (imgSize * 10));
  const sizeStep = imgSize / (imgSize * 10);
  const maxZIndex = images.length + 1;
  
  const transformXNext = generateOffsetOrSizeArray(offsetRight, step, images.length);
  const transformXPrev = generateOffsetOrSizeArray(offsetLeft, step, images.length);
  const sizes = generateOffsetOrSizeArray(minSize, sizeStep, images.length);

  images.forEach((image, i) => {
    let offset, scale, zIndex;
    if (i < coverFlowPosition) { //4
      //image is on the left from center
      const idx = coverFlowPosition - i;
      offset = `${imgSize * transformXPrev[transformXPrev.length - idx]}vw`;
      scale = sizes[sizes.length - (coverFlowPosition - i)];
      zIndex = maxZIndex - (coverFlowPosition - i);
    } else if (i > coverFlowPosition) {
      offset = `${imgSize * transformXNext[i - coverFlowPosition - 1]}vw`;
      scale = sizes[sizes.length - (i - coverFlowPosition)];
      zIndex = maxZIndex - (i - coverFlowPosition);
    } else {
      offset = '-50%';
      scale = 1;
      zIndex = maxZIndex;
    }

    image.style.transform = `translateX(${offset}) scale(${scale})`;
    image.style.webkitTransform = `translateX(${offset}) scale(${scale})`;
    image.style.zIndex = zIndex;
  });
}

function sendEmail() {
  const body = document.getElementById('comment').value;
  var mailToLink = "mailto:viola@d-d.me?body=" + encodeURIComponent(body);
  window.location.href = mailToLink;
}

// Navigation hamburger that triggers it's background change
const checkbox = document.getElementById('menu-toggle');
// Arrow that expands career text 
const careerButton = document.getElementById('career-arrow');
// Event listeners
checkbox.addEventListener('click', changeNavBackground);
// Triggers a function that shows content on click
careerButton.addEventListener('click', handleCareerExpand); 
const submitButton = document.getElementById('submit-btn');
submitButton.addEventListener('click', sendEmail);

// sendEmail();
setupCoverflow();
