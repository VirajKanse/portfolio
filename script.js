const navMenu = document.getElementById('nav-menu');
const toggleMenu = document.getElementById('navbar__toggle-menu');
const closeMenu = document.getElementById('navbar__close-menu');


toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('navbar__show');
    console.log("t");
});

closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('navbar__show');
    console.log("c");
});