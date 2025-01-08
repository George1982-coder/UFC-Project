// selected HTML elements
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");
const dropDownToggle = document.getElementById("dropdown-toggle");
const dropdown = document.querySelector(".dropdown");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

dropDownToggle.addEventListener("click", (event) => {
  event.preventDefault();
  dropdown.classList.toggle("active");
});
