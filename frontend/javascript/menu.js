
$(document).ready(function() {
    // Función para mostrar y ocultar el carrito
    function toggleCart() {
        if ($(window).width() <= 768) {
            var $cart = $('#cart');
            var $cartButton = $('#img-carrito');
            var $navUl = $('#nav-ul');

            // Mostrar el carrito al hacer clic en el botón
            if ($cart.is(':visible')) {
                $cart.hide();
                $(document).off('click', closeCartOutsideClick);
            } else {
                $cart.show();

                // Asegurarse de que el menú esté cerrado
                if ($navUl.hasClass('show')) {
                    $navUl.removeClass('show');
                    $('.submenu ul').slideUp();
                }

                // Agregar un event listener al documento para cerrar el carrito al hacer clic fuera de él
                $(document).on('click', closeCartOutsideClick);
            }

            // Función para cerrar el carrito si se hace clic fuera de él
            function closeCartOutsideClick(event) {
                if (!$(event.target).closest('#cart, #img-carrito').length) {
                    $cart.hide();
                    $(document).off('click', closeCartOutsideClick);
                }
            }
        }
    }

    // Función para inicializar el menú
    function inicializarMenu() {
        var $menuToggle = $('#menu');
        var $navUl = $('#nav-ul');

        // Manejo del clic en el botón de menú
        $menuToggle.off('click').on('click', function(event) {
            event.stopPropagation();
            $navUl.toggleClass('show');

            // Asegurarse de que el carrito esté cerrado
            var $cart = $('#cart');
            if ($cart.is(':visible')) {
                $cart.hide();
                $(document).off('click', closeCartOutsideClick);
            }
        });

        // Manejo del clic en el documento para cerrar el menú
        $(document).off('click.menu').on('click.menu', function(event) {
            if ($navUl.hasClass('show') && !$(event.target).closest('#nav-ul, #menu').length) {
                $navUl.removeClass('show');
                $('.submenu ul').slideUp();
            }
        });

        // Manejo del clic en los submenús
        $('.submenu').off('click.submenu').on('click.submenu', function(event) {
            event.stopPropagation();
            // Cerrar otros submenús
            $(this).siblings('.submenu').children('ul').slideUp();
            // Alternar el submenú actual
            $(this).children('ul').slideToggle();
        });

        // Evitar el cierre del menú al hacer clic en cualquier `ul` dentro del `#nav-ul`
        $('#nav-ul ul').off('click.ul').on('click.ul', function(event) {
            event.stopPropagation();
        });
    }

    // Función para manejar el redimensionamiento de la ventana
    function manejarRedimensionamiento() {
        if ($(window).width() < 768) {
            inicializarMenu();
        } else {
            // Aquí puedes limpiar el menú si es necesario para pantallas más grandes
            $('#nav-ul').removeClass('show');
            $('.submenu ul').slideUp();
            $(document).off('click.menu');
            $('.submenu').off('click.submenu');
            $('#nav-ul ul').off('click.ul');
        }
    }

    // Ejecutar la función cuando la página se carga
    manejarRedimensionamiento();

    // Ejecutar la función cuando la ventana cambia de tamaño
    $(window).on('resize', manejarRedimensionamiento);

    // Asignar la función toggleCart al evento de clic en el botón del carrito
    $('#img-carrito').on('click', toggleCart);

    // Manejar el desplazamiento de la página para ajustar el comportamiento del menú
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 0) {
            // Opcional: manejar cambios específicos cuando se desplaza la página
            // Por ejemplo, cerrar el menú si se está desplazando
            $('#nav-ul').removeClass('show');
            $('.submenu ul').slideUp();
        }
    });
});

