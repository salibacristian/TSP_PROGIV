import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  dato = {
    nombre: ''
    , edad: null
    , sexo: null
    , licencia: false
    , nacimiento_fecha: new Date()
    , sueldo: null
  };

  @Output()cargar = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  manejadora() {
     this.cargar.emit(this.dato);
  }

}
