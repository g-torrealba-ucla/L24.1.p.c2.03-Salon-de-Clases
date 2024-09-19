export default class Cl_vAerolinea {
  reportar(salida, edPromedio, estudianteMayEdad, porcChicasMayEdad) {
    salida.innerHTML += `Edad promedio: ${edPromedio}`
      + `<br>Estudiante con mayor edad: ${estudianteMayEdad}`
      + `<br>Porcentaje de chicas mayor de edad: ${porcChicasMayEdad}%`;
  }
}
