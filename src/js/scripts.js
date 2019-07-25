//= ../vendors/OwlCarousel2-2.3.4/owl.carousel.min.js
//= ../vendors/jquery.inview.min.js

$(document).ready(function(){
  casesCarousel();
  presentTeam();

  $('.consult-request__button')
    .click(function() {
      $('.consult-request').addClass('activated');
    });

  $('.block-fadein')
    .one('inview', function() {
      $(this).addClass('inview');
    });
});

function casesCarousel() {
  const $casesSection = $(".js-cases-section");
  const $casesCarousel = $casesSection.find(".cases-section__carousel");

  if ($casesCarousel.find(".cases-section__carousel-item").length > 1) {
    $casesCarousel.owlCarousel({
      loop: false,
      nav: false,
      dots: true,
      items: 1,
      onInitialized: function(event) {
        $casesCarousel.addClass("owl-carousel");
        $casesSection.find(".items-counter").addClass("items-counter_active");
      },
      onChanged: function(event) {
        const current = event.item.index + 1;
        $casesSection.find(".items-counter__total").text(event.item.count < 10 ? "0" + event.item.count : event.item.count);
        $casesSection.find(".items-counter__current").text(current < 10 ? "0" + current : current);
      },
      responsive: {
        1024: {
          dots: false,
          nav: true,
        }
      }
    });
  }
}

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

