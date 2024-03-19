/* carousel */

$(document).ready(function(){
  $('.carousel').carousel();
});


/* scroll nav */

$(window).on("scroll", function() {
  if ($(window).scrollTop( ) > 50) {
    $(".header").addClass("active");
  }else {
    $(".header").removeClass("active");
  }
});


/* donation */

new Cleave('.donation', {
  numeral: true,
  numeralThousandGroupStyle: 'thousand'
})


/* gradient */

var granimInstance = new Granim({
  element: '#canvas-basic',
  direction: 'left-right',
  isPausedWhenNotInView: true,
  states : {
      "default-state": {
          gradients: [
              ['#a4caea', '#db9e73'],
              ['#5d96c4', '#ff750f'],
              ['#a4caea', '#ff750f']
          ]
      }
  }
});


/* card animation */

AOS.init({
  offset: 400,
  duration: 1000
});


/* burger */

let navigation = document.getElementById("navMenu");
let burger = document.getElementById("burger");

console.log(window.innerWidth);

let viewportOnLoad = window.addEventListener("load", _menuToggle );
let viewportOnResize = window.addEventListener("resize", _menuToggle);

function _menuToggle(){
    let currentViewport = window.innerWidth;
    console.log(currentViewport);  
    if (currentViewport <= 1200) {
      navigation.style.display = "none" 
      burger.style.display = "flex"  
    }else {
      navigation.style.display = "flex"  
      burger.style.display = "none"
    }
  }  

  let burgerMenu = document.getElementById("navBurger");
  let close = document.getElementById("close");

  burger.addEventListener("click", function() {
    burgerMenu.style.display = "flex";
    close.style.display = "block";
  })

  close.addEventListener("click", function() {
    burgerMenu.style.display = "none";
    close.style.display = "none";
  }) 
