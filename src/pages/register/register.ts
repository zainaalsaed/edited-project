import {LoginPage} from "../login/login";
import { Component ,ViewChild  } from '@angular/core';
import {IonicPage, NavController, NavParams,AlertController, ToastController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {FirebaseListObservable} from 'angularfire2/database-deprecated';
import {HomePage} from "../home/home";
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseError } from '@firebase/util';
import { AngularFireModule } from 'angularfire2';
import * as firebase from 'firebase/app';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScanPage } from "../scan/scan";
import { ScanRegisterPage } from "../scan-register/scan-register";
import { Output } from '@angular/core';
import { BarcodeScanner,BarcodeScannerOptions } from '@ionic-native/barcode-scanner';



//@IonicPage()

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  datay={ };
  encodemyDatay:string;
encodedDatay:{};

  options:BarcodeScannerOptions ;

  
  @ViewChild('signupSlider') signupSlider: any;
 
  slideOneForm: FormGroup;
  slideTwoForm: FormGroup;

  submitAttempt: boolean = false;
  peopleList :  AngularFireList<any>;
  @ViewChild('username') user;
  @ViewChild('password') password;
  


  
  constructor(public barcodeScanner:BarcodeScanner,
    public formBuilder: FormBuilder,
    public scCtrl: AlertController,
     public db: AngularFireDatabase,
     public tstCtrl: ToastController,
      public nav: NavController,private afAuth: AngularFireAuth, private alertCtrl: AlertController, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
   /* fire.auth.onAuthStateChanged(function(user){
      if(!user){
          navCtrl.setRoot(LoginPage)
      }
              });
          
          */
        
          this.peopleList = db.list('/people')
  }
  
  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }


 

  createPerson(name,identifierNum,mail,pas,status,drivl){
    this.peopleList.push({
        name : name,
        identifierNum : identifierNum,
        mail : mail,
        pas : pas,
        status: status,
        drivl : this.datay
        }).then(newPerson =>{
    this.navCtrl.push(HomePage);
    },error=>{console.log(error);});
}

  newUser() {
    
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
  

  getStatus(status){


  }

 /* scnBr()
  
  {

this.nav.push(ScanRegisterPage);

  }*/
  
  /* {
    let scn = this.scCtrl.create({
      title: 'Scan your Barcode',
      message: "Scan your driving lisence Barcode to sign up.",
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
          handler: dataz => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: dataz => {
            console.log('Send clicked');
            let tst = this.tstCtrl.create({
              message: 'Email was sent successfully',
              duration: 3000,
              position: 'top',
              cssClass: 'dark-trans',
              closeButtonText: 'OK',
              showCloseButton: true
            });
            tst.present();
          }
        }
      ]
    });
    scn.present();
  }*/

  scany(){

    this.options = { prompt: "Please scan your code"  }
    this.barcodeScanner.scan(this.options).then((barcodeData) => {
      // Success! Barcode data is here
      console.log(barcodeData);
      this.datay = barcodeData;


     }, (err) => {
         // An error occurred
         console.log(err);
     });

  }


  encodeDatay(){
this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE,this.encodemyDatay).then((res)=>{
console.log(res)
this.encodedDatay = res;
}, (err) => {
  // An error occurred
  console.log(err);
})
  }

}
