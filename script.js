const hamburgerIcon = document.querySelector(".hamburger-menu");
const menuLinks = document.querySelector(".menu-links");

hamburgerIcon.addEventListener("click", () => {
  menuLinks.classList.toggle("active");
});
