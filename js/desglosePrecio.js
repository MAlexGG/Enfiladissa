let domicilio = 2;
function sumarSubtotal() {
let subtotal = 0;
   for(let i=0; i<carrito.length; i++) {
        subtotal += carrito[i].precio * carrito[i].cantidad;
        console.log(subtotal);
   }

    document.querySelector(".subtotalPrecio").innerHTML = subtotal + "€";
    document.querySelector(".impuestos").innerHTML = (0.21*subtotal).toFixed(2) + "€";
    document.querySelector(".totalPrecio").innerHTML = (subtotal + (0.21*subtotal) + domicilio).toFixed(2) + "€";
}
