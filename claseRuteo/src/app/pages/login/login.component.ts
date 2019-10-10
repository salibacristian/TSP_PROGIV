import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../../servicios/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = {
    user:'root@root.com',
    pass:'a12345'
  };
  constructor(private service: UserServiceService) { }

  ngOnInit() {
  }
  login() {
    this.service.getUser(this.user)
    .subscribe(arg => {
      console.log(arg);
       this.service.setToken(arg);

      }
      , e => { console.log(e); });
  }
  register() {
    this.service.setUser(this.user)
    .subscribe(arg => {
      console.log(arg);
      console.log(this.user);
    }
      , e => { console.log(e); });
  }

}
