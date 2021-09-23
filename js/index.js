// SWIPER
var pcBrandSwiper = new Swiper('.swiper-container-pc-brand', {
    slidesPerView:3,
    slidesPerGroup:1,
    spaceBetween:10,
    loop: true, 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
});
var pcEventSwiper = new Swiper('.swiper-container-pc-event', {
    slidesPerView:2,
    slidesPerGroup:2,
    spaceBetween:10,
    loop: true, 
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
});

var swiper = new Swiper('.swiper-container', {
    slidesPerView:2,
    slidesPerGroup:2,
    spaceBetween:10,
    loop: true, 
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
});
var swiperBrand = new Swiper('.swiper-container2', {
    slidesPerView:2,
    spaceBetween:10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});