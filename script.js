function confirmarEdad() {
    let confirmacion = confirm("¿Eres mayor de 18 años?");
    if (confirmacion) {
        document.getElementById("confirmacion-edad").style.display = "none";
        document.getElementById("contenido-principal").style.display = "block";
    } else {
        alert("No puedes acceder al contenido.");
    }
}
