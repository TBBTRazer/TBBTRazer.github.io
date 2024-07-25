$(".submenu").click(function() {
    $(this).children("ul").slideToggle();
})

$("ul").click(function(stop) {
    stop.stopPropagation();
    
})


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


