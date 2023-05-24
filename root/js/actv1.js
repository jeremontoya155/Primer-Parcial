// La compañía de autobuses “La curva loca” requiere determinar
// el costo que tendrá el boleto de un viaje sencillo, esto basado en los
//  kilómetros por recorrer y en el costo por kilómetro. Realice un Diagrama
//  de flujo y Código JS que representen el algoritmo para tal fin

class Viaje {
  constructor(valor, cantidad) {
    this.cantidad = cantidad;
    this.valor = valor;
  }
}

function recuperar() {
  let valor = document.getElementById("p_km").value;
  let cantidad = document.getElementById("c_km").value;

  return new Viaje(valor, cantidad);
}

function verificar(valorTotal) {
  if (valorTotal.valor < 0 || valorTotal.cantidad < 0) {
    return "No se realiza la operacion por error de carga";
  } else {
    return valorTotal.valor * valorTotal.cantidad;
  }
}

function auxiliar(elemento) {
  if (typeof elemento === "string") {
    alert(elemento);
  } else {
    alert("El valor del viaje consta de:$" + elemento);
  }
}

function resolucionUno() {
  let aux = recuperar();
  let valor = verificar(aux);
  auxiliar(valor);
}
