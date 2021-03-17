let body1 = document.querySelector(".body1");
let body2 = document.querySelector(".body2");

function cambiarPantalla() {

    if (body1.style.display == "block") {
        body1.style.display = "none"
    }
    if (body2.style.display == "none") {
        body2.style.display = "block"
    }
    console.log(pedido);
}

function retorno() {

    if (body2.style.display == "block") {
        body2.style.display = "none"
    }
    if (body1.style.display == "none") {
        body1.style.display = "block";
    }

    dishes2 = "";
    pintarMenu();
    eliminarFiltro();
}


function eliminarFiltro() {
    let categorias = document.querySelectorAll(".contenedorCategorias")
    let textoCategoria = document.querySelectorAll(".textoCategorias")
    let imagenCategoria = document.querySelectorAll(".contenedorCategoriasImg")


    categorias.forEach(cat => cat.classList.remove('contenedorCategoriasClick'))
    textoCategoria.forEach(txt => txt.classList.remove('textoCategoriasClick'))
    imagenCategoria.forEach(img => img.classList.remove('contenedorCategoriasImgClick'))
}