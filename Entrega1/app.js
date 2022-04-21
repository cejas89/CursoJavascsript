window.onload = convertir;



function conversor() {
    let importe = parseInt(prompt("Ingrese su importe"));
    let monedaLetras = prompt("Ingrese su tipo de cambio: DOL / EUR / RS");
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





function convertir() {

    const select = document.getElementById("seleccion");

    select.addEventListener("change", (e) => {

        let conversion = 0;
        const inputIn = document.getElementById("inputEntrada");
        let entrada = inputIn.value;

        const inputResultado = document.getElementById("inputResultado");
        let resultado = inputResultado.value

        const result = document.getElementById("result");
        result.textContent = e.target.value;
        const texto = result.textContent;

        if (texto === "dolar") {
            conversion = entrada * 120;

        } else if (texto === "euro") {
            conversion = entrada * 150;

        } else if (texto === "real") {
            conversion = entrada * 80;

        }

        console.log(conversion);
    })


}

function prueba() {
    const button = document.getElementById("btn");
    button.addEventListener("click", convertir);
}




/*const persona = () => {
    nombre: "Lucas",
    apellido: "Cejas",
            Edad

}

persona(5, 6);*/