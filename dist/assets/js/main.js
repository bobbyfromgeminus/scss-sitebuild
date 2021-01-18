'use strict';

// Navbar Scrolling
let scroll_start = 0;
const navBar = document.querySelector('nav');
let offset = navBar.offsetHeight;


window.onscroll = function() {
    let windowWidth = window.innerWidth;
    if (windowWidth >= 992) {
        scroll_start = document.documentElement.scrollTop;
        if (scroll_start > offset) {
            navBar.classList.remove('nav');
            navBar.classList.add('nav__scrolled');
        } else {
            navBar.classList.add('nav');
            navBar.classList.remove('nav__scrolled');
        }
    }
}