//= ../vendors/OwlCarousel2-2.3.4/owl.carousel.min.js
//= ../vendors/typed-v2.0.9/typed.min.js
//= ../vendors/jquery.inview.min.js

//= ./debounce.js
//= ./youtube-carousel.js
//= ./cases-carousel.js
//= ./team-carousel.js
//= ./partner-carousel.js
//= ./promotion-partners-carousel.js

$(document).ready(function(){

  initTypewriter();
  initTeamParalax();
  casesCarousel();
  youtubeCarousel();
  teamCarousel();
  partnerCarousel();
  promotionPartnersCarousel();

  $('.consult-request__button').click(function() {
      $('.consult-request').addClass('activated');
    });

  $('.block-fadein').one('inview', function() {
      $(this).addClass('inview');
    });

  $('.header__menu').click(function() {
      $('body').toggleClass('mob-menu__open')
    });

});

function initTeamParalax() {
  var $teamSlideImage = $('.team-paralax .team-paralax__image'),
      randomImageIndex = random(0, $teamSlideImage.find('img').length - 1);

  $teamSlideImage.find('img').eq(randomImageIndex).addClass('vis');
  setTimeout(() => {
    $('.team-paralax').addClass('present');
  }, 500);
}

function initTypewriter() {
  $('[data-typed]').each(function() {
      $(this).find('[data-typed_item]').each(function() {
          $(this).css({
              visibility: 'hidden'
            })
            .data('text', $(this).text())
            .empty();

          $('<span>').css({
              height: 0,
              display: 'inline-block'
            })
            .addClass('typedNode')
            .appendTo($(this))
      });

    $(this).data('startTyper', () => {
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

// utils

function random(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
}
