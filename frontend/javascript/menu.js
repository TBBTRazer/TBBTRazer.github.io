//Menu-hamburguer

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu');
    const navUl = document.getElementById('nav-ul');

    menuToggle.addEventListener('click', function (event) {
        event.stopPropagation(); // Evitar que el clic se propague al documento
        // Toggle la clase 'show' para abrir o cerrar el menú
        navUl.classList.toggle('show');
    });

    document.addEventListener('click', function (event) {
        // Cerrar el menú si se hace clic fuera de él y del botón de menú
        if (navUl.classList.contains('show') && !navUl.contains(event.target) && event.target !== menuToggle) {
            navUl.classList.remove('show');
        }
    });
});



//Cart-mobile

function toggleCart() {
    var cart = document.getElementById('cart');
    if (cart.style.display === '' || cart.style.display === 'none') {
        cart.style.display = 'block';
    } else {
        cart.style.display = 'none';
    }
}



