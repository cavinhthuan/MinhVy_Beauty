import Swiper from "/node_modules/swiper/swiper-bundle.esm.browser.min.js";
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".btn--next",
    prevEl: ".btn--prev",
  },
  autoplay: {
    delay: 10000,
    disableOnInteraction: true,
  },
});
