// El director de una escuela está organizando un
// viaje de estudios,y requiere determinar cuánto
// debe cobrar a cada alumno y cuánto debe pagar
// a la compañía de viajes por el servicio.
// La forma de cobrar es la siguiente: si son 100 alumnos
// o más, el costo por cada alumno es de
// $650.00; de 50 a 99 alumnos, el costo es de $700.00, de 30 a 49, de
// $950.00, y si son menos de 30, el costo de la renta del autobús es de
// $4000.00, sin importar el número de alumnos.
// Realice un algoritmoque permita determinar el pago a la
// compañía de autobuses y lo que debe pagar cada alumno por el viaje.Representa
// en Diagrama de flujo y Código JS  la solución

function auxiliar() {
  let cantidad = document.getElementById("c_alumnos").value;
  let lista, costo, vUnidad;

  if (cantidad >= 100) {
    costo = cantidad * 650;
  } else if (cantidad >= 50 && cantidad < 90) {
    costo = cantidad * 700;
  } else if (cantidad >= 30 && cantidad < 50) {
    costo = cantidad * 950;
  } else if (cantidad <= 30 && costo >= 0) {
    costo = 4000;
  } else {
    costo = "Error en la carga";
  }

  if (typeof costo !== "string") {
    vUnidad = costo / cantidad;
  } else {
    vUnidad = "Error de carga";
  }

  lista = [costo, vUnidad];
  return lista;
}

function resolucionDos() {
  let soluciones = auxiliar();
  alert("El costo del viaje va a ser de:$" + soluciones[0]);
  alert("El costo unitario va a ser de:$" + soluciones[1]);
}
