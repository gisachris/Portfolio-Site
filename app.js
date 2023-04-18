const navToggle = document.querySelector('#menuToggle');
const navIcon = document.querySelectorAll('#menuToggle .bar');
const nav = document.querySelector('.navigation');
const logo = document.querySelector('.logo-text');
const navItem = document.querySelectorAll('.navigation li .nav-text');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
  logo.classList.toggle('logo-dis');
  (navIcon).forEach((icon) => {
    icon.classList.toggle('hidden');
  });
});

(navItem).forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.toggle('open');
    logo.classList.remove('logo-dis');
    (navIcon).forEach(() => {
      navIcon[0].classList.remove('hidden');
      navIcon[1].classList.add('hidden');
    });
  });
});
//add from here
