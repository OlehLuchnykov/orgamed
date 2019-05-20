var swiper1 = document.getElementsByClassName('.swiper-container-banner-gallery');

if (swiper1) {
    var galleryBannerSwiper = new Swiper('.swiper-container-banner-gallery', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        speed: 500,
        grabCursor: true,
        pagination: {
            el: '.swiper-container-banner-gallery .swiper-pagination'
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
var swiper2 = document.getElementsByClassName('.swiper-container-abroad-clinics');
if (swiper2) {
    var abroadClinicsSwiper = new Swiper('.swiper-container-abroad-clinics', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        speed: 500,
        grabCursor: true,
        navigation: {
            nextEl: '.abroad-clinics-slider .swiper-button-next',
            prevEl: '.abroad-clinics-slider .swiper-button-prev',
        },
        slidesPerView: 4,
        spaceBetween: 20,
        breakpoints: {
            1199: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 2,
            },
            576: {
                slidesPerView: 1,
            }
        }
    });
}

var swiper3 = document.getElementsByClassName('.swiper-container-our-clinics');
if (swiper3) {
    var ourClinicsSwiper = new Swiper('.swiper-container-our-clinics', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        speed: 500,
        grabCursor: true,
        navigation: {
            nextEl: '.our-clinics-slider .swiper-button-next',
            prevEl: '.our-clinics-slider .swiper-button-prev',
        },
        slidesPerView: 4,
        spaceBetween: 20,
        breakpoints: {
            1199: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 2,
            },
            576: {
                slidesPerView: 1,
            }
        }
    });
}

var swiper4 = document.getElementsByClassName('.swiper-container-spa-resorts');
if (swiper4) {
    var spaResortsSwiper = new Swiper('.swiper-container-spa-resorts', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        speed: 500,
        grabCursor: true,
        navigation: {
            nextEl: '.spa-resorts-clinics-slider .swiper-button-next',
            prevEl: '.spa-resorts-clinics-slider .swiper-button-prev',
        },
        slidesPerView: 2,
        spaceBetween: 20,
        breakpoints: {
            1199: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 1,
            }
        }
    });
}
var readMoreLink = document.querySelector('.read-more');
var readMoreText = document.querySelector('.read-more-section');
if (readMoreLink && readMoreText) {
    readMoreLink.addEventListener('click', function (e) {
        readMoreText.classList.toggle('expand');
        readMoreLink.classList.toggle('more');
    });
}

Mmenu.configs.classNames.selected = 'active';
Mmenu.configs.offCanvas.page.selector = '.wrapper';

document.addEventListener(
    'DOMContentLoaded', () => {
        const menu = new Mmenu('.mobile-menu', {
            extensions: ["fx-menu-zoom", "fx-panels-zoom", "pagedim-black", "position-right"],
            "navbars": [
                {
                    'use': false
                }
            ]
        });

        const api = menu.API;

        document.querySelector("#my-open-button")
            .addEventListener(
                "click", (evnt) => {
                    evnt.preventDefault();
                    api.open();
                }
            );
    }
);