$(".submenu").click(function() {
    $(this).children("ul").slideToggle();
})

$("ul").click(function(stop) {
    stop.stopPropagation();
    
})