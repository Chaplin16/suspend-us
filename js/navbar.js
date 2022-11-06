const hamburgerIcon = document.querySelector("#hamburger");
const navMenu = document.querySelector(".nav_menu");

//mavbar qui se deplie au click
hamburgerIcon.addEventListener("click", toggleNav);

function toggleNav() {
  hamburgerIcon.classList.toggle("active"); //animation of the hamburger
  navMenu.classList.toggle("status"); // menu display
}