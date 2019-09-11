export class Persona {
  nombre: string;
  edad: number;
  sexo: Sexo;
  licencia: boolean;
  nacimiento_fecha: Date ;
  sueldo: number ;


  constructor(nombre, edad, sexo, licencia, nacimiento_fecha, sueldo) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.licencia = licencia;
    this.nacimiento_fecha = nacimiento_fecha;
    this.sueldo = sueldo;
  }


}

enum Sexo {
  Femenino = 1,
  Masculino = 2,
  Indeterminado = 3
}
