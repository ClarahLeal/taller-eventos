function alerta() {
    alert("Hola soy el div");
}
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('contenedor-boton').addEventListener('click', alerta);
})
