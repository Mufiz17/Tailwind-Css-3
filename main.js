/*~~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~~~~~~~*/
const navMenu = document.getElementById('nav-menu');
const navLink = document.querySelectorAll('.nav-link');
const hambuger = document.getElementById('hamburger');

hambuger.addEventListener('click', () => {
  navMenu.classList.toggle('left-[0]');
  hambuger.classList.toggle('ri-close-large-line');
});

navLink.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('left-[0]');
      hambuger.classList.remove('ri-close-large-line');
    });
});
/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/


/*~~~~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~~~~*/


/*~~~~~~~~~~~~~~~ SWIPER ~~~~~~~~~~~~~~~*/


/*~~~~~~~~~~~~~~~ SCROLL SECTIONS ACTIVE LINK ~~~~~~~~~~~~~~~*/


/*~~~~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~*/