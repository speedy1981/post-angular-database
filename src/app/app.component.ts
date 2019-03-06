import { Component } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'post-angular-database';
  constructor(){
    const config = {
      apiKey: "AIzaSyAdaOOXgpqrordTcbFpwP8ahgvOCFBbzl0",
      authDomain: "projet-appareils-8b93e.firebaseapp.com",
      databaseURL: "https://projet-appareils-8b93e.firebaseio.com",
      projectId: "projet-appareils-8b93e",
      storageBucket: "projet-appareils-8b93e.appspot.com",
      messagingSenderId: "197969353551"
    };
    firebase.initializeApp(config);
  }
}
