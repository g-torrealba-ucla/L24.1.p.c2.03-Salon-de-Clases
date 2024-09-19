export default class Cl_vEstudiante {
  leerDatos() {
    let nombre = prompt("nombre");
    let edad = prompt("edad");
    let sexo = prompt("sexo");
    return { nombre, edad, sexo };
  }
}