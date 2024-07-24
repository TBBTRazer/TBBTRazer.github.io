$(".submenu").click(function() {
    $(this).children("ul").slideToggle();
})

$("ul").click(function(stop) {
    stop.stopPropagation();
    
})



//Ocultar/Mostrar

/*const hideButton = document.getElementById('img-carrito');

hideButton.addEventListener('click', () => {
    let hideCarrito = document.getElementById('cart');
    let currentDisplay = hideCarrito.style.display;

    if (currentDisplay === 'none') {
        hideCarrito.style.display = 'block'
    } else {
        hideCarrito.style.display = 'none';
    }

    
})*/

$(function(){
    //oculta al hacer click fuera del elemento
    
    $(document).on("click",function(e) {
       var hideCarrito = $("#cart");       
             
            if (!hideCarrito.is(e.target) && hideCarrito.has(e.target).length === 0) 
               
                { 
            //Se ha pulsado en cualquier lado fuera de los elementos contenidos en la variable cart
            hideCarrito.slideUp();               
                           
            }
     });

    //Muestra elemento 
    $("#img-carrito").on("click", function(event){
        $("#cart").slideToggle();
        event.stopImmediatePropagation();
    });


});



