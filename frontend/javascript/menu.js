//Menu-hamburguer
$(document).ready(function() {
    function checkWindowSize() {
        if ($(Window).width() <= 768) {
            // Ocultar los submenús inmediatamente después de que se cargue el documento
            $(".submenu ul").hide();

            // Agregar el evento de clic a los elementos .submenu
            $(".submenu").click(function() {
                // Desplegar o ocultar el submenú correspondiente con una transición
                $(this).children("ul").slideToggle('slow'); // Puedes ajustar la velocidad ('fast', 'slow', o un número en milisegundos)
            });

            // Evitar que el clic en los elementos ul propague hacia arriba
            $("ul").click(function(stop) {
                stop.stopPropagation();
            });

            // Cerrar todos los submenús si se hace clic fuera del contenedor #nav-ul
            $(document).click(function(event) {
                if (!$(event.target).closest('#nav-ul').length) {
                    $(".submenu ul").slideUp('slow');
                }
            });
        } else {
            // Si el tamaño de la ventana es mayor que 768px, no hacemos nada
            // Aquí podrías revertir cualquier acción que hayas realizado para tamaños menores a 768px, si es necesario
        }
    }

    // Llamar a la función checkWindowSize al cargar la página y al redimensionar la ventana
    checkWindowSize();
    $(Window).resize(checkWindowSize);
});




//Cart-mobile

$(document).ready(function () {
    $(window).resize(function () {
        if ($(Window).width() <= 768) {
            $(function(){
                $(document).on("click",function(e) {
                   var hideCarrito = $("#cart");       
                         if (!hideCarrito.is(e.target) && hideCarrito.has(e.target).length === 0) { 
                        hideCarrito.slideUp();                            
                        }
                 });
            
                $("#img-carrito").on("click", function(event){
                    $("#cart").slideToggle();
                    event.stopImmediatePropagation();
                });
            });
        } 
    });
});


