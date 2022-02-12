const MOBILE_WIDTH_EDITIONS = 576;

const sliderParamsNotMobile = {
  sliderWrap: "editions__slider",
  cardsContainerName: "editions__swiper",
  cardsWrapName: "editions__wrapper",
  card: "editions__slide",
  paginationClassName: "editions__pagination",
  navClassName: "editions__navigation",
  navBtnClassName: "editions__btn",
  navPrev: "editions__button-prev",
  navNext: "editions__button-next"
};

function getWindowWidth() {
  console.log(document.body.scrollWidth)
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.body.clientWidth,
    document.documentElement.clientWidth
  );
}

function activateSlider(params) {
  const navigation = document.createElement("div");
  const pagination = document.createElement("div");
  const navBtnPrev = document.createElement("button");
  const navBtnNext = document.createElement("button");
  
  navigation.classList.add(params.navClassName);
  
  navBtnPrev.classList.add(params.navBtnClassName);
  navBtnPrev.classList.add(params.navPrev);
  navigation.prepend(navBtnPrev);
  
  pagination.classList.add(params.paginationClassName);
  navigation.append(pagination);
  
  navBtnNext.classList.add(params.navBtnClassName);
  navBtnNext.classList.add(params.navNext);
  navigation.append(navBtnNext);
  
  params.sliderWrapElem.prepend(navigation);

  params.cardsContainer.classList.add("swiper");
  params.cardsWrap.classList.add("swiper-wrapper");

  params.cardsSlider = new Swiper(`.${params.cardsContainerName}`, {

    slidesPerView: 2,

    slidesPerGroup: 2, 

    spaceBetween: 32,
    
    breakpoints: {
        769: {
          slidesPerView: 2,
    
          slidesPerGroup: 2, 
    
          spaceBetween: 34
        },
    
        1024: {
          slidesPerView: 2,
    
          slidesPerGroup: 2,
    
          spaceBetween: 50
        },

        1560: {
            slidesPerView: 3,
      
            slidesPerGroup: 3, 
      
            spaceBetween: 50
          },
      },
    
    
    pagination: {
      el: `.${params.sliderWrap} .${params.paginationClassName}`,
      type: "fraction"
    },

    navigation: {
      nextEl: `.${params.navNext}`,
      prevEl: `.${params.navPrev}`
    },

    on: {
      beforeInit() {
        document.querySelectorAll(`.${params.card}`).forEach((el) => {
          el.classList.add("swiper-slide");
        });
      },

      beforeDestroy() {
        this.slides.forEach((el) => {
          el.classList.remove("swiper-slide");
          el.removeAttribute("role");
          el.removeAttribute("aria-label");
        });

        this.pagination.el.remove();
        navigation.remove();
      }
    }
  });
}

function destroySlider(params) {
  params.cardsSlider.destroy();
  params.cardsContainer.classList.remove("swiper");
  params.cardsWrap.classList.remove("swiper-wrapper");
  params.cardsWrap.removeAttribute("aria-live");
  params.cardsWrap.removeAttribute("id");
}

function checkWindowWidth(params) {
  const currentWidth = getWindowWidth();
  params.sliderWrapElem = document.querySelector(`.${params.sliderWrap}`);
  params.cardsContainer = document.querySelector(`.${params.cardsContainerName}`);
  params.cardsWrap = document.querySelector(`.${params.cardsWrapName}`);

  if (currentWidth > MOBILE_WIDTH_EDITIONS && (!params.cardsSlider || params.cardsSlider.destroyed)) {
    activateSlider(params);
  } else if (currentWidth <= MOBILE_WIDTH_EDITIONS && params.cardsSlider) {
    destroySlider(params);
  }
}

checkWindowWidth(sliderParamsNotMobile);

window.addEventListener("resize", function () {
  checkWindowWidth(sliderParamsNotMobile);
});