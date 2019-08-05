function youtubeCarousel() {
  const youtubeSection = $(".js-youtube-section");
  const youtubeItems =  youtubeSection.find(".youtube-section__carousel-item").clone();
  const youtubeCards = youtubeItems.find(".youtube-section__card").clone();

  function launchCarousel(device) {
    if (device === "mobile") {
      youtubeSection.find(".swiper-wrapper").html(youtubeCards);
    } else {
      youtubeSection.find(".swiper-wrapper").html(youtubeItems);
    }

    return new Swiper('.js-youtube-swiper', {
      loop: false,
      spaceBetween: 24,
      effect: device === "mobile" ? "slide" : "fade",
      pagination: {
        el: '.cases-section__pagination',
        clickable: true,
        type: 'custom',
        renderCustom: carouselCustomPagination,
      },
      navigation: {
        nextEl: '.youtube-carousel-nav__next',
        prevEl: '.youtube-carousel-nav__prev',
      },
      slidesPerView: 1,
      // slidesPerView: 1,
      // breakpointsInverse: true,
      // breakpoints: {
      //   320: {
      //     slidesPerView: 1,
      //   },
      //   568: {
      //     slidesPerView: 2,
      //   },
      //   768: {
      //     slidesPerView: 3,
      //   }
      // }
    });
  }

  const mediaPoints = {
    mobile: "(max-width: 1023px)",
    desktop: "(min-width: 1024px)",
  }

  carouselInitializer(mediaPoints, launchCarousel);


  // if (youtubeSection) {
  //   const youtubeCarousel = youtubeSection.find(".youtube-section__carousel");
  //
  //   const youtubeItems =  youtubeSection.find(".youtube-section__carousel-item").clone();
  //   const youtubeCards = youtubeItems.find(".youtube-section__card").clone();
  //
  //   let carousel = null;
  //   let mobileMode = false;
  //
  //   launchCarousel();
  //
  //   $(window).on("resize", debounce(launchCarousel, 300));
  //
  //   function launchCarousel() {
  //     const matchMobile = window.matchMedia("(max-width: 1023px)").matches;
  //
  //     /** Если мобильная версия */
  //     if (matchMobile) {
  //       /** Если еще не запущена карусель в мобильной версии */
  //       if (!mobileMode) {
  //         mobileMode = true;
  //         carousel && carousel.trigger("destroy.owl.carousel");
  //         youtubeCarousel.html(youtubeCards);
  //
  //         carousel = youtubeCarousel.owlCarousel({
  //           loop: true,
  //           nav: false,
  //           dots: true,
  //           items: 1,
  //           onInitialized: function(event) {
  //             youtubeCarousel.addClass("owl-carousel");
  //             // $casesSection.find(".items-counter").addClass("items-counter_active");
  //           },
  //           responsive: {
  //             568: {
  //               items: 2,
  //             },
  //             768: {
  //               items: 3,
  //             }
  //           },
  //         });
  //       }
  //     } else {
  //       /** Если десктопная версия и если карусель еще не запущуна либо запущена в мобильной версии. */
  //       if (!carousel || mobileMode) {
  //         mobileMode = false;
  //         carousel && youtubeCarousel.html(youtubeItems);
  //         carousel && carousel.trigger("destroy.owl.carousel");
  //
  //         youtubeCarousel.find(".youtube-carousel-nav__prev").on("click", function() {
  //           carousel && carousel.trigger("prev.owl.carousel");
  //         });
  //
  //         youtubeCarousel.find(".youtube-carousel-nav__next").on("click", function() {
  //           carousel && carousel.trigger("next.owl.carousel");
  //         });
  //
  //         carousel = youtubeCarousel.owlCarousel({
  //           loop: false,
  //           nav: false,
  //           dots: false,
  //           items: 1,
  //           onInitialized: function(event) {
  //             youtubeCarousel.addClass("owl-carousel");
  //             youtubeSection.find(".items-counter").addClass("items-counter_active");
  //             const items = youtubeCarousel.find(".youtube-section__carousel-item");
  //
  //             if (items.length < 2) {
  //               youtubeCarousel.find(".youtube-carousel-nav").remove();
  //             } else {
  //               items.eq(0).find(".youtube-carousel-nav__prev").addClass("disabled");
  //               items.eq(items.length - 1).find(".youtube-carousel-nav__next").addClass("disabled");
  //             }
  //           },
  //           onChanged: function(event) {
  //             const current = event.item.index + 1;
  //
  //             if (current < event.item.count) {
  //               youtubeCarousel.find(".youtube-carousel-nav__next").removeClass("disabled");
  //             } else {
  //               youtubeCarousel.find(".youtube-carousel-nav__next").addClass("disabled");
  //             }
  //
  //             youtubeSection.find(".items-counter__total").text(event.item.count < 10 ? "0" + event.item.count : event.item.count);
  //             youtubeSection.find(".items-counter__current").text(current < 10 ? "0" + current : current);
  //           },
  //         });
  //       }
  //     }
  //   }
  // }
}
