const menuButtons = document.querySelectorAll('[data-menu]');
const menu = document.querySelector('#menu');


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