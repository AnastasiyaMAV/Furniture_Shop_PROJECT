//----------Блок header----------
document.addEventListener("DOMContentLoaded", function (event) {
    for (element of document.querySelectorAll(".favoritesButton")) {
        element.onclick = showFavList;
    }
})

function showFavList() {
    Swal.fire({
        position: 'top-end',
        title: "<span class='swalTitle'>Вам понравились:</span>",
        html: arrayLikes.join("<br/>"),
        showConfirmButton: true,
        width: 400,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    })
}

//----------Блок 50+ Beautiful rooms inspiration----------
// let arrayImg = [
//     "assets/images/inspiration/Rectangle25.png",
//     "assets/images/inspiration/22-10.jpeg",
//     "assets/images/inspiration/22-11.jpeg"
// ] // массив картинок

// let counter = -1; // Счетчик, указывающий на текущую картинки

// function changeImgNext() { //функция кнопки 
//     let img = document.getElementById("room"); // ищем картинку
//     if (counter < arrayImg.length - 1) //
//         counter++;
//     else {
//         counter = 0; //
//     }
//     img.src = arrayImg[counter]; // устанавливает картинку по индексу каунтер
// }

// function changeImgPrev() { //функция кнопки 
//     let img = document.getElementById("room"); // ищем картинку
//     if (counter > 0) //
//         counter--;
//     else {
//         counter = arrayImg.length - 1; //
//     }
//     img.src = arrayImg[counter]; // устанавливает картинку по индексу каунтер
// }
new Swiper('.image-slider', {
    loop: true,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },

    effect: 'fade',

    fadeEffect: {
        crossFade: true,
    },
});
//----------Блок Tips & Tricks----------
document.addEventListener( 'DOMContentLoaded', function () {
    new Splide('.splide', {
        type: 'loop',
        width: '90%',
        gap: 25,
        arrows: 'slider',
        perPage: 3,
        focus: 'center',
        slideFocus: true,
        flickMaxPages: 3,
        updateOnMove: true,
        pagination: true,
        padding: 0,
        throttle: 300,
        breakpoints: {
        768: {
            perPage: 1,
            padding: 0,
            arrows: false,
        }
        }
    }).mount();
});