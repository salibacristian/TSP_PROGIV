import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutoService {

  constructor(private http: HttpClient
    // ,     private header: HttpHeaders
     ) { }





  login(user){
    var body = {cliente :user};
    return this.http.post('http://192.168.2.32:3003/login',body);
  }

  register(user) {
    var body = {cliente : user};
    return this.http.post('http://192.168.2.32:3003/clientes',body);
  }

  setAuto(auto){
    var body = {auto : auto};
    var token = localStorage.getItem('token');
    // const headers = new HttpHeaders({'token':token});
    return this.http.post('http://192.168.2.32:3003/auto',body,{});
  }

  // setTurno(turno){
  //   var body = {turno : turno};


  //   return this.http.post('http://192.168.2.32:3003/turno',body);
  // }
}
