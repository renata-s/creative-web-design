const prevBtn = document.querySelector('.js-prev');
const nextBtn = document.querySelector('.js-next');
const slides = document.querySelectorAll('.js-slide');

let slideIndex = 1;

function showSlides(n) {
  switch (n) {
    case 0:
      slideIndex = slides.length;
      break;
    case slides.length + 1:
      slideIndex = 1;
      break;
    default:
      slideIndex = n;
  }

  for (let i = 0; i < slides.length; i += 1) {
    slides[i].classList.remove('slider__active');
  }
  slides[slideIndex - 1].classList.toggle('slider__active');
}

showSlides(slideIndex);

prevBtn.addEventListener('click', () => {
  showSlides(slideIndex - 1);
});

nextBtn.addEventListener('click', () => {
  showSlides(slideIndex + 1);
});
