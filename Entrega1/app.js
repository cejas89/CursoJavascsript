window.onload = "";



function conversor() {
    let importe = prompt("Ingrese su importe")
    let monedaLetras = prompt("Ingrese su tipo de cambio: DOL / EUR / RS")
    let moneda = 0;
    let resultado = 0;

    switch (monedaLetras) {
        case "DOL":
            moneda = 112;
            break;

        case "EUR":
            moneda = 121;
            break;

        case "RS":
            moneda = 24;
            break;

        case "":
            return;
            break
    }
    resultado = importe * moneda;

    console.log("El resultado del cambio de " + monedaLetras + " a ARS es de $" + resultado)

}