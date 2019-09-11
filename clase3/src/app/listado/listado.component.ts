import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

   @Input()datos;

  constructor() { }

  ngOnInit() {
     console.log(this.datos);
  }

}
