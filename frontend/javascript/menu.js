//Menu-hamburguer

/*document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu');
    const navUl = document.getElementById('nav-ul');

    menuToggle.addEventListener('click', function (event) {
        event.stopPropagation();
        navUl.classList.toggle('show');
    });

    document.addEventListener('click', function (event) {
        if (navUl.classList.contains('show') && 
            !navUl.contains(event.target) && event.target !== menuToggle) {
            navUl.classList.remove('show');
        }
    });

    $(".submenu").click(function(event){
        event.stopPropagation();
        // Cerrar otros submenus
        $(this).siblings('.submenu').children('ul').slideUp();
        $(this).children("ul").slideToggle();
    });

    $("ul").click(function(event){
        event.stopPropagation();
    });
});*/

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu');
    const navUl = document.getElementById('nav-ul');

    menuToggle.addEventListener('click', function (event) {
        event.stopPropagation();
        navUl.classList.toggle('show');
    });

    document.addEventListener('click', function (event) {
        if (navUl.classList.contains('show') && 
            !navUl.contains(event.target) && event.target !== menuToggle) {
            navUl.classList.remove('show');
        }
    });

    $(".submenu").click(function(event){
        event.stopPropagation();
        // Cerrar otros submenus
        $(this).siblings('.submenu').children('ul').slideUp();
        $(this).children("ul").slideToggle();
    });

    $("ul").click(function(event){
        event.stopPropagation();
    });
});






//Cart-mobile

function toggleCart() {
    // Verificar si el ancho de la pantalla es igual o inferior a 768 píxeles
    if (window.innerWidth <= 768) {
        var cart = document.getElementById('cart');
        var cartButton = document.getElementById('img-carrito'); // Supongamos que 'img-carrito' es el botón o elemento que abre el carrito

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
}



