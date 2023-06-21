console.log("Hello");

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navClose = document.getElementById("nav-close"),
  navToggle = document.getElementById("nav-toggle");

/*=============== Menu show ===============*/
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*=============== Menu HIDDEN ===============*/
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the blur-header class to the header tag
  this.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};
window.addEventListener("scroll", blurHeader);

/*=============== EMAIL JS ===============*/

/*=============== SHOW SCROLL UP ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
