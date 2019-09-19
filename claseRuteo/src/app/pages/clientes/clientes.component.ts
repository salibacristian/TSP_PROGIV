import { Component, OnInit } from '@angular/core';
import { ServiciofirestoneService } from '../../servicios/serviciofirestone.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor(private service: ServiciofirestoneService) { }

  ngOnInit() {
    console.log(this.service.items);
  }

}
