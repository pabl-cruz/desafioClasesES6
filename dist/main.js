"use strict";

var _impuestos = require("./impuestos.mjs");
var _client = require("./client.mjs");
//importar modulos

//crear instancia de impuesto y cliente
var impuestosPrueba = new _impuestos.Impuestos(200000, 32000);
var clientePrueba = new _client.Cliente("Juan Perez", impuestosPrueba);

//imprimir instancia de cliente e impuestos
console.log(clientePrueba);
console.log(clientePrueba.calcularImpuesto());

//funcion para calcular impuestos desde interfaz en documento html
document.getElementById("enviar").addEventListener("click", function (e) {
  e.preventDefault();
  //valores inputs
  var nombreCliente = document.getElementById("nombre").value;
  var montoBruto = document.getElementById("montoBruto").value;
  var deduccion = document.getElementById("deduccion").value;

  //instancias objeto
  var impuestos = new _impuestos.Impuestos(Number(montoBruto), Number(deduccion));
  var cliente = new _client.Cliente(nombreCliente, impuestos);

  //mostrar datos en docmento
  document.getElementById('datos').innerHTML = "\n        <p><strong>Nombre del cliente:</strong> ".concat(cliente._nombre, "</p>\n        <p><strong>Monto bruto:<strong> ").concat(impuestos._montoBrutoAnual, "</p>\n        <p><strong>Monto a deducir:</strong> ").concat(impuestos._deducciones, "</p>\n        <p><strong>Impuesto calculado:</strong> ").concat(cliente.calcularImpuesto(), "</p>\n    ");
});