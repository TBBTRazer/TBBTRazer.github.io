/*const btnDepartamentos = document.getElementById('btn-departamentos'),
	  grid = document.getElementById('grid'),
	  contenedorEnlacesNav = document.querySelector('#menu .contenedor-enlaces-nav'),
	  contenedorSubCategorias = document.querySelector('#grid .contenedor-subcategorias'),
	  esDispositivoMovil = () => window.innerWidth <= 930;

btnDepartamentos.addEventListener('mouseover', () => {
	if(!esDispositivoMovil()){
		grid.classList.add('activo');
	}
});

grid.addEventListener('mouseleave', () => {
	if(!esDispositivoMovil()){
		grid.classList.remove('activo');
	}
});

document.querySelectorAll('#menu .categorias a').forEach((elemento) => {
	elemento.addEventListener('mouseenter', (e) => {
		if(!esDispositivoMovil()){
			document.querySelectorAll('#menu .subcategoria').forEach((categoria) => {
				categoria.classList.remove('activo');
				if(categoria.dataset.categoria == e.target.dataset.categoria){
					categoria.classList.add('activo');
				}
			});
		};
	});
});

// EventListeners para dispositivo movil.
document.querySelector('#btn-menu-barras').addEventListener('click', (e) => {
	e.preventDefault();
	if(contenedorEnlacesNav.classList.contains('activo')){
		contenedorEnlacesNav.classList.remove('activo');
		document.querySelector('body').style.overflow = 'visible';
	} else {
		contenedorEnlacesNav.classList.add('activo');
		document.querySelector('body').style.overflow = 'hidden';
	}
});

// Click en boton de todos los departamentos (Para version movil).
btnDepartamentos.addEventListener('click', (e) => {
	e.preventDefault();
	grid.classList.add('activo');
});

// Boton de regresar en el menu de categorias
document.querySelector('#grid .categorias .btn-regresar').addEventListener('click', (e) => {
	e.preventDefault();
	grid.classList.remove('activo');
});

document.querySelectorAll('#menu .categorias a').forEach((elemento) => {
	elemento.addEventListener('click', (e) => {
		if(esDispositivoMovil()){
			contenedorSubCategorias.classList.add('activo');
			document.querySelectorAll('#menu .subcategoria').forEach((categoria) => {
				categoria.classList.remove('activo');
				if(categoria.dataset.categoria == e.target.dataset.categoria){
					categoria.classList.add('activo');
				}
			});
		}
	});
});

// Boton de regresar en el menu de categorias
document.querySelectorAll('#grid .contenedor-subcategorias .btn-regresar').forEach((boton) => {
	boton.addEventListener('click', (e) => {
		e.preventDefault();
		contenedorSubCategorias.classList.remove('activo');
	});
});
*/

const btnDepartamentos = document.getElementById('btn-departamentos'),
      grid = document.getElementById('grid'),
      contenedorEnlacesNav = document.querySelector('#menu .contenedor-enlaces-nav'),
      contenedorSubCategorias = document.querySelector('#grid .contenedor-subcategorias'),
      esDispositivoMovil = () => window.innerWidth <= 930;

// Función para manejar el scroll en el contenedor de enlaces del menú
const habilitarScrollEnMenu = () => {
    if (esDispositivoMovil()) {
        contenedorEnlacesNav.style.overflowY = 'auto';
        contenedorEnlacesNav.style.maxHeight = 'calc(100vh - 50px)'; // Ajusta este valor según el alto que quieras dejar para el menú
    } else {
        contenedorEnlacesNav.style.overflowY = 'hidden';
        contenedorEnlacesNav.style.maxHeight = ''; // Restablecer al valor predeterminado
    }
};

// Llamar a la función de scroll en el evento resize
window.addEventListener('resize', habilitarScrollEnMenu);
habilitarScrollEnMenu(); // Llamar una vez al cargar la página

btnDepartamentos.addEventListener('mouseover', () => {
    if (!esDispositivoMovil()) {
        grid.classList.add('activo');
    }
});

grid.addEventListener('mouseleave', () => {
    if (!esDispositivoMovil()) {
        grid.classList.remove('activo');
    }
});

document.querySelectorAll('#menu .categorias a').forEach((elemento) => {
    elemento.addEventListener('mouseenter', (e) => {
        if (!esDispositivoMovil()) {
            document.querySelectorAll('#menu .subcategoria').forEach((categoria) => {
                categoria.classList.remove('activo');
                if (categoria.dataset.categoria == e.target.dataset.categoria) {
                    categoria.classList.add('activo');
                }
            });
        }
    });
});

// EventListeners para dispositivo movil
document.querySelector('#btn-menu-barras').addEventListener('click', (e) => {
    e.preventDefault();
    if (contenedorEnlacesNav.classList.contains('activo')) {
        contenedorEnlacesNav.classList.remove('activo');
        document.querySelector('body').style.overflow = 'visible';
    } else {
        contenedorEnlacesNav.classList.add('activo');
        document.querySelector('body').style.overflow = 'hidden';
    }
});

// Click en boton de todos los departamentos (Para versión móvil)
btnDepartamentos.addEventListener('click', (e) => {
    e.preventDefault();
    grid.classList.add('activo');
});

// Botón de regresar en el menú de categorías
document.querySelector('#grid .categorias .btn-regresar').addEventListener('click', (e) => {
    e.preventDefault();
    grid.classList.remove('activo');
});

document.querySelectorAll('#menu .categorias a').forEach((elemento) => {
    elemento.addEventListener('click', (e) => {
        if (esDispositivoMovil()) {
            contenedorSubCategorias.classList.add('activo');
            document.querySelectorAll('#menu .subcategoria').forEach((categoria) => {
                categoria.classList.remove('activo');
                if (categoria.dataset.categoria == e.target.dataset.categoria) {
                    categoria.classList.add('activo');
                }
            });
        }
    });
});

// Botón de regresar en el menú de subcategorías
document.querySelectorAll('#grid .contenedor-subcategorias .btn-regresar').forEach((boton) => {
    boton.addEventListener('click', (e) => {
        e.preventDefault();
        contenedorSubCategorias.classList.remove('activo');
    });
});

// Cerrar el menú al hacer clic fuera de él
document.addEventListener('click', (e) => {
    if (esDispositivoMovil() && !contenedorEnlacesNav.contains(e.target) && !document.querySelector('#btn-menu-barras').contains(e.target)) {
        contenedorEnlacesNav.classList.remove('activo');
        document.querySelector('body').style.overflow = 'visible';
    }
});

