import { Component, OnInit } from '@angular/core';
import { RestCountriesService } from '../../servicios/rest-countries.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {
private lista: any = [];
  constructor(private service: RestCountriesService) { }

  getPaises() {
    this.service.getPaises()
      .subscribe(arg => {this.lista = arg; console.log(this.lista); }
        , e => { console.log(e); });

  }

  ngOnInit() {
    this.getPaises();
  }

}
