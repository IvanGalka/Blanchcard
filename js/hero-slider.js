new Swiper('.hero__slider', {

  simulateTouch: true,
  
  touchRatio: 0.7,

  longSwipesMs: 2000,

  speed: 1500,
  
  effect: 'fade',

  autoplay: {
    delay: 2000,
    stopOnLastSlide: false,
    disableInInteraction: false,
  },

  loop: true,
});