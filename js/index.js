// SWIPER
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