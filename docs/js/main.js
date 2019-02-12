const menuButtons = document.querySelectorAll('[data-menu]');
const menu = document.getElementById('menu');
const hamburger = document.getElementById('hamburger');
const contentIcon = document.getElementById('content_icon');

let inTransition = false;
let rotating = false;

function removeActive (array) {
  array.forEach(object => {
    object.classList.remove('active');
  });
}

menu.addEventListener('click', e => {
  menuButtons.forEach(button => {
    if (e.target === button) {
      removeActive(menuButtons);
      button.classList.add('active');
    }
  })
});

hamburger.addEventListener('click', () => {
  if (!inTransition){
    inTransition = true;
    setTimeout(() => inTransition = false, 500)
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
  }
});

contentIcon.addEventListener('click', () => {
  if (!rotating) {
    rotating = true;
    contentIcon.classList.toggle('rotate');
  }
});
contentIcon.addEventListener('transitionend', () => {
  rotating = false;
});