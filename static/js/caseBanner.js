(function ($) {
  'use strict';
  $('.brand-slider').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout:3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 2
      },
      568: {
        items: 3
      },
      768: {
        items: 4
      },
      1000: {
        items: 4
      }
    }
  })
})(jQuery);