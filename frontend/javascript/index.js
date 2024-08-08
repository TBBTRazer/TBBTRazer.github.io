const contenedorArticulos = document.getElementById("lista-productos");

function crearGridArticulos(productos){
    productos.forEach(producto => {
        const nuevoArticulo = document.createElement("div");
        nuevoArticulo.innerHTML = `
            <a href=${producto.link}><img src=${producto.img}></a>
                <div class="info">
                    <h3>${producto.nombre}</h3>
                    <p>${producto.descripcion}</p>
                    <div class="precio">
                        <p>$${producto.precio}</p>
                </div>
            <button class="agregar-carrito">Agregar al carrito</button>
            <button class="comprar">Comprar</button>
        `
        contenedorArticulos.appendChild(nuevoArticulo);
        nuevoArticulo.getElementsByTagName("button")[0].addEventListener("click", ()=> agregarAlCarrito(producto))
    });
}


crearGridArticulos(articulosVarios);

//CART
const contenedorProductos = document.getElementById("lista_de_productos");
const unidadesElement = document.getElementById("unidades");
const precioElement = document.getElementById("precio");
const vaciarCarritoElement = document.getElementById("vaciar");
const totalesElement = document.getElementById("totales");

function crearCartArticulos(){
   contenedorProductos.innerHTML = "";
   const productos = JSON.parse(localStorage.getItem("articulosVarios"));
   console.log(productos)
   if(productos && productos.length > 0) {
      productos.forEach(producto => {
        const nuevoArticulo = document.createElement("div");
        nuevoArticulo.innerHTML = `
            <div class="tarjeta-producto">
               <img src=${producto.img}>
               <h3>${producto.nombre}</h3>
               <p>$${producto.precio}</p>
               <div class="contador">
                  <button class"contadores">-</button>
                  <span class="cantidad">${producto.cantidad}</span>
                  <button class"contadores">+</button>
                  <button class="elimina"><span class="ico icotrash-can1 borrar-producto"></span></button>
               </div>
            </div>
        `
        contenedorProductos.appendChild(nuevoArticulo);
        nuevoArticulo.getElementsByTagName("button")[1].addEventListener("click", (e)=> {
         const cuentaElement = e.target.parentElement.getElementsByTagName("span")[0];
         cuentaElement.innerText = agregarAlCarrito(producto);
         actualizarTotales();
      });
        nuevoArticulo.getElementsByTagName("button")[0].addEventListener("click", (e)=> {
         restarAlCarrito(producto);
         crearCartArticulos();
         actualizarTotales();
      });
        nuevoArticulo.getElementsByTagName("button")[2].addEventListener("click", () => {
        eliminarDelCarrito(producto);
        crearCartArticulos();
        actualizarTotales();
    });
    });
}
}

crearCartArticulos();
actualizarTotales();


function actualizarTotales(){
   const productos = JSON.parse(localStorage.getItem("articulosVarios"));
   let unidades = 0;
   let precio = 0;
   if(productos && productos.length>0){
      productos.forEach(producto =>{
         unidades += producto.cantidad;
         precio += producto.precio * producto.cantidad;
      })
      unidadesElement.innerText = unidades;
      precioElement.innerText = precio;
   }

}

function inicializarCarrito(){
    const productos = JSON.parse(localStorage.getItem("articulosVarios")) || [];
    if (productos.length === 0) {
        unidadesElement.innerText = 0;
        precioElement.innerText = "0.00";
    }
    crearCartArticulos();
    actualizarTotales();
}

// Llamar a la inicialización del carrito
inicializarCarrito();



vaciarCarritoElement.addEventListener("click",vaciarCarrito);
function vaciarCarrito(){
   localStorage.removeItem("articulosVarios");
   actualizarTotales();
   crearCartArticulos();
   actualizarNumeroCarrito();
   inicializarCarrito();

}

function eliminarDelCarrito(productoSeleccionado) {
    let productos = JSON.parse(localStorage.getItem("articulosVarios"));
    const productoEliminado = productos.findIndex(producto => producto.nombre === productoSeleccionado.nombre);
    if (productoEliminado !== -1) {
        productos.splice(productoEliminado, 1);
        localStorage.setItem("articulosVarios", JSON.stringify(productos));
    }
    actualizarTotales();
    crearCartArticulos();
    actualizarNumeroCarrito();
    inicializarCarrito();
}

