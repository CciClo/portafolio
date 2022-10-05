const mobileMenu = document.querySelector(".mobile-menu");
const desktopMenu = document.querySelector(".desktop-menu");
const hamburger = document.querySelector(".hamburger");
let boolean = true;

hamburger.addEventListener("click", () => {
  if (boolean) {
    mobileMenu.classList.add("show");
    desktopMenu.classList.remove("disguise");
    boolean = false;
  } else {
    mobileMenu.classList.remove("show");
    desktopMenu.classList.add("disguise");
    boolean = true;
  }
})