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