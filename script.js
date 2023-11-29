const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");

// Activate Hamburger
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
