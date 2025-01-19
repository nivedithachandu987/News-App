// script.js
const currentDate = document.getElementById('current-date');
const today = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
currentDate.textContent = today.toLocaleDateString('en-US', options);

function toggleMenu() {
  const navMenu = document.querySelector('.nav-menu');
  navMenu.classList.toggle('open');
  const hamburger = document.querySelector('.hamburger');

  // Update aria-expanded attribute
  const isOpen = navMenu.classList.contains('open');
  hamburger.setAttribute('aria-expanded', isOpen);

  // Toggle active class for animation
  hamburger.classList.toggle('active');
}

window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
