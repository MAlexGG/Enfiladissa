let pedido = ["Pedido:  "];
let numeroEmpresa = 34675497944;

function pintarCarrito() {
    let producto2 = "";
    for (let i = 0; i < carrito.length; i++) {
        producto2 += `<div class="infoProductos ${carrito[i].cat}" data-numero="${carrito[i].id}">
        <img class="mainImg" src="${carrito[i].img}">
        <div class="infoDetalle">
            <h4>${carrito[i].nombre}</h4>
            <p class="price">${carrito[i].precio}€</p>
            <p>${carrito[i].descripcion}</p>
            <div class="counter">
                <button class="counterLeft" onclick="restar(this)">-</button>
                <p id="visor" class="visor">${carrito[i].cantidad}</p>
                <button class="counterRight" onClick="sumar(this)">+</button>
                <img class="readMore" src="./img/readMore.svg" onclick="readMore()">
            </div>
        </div>
    </div>`
    }
    document.querySelector(".productos2").innerHTML = producto2;
}

function sumar(elemento) {
    let padre = elemento.parentElement
    let textoContador = padre.querySelector("p")
    let bisabuela = padre.parentElement.parentElement
    let bisabuelaId = bisabuela.dataset.numero
    let index = carrito.find(element => element.id == bisabuelaId)
    let indexNumber = carrito.indexOf(index)
    let aumentarCantidad = carrito[indexNumber].cantidad
    aumentarCantidad++
    textoContador.innerHTML = aumentarCantidad

    carrito[indexNumber].cantidad = aumentarCantidad;

    sumarSubtotal();
}

function restar(elemento) {
    let padre = elemento.parentElement;
    let textoContador = padre.querySelector('p');
    let bisabuela = padre.parentElement.parentElement
    let bisabuelaId = bisabuela.dataset.numero
    let index = carrito.find(element => element.id == bisabuelaId)
    let indexNumber = carrito.indexOf(index)
    let disminuirCantidad = carrito[indexNumber].cantidad

    if (disminuirCantidad > 0) {
        disminuirCantidad--;
    }

    textoContador.innerHTML = disminuirCantidad

    carrito[indexNumber].cantidad = disminuirCantidad;


    if (carrito[indexNumber].cantidad == 0) {
        carrito.splice(indexNumber, 1)
        bisabuela.innerHTML = "";
    }
    sumarSubtotal();
}

function enviarCarrito() {
    cambiarPantalla();
    pintarCarrito();
    sumarSubtotal();
}

function continuarPedido() {
    let form = document.querySelector(".cajaFormulario");

    if (form.style.display == "none") {
        form.style.display = "flex";
    }
}

function cancelarPedido() {
    let form = document.querySelector(".cajaFormulario");

    if (form.style.display == "flex") {
        form.style.display = "none";
    }
}

function vaciarArray() {
    carrito = [];
    document.querySelector(".productos2").innerHTML = "";
    console.log(carrito);
    listaProductos.forEach(item => item.cantidad = 0)
    document.querySelector(".subtotalPrecio").innerHTML = "0";
    document.querySelector(".impuestos").innerHTML = "0";
    document.querySelector(".totalPrecio").innerHTML = "0";
}

function enviarPedido() {
    enviarMensaje();
    let totalPrecio = document.querySelector(".totalPrecio").innerHTML
    let nombre = document.getElementById("nombre").value;
    let direccion = document.getElementById("direccion").value;
    let comentario = document.getElementById("comentario").value;
    window.open("https://api.whatsapp.com/send/?phone=" + numeroEmpresa + "&text=" + "Nombre: " + nombre + " - " + pedido + "Precio total =" + totalPrecio + " - " + "Dirección: " + direccion + " - " + "Comentario: " + comentario + "&app_absent=0");
    retorno();
    location.reload();
}

function enviarMensaje() {
    for (let i = 0; i < carrito.length; i++) {
        let textoPedido = carrito[i].nombre + " X (" + carrito[i].cantidad + "), ";
        pedido += textoPedido;
    }

}