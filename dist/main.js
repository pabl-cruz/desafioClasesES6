"use strict";

var _impuestos = require("./impuestos.mjs");
var _client = require("./client.mjs");
//importar modulos

//crear instancia de impuesto y cliente
var impuestos1 = new _impuestos.Impuestos(200000, 32000);
var cliente1 = new _client.Cliente("Juan Perez", impuestos1);

//imprimir instancia de cliente e impuestos
console.log(cliente1);
console.log(cliente1.calcularImpuesto());