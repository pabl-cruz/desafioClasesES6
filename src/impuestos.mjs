class Impuestos {
  constructor(montoBrutoAnual, deducciones) {
    //Metodos
    this._montoBrutoAnual = Number(montoBrutoAnual);
    this._deducciones = Number(deducciones);
  }
  //getters
  get montoBrutoAnual() {
    return this._montoBrutoAnual;
  }
  get deducciones() {
    return this._deducciones;
  }
  //setters
  set montoBrutoAnual(cifra1) {
    this._montoBrutoAnual = cifra1;
  }
  set deducciones(cifra2) {
    this._deducciones = cifra2;
  }
}

export { Impuestos };
