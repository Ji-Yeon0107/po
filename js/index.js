// COUNTER-UP
const counterUp = window.counterUp.default

const callback = entries => {
    entries.forEach( entry => {
        const el = entry.target
        if ( entry.isIntersecting && ! el.classList.contains( 'is-visible' ) ) {
            counterUp( el, {
                duration: 2000,
                delay: 16,
            } )
            el.classList.add( 'is-visible' )
        }
    } )
}

const IO = new IntersectionObserver( callback, { threshold: 1 } )

const el = document.querySelector( '.counter' )
IO.observe( el )

// SWIPER
var pcBrandSwiper = new Swiper('.swiper-container-pc-brand', {
    slidesPerView:3,
    slidesPerGroup:3,
    spaceBetween:10,
    loop: true, 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiperbutton-prev',
    },
    autoplay:true,
    pagination: {
        el: '.swiper-pagination3',
    }
});
var pcEventSwiper = new Swiper('.swiper-container-pc-event', {
    slidesPerView:2,
    slidesPerGroup:2,
    spaceBetween:10,
    loop: true, 
    autoplay:true,
    pagination: {
        el: '.swiper-pagination4',
    },
});

var mobileSwiperEvent = new Swiper('.swiper-container', {
    slidesPerView:2,
    slidesPerGroup:2,
    spaceBetween:10,
    loop: true, 
    pagination: {
        el: '.swiper-pagination',
    },
    autoplay:true,
});
var mobileSwiperBrand = new Swiper('.swiper-container2', {
    slidesPerView:2,
    slidesPerGroup:2,
    spaceBetween:10,
    autoplay:true,
    pagination: {
        el: '.swiper-pagination2',
    },
});