'use strict';

var images = document.querySelectorAll('.slider__item');
var current = 0;

function slider() {
  for (var i = 0; i <images.length; i++) {
    images[i].classList.add('slider__item--front');
    images[i].classList.remove('slider__item--back');
  }
  images[current].classList.remove('slider__item--front');
  images[current].classList.add('slider__item--back');
}

slider();

document.querySelector('.slider__btn--prev').onclick = function () {
    if (current - 1 == -1) {
      current = images.length - 1;
    }
    else {
      current--;
    }
    slider();
};

document.querySelector('.slider__btn--next').onclick = function () {
  if (current + 1 == images.length) {
    current = 0;
  }
  else {
    current++;
  }
  slider();
};
