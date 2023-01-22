"use strict";

const burgerMenu = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');
const navLink = document.querySelectorAll('.nav__link');
if (burgerMenu) {
    burgerMenu.addEventListener('click', function (e) {
        burgerMenu.classList.toggle('_navigation_active');
        navigation.classList.toggle('_navigation_active');
    });
}
navLink.forEach(link => {
    link.addEventListener('click', () => {
        navigation.classList.remove('_navigation_active');
        burgerMenu.classList.toggle('_navigation_active');
    })
})

document.querySelector('.main').addEventListener('click', (event) => {
    if (event.target.className != '.burger'){
        navigation.classList.remove('_navigation_active');
    }
})

