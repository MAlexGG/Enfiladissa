function filtrado(categoria) {
    categoriaTexto = categoria.querySelector("p").innerHTML;


    let producto = "";

    function pintarMenu() {
        for (let i = 0; i < listaProductos.length; i++) {
            if (categoriaTexto === listaProductos[i].cat) {
                producto += `<div class="infoProductos ${listaProductos[i].cat}" data-numero="${listaProductos[i].id}">
    <img class="mainImg" src="${listaProductos[i].img}">
    <div class="infoDetalle">
        <h4>${listaProductos[i].nombre}</h4>
        <p class="price">${listaProductos[i].precio}€</p>
        <p>${listaProductos[i].descripcion}</p>
        <div class="counter">
            <button class="counterLeft" onClick="disminuir(this)">-</button>
            <p id="visor" class="visor">${listaProductos[i].cantidad}</p>
            <button class="counterRight" onClick="aumentar(this)">+</button>
            <img class="readMore" src="./img/readMore.svg" onclick="readMore()">
        </div>
    </div>
</div>`
            }
        }
    }

    pintarMenu();
    document.querySelector(".productos").innerHTML = producto;

}


let categorias = document.querySelectorAll(".contenedorCategorias")
let imagenCategoria = document.querySelectorAll(".contenedorCategoriasImg")



categorias.forEach(category => {
    category.addEventListener('click', function(e) {
        categorias.forEach(cat => cat.classList.remove('contenedorCategoriasClick'))
        this.classList.add('contenedorCategoriasClick')
        imagenCategoria.forEach(img => img.classList.remove('contenedorCategoriasImgClick'))
        this.childNodes[1].classList.add('contenedorCategoriasImgClick')
        home.classList.remove('homeSeleccionado')

    })
})