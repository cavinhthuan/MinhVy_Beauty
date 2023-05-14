import Swiper from "/node_modules/swiper/swiper-bundle.esm.browser.min.js";
const recomments = new Swiper("#product-recomments-slide", {
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
  // Optional parameters
  direction: "horizontal",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true
  },
  // Navigation arrows
  navigation: {
    nextEl: ".slide--next",
    prevEl: ".slide--prev",
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
});

const imageSlide = new Swiper(".main-slide", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  thumbs: {
    swiper: new Swiper(".thumb-slide", {
      loop: true,
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    }),
    slideThumbActiveClass: "thumb-slide--active",
  },
  // Navigation arrows
  navigation: {
    nextEl: ".slide--next",
    prevEl: ".slide--prev",
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
});
