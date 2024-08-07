class Cliente {
  constructor(nombre, impuesto) {
    //metodos y metodos asociados a objeto Impuesto
    this._nombre = nombre;
    this._impuesto = impuesto;
    this._impuesto.montoBrutoAnual = impuesto.montoBrutoAnual;
    this._impuesto.deducciones = impuesto.deducciones;
  }
  //getter
  get nombre() {
    return this._nombre;
  }
  get montoBrutoAnual() {
    return this._impuesto.montoBrutoAnual;
  }
  get deducciones() {
    return this._impuesto.deducciones;
  }
  //setter
  set nombre(nuevo_nombre) {
    this._nombre = nuevo_nombre;
  }
  set montoBrutoAnual(nuevo_monto) {
    this._impuesto.montoBrutoAnual = nuevo_monto;
  }
  set deducciones(nueva_deduccion) {
    this._impuesto.deducciones = nueva_deduccion;
  }
  //metodo de calculo de impuestos
  calcularImpuesto() {
    return (this._impuesto.montoBrutoAnual - this._impuesto.deducciones) * 0.21;
  }
}

//exportar objeto y metodos
export { Cliente };
