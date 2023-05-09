import Swiper from "/node_modules/swiper/swiper-bundle.esm.browser.min.js";
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

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
