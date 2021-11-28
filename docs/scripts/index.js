document.querySelector('.busket').addEventListener('click', function (event) {
    let itemsCount = 0;
    let message = "Ваша корзина пуста";
    if (localStorage.getItem('cart') != null) {
        itemsCount = JSON.parse(localStorage.getItem('cart')).length;
    }
    if (itemsCount == 0) {
        message = `Ваша корзина пуста`;
    }
    else if (itemsCount % 10 == 1 && itemsCount % 100 != 11) {
        message = `В вашей корзине ${itemsCount} товар`;
    }
    else if ((itemsCount % 10 == 2 && itemsCount % 100 != 12) || (itemsCount % 10 == 3 && itemsCount % 100 != 13)) {
        message = `В вашей корзине ${itemsCount} товара`;
    } else {
        message = `В вашей корзине ${itemsCount} товаров`;
    }
    Swal.fire(message);
});
