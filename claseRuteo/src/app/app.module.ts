import { PagesModule } from './pages/pages.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyCSpBQX_OtY9DZjdK8TiOPpx6E-eOOjzjU",
  authDomain: "lab4-6f93d.firebaseapp.com",
  databaseURL: "https://lab4-6f93d.firebaseio.com",
  projectId: "lab4-6f93d",
  storageBucket: "lab4-6f93d.appspot.com",
  messagingSenderId: "973019757778",
  appId: "1:973019757778:web:4a3c26483a05c51d33c10b"
};

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
