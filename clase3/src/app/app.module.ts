import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { SaludarComponent } from './saludar/saludar.component';
import { ListadoComponent } from './listado/listado.component';
import { ListaComponent } from './lista/lista.component';
import { BooleanPipe } from './pipes/boolean.pipe';
import { PaisesComponent } from './componentes/paises/paises.component';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    SaludarComponent,
    ListadoComponent,
    ListaComponent,
    BooleanPipe,
    PaisesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
