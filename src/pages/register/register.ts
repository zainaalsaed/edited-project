import {LoginPage} from "../login/login";
import { Component ,ViewChild  } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import {HomePage} from "../home/home";
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseError } from '@firebase/util';

import * as firebase from 'firebase/app';
//@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  
  @ViewChild('username') user;
  @ViewChild('password') password;
  
  constructor( public nav: NavController,private afAuth: AngularFireAuth, private alertCtrl: AlertController, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  
  }
  
  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }


  registerUser() {
    
    this.fire.auth.createUserWithEmailAndPassword(this.user.value , this.password.value)
    .then(data => {
      console.log('got data ', data);
     this.alert('Registered!');
     this.nav.setRoot(HomePage);

    })
    
  
    
    .catch((error:FirebaseError) => {
      console.log('got an error ', error);
     this.alert(error.message);
    });
    console.log('Would register user with ', this.user.value, this.password.value);
  }
  



  // register and go to home page
  //register() {
    //this.nav.setRoot(HomePage);
  //}

  // go to login page
  login() {
    this.nav.setRoot(LoginPage);
  }
  
}
