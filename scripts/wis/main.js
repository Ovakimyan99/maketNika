$(document).ready(function() {
  $("#carousel-1").owlCarousel({
    items: 3,
    dots: false,
    margin: 75,
    nav: true,
    navText: ["<img src='_i/left.png'>", "<img src='_i/right.png'>"],
    loop: true,
    autoplay: false,
    center: false,
  });
});

$(document).ready(function() {
  $("#carousel-2").owlCarousel({
    items: 1,
    dots: false,
    margin: 75,
    nav: false,
    loop: true,
    autoplay: false,
    center: false,
  });
});
