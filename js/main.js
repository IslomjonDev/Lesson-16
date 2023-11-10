$(document).ready(function(){
    $(".owl-carousel").owlCarousel({   
       margin: 50,
      nav: true,
      navText: ["<img src='images/left.svg'/>", "<img src='images/right.svg'/>"],
      loop: true,
      responsive: {
        0: {
          items: 1,
          dots: false,
        },
        600: {
          items: 1,
          margin: 30,
        },
        1000: {
          items: 3,
        },
        1200: {
          items: 2,
          innerHeight:50,
        },
      },
    });
  });