let habitacionesDos = prompt(
    "Ingrese la cantidad de habitaciones que hay para dos personas"
);
let huespedesDos = 2;
let habitacionesTres = prompt(
    "Ingrese la cantidad de habitaciones que hay para tres personas"
);
let huspedesTres = 3;
let habitacionesCuatro = prompt(
    "Ingrese aquí la cantidad de habitaciones que hay  para cuatro personas "
);
let huspedesCuatro = 4;
alert(
    "El hotel puede albergar la cantidad de" +
    " " +
    (habitacionesDos * huespedesDos +
      habitacionesTres * huspedesTres +
      habitacionesCuatro * huspedesCuatro) +
    " " +
    "huspedes"
);
