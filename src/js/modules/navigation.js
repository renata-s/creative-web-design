const navToggle = document.querySelector('.js-hamburger');
const menu = document.querySelector('.navigation__list');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('hamburger--opened');
  const opened = navToggle.classList.contains('hamburger--opened');
  navToggle.setAttribute('aria-expanded', opened);
  menu.classList.toggle('navigation__list--opened');
});
