import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  user = null;
  constructor(private http: HttpClient) { }

  isAuthenticated(){

//TODO: preguntar por el token https://github.com/auth0/angular2-jwt
    return this.user? true:false;
  }

  setUser(user){
    var body = {cliente : user};
    return this.http.post('http://192.168.2.85:3003/clientes',body);
  }

  // testGet(){
  //   return this.http.get('http://192.168.2.85:3003/clientes');
  // }

  getUser(user){
    var body = {cliente : user};
    return this.http.post('http://192.168.2.85:3003/login',body);
  }

  setToken(token) {
    localStorage.setItem('token', token);
  }
}
