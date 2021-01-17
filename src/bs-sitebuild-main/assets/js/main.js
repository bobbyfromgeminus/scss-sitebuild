'use strict';

// Navbar Scrolling
let scroll_start = 0;
const startchange = $('.navbar');
let offset = startchange.offset();

if (startchange.length) {
    $(document).scroll(function() { 
        scroll_start = $(this).scrollTop();
        if(scroll_start > offset.top) {
            $(".navbar").addClass('bg-light');
        } else {
            $(".navbar").removeClass('bg-light');
        }
    });
}

// Smooth site scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// tooltip
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})