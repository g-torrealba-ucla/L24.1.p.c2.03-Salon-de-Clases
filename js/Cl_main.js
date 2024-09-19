/**
 * SALÓN DE CLASES
 * Sea un salón de clases en el DCyT, donde se procesan los datos de cada
 * estudiante (nombre, edad y sexo). El dato sexo es una letra F o M 
 * (femenino - masculino). Se desean procesar estos registros de estudiantes 
 * para determinar: a. la edad promedio, b. el nombre del estudiante con 
 * mayor edad, c. el porcentaje de chicas que son mayor de edad.
 * El profesor informa que si asisten Luis (16), Ana (19), José (20) y Carmen (18), 
 * la salida requerida presenta el siguiente formato:
 * Edad promedio: 18.25
 * Estudiante con mayor edad: José
 * Porcentaje de chicas mayor de edad: 100%
 */

import { Controlador } from "./Cl_controlador.js";
export class Cl_main {
  constructor() {
    let control = new Controlador();
    control.procesarEstudiante();
  }
}