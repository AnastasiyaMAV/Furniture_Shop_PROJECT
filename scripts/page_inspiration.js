function creatingSlider() {
    new Swiper('.image-slider', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
    
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
    
        autoHeight: true,
    
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true
        },
    
        loop: true,
    
        spaceBetween: 30,
    
        mousewheel: {
            sensitivity: 1,
            eventsTarget: ".image-slider"
        },
    
        slidesPerView: 5,
    
        breakpoints : {
            320 : {
                slidesPerView: 1,
            },
            480 : {
                slidesPerView: 2,
            },
            768 : {
                slidesPerView: 3,
            },
            1023 : {
                slidesPerView: 5,
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", function (event) {
    creatingSlider();
});