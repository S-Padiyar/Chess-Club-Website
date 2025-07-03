const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const logo = document.querySelector('.logo');
const brhsText = document.querySelector('.brhs');

logo.addEventListener('mouseenter', () => {
  brhsText.classList.add('hovered');
});

logo.addEventListener('mouseleave', () => {
  brhsText.classList.remove('hovered');
});

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

Array.from(navLinks).forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault(); // Prevent the default link navigation behavior

    hamburger.classList.remove("active");
    navMenu.classList.remove("active");

    // Add a brief timeout before navigating to the link's destination
    setTimeout(() => {
      window.location.href = link.getAttribute("href");
    }, 300); // You can adjust the timeout duration (300ms in this example)
  });
});


// ✅ Mobile support: simulate hover effect on logo image
if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
  logo.addEventListener('touchstart', () => {
    brhsText.classList.add('hovered');
  });

  logo.addEventListener('touchend', () => {
    // Remove the hover effect after a short delay
    setTimeout(() => {
      brhsText.classList.remove('hovered');
    }, 300);
  });
}
