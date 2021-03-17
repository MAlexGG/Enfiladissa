let listaCategorias = [

    {
        nombre: "Maceta",
        img: "./img/slider/slider_01.jpg",
        id: 0
    },

    {
        nombre: "Maceta",
        img: "./img/slider/slider_02.jpg",
        id: 1
    },

    {
        nombre: "Pared",
        img: "./img/slider/slider_03.jpg",
        id: 2
    },

    {
        nombre: "Joyeria",
        img: "./img/slider/slider_04.jpg",
        id: 3
    },

];

let sliderCat = "";

function pintarCat() {
    for (let i = 0; i < listaCategorias.length; i++) {
        sliderCat += `<div id="contenedorCategorias" class="contenedorCategorias" onclick="filtrado(this)" data-numero="${listaCategorias[i].id}" style="border:none;">
        <img class="contenedorCategoriasImg" src="${listaCategorias[i].img}">
        <p class = "textoCategorias">${listaCategorias[i].nombre}</p>
    </div>`
    }
}

pintarCat();
document.querySelector(".categorias").innerHTML = sliderCat;