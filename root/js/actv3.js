// Realice un algoritmo que, con base en una calificación proporcionada (0-10),
// indique con letra la calificación que le corresponde:
// 10 es “A”,
// 9 es “B”,
// 8 es “C”,
// 7 y 6 son “D”,
// y de 5 a 0 son “F”.
// Represente el diagrama de flujo y Código JS correspondiente.

function auxiliar() {
  let calificacion = parseInt(document.getElementById("nota").value);
  let nota;
  switch (calificacion) {
    case 10:
      nota = "A";
      break;
    case 9:
      nota = "B";
      break;
    case 8:
      nota = "C";
      break;
    case (7, 6):
      nota = "D";
      break;
    case (5, 4, 3, 2, 1, 0):
      nota = "F";
      break;
    default:
      nota = "Ingreso mal cargado";
  }

  return nota;
}

function resolucionTres() {
  let mostrar = auxiliar();

  alert("La nota del alumno corresponde a:" + mostrar);
}
