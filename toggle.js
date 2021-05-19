'use script';

//TODO: Target all required elements in the DOM

const toggleBtn = document.querySelector('.toggle__btn');
const toggleBtnInner = document.querySelector('.toggle__btn-inner');
const themeMode = document.querySelector('.theme-mode');
const body = document.body;
const toolBarColor = document.querySelector('.toolBarColor');

toggleBtn.addEventListener('click', e => {

    toggleBtnInner.classList.toggle('toggle__active');

    if (toggleBtnInner.classList.contains('toggle__active')) {
        themeMode.innerHTML = '<p>Light Mode</p>';
        body.classList.replace('dark-theme', 'light-theme');
        body.classList.add('theme-effect');
        toolBarColor.content = '#ffffff';
        console.log(toolBarColor.content);


    }
    else {
        themeMode.innerHTML = '<p>Dark Mode</p>';
        body.classList.replace('light-theme', 'dark-theme');
        toolBarColor.content = '#1e202a';
        console.log(toolBarColor.content);
    }
})  