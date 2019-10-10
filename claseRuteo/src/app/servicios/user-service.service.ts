import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  user = null;
  constructor(private http: HttpClient) { }

  isAuthenticated(){ return this.user? true:false;}

  setUser(user){
    var body = {cliente : user};
    return this.http.post('192.168.2.85:3003/clientes',body);
  }

  getUser(user){
    var body = {cliente : user};
    return this.http.post('192.168.2.85:3003/login',body);
  }
}
