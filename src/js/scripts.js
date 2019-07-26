//= ../vendors/OwlCarousel2-2.3.4/owl.carousel.min.js
//= ../vendors/typed-v2.0.9/typed.min.js
//= ../vendors/jquery.inview.min.js

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

  $('.consult-request__button')
    .click(function() {
      $('.consult-request').addClass('activated');
    });

  $('.block-fadein')
    .one('inview', function() {
      $(this).addClass('inview');
    });


    $('[data-typed]').each(function() {
      var $this = $(this);
      $this.data('runTyper', function() {

        function startType() {
          let $items = $this.find('[data-typeditem]');
          for (var i = 0; i < $items.length; i++) {
            console.log($items[i]);
          }  
        }

        startType();


        $this.find('[data-typeditem]')

      });
    });


  // var typed = new Typed("#typed1", {
  //   strings: ['Реклама'],
  //   typeSpeed: 200,
  //   backSpeed: 0,
  //   fadeOut: true,
  //   loop: false,
  //   onStringTyped: function(pos, self) {
  //     // console.log(pos);
  //     self.destroy();
  //   }
  // });

  setTimeout(() => {
    $('[data-typed]')
      .one('inview', function() {
        $(this).data('runTyper')();
      });
  })





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

