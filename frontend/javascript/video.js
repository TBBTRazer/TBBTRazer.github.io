window.onload = function() {
    var myVideo = document.getElementById("myVideo");
    var acomodarTarjetas = document.getElementById("acomodar-tarjetas2");
    var mostrarContenido = document.getElementById("contenedor-acerca-de");

    // Esperar a que el video termine
    myVideo.onended = function() {
        // Ocultar el video y mostrar la sección de tarjetas
        document.getElementById("video-container").style.display = "none";
        acomodarTarjetas.style.display = "flex";
        mostrarContenido.style.display = "block"; 
        // Muestra la sección de acomodar-tarjetas y contenido

        // Agregar el manejador de eventos para pantallas pequeñas
        if (window.innerWidth <= 1024) {
            var tarjetas = document.querySelectorAll(".card");
            tarjetas.forEach(function(tarjeta) {
                tarjeta.addEventListener("click", function() {
                    // Alterna la clase 'active' al hacer clic
                    this.classList.toggle("active");
                });
            });
        }
    };

    // Añadir manejador para redimensionar la ventana
    window.addEventListener("resize", function() {
        if (window.innerWidth <= 1024) {
            var tarjetas = document.querySelectorAll(".card");
            tarjetas.forEach(function(tarjeta) {
                tarjeta.addEventListener("click", function() {
                    // Alterna la clase 'active' al hacer clic
                    this.classList.toggle("active");
                });
            });
        }
    });
};

