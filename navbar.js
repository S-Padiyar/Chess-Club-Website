const logo = document.querySelector('.logo');
const brhsText = document.querySelector('.brhs');

if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
  let touchInside = false;

  logo.addEventListener('touchstart', () => {
    touchInside = true;
    brhsText.classList.add('hovered');
  });

  logo.addEventListener('touchmove', (e) => {
    const touch = e.touches[0];
    const rect = logo.getBoundingClientRect();
    const withinBounds =
      touch.clientX >= rect.left &&
      touch.clientX <= rect.right &&
      touch.clientY >= rect.top &&
      touch.clientY <= rect.bottom;

    if (!withinBounds) {
      brhsText.classList.remove('hovered');
      touchInside = false;
    }
  });

  logo.addEventListener('touchend', () => {
    if (touchInside) {
      setTimeout(() => brhsText.classList.remove('hovered'), 300);
    }
    touchInside = false;
  });

  logo.addEventListener('touchcancel', () => {
    brhsText.classList.remove('hovered');
    touchInside = false;
  });
}

// Hamburger menu toggle (optional)
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});