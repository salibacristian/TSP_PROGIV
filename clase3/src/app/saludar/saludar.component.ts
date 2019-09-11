import { Component, OnInit } from '@angular/core';
import { Persona } from '../clases/Persona';

@Component({
  selector: 'app-saludar',
  templateUrl: './saludar.component.html',
  styleUrls: ['./saludar.component.css']
})
export class SaludarComponent implements OnInit {

  constructor() { }

  personas = [];

  ngOnInit() {
  }
  public cargar(persona){
    let nuevaPersona:Persona = new Persona(persona.nombre
      , persona.edad, persona.sexo, persona.licencia, persona.nacimiento_fecha, persona.sueldo);
    this.personas.push(nuevaPersona);
  }
}
