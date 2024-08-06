//importar modulos
import { Impuestos } from './impuestos.mjs'
import{ Cliente } from './client.mjs'


const impuestos1 = new Impuestos(200000, 32000)
const cliente1 = new Cliente('Juan Perez', impuestos1)
console.log(cliente1)
console.log(cliente1.calcularImpuesto())