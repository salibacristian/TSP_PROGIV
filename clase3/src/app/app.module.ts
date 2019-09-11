import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { SaludarComponent } from './saludar/saludar.component';
import { ListadoComponent } from './listado/listado.component';
import { ListaComponent } from './lista/lista.component';
import { BooleanPipe } from './pipes/boolean.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    SaludarComponent,
    ListadoComponent,
    ListaComponent,
    BooleanPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
