let carrito = [];
let cuenta = 0;


function aumentar(elemento) {
    let padre = elemento.parentElement
    let textoContador = padre.querySelector("p")
    let bisabuela = padre.parentElement.parentElement
    let bisabuelaId = bisabuela.dataset.numero
    let index = listaProductos.find(element => element.id == bisabuelaId)
    let indexListaProductos = listaProductos.indexOf(index)
    let aumentarCantidad = listaProductos[indexListaProductos].cantidad

    aumentarCantidad++
    textoContador.innerHTML = aumentarCantidad

    listaProductos[indexListaProductos].cantidad = aumentarCantidad

    if (listaProductos[indexListaProductos].cantidad == 1 && carrito.includes(listaProductos[indexListaProductos]) !== "true") {
        carrito.push(listaProductos[indexListaProductos])
    }
}

function disminuir(elemento) {
    let padre = elemento.parentElement;
    let textoContador = padre.querySelector('p');
    let bisabuela = padre.parentElement.parentElement
    let bisabuelaId = bisabuela.dataset.numero
    let index = listaProductos.find(element => element.id == bisabuelaId)
    let indexListaProductos = listaProductos.indexOf(index)
    let disminuirCantidad = listaProductos[indexListaProductos].cantidad

    if (disminuirCantidad > 0) {
        disminuirCantidad--;
    } else {
        return
    }

    textoContador.innerHTML = disminuirCantidad

    listaProductos[indexListaProductos].cantidad = disminuirCantidad

    if (listaProductos[indexListaProductos].cantidad == 0) {
        let indice = carrito.find(element => element.id == bisabuelaId)
        let numerito = carrito.indexOf(indice)
        carrito.splice(numerito, 1)
    }

}