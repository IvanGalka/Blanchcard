new Swiper('.gallery__swiper', {

  navigation: {
    nextEl: '.gallery__button-next',
    prevEl: '.gallery__button-prev',
  },
  
  pagination: {
    el: '.gallery__pagination',
    type: 'fraction',
  },

  slidesPerGroup: 1,

  slidesPerView: 1,

  grid: {
    rows: 1,
    fill: 'row'
  },

  spaceBetween: 20,

  breakpoints: {
    577: {
      slidesPerView: 2,

      slidesPerGroup: 2, 

      grid: {
        rows: 2
      },

      spaceBetween: 34
    },

    1200: {
      slidesPerView: 3,

      slidesPerGroup: 6,
      
      grid: {
        rows: 2
      },

      spaceBetween: 50
    }
  },



});
