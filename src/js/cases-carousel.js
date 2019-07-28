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
