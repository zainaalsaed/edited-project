import {NavController, AlertController, ToastController, MenuController, Nav} from "ionic-angular";
import {HomePage} from "../home/home";
import {RegisterPage} from "../register/register";
import { Component ,ViewChild   } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { FirebaseError } from '@firebase/util';
import { BarcodeScanner,BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { User } from '@firebase/auth-types';
import { ScanPage } from "../scan/scan";
import { NewsPage } from "../news/news";
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

 /* data={ };
  encodemyData:string;
encodedData:{};

  option:BarcodeScannerOptions ;*/ 
  //navCtrl: any=this.nav;

 
  @ViewChild('username') user;
	@ViewChild('password') password;
  constructor(  
    public barcodeScanner:BarcodeScanner,
     private afAuth: AngularFireAuth,
     private alertCtrl: AlertController,
     public navCtrl: NavController,
     private fire: AngularFireAuth,
     /*public nav: NavController*/
     public forgotCtrl: AlertController, 
     public menu: MenuController, 
     public toastCtrl: ToastController) {
    this.menu.swipeEnable(false);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }
  // go to register page
  /*register() {
    this.navCtrl.setRoot(RegisterPage);
  }*/

  // login and go to home page
  regEm() {

    this.fire.auth.signInWithEmailAndPassword(this.user.value , this.password.value)
    .then( data => {
      console.log('got some data', this.fire.auth.currentUser);
      this.alert('Success! You\'re logged in');
      this.navCtrl.setRoot(HomePage);
      // user is logged in
    })
    .catch( error => {
      console.log('got an error', error);
      this.alert(error.message);
    })
    console.log('Would sign in with ', this.user.value, this.password.value);
    
  }


  forgotPass() {
    let forgot = this.forgotCtrl.create({
      title: 'Forgot Password?',
      message: "Enter you email address to send a reset link password.",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email',
          type: 'email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            console.log('Send clicked');
            let toast = this.toastCtrl.create({
              message: 'Email was sent successfully',
              duration: 3000,
              position: 'top',
              cssClass: 'dark-trans',
              closeButtonText: 'OK',
              showCloseButton: true
            });
            toast.present();
          }
        }
      ]
    });
    forgot.present();
  }
  signInWithFacebook() {
    this.afAuth.auth .signInWithPopup(new firebase.auth.FacebookAuthProvider()) .then(res => console.log(res));
  }
  signInWithgoogle() {
    this.afAuth.auth .signInWithPopup(new firebase.auth.GoogleAuthProvider()) .then(res => console.log(res));
  }
  regUser() {
    this.navCtrl.push(RegisterPage);
  }


  
  scanBr(){
    this.navCtrl.push(ScanPage);

  }


  goBk(){

    this.navCtrl.setRoot(NewsPage);
this.navCtrl.popToRoot();
  }

}