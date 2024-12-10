let recorrido = prompt("Indique aquí la distancia de su recorrido ");
let caminando = 4;
let bicicleta = 15;
let auto = 50;

alert(
    "Tardaría en realizar su recorrido:" +
    " " +
    recorrido / caminando +
    " " +
    "hs pie a 4km/h," +
    " " +
    recorrido / bicicleta +
    " " +
    "hs en bicicleta a 15km/h," +
    " " +
    recorrido * auto +
    " " +
    "hs en auto a 50km/h."
);
