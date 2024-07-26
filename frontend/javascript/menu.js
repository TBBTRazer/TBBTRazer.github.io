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
    var cartButton = document.getElementById('img-carrito'); // Supongamos que 'cart-button' es el botón o elemento que abre el carrito

    // Mostrar el carrito al hacer clic en el botón
    if (cart.style.display === '' || cart.style.display === 'none') {
        cart.style.display = 'block';

        // Agregar un event listener al documento para cerrar el carrito al hacer clic fuera de él
        document.addEventListener('click', closeCartOutsideClick);
    } else {
        cart.style.display = 'none';

        // Remover el event listener cuando se cierra el carrito
        document.removeEventListener('click', closeCartOutsideClick);
    }

    // Función para cerrar el carrito si se hace clic fuera de él
    function closeCartOutsideClick(event) {
        // Verificar si el clic no fue dentro del carrito ni en el botón que lo abre
        if (!cart.contains(event.target) && event.target !== cartButton && !event.target.closest('.tarjeta-producto')) {
            cart.style.display = 'none';
            document.removeEventListener('click', closeCartOutsideClick);
        }
    }
}















