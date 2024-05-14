/* hamburger menu */
const hamburgerMenuCheckbox = document.querySelector('.hamburger-menu input[type="checkbox"]');
const bootstrap2Links = document.querySelectorAll('.bootstrap2 a');

bootstrap2Links.forEach(link => {
  link.addEventListener('click', () => {
    hamburgerMenuCheckbox.checked = false;
  });
});