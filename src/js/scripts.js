//= ../vendors/OwlCarousel2-2.3.4/owl.carousel.min.js

$(document).ready(function(){
  var casesCarousel = $(".js-cases-carousel");

  // if (casesCarousel.find(".cases-section__carousel-item").length > 1) {
  //   casesCarousel.owlCarousel({
  //     loop: true,
  //     nav: true,
  //     dots: false,
  //     items: 1,
  //     onInitialized: function(that) {
  //       casesCarousel.addClass("owl-carousel");
  //     }
  //   });
  // }

  casesCarousel.owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    items: 1,
    onInitialized: function(that) {
      casesCarousel.addClass("owl-carousel");
    }
  });
});
