var barra = document.getElementById("introudir-ciutat");

barra.addEventListener("keyup", function(event) {
  // El numero 13 es la tecla "Enter"
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("boto-buscar").click();
  }
});