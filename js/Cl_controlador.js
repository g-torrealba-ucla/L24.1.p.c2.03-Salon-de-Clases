import Cl_vSalon from "./Cl_vSalon.js";
import Cl_vEstudiante from "./Cl_vEstudiante.js";
import Cl_mEstudiante from "./Cl_mEstudiante.js";
import Cl_mSalon from "./Cl_mSalon.js";
export class Controlador {
  constructor() {
    this.mSalon = new Cl_mSalon();
    this.vEstudiante = new Cl_vEstudiante();
    this.vSalon = new Cl_vSalon();
    this.salida = document.getElementById("salida");
  }
  procesarEstudiante() {
    do {
      let datos = this.vEstudiante.leerDatos(),
        estudiante = new Cl_mEstudiante(datos);
      this.mSalon.procesarEstudiante(estudiante);
    } while (confirm("¿Hay otro estudiante?"));
    this.vSalon.reportar(
      this.salida,
      this.mSalon.edadPromedio(),
      this.mSalon.estudMayorEdad(),
      this.mSalon.porcentajeChicasMayEdad()
    );
  }
}
