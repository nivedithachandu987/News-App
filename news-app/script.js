// Track the state of the menu (open or closed)
let isMenuOpen = false;

function toggleMenu() {
  const navMenu = document.querySelector('.nav-menu');
  const hamburger = document.querySelector('.hamburger');
  
  // Toggle the 'open' class for showing/hiding the menu
  navMenu.classList.toggle('open');
  
  // Update aria-expanded for accessibility
  isMenuOpen = !isMenuOpen;
  hamburger.setAttribute('aria-expanded', isMenuOpen.toString());

  // Toggle the aria-label text
  hamburger.setAttribute('aria-label', isMenuOpen ? 'Close menu' : 'Open menu');
}
