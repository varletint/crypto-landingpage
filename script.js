const hamburgerIcon = document.querySelector(".hamburger-menu");
const menuLinks = document.querySelector(".menu-links");
const menu = 1;

hamburgerIcon.addEventListener("click", () => {
  menuLinks.classList.toggle("active");
  hamburgerIcon.classList.toggle("active");
});
