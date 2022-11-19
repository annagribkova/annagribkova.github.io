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

const step = 0.225;
const imgSize = 40;
const prevMinOffset = -2.825;
const nexMinOffset = 0.025;

const size = [-0.55, -0.4, -0.25, -0.1, 0.05, 0.2, 0.35, 0.5, 0.65]

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
    prevArrow = Array.from(coverflow.container.getElementsByClassName("prev-arrow"));
    nexArrow = Array.from(coverflow.container.getElementsByClassName("next-arrow"));

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
    prevArrow.forEach(function(preconstrow) {
      preconstrow.addEventListener('click', setPrevImage);
    });
    nexArrow.forEach(function(nextArrow) {
      nextArrow.addEventListener('click', setNextImage);
    });
    coverflow.images.forEach(function(image) {
      image.addEventListener('click', jumpToImage);
    });
    window.addEventListener('keyup', onKeyPress);
  });
}
const generateOffsetArray = (min, step, length) => {
  return new Array(length).fill(0).map((_, i) => min + step * i);
}

const changeImagePosition = (coverFlowPosition, images) => {
  const transformXNext = generateOffsetArray(nexMinOffset, step, images.length);
  const transformXPrev = generateOffsetArray(prevMinOffset, step, images.length);
  const sizes = 

  images.forEach((image, i) => {
    let offset, scale;
    if (i < coverFlowPosition) {
      //image is on the left from center
      const idx = coverFlowPosition - i;

      // console.log(prevMinOffset + (step * (coverFlowPosition + i + 1)))
      offset = `${imgSize * transformXPrev[transformXPrev.length - idx]}vw`;
      // scale = size[coverFlowPosition + i];
      scale = size[size.length - (coverFlowPosition - i)]
    } else if (i > coverFlowPosition) {
      offset = `${imgSize * transformXNext[i - coverFlowPosition - 1]}vw`;
      scale = size[size.length - (i - coverFlowPosition)];
    } else {
      offset = '-50%';
      scale = 1;
    }
    image.style.transform = `translateX(${offset}) scale(${scale})`;
    image.style.webkitTransform = `translateX(${offset}) scale(${scale})`;
  })

}

// const step = 0.225;
// const imgSize = 40;
// const nextMinOffset = 0.025;
// const prevMinOffset = -2.825;

// 1, 10, 19, 28, 37, 46, 55, 64, 73
// const transformXNext = [0.025, 0.25, 0.475, 0.7, 0.925, 1.15, 1.375, 1.6, 1.825];

// -113, -104, -95, -86, -77, -68, -59, -50, -41
// const transformXPrev = [-2.825, -2.6, -2.375, -2.15, -1.925, -1.7, -1.475, -1.25, -1.025];

// const size = [-0.55, -0.4, -0.25, -0.1, 0.05, 0.2, 0.35, 0.5, 0.65]

//min + step*idx

setupCoverflow();