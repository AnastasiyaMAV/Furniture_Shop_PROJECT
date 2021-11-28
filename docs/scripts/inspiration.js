let arrayImg = [
    "/assets/images/inspiration/Rectangle25.png",
    "/assets/images/inspiration/22-10.jpeg",
    "/assets/images/inspiration/22-11.jpeg"
] // массив картинок

let counter = -1; // Счетчик, указывающий на текущую картинки

function changeImgNext() { //функция кнопки 
    let img = document.getElementById("room"); // ищем картинку
    if (counter < arrayImg.length - 1) //
        counter++;
    else {
        counter = 0; //
    }
    img.src = arrayImg[counter]; // устанавливает картинку по индексу каунтер
}


function changeImgPrev() { //функция кнопки 
    let img = document.getElementById("room"); // ищем картинку
    if (counter > 0) //
        counter--;
    else {
        counter = arrayImg.length - 1; //
    }
    img.src = arrayImg[counter]; // устанавливает картинку по индексу каунтер
}