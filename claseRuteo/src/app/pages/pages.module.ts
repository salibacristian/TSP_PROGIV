import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ErrorComponent } from './error/error.component';
import { DetalleComponent } from './detalle/detalle.component';



@NgModule({
  declarations: [HomeComponent, ClientesComponent, ErrorComponent, DetalleComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
