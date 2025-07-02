function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    const logo = document.querySelector('.logo-container');

    menu.classList.toggle('show');
    hamburger.classList.toggle('active');
    nav.classList.toggle('menu-open');
    logo.classList.toggle('menu-open');
}

window.addEventListener('resize', () => {
const hamburger = document.querySelector('.hamburger');
if (window.innerWidth > 1050) {
    hamburger.style.display = 'none';
} else {
    hamburger.style.display = 'flex';
}
});

document.addEventListener('DOMContentLoaded', () => {
const hamburger = document.querySelector('.hamburger');
if (window.innerWidth > 1050) {
    hamburger.style.display = 'none';
} else {
    hamburger.style.display = 'flex';
}
});