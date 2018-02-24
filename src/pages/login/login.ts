import {Component} from "@angular/core";
import {NavController, AlertController, ToastController, MenuController} from "ionic-angular";
import {HomePage} from "../home/home";
import {RegisterPage} from "../register/register";
import {Platform} from 'ionic-angular';
import {FingerprintAIO, FingerprintOptions} from '@ionic-native/fingerprint-aio';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {


  fingerprintOptions:FingerprintOptions
  constructor(private fingerprint: FingerprintAIO, private platform:Platform ,public nav: NavController, public forgotCtrl: AlertController, public menu: MenuController, public toastCtrl: ToastController) {

    this.fingerprintOptions={

      clientId: 'fingerprint-demo',
      clientSecret: 'password',
    /**
     * Disable 'use backup' option. Only for android (optional)
     */
    disableBackup: true

    }
    this.menu.swipeEnable(false);
  }

  // go to register page
  register() {
    this.nav.setRoot(RegisterPage);
  }

  // login and go to home page
  login() {
    this.nav.setRoot(HomePage);
  }
   
  
  async showFingerPrintDialog(){
try{
  await this.platform.ready();
  const available= await this.fingerprint.isAvailable();
  console.log(available);
  if(available=="OK"){

    const result = await this.fingerprint.show(this.fingerprintOptions);
console.log(result) 
  }
}
catch(e){
  console.error(e);
}
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
              message: 'Email was sended successfully',
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

}
