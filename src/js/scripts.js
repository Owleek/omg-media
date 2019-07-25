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
    nav: false,
    dots: true,
    items: 1,
    onInitialized: function(that) {
      casesCarousel.addClass("owl-carousel");
    },
    responsive: {
      1024: {
        dots: false,
        nav: true,
      }
    }
  });

  presentTeam();

});

function presentTeam() {
  var $teamSlideImage = $('.team-slider .team-slider__image'),
      randomImageIndex = random(0, $teamSlideImage.find('img').length - 1);

  $teamSlideImage.find('img').eq(randomImageIndex).addClass('vis');
  setTimeout(() => {
    $('.team-slider').addClass('present');
  }, 500);
}

function random(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
}

