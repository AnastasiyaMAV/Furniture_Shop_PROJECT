document.querySelector('.busket').addEventListener('click', function (event) {
    let itemsCount = 0;
    let itemsMass = [];
    let priceMass = [];
    let message = "Ваша корзина пуста";
    if (localStorage.getItem('cart') != null) {
        itemsCount = JSON.parse(localStorage.getItem('cart')).length;
        itemsMass = JSON.parse(localStorage.getItem('cart'));
        priceMass = JSON.parse(localStorage.getItem('price'));
        // console.log(priceMass);
    }
    if (itemsCount == 0) {
        message = `Ваша корзина пуста`;
    }
    else if (itemsCount % 10 == 1 && itemsCount % 100 != 11) {
        message = `В вашей корзине ${itemsCount} товар ${writeProducts(itemsMass, priceMass)}`;
    }
    else if ((itemsCount % 10 == 2 && itemsCount % 100 != 12) || (itemsCount % 10 == 3 && itemsCount % 100 != 13)) {
        message = `В вашей корзине ${itemsCount} товара ${writeProducts(itemsMass, priceMass)}`;
    } else {
        message = `В вашей корзине ${itemsCount} товаров ${writeProducts(itemsMass, priceMass)}`;
    }
    Swal.fire(message + `Общая стоимость:\n Rp ${writeSum(priceMass)} `);
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
