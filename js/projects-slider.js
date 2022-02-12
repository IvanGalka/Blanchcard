new Swiper ('.projects__swiper', {
    navigation: {
        nextEl: '.projects__button-next',
        prevEl: '.projects__button-prev',
    },

    slidesPerView: 1,
    
    slidesPerGroup: 1, 
    
    spaceBetween: 30,

    breakpoints: {
        577: {
          slidesPerView: 2,
    
          slidesPerGroup: 2, 
      
          spaceBetween: 30
        },

        769: {
          slidesPerView: 2,
    
          slidesPerGroup: 2, 
    
          spaceBetween: 49
        },

        1025: {
          slidesPerView: 2,
    
          slidesPerGroup: 2, 
    
          spaceBetween: 34
        },
    
        1560: {
            spaceBetween: 50,

            slidesPerView: 3,
        
            slidesPerGroup: 3
        }
    }
});