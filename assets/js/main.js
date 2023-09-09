/* ScroolReveal Header */

ScrollReveal().reveal('.headline',)
ScrollReveal().reveal('.headline-1', { delay: 150, })
ScrollReveal().reveal('.tagline', { delay: 250, })
ScrollReveal().reveal('.button-line', { delay: 500, })
/* ScrollReveal Main */  

var slideUp = {
    distance: '150%',
    origin: 'bottom',
    opacity: 0,
};

var slideLeft = {
    distance: '150%',
    origin: 'right',
    opacity: 0,
    delay: 500,
    reset: true
};

var slideRight = {
    distance: '150%',
    origin: 'left',
    opacity: 0,
    delay: 500,
    reset: true
};

ScrollReveal().reveal('.slide-up', slideUp);
ScrollReveal().reveal('.slide-left', slideLeft);
ScrollReveal().reveal('.slide-right', slideRight);