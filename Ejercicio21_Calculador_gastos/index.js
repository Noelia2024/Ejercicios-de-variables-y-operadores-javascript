let dineroDisponible = prompt("¿Cuánto dinero disponible tiene?");

let servicioUno = prompt("Nombre del servicio que va a pagar ");
let montoUno = prompt("Monto del servicio");
let resultadoUno = Number(
    alert(
    "Tiene disponible" + " " + (dineroDisponible - montoUno) + " " + "pesos"
)
);

alert(
    "Le queda por pagar dos servicio y tiene una disponibilidad de dinero de:" +
    " " +
    (dineroDisponible - montoUno) +
    " " +
    "pesos"
);

let servicioDos = prompt("Nombre del servicio que va a pagar ");
let montoDos = prompt("Monto del servicio");
let resultadoDos = Number(
    alert(
    "Tiene disponible" +
    " " +
    (dineroDisponible - montoDos - montoUno) +
    " " +
    "pesos"
)
);

alert(
    "Le queda por pagar un servicio y tiene una disponibilidad de dineero de:" +
    " " +
    (dineroDisponible - montoUno - montoDos) +
    " " +
    "pesos"
);

let servicioTres = prompt("Nombre del servicio que va a pagar ");
let montoTres = prompt("Monto del servicio que va a pagar ");
let resultadoTres = Number(
    alert(
    "Tiene disponible" +
    " " +
    (dineroDisponible - montoUno - montoDos - montoTres) +
    " " +
    "pesos"
)
);

alert(
    "Los servivios abonados son:" +
    " " +
    servicioUno +
    " " +
    servicioDos +
    " " +
    servicioTres +
    " . " +
    " Dinero disponible" +
    " " +
    (dineroDisponible - montoUno - montoDos - montoTres) +
    "pesos"
);
