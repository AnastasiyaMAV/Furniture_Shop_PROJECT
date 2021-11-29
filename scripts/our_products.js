let massProductJSON = [{
    "picture":"assets/images/our_products/Product_Syltherine.png",
    "name":"Syltherine",
    "productSortDiscription":"Stylish cafe chair",
    "priceSale":"Rp 2.500.000",
    "priceCrossOut":"Rp 3.500.000",
    "product_update":"assets/images/our_products/Label_30_percent.png"
},{
    "picture":"assets/images/our_products/Product_Leviosa.png",
    "name":"Leviosa",
    "productSortDiscription":"Stylish cafe chair",
    "price":"Rp 2.500.000",
    "priceCrossOut":"0"
},{
    "picture":"assets/images/our_products/Product_Lolito.png",
    "name":"Lolito",
    "productSortDiscription":"Luxury big sofa",
    "priceSale":"Rp 7.000.000",
    "priceCrossOut":"Rp 14.000.000",
    "product_update":"assets/images/our_products/Label_50_percent.png"
},{
    "picture":"assets/images/our_products/Product_Respira.png",
    "name":"Respira",
    "productSortDiscription":"Minimalist fan",
    "price":"Rp 500.000",
    "priceCrossOut":"0",
    "product_update":"assets/images/our_products/Label_new.png"
},{
    "picture":"assets/images/our_products/Product_Grifo.png",
    "name":"Grifo",
    "productSortDiscription":"Night lamp",
    "price":"Rp 1.500.000",
    "priceCrossOut":"0"
},{
    "picture":"assets/images/our_products/Product_Muggo.png",
    "name":"Muggo",
    "productSortDiscription":"Small mug",
    "price":"Rp 150.000",
    "priceCrossOut":"0",
    "product_update":"assets/images/our_products/Label_new.png"
},{
    "picture":"assets/images/our_products/Product_Pingky.png",
    "name":"Pingky",
    "productSortDiscription":"Cute bed set",
    "priceSale":"Rp 7.000.000",
    "priceCrossOut":"Rp 14.000.000",
    "product_update":"assets/images/our_products/Label_50_percent.png"
},{
    "picture":"assets/images/our_products/Product_Potty.png",
    "name":"Potty",
    "productSortDiscription":"Minimalist flower pot",
    "price":"Rp 550.000",
    "priceCrossOut":"0",
    "product_update":"assets/images/our_products/Label_new.png"
}];

const btnShare = document.querySelectorAll("input.btn_share");
const btnLike = document.querySelectorAll("input.btn_like");
let arrayLikes = []; //массив лайков
let cartArray = []; //массив товаров в корзине
let cartPriceArray = []; //массив цен для корзины

function shareViaWhatsapp(productName) {
    window.open(
        "https://web.whatsapp.com://send?text=" + productName,
        // This is what makes it 
        // open in a new window.
        '_blank'
    );
}

document.addEventListener("DOMContentLoaded", function (event) {
    let massProduct = JSON.parse(JSON.stringify(massProductJSON));
    createProduct(massProduct);

    //проверка на наличие информации в localStorage
    if(localStorage.getItem('like') != null) {
        arrayLikes = JSON.parse(localStorage.getItem('like')); //формируем массив arrayLikes из данных(лайков), которые лежат в localStorage
        for(let i = 0; i < arrayLikes.length; i++){
            for(let j = 0; j < document.getElementsByClassName('btn_like').length; j++){
                if(document.getElementsByClassName('btn_like')[j].getAttribute("data-name") == arrayLikes[i]){ //если совпадение нашей коллекции и arrayLikes найдены
                    document.getElementsByClassName('btn_like')[j].classList.toggle("btn_like_red"); //меняем цвет                  
                }
            }        
        }
    }
});

function createProduct(massProduct){//ф-ия по созданию элементов на странице html
    for (let i=0; i < massProduct.length; i++){
        let gallery = document.getElementById('gallery');

        let divGallery = document.createElement('div');
        divGallery.className = "img__tooltip gallery__item";
        gallery.appendChild(divGallery);

        let imgProduct = document.createElement('img');
        imgProduct.className = "gallery__img";
        imgProduct.src = massProduct[i].picture;
        imgProduct.alt = "Image Product";
        divGallery.appendChild(imgProduct);

        let divBgr = document.createElement('div');
        divBgr.className = "img_bgr_product";
        imgProduct.after(divBgr);

        let line1 = document.createElement('p');
        line1.className = "product_name";
        line1.textContent = massProduct[i].name;
        divBgr.appendChild(line1);

        let line2 = document.createElement('p');
        line2.className = "product_sort_discription";
        line2.textContent = massProduct[i].productSortDiscription;
        line1.after(line2);

        let divPrc = document.createElement('div');
        divPrc.className = "price";
        line2.after(divPrc)

        if( massProduct[i].price != undefined ){
            let line3 = document.createElement('p');
            line3.className = "product_price";
            line3.textContent = massProduct[i].price;
            divPrc.appendChild(line3);
        
            let line4 = document.createElement('p');
            line4.className = "product_price_cross_out";
            line4.textContent = " ";
            line3.after(line4);
        } else {
            let line4 = document.createElement('p');
            line4.className = "product_price_sale";
            line4.textContent = massProduct[i].priceSale;
            divPrc.appendChild(line4);
            
            let line5 = document.createElement('p');
            line5.className = "product_price_cross_out";
            line5.textContent = massProduct[i].priceCrossOut;
            line4.after(line5);
        }

        if( massProduct[i].product_update != undefined ){
            let imgLable = document.createElement('img');
            imgLable.className = "label_img";
            imgLable.src = massProduct[i].product_update;
            imgLable.alt = "label";
            divGallery.appendChild(imgLable);
        }

        let divShadow = document.createElement('div');
        divShadow.className = "tooltip overlay_all_btn";
        divGallery.appendChild(divShadow);

        let bdt = document.createElement('button');
        bdt.className = "bdt_add_product";
        bdt.value = massProduct[i].name;
        bdt.setAttribute("data-price", ((massProduct[i].price != undefined) ? massProduct[i].price : massProduct[i].priceSale));
        bdt.textContent = "Add to cart";
        divShadow.appendChild(bdt);

        //слушатель для кнопки Add to cart, при её нажатии вызывает ф-ию addToCart
        bdt.addEventListener("click", addToCart); 

        let divOverlay = document.createElement('div');
        divOverlay.className = "overlay_btn_shake_like";
        bdt.after(divOverlay);

        let line6 = document.createElement('p');
        divOverlay.appendChild(line6);

        let input1 = document.createElement('input');
        input1.className = "btn_share";
        input1.type = "image";
        input1.src = "assets/images/our_products/Share.png";
        input1.alt = "Share";
        input1.value = massProduct[i].name;
        line6.appendChild(input1);

        //слушатель для кнопки Share, при её нажатии вызывает ф-ию bdtDetailedInfo
        input1.addEventListener("click", bdtShareProduct); 

        let line7 = document.createElement('p');
        divOverlay.appendChild(line7);
        
        let input2 = document.createElement('input');
        input2.className = "btn_like";
        input2.type = "image";
        input2.src = "assets/images/our_products/Like.png";
        input2.alt = "Like";
        input2.setAttribute("data-name", massProduct[i].name);
        // input2.value = massProduct[i].name;
        line7.appendChild(input2);

        //слушатель для кнопки Лайк "❤", при её нажатии вызывает ф-ию buttonLikeGet
        input2.addEventListener("click", buttonLikeProduct);
    }
}

function bdtShareProduct(event){//срабатывает при нажатии на кнопку Share
    window.navigator.clipboard.writeText(event.target.closest(".btn_share").value);
    let productName = `${event.target.closest(".btn_share").value}`;
    Swal.fire(
        "Скопировано, в буфер!", 
        `Название товара ${productName}`
    );
    shareViaWhatsapp(productName);
}

function buttonLikeProduct(event){//срабатывает при нажатии на кнопку Like
    let button = event.target.closest(".btn_like");
    if (button.classList.contains("btn_like_red")) {
        button.classList.remove("btn_like_red");
        arrayLikes.pop(event.target.getAttribute("data-name"));
    } else {
        button.classList.add("btn_like_red");
        arrayLikes.push(event.target.getAttribute("data-name"));
    }
    localStorage.setItem('like', JSON.stringify(arrayLikes));
}

function addToCart(event){//срабатывает при нажатии на кнопку Add to card
    // console.log("кнопка добавить с записью в локал");
    // console.log(cartArray);
    if(localStorage.getItem('cart') == null){
        cartArray.push(event.target.value);
        console.log(cartArray);
        localStorage.setItem('cart', JSON.stringify(cartArray));
        cartPriceArray.push(event.target.getAttribute("data-price"));
        localStorage.setItem('price', JSON.stringify(cartPriceArray));
        Swal.fire(
            `Товар добавлен в корзину! ${event.target.value}`
        );    
    } else if(localStorage.getItem('cart') != null) {
        cartArray = JSON.parse(localStorage.getItem('cart'));
        cartPriceArray = JSON.parse(localStorage.getItem('price'));
        cartArray.push(event.target.value);
        // console.log(cartArray);
        localStorage.setItem('cart', JSON.stringify(cartArray));
        cartPriceArray.push(event.target.getAttribute("data-price"));
        localStorage.setItem('price', JSON.stringify(cartPriceArray));
        Swal.fire(
            `Товар добавлен в корзину! ${event.target.value}`
        );
    }
}

document.querySelector('.busket').addEventListener('click', function (event) {
    let itemsCount = 0;
    let itemsMass = [];
    let priceMass = [];
    let message = "Ваша корзина пуста";
    if(localStorage.getItem('cart') != null){
        itemsCount = JSON.parse(localStorage.getItem('cart')).length;
        itemsMass = JSON.parse(localStorage.getItem('cart'));
        priceMass = JSON.parse(localStorage.getItem('price'));
        // console.log(priceMass);
    }
    if(itemsCount == 0) {
        message = `Ваша корзина пуста`;
        Swal.fire(message);
    } else if (itemsCount % 10 == 1 && itemsCount % 100 != 11) {
        message = `В вашей корзине ${itemsCount} товар ${writeProducts(itemsMass, priceMass)}`;
        Swal.fire(message + `Общая стоимость:\n Rp ${writeSum(priceMass)} `);
    } else if ((itemsCount % 10 == 2 && itemsCount % 100 != 12) || (itemsCount % 10 == 3 && itemsCount % 100 != 13)) {
        message = `В вашей корзине ${itemsCount} товара ${writeProducts(itemsMass, priceMass)}`;
        Swal.fire(message + `Общая стоимость:\n Rp ${writeSum(priceMass)} `);
    } else {
        message = `В вашей корзине ${itemsCount} товаров ${writeProducts(itemsMass, priceMass)}`;
        Swal.fire(message + `Общая стоимость:\n Rp ${writeSum(priceMass)} `);
    }
    
});

function writeProducts(itemsMass, priceMass) {
    let strProducts = '';
    for(let i = 0; i < itemsMass.length; i++){
        strProducts = strProducts + itemsMass[i] + '&nbsp' + '&nbsp' + 'Rp ' + priceMass[i].replace(/[^0-9\s]/g, '') + '\n';
    }
    return strProducts;
}

function writeSum(priceMass) {
    let sumPrice1;
    let changePriceMass1 = [];
    let changePriceMass2 = [];
    for(let i = 0; i < priceMass.length; i++){
        sumPrice1 = priceMass[i] + sumPrice1;//формирование строки цен состоящей из букв, цифр и пробелов
    }
    let sumPrice2 = sumPrice1.replace(/[^0-9\s]/g, '').trim(); //удалила всё кроме цен и пробелов между ценами
    changePriceMass1 = sumPrice2.split(' '); //преобразование в массив строк из цен
    changePriceMass2 = changePriceMass1.map(Number); //преобразование в массив чисел из цен
    let sumPrise3 = 0;
    for(let i = 0; i < changePriceMass2.length; i++){
        sumPrise3 = sumPrise3 + changePriceMass2[i]; //сложение всех цен
    }
    return sumPrise3;
}
