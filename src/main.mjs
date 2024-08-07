//importar modulos
import { Impuestos } from "./impuestos.mjs";
import { Cliente } from "./client.mjs";

//crear instancia de impuesto y cliente
const impuestosPrueba = new Impuestos(200000, 32000);
const clientePrueba = new Cliente("Juan Perez", impuestosPrueba);

//imprimir instancia de cliente e impuestos
console.log(clientePrueba);
console.log(clientePrueba.calcularImpuesto());


//funcion para calcular impuestos desde interfaz en documento html
document.getElementById("enviar").addEventListener("click", function(e){
    e.preventDefault();
    //valores inputs
    const nombreCliente =  document.getElementById("nombre").value;
    const montoBruto = document.getElementById("montoBruto").value;
    const deduccion = document.getElementById("deduccion").value;

    //instancias objeto
    const impuestos = new Impuestos(Number(montoBruto),Number(deduccion));
    const cliente = new Cliente(nombreCliente, impuestos);

    //mostrar datos en docmento
    document.getElementById('datos').innerHTML = `
        <p><strong>Nombre del cliente:</strong> ${cliente._nombre}</p>
        <p><strong>Monto bruto:<strong> ${impuestos._montoBrutoAnual}</p>
        <p><strong>Monto a deducir:</strong> ${impuestos._deducciones}</p>
        <p><strong>Impuesto calculado:</strong> ${cliente.calcularImpuesto()}</p>
    `
})