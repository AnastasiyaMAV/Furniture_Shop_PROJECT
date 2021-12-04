let massRoomJSON = [{
    "picture":"assets/images/inspiration/Room_1.jpeg"
},{
    "picture":"assets/images/inspiration/Room_2.jpeg"
},{
    "picture":"assets/images/inspiration/Room_3.png"
},{
    "picture":"assets/images/inspiration/Room_4.jpg"
},{
    "picture":"assets/images/inspiration/Room_5.jpg"
},{
    "picture":"assets/images/inspiration/Room_6.jpg"
},{
    "picture":"assets/images/inspiration/Room_7.png"
}];

function createCarousel(massRoom){
    for (let i=0; i < massRoom.length; i++){
        let slider = document.getElementById('slider-wrapper');

        let divSlider = document.createElement('div');
        divSlider.className = "image-slider__slide swiper-slide";
        slider.appendChild(divSlider);

        let divSliderImg = document.createElement('div');
        divSliderImg.className = "image-slider__image";
        divSlider.appendChild(divSliderImg); 

        let imgSlider = document.createElement('img');
        imgSlider.src = massRoom[i].picture;
        imgSlider.alt = "Image";
        divSliderImg.appendChild(imgSlider);
    }
}

function creatSlider() {
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
    let massRoom = JSON.parse(JSON.stringify(massRoomJSON));
    createCarousel(massRoom);
    creatSlider();
});