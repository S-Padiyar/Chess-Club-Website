const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

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

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

