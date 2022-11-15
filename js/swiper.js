var swiper = new Swiper(".mySwiper1", {
  speed:1500,
  slidesPerView: 1,
  loop: true,
  touchRatio:0,
  autoplay:{
    delay: 3000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper_box .swiper-button-next",
    prevEl: ".swiper_box .swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper2", {
  speed:1500,
  slidesPerView: 1,
  loop: true,
  touchRatio:0,
  autoplay:{
    delay: 3000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper_box .swiper-button-next",
    prevEl: ".swiper_box .swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper3", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 1,
  navigation: {
    nextEl: ".p_wrap .swiper-button-next",
    prevEl: ".p_wrap .swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper4", {
  slidesPerView: 3,
  spaceBetween: 20,
  slidesPerGroup: 1,
  navigation: {
    nextEl: ".s_wrap .swiper-button-next",
    prevEl: ".s_wrap .swiper-button-prev",
  },
});