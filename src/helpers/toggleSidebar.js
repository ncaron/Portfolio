export function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const hamburger = document.querySelector('.hamburger');
  const body = document.querySelector('body');
  const overlay = document.querySelector('.overlay');

  sidebar.classList.toggle('open');
  hamburger.classList.toggle('open');
  overlay.classList.toggle('open');
  body.classList.toggle('no-scroll');
}
