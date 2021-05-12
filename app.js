const navbar = document.querySelector('nav');
const btnBurger = document.querySelector('#burger');
const burgerSlices = document.querySelectorAll('.burger__slice');
const menu = document.querySelector('.menu');
const btnCircle = document.querySelectorAll('.btn-circle');

// Navbar animation :
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop > 20) {
    navbar.classList.add('nav--active');
    menu.classList.add('menu--position');

    btnCircle.forEach(function(item) {
      item.classList.add('btn-circle--active');
    });

    burgerSlices.forEach(function(item) {
      item.classList.add('btn-burger--active');
    });

  } else {
    navbar.classList.remove('nav--active');
    menu.classList.remove('menu--position');
    
    btnCircle.forEach(function(item) {
      item.classList.remove('btn-circle--active');
    });

    burgerSlices.forEach(function(item) {
      item.classList.remove('btn-burger--active');
    });
  }
}

// Burger animation :
btnBurger.addEventListener("click", function(e) {
    e.target.classList.toggle('active');
});

// Menu animation :
btnBurger.addEventListener("click", function(e) {
  menu.classList.toggle('menu--active');

  console.log('It worked !');
});