'use script';

//TODO: Adding the toggle switch functionality (remove and add toggle__active class on click)

const toggleBtn = document.querySelector('.toggle__btn');
const toggleBtnInner = document.querySelector('.toggle__btn-inner');
const themeMode = document.querySelector('.theme-mode');
const body = document.body;

toggleBtn.addEventListener('click', e => {
    toggleBtnInner.classList.toggle('toggle__active');
    // themeMode.innerHTML = '<p>Light Mode</p>';

    if (toggleBtnInner.classList.contains('toggle__active')) {
        themeMode.innerHTML = '<p>Light Mode</p>';

    }
    else {
        themeMode.innerHTML = '<p>Dark Mode</p>';
    }
})  