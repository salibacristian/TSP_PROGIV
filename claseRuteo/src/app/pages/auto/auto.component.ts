import { Component, OnInit } from '@angular/core';
import {AutoService} from '../../servicios/auto.service';

interface Token {
  token: string;

}

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css']
})



export class AutoComponent implements OnInit {

  user: any = {
    user:'',
    pass:''
  };

  auto: any = {
    marca:'',
    modelo:''
  };



  constructor(private autoService: AutoService) { }

  ngOnInit() {
  }

    login() {
    this.autoService.login(this.user)
    .subscribe(function(arg: Token) {
      console.log(arg);
      localStorage.setItem('token', arg.token);

      }
      , e => { console.log(e); });
  }

  register() {
    this.autoService.register(this.user)
    .subscribe(arg => {
      console.log(arg);

      }
      , e => { console.log(e); });
  }

  guardarAuto(){
    this.autoService.setAuto(this.auto)
    .subscribe(arg => {
      console.log(arg);

      }
      , e => { console.log(e); });
  }

}
