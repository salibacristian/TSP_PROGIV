import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RestCountriesService {

  private lista = [];

  constructor(private http: HttpClient) {

  }

  getPaises() {
    console.log(this.http);
    return this.http.get('https://restcountries.eu/rest/v2/all');
  }

  // agregar(value){
  //   this.lista.push(value);
  // }
}
