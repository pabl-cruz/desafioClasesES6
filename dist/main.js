"use strict";

var _impuestos = require("./impuestos.mjs");
var _client = require("./client.mjs");
//importar modulos

var impuestos1 = new _impuestos.Impuestos(200000, 32000);
var cliente1 = new _client.Cliente('Juan Perez', impuestos1);
console.log(cliente1);
console.log(cliente1.calcularImpuesto());