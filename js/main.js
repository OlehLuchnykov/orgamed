var swiper1 = document.getElementsByClassName('.swiper-container-banner-gallery');

if (swiper1) {
    var galleryBannerSwiper = new Swiper ('.swiper-container-banner-gallery', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        speed: 500,
        grabCursor: true,
        pagination: {
            el: '.swiper-pagination'
        },
        autoplay: {
            delay: 5000,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
    });
}