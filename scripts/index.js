let massProductHeaderJSON = [{ //Json для карусели в header
    "picture":"assets/images/header/header_carousel-02.png",
    "styleProduct":"American style",
    "productSortDiscription":"Big sofa 2-seat and a chair",
    "price":"Rp 27.000.000"
},{
    "picture":"assets/images/header/header_carousel-03.png",
    "styleProduct":"Futuristic style",
    "productSortDiscription":"Luxury big bed for two",
    "price":"Rp 35.000.000"
},{
    "picture":"assets/images/header/room_design-4.jpg",
    "styleProduct":"Futuristic style",
    "productSortDiscription":"Big sofa 2-seat",
    "price":"Rp 20.000.000"
},{
    "picture":"assets/images/header/room_design-4.jpg",
    "styleProduct":"Futuristic style",
    "productSortDiscription":"Big sofa 2-seat",
    "price":"Rp 15.000.000"
},{
    "picture":"assets/images/header/room_design-5.jpg",
    "styleProduct":"Futuristic style",
    "productSortDiscription":"Big sofa 2-seat",
    "price":"Rp 30.000.000"
},{
    "picture":"assets/images/header/room_design-6.jpg",
    "styleProduct":"Futuristic style",
    "productSortDiscription":"Luxury big corner sofa",
    "price":"Rp 35.000.000"
},{
    "picture":"assets/images/header/room_design-7.jpg",
    "styleProduct":"Futuristic style",
    "productSortDiscription":"Dinner Zone",
    "price":"Rp 55.000.000"
},{
    "picture":"assets/images/header/room_design-8.jpg",
    "styleProduct":"Futuristic style",
    "productSortDiscription":"Big sofa 2-seat",
    "price":"Rp 19.000.000"
},{
    "picture":"assets/images/header/room_design-9.jpg",
    "styleProduct":"Futuristic style",
    "productSortDiscription":"Big sofa 2-seat",
    "price":"Rp 20.000.000"
},{
    "picture":"assets/images/header/room_design-10.jpg",
    "styleProduct":"Futuristic style",
    "productSortDiscription":"Luxury big wardrobe",
    "price":"Rp 5.000.000"    
}];

function createCarousel(massProductHeader){//ф-ия по созданию элементов карумсели на странице html в блоке header
    for (let i=0; i < massProductHeader.length; i++){
        let carousel_1 = document.getElementById('carousel_1');

        let divСarouselItem = document.createElement('div');
        divСarouselItem.className = "carousel-item";
        carousel_1.after(divСarouselItem);

        let imgСarousel = document.createElement('img');
        imgСarousel.className = "d-block w-100";
        imgСarousel.src = massProductHeader[i].picture;
        imgСarousel.alt = "Image";
        divСarouselItem.appendChild(imgСarousel);

        let divСaption = document.createElement('div');
        divСaption.className = "caption";
        imgСarousel.after(divСaption); 
        
        let headline1 = document.createElement('h3');
        headline1.textContent = massProductHeader[i].styleProduct;
        divСaption.appendChild(headline1);

        let line = document.createElement('p');
        line.textContent = massProductHeader[i].productSortDiscription;
        headline1.after(line);

        let headline2 = document.createElement('h4');
        headline2.textContent = massProductHeader[i].price;
        line.after(headline2);
    }
}

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

document.addEventListener( 'DOMContentLoaded', function () {
//----------Блок header----------
    let massProductHeader = JSON.parse(JSON.stringify(massProductHeaderJSON));
    createCarousel(massProductHeader); 

    for (element of document.querySelectorAll(".favoritesButton")) {
        element.onclick = showFavList;
    }  
//----------Блок 50+ Beautiful rooms inspiration----------
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