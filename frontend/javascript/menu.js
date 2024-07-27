//Menu-hamburguer

/*document.addEventListener('DOMContentLoaded', function () {
    // Función para inicializar el comportamiento del menú
    function inicializarMenu() {
        const menuToggle = document.getElementById('menu');
        const navUl = document.getElementById('nav-ul');

        // Manejo del clic en el botón de menú
        menuToggle.addEventListener('click', function (event) {
            event.stopPropagation();
            navUl.classList.toggle('show');
        });

        // Manejo del clic en el documento para cerrar el menú
        document.addEventListener('click', function (event) {
            if (navUl.classList.contains('show') && 
                !navUl.contains(event.target) && event.target !== menuToggle) {
                navUl.classList.remove('show');
                // Cerrar todos los submenús al cerrar el contenedor principal
                $('.submenu ul').slideUp();
            }
        });

        // Manejo del clic en los submenús
        $(".submenu").click(function(event){
            event.stopPropagation();
            // Cerrar otros submenús
            $(this).siblings('.submenu').children('ul').slideUp();
            // Alternar el submenú actual
            $(this).children("ul").slideToggle();
        });

        // Evitar el cierre del menú al hacer clic en cualquier `ul` dentro del `#nav-ul`
        $("ul").click(function(event){
            event.stopPropagation();
        });
    }

    // Función para manejar el redimensionamiento de la ventana
    function manejarRedimensionamiento() {
        if (window.innerWidth < 768) {
            // Inicializar el menú solo si el ancho de la ventana es menor a 768 píxeles
            inicializarMenu();
        }
    }

    // Ejecutar la función cuando la página se carga
    manejarRedimensionamiento();

    // Ejecutar la función cuando la ventana cambia de tamaño
    window.addEventListener('resize', manejarRedimensionamiento);
});
*/

document.addEventListener('DOMContentLoaded', function () {
    // Función para inicializar el comportamiento del menú
    function inicializarMenu() {
        const menuToggle = document.getElementById('menu');
        const navUl = document.getElementById('nav-ul');

        // Manejo del clic en el botón de menú
        menuToggle.addEventListener('click', function (event) {
            event.stopPropagation(); // Evita que el clic se propague al documento
            navUl.classList.toggle('show');
        });

        // Manejo del clic en el documento para cerrar el menú
        document.addEventListener('click', function (event) {
            if (navUl.classList.contains('show') &&
                !navUl.contains(event.target) &&
                event.target !== menuToggle) {
                navUl.classList.remove('show');
                // Cerrar todos los submenús al cerrar el contenedor principal
                $('.submenu ul').slideUp();
            }
        });

        // Manejo del clic en los submenús
        $(".submenu").click(function(event){
            event.stopPropagation(); // Evita que el clic se propague al documento
            // Cerrar otros submenús
            $(this).siblings('.submenu').children('ul').slideUp();
            // Alternar el submenú actual
            $(this).children("ul").slideToggle();
        });

        // Evitar el cierre del menú al hacer clic en cualquier `ul` dentro del `#nav-ul`
        $("ul").click(function(event){
            event.stopPropagation(); // Evita que el clic se propague al documento
        });
    }

    // Función para manejar el redimensionamiento de la ventana
    function manejarRedimensionamiento() {
        if (window.innerWidth < 768) {
            // Inicializar el menú solo si el ancho de la ventana es menor a 768 píxeles
            inicializarMenu();
        }
    }

    // Ejecutar la función cuando la página se carga
    manejarRedimensionamiento();

    // Ejecutar la función cuando la ventana cambia de tamaño
    window.addEventListener('resize', manejarRedimensionamiento);
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

//Cart

/*function toggleCart() {
    // Verificar si el ancho de la pantalla es igual o inferior a 768 píxeles
    if (window.innerWidth <= 768) {
        var cart = document.getElementById('cart');
        var cartButton = document.getElementById('img-carrito'); // Supongamos que 'img-carrito' es el botón o elemento que abre el carrito
        var navUl = document.getElementById('nav-ul'); // Asegúrate de tener esta referencia aquí también

        // Mostrar el carrito al hacer clic en el botón
        if (cart.style.display === '' || cart.style.display === 'none') {
            cart.style.display = 'block';
            
            // Asegurarse de que el menú esté cerrado
            if (navUl && navUl.classList.contains('show')) {
                navUl.classList.remove('show');
                $('.submenu ul').slideUp();
            }

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

//Menu-hamburguer

document.addEventListener('DOMContentLoaded', function () {
    // Función para inicializar el comportamiento del menú
    function inicializarMenu() {
        const menuToggle = document.getElementById('menu');
        const navUl = document.getElementById('nav-ul');

        // Manejo del clic en el botón de menú
        menuToggle.addEventListener('click', function (event) {
            event.stopPropagation(); // Evita que el clic se propague al documento
            navUl.classList.toggle('show');

            // Asegurarse de que el carrito esté cerrado
            var cart = document.getElementById('cart');
            if (cart.style.display === 'block') {
                cart.style.display = 'none';
                document.removeEventListener('click', closeCartOutsideClick);
            }
        });

        // Manejo del clic en el documento para cerrar el menú
        document.addEventListener('click', function (event) {
            if (navUl.classList.contains('show') &&
                !navUl.contains(event.target) &&
                event.target !== menuToggle) {
                navUl.classList.remove('show');
                $('.submenu ul').slideUp();
            }
        });

        // Manejo del clic en los submenús
        $(".submenu").click(function(event){
            event.stopPropagation(); // Evita que el clic se propague al documento
            // Cerrar otros submenús
            $(this).siblings('.submenu').children('ul').slideUp();
            // Alternar el submenú actual
            $(this).children("ul").slideToggle();
        });

        // Evitar el cierre del menú al hacer clic en cualquier `ul` dentro del `#nav-ul`
        $("ul").click(function(event){
            event.stopPropagation(); // Evita que el clic se propague al documento
        });
    }

    // Función para manejar el redimensionamiento de la ventana
    function manejarRedimensionamiento() {
        if (window.innerWidth < 768) {
            // Inicializar el menú solo si el ancho de la ventana es menor a 768 píxeles
            inicializarMenu();
        }
    }

    // Ejecutar la función cuando la página se carga
    manejarRedimensionamiento();

    // Ejecutar la función cuando la ventana cambia de tamaño
    window.addEventListener('resize', manejarRedimensionamiento);
});
*/


















