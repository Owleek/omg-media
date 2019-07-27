//= ../vendors/OwlCarousel2-2.3.4/owl.carousel.min.js
//= ../vendors/typed-v2.0.9/typed.min.js
//= ../vendors/jquery.inview.min.js

$(document).ready(function(){

  initTypewriter();
  initTeamParalax();
  casesCarousel();
  youtubeCarousel();

  $('.consult-request__button')
    .click(function() {
      $('.consult-request')
        .addClass('activated');
    });

  $('.block-fadein')
    .one('inview', function() {
      $(this)
        .addClass('inview');
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

function initTeamParalax() {
  var $teamSlideImage = $('.team-slider .team-slider__image'),
      randomImageIndex = random(0, $teamSlideImage.find('img').length - 1);

  $teamSlideImage.find('img').eq(randomImageIndex).addClass('vis');
  setTimeout(() => {
    $('.team-slider').addClass('present');
  }, 500);
}

function youtubeCarousel() {
  const youtubeSection = $(".js-youtube-section");

  if (youtubeSection) {
    const youtubeCarousel = youtubeSection.find(".youtube-section__carousel");

    const youtubeItems =  youtubeSection.find(".youtube-section__carousel-item").clone();
    const youtubeCards = youtubeItems.find(".youtube-section__card").clone();
    let carousel = null;
    let mobileMode = false;

    launchCarousel();

    $(window).on("resize", debounce(launchCarousel, 300));

    function launchCarousel() {
      const matchMobile = window.matchMedia("(max-width: 1023px)").matches;

      /** Если мобильная версия */
      if (matchMobile) {
        /** Если еще не запущена карусель в мобильной версии */
        if (!mobileMode) {
          mobileMode = true;
          carousel && carousel.trigger("destroy.owl.carousel");
          youtubeCarousel.html(youtubeCards);

          carousel = youtubeCarousel.owlCarousel({
            loop: false,
            nav: false,
            dots: true,
            items: 3,
            onInitialized: function(event) {
              youtubeCarousel.addClass("owl-carousel");
              // $casesSection.find(".items-counter").addClass("items-counter_active");
            },
          });
        }
      } else {
        /** Если десктопная версия и если карусель еще не запущуна либо запущена в мобильной версии. */
        if (!carousel || mobileMode) {
          mobileMode = false;
          carousel && youtubeCarousel.html(youtubeItems);
          carousel && carousel.trigger("destroy.owl.carousel");

          carousel = youtubeCarousel.owlCarousel({
            loop: false,
            nav: false,
            dots: true,
            items: 1,
            onInitialized: function(event) {
              youtubeCarousel.addClass("owl-carousel");
              // $casesSection.find(".items-counter").addClass("items-counter_active");
            },
          });
        }
      }
    }
  }
}

function initTypewriter() {
  $('[data-typed]')
    .each(function() {
      $(this)
        .find('[data-typed_item]')
        .each(function() {
          $(this)
            .css({
              visibility: 'hidden'
            })
            .data('text', $(this).text())
            .empty();

          $('<span>')
            .css({
              height: 0,
              display: 'inline-block'
            })
            .addClass('typedNode')
            .appendTo($(this))
      });

    $(this)
      .data('startTyper', () => {
        startTyper($(this).find('[data-typed_item]'));
      });
  });

  function startTyper($items) {
    for (var i = 0; i < $items.length; i++) {
      let $item = $($items[i]);
      if (!$item.data('type_end')) {
        $item.css({
          visibility: 'visible'
        })
        let string = $item.data('text'),
            node = $item.find('.typedNode').get(0);
        return runTypedPlugin(node, string, () => {
          $item
            .text(string)
            .data('type_end', true);
            startTyper($items);
        });
      };
    }
  };

  function runTypedPlugin(node, string, callback) {
    new Typed(node, {
      strings: [string],
      typeSpeed: 50,
      backSpeed: 0,
      fadeOut: true,
      loop: false,
      onStringTyped: (pos, self) => {
        self.destroy();
      },
      onDestroy: callback
    });
  };

  setTimeout(() => {
    $('[data-typed]')
      .one('inview', function() {
        $(this).data('startTyper')();
      });
  })
}

function random(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
}

// utils

function debounce(func, delay) {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, arguments), delay);
  };
}
