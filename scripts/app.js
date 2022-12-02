const stileCss = document.documentElement;
const modePage = document.querySelector('.change-mode-container');
const iconModePage = document.querySelector('.fa-solid');

const profilePictureContainer = document.querySelector('.profile-picture-container');

const mobileMenu = document.querySelector(".mobile-menu");
const desktopMenu = document.querySelector(".desktop-menu");
const hamburger = document.querySelector(".hamburger");

let bodyColor = 'rgb(236, 236, 236)';
let primaryColor = 'black';
let secondaryColor = 'rgba(0, 0, 0, 0.842)';


let positionProfilePicture = 'fixed';
let widthProfilePicture = '100%';
let borderRaduisProfilePicture = '0';
let padingProfilePicture = '10% 30%';


hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
  desktopMenu.classList.toggle("disguise");
})



modePage.addEventListener('click', () => {
  iconModePage.classList.toggle('fa-sun');
  iconModePage.classList.toggle('fa-moon')
  stileCss.style.setProperty("--body-color", bodyColor);
  stileCss.style.setProperty('--primary-color',primaryColor);
  stileCss.style.setProperty('--secondary-color',secondaryColor);
  if (bodyColor === 'rgb(236, 236, 236)'){
    bodyColor = 'black';
    primaryColor ='#ffffff';
    secondaryColor = '#adadad';
  }else {
    bodyColor = 'rgb(236, 236, 236)';
    primaryColor ='black';
    secondaryColor = 'rgba(0, 0, 0, 0.842)';
  }
});


profilePictureContainer.addEventListener('click', () => {

  stileCss.style.setProperty('--position-profile-picture', positionProfilePicture);
  stileCss.style.setProperty('--width-profile-picture', widthProfilePicture);
  stileCss.style.setProperty('--border-raduis-profile-picture', borderRaduisProfilePicture);
  stileCss.style.setProperty('--pading-profile-picture', padingProfilePicture);


  if(positionProfilePicture === 'fixed') {
    positionProfilePicture = 'inline-block';
    widthProfilePicture = '28%';
    borderRaduisProfilePicture = '50%';
    padingProfilePicture = '0';
  }else {
    positionProfilePicture = 'fixed';
    widthProfilePicture = '100%';
    borderRaduisProfilePicture = '0';
    padingProfilePicture = '10% 30%';
  }
});