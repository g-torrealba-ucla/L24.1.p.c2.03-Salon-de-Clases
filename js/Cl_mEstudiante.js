export default class Cl_mEstudiante {
  constructor({ nombre, edad, sexo }) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
  }
  set edad(edad) {
    this._edad = +edad;
  }
  get edad() {
    return this._edad;
  }
}