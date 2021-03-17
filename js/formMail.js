function continuarMail() {
    let form = document.querySelector(".cajaMail");

    if (form.style.display == "none") {
        form.style.display = "flex";
    }
}

function cancelarMail() {
    let form = document.querySelector(".cajaMail");

    if (form.style.display == "flex") {
        form.style.display = "none";
    }
}

function enviarMail() {
    let nombre = document.getElementById("nombreMail").value;
    let mail = document.getElementById("mail").value;
    let mensaje = document.getElementById("mensaje").value;
    window.open("mailto:agalarza@hotmail.com" + "?subject=" + nombre + "&body=" + "Mensaje: " + mensaje + "  --  " + "Mail: " + mail);
    cancelarPedido();
}