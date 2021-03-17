let home = document.querySelector(".icoHome .homeSeleccionado")


let listaProductos = [{
        nombre: "Tipo Macetero",
        descripcion: "Precio base",
        precio: 20.00,
        img: "./img/tipos/tipoMaceta.jpg",
        id: 0,
        cantidad: 0,
        cat: "Maceta"
    },
    {
        nombre: "Tipo Repisa",
        descripcion: "Precio base",
        precio: 30.00,
        img: "./img/tipos/tipoRepisa.jpg",
        id: 1,
        cantidad: 0,
        cat: "Repisa"
    },
    {
        nombre: "Tipo Pared",
        descripcion: "Precio base",
        precio: 35.00,
        img: "./img/tipos/tipoColgante.jpg",
        id: 2,
        cantidad: 0,
        cat: "Pared"
    },
    {
        nombre: "Tipo Posavasos",
        descripcion: "Precio base",
        precio: 20.00,
        img: "./img/tipos/tipoPosavasos.jpg",
        id: 3,
        cantidad: 0,
        cat: "Posavasos"
    },
    {
        nombre: "Tipo Joyería",
        descripcion: "Precio base",
        precio: 15.50,
        img: "./img/tipos/tipoJoyeria.jpg",
        id: 4,
        cantidad: 0,
        cat: "Joyeria"
    },
];



function pintarMenu() {
    home.classList.add('homeSeleccionado')
    console.log(home);
    let producto = "";
    for (let i = 0; i < listaProductos.length; i++) {
        producto += `<div class="infoProductos ${listaProductos[i].cat}" data-numero="${listaProductos[i].id}">
    <img class="mainImg" src="${listaProductos[i].img}">
    <div class="infoDetalle">
        <h4>${listaProductos[i].nombre}</h4>
        <p class="price">${listaProductos[i].precio}€</p>
        <p>${listaProductos[i].descripcion}</p>
        <div class="counter">
            <button class="counterLeft" onclick="disminuir(this)">-</button>
            <p id="visor" class="visor">${listaProductos[i].cantidad}</p>
            <button class="counterRight" onClick="aumentar(this)">+</button>
            <img class="readMore" src="./img/readMore.svg" onclick="readMore()">
        </div>
    </div>
</div>`
    }

    document.querySelector(".productos").innerHTML = producto;

}

pintarMenu();


function reinicio() {
    pintarMenu();

    let categorias = document.querySelectorAll(".contenedorCategorias")
    let textoCategoria = document.querySelectorAll(".textoCategorias")
    let home = document.querySelector(".icoHome .homeSeleccionado")

    categorias.forEach(cat => cat.classList.remove('contenedorCategoriasClick'))
    textoCategoria.forEach(txt => txt.classList.remove('textoCategoriasClick'))
}

function readMore() {
    alert("Cada diseño de Enfiladissa Macramé es único, artesanal y personalizado, el precio depende del tamaño y extras, contáctame para más información...");
}