run();

function run() {
    bindNavButtonToNavMenu();
}

function toggleHideClass(element) {
    element.classList.toggle('hide');
}

function bindNavButtonToNavMenu() {
    const navButton = document.querySelector('.nav__button');

    navButton.addEventListener('click', function() {
        const navMenu = document.querySelector('.nav__menu');
        toggleHideClass(navMenu);
    });
}

const modal = document.querySelector('.modal');
const toggleButton = document.querySelector('.toggle-button');
const closeButton = document.querySelector('.close-button');

function toggleModal() {
    modal.classList.toggle('show-modal');
}

function clickWindow(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

toggleButton.addEventListener('click', toggleModal);
closeButton.addEventListener('click', toggleModal);
window.addEventListener('click', clickWindow);
// run();

// function run() {
//   bindNavButtonToNavMenu();
// }

// function toggleHide(element) {
//   element.classList.toggle('hide');
// }

// function bindNavButtonToNavMenu() {
//   const navButton = document.querySelector('.nav__button');
  
//   navButton.addEventListener('click', function() {
//     const navMenu = document.querySelector('.nav__menu');
//     toggleHide(navMenu);
//   });
// }