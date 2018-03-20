import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner,BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import{LoginPage} from "../login/login";
import{RegisterPage} from "../register/register";
/**
 * Generated class for the ScanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scan-register',
  templateUrl: 'scan-register.html',
})
export class ScanRegisterPage {

/*  datay={ };
  encodemyDatay:string;
encodedDatay:{};

  options:BarcodeScannerOptions ;*/
  constructor(public navCtrl: NavController,public barcodeScanner:BarcodeScanner) {

  }

 /* scany(){

    this.options = {

      prompt: "Please scan your code"
    }
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
  }*/


 /* goLogy(){
    this.navCtrl.push(RegisterPage, {
      datay: this.datay
    });
    
  }*/


}
