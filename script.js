const sliderContainer = document.querySelector(".slider-container");
const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");
const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");
const slidesLength = slideRight.querySelectorAll("div").length;

let activeSlideIndex = 0;

// top of left slide starts at last div
slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

// listen for click on button and call changeSlide with button direction
upBtn.addEventListener("click", () => changeSlide("up"));
downBtn.addEventListener("click", () => changeSlide("down"));

const changeSlide = direction => {
  // get height of sliderContainer div
  const sliderHeight = sliderContainer.clientHeight;
  // if up
  if (direction === "up") {
    // increase activeSlideIndex by 1
    activeSlideIndex++;
    // if reached last slide
    if (activeSlideIndex > slidesLength - 1) {
      // set activeSlideIndex to 0
      activeSlideIndex = 0;
    }
    // if down
  } else if (direction === "down") {
    // decrease activeSlideIndex by 1
    activeSlideIndex--;
    // if reached first slide
    if (activeSlideIndex < 0) {
      // set activeSlideIndex to last slide
      activeSlideIndex = (slidesLength - 1);
    }
  }
  // move right slide down height times index to move correct slide into view
  slideRight.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;
  // move right slide down height times index to move correct slide into view
  slideLeft.style.transform = `translateY(${
    activeSlideIndex * sliderHeight
  }px)`;
};
