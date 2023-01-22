"use strict";

const burgerMenu = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');
const navLink = document.querySelectorAll('.nav__link');
if (burgerMenu) {
    burgerMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('_lock');
        burgerMenu.classList.toggle('_navigation_active');
        navigation.classList.toggle('_navigation_active');
    });
}
navLink.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('_lock');
        navigation.classList.remove('_navigation_active');
        burgerMenu.classList.remove('_navigation_active');
    })
})

document.querySelector('.main').addEventListener('click', (event) => {
    if (event.target.className != '.burger'){
        document.body.classList.remove('_lock');
        navigation.classList.remove('_navigation_active');
        burgerMenu.classList.remove('_navigation_active');
    }
})

