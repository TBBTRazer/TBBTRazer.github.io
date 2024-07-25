//Menu-hamburguer
/*
$(".submenu").click(function() {
    $(this).children("ul").slideToggle();
});

$("ul").click(function(stop) {
    stop.stopPropagation();
});
*/
$(document).ready(function() {
    // Ocultar los submenús inmediatamente después de que se cargue el documento
    $(".submenu ul").hide();

    // Agregar el evento de click a los elementos .submenu
    $(".submenu").click(function() {
        // Desplegar o ocultar el submenú correspondiente con una transición
        $(this).children("ul").slideToggle('fast'); // Puedes ajustar la velocidad ('fast', 'slow', o un número en milisegundos)
    });

    // Evitar que el clic en los elementos ul propague hacia arriba
    $("ul").click(function(stop) {
        stop.stopPropagation();
    });
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


