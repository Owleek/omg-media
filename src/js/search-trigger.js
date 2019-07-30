function searchTrigger() {
  $(".js-search-icon").on("click", function(event) {
    event.stopPropagation();
    const $header = $(".header");
    const $searchBar = $header.find(".search-bar");
    const $searchInput = $searchBar.find(".search-bar__input");
    const $doc = $(document);
    const $clear = $searchBar.find(".search-bar__clear");

    $header.addClass("header_search-active");
    $searchInput.focus();

    $doc.on("click", onSearchBarCloseListener);
    $clear.on("click", function() {
      $searchInput.val("");
    });

    function onSearchBarCloseListener(event) {
      if(!$searchBar.get(0).contains(event.target)) {
        $header.removeClass("header_search-active");
        $doc.off("click", onSearchBarCloseListener);
        $searchInput.val("");
        $clear.off("click");
      }
    }
  });
}
