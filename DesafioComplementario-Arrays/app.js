window.onload = iniciar;

let monedas = [];
let valido = true;

function iniciar() {
    let button = document.getElementById("agregar")
    button.addEventListener("click", btnFunction)

}

function btnFunction() {
    let txtEntrada = document.getElementById("entrada");
    let entrada = txtEntrada.value;

    //  let txtSalida = document.getElementById("salida");
    //  let salida = txtSalida.value;

    let txtDolar = document.getElementById("seleccionador").value;

    console.log(entrada)

    let resultado = parseFloat(entrada) * parseFloat(txtDolar);
    let txtSalida = document.getElementById("salida").value = "$ " + resultado;

}



