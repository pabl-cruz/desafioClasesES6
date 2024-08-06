class Cliente{
  constructor(nombre, impuesto){
    this._nombre = nombre
    this._impuesto = impuesto
  }
  //getter
  get nombre(){
    return this._nombre;
  }
  get impuesto(){
    return this._impuesto;
  }
  //setter
  set nombre(nuevo_nombre){
    this._nombre = nuevo_nombre
  }
  set impuesto(nuevo_impuesto){
    this._nombre = nuevo_impuesto
  }
  //metodo de calculo de impuestos
  calcularImpuesto(){
    const { montoBrutoAnual, deducciones} = this._impuesto
    return (montoBrutoAnual - deducciones) * 0.21 
  }
}

//exportar objeto y metodos
export{
  Cliente
}