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
  selector: 'page-scan',
  templateUrl: 'scan.html',
})
export class ScanPage {

  /*data={ };
  encodemyData:string;
encodedData:{};

  option:BarcodeScannerOptions ;*/
  constructor(public navCtrl: NavController,public barcodeScanner:BarcodeScanner) {

  }

  /*scan(){

    this.option = {

      prompt: "Please scan your code"
    }
    this.barcodeScanner.scan(this.option).then((barcodeData) => {
      // Success! Barcode data is here
      console.log(barcodeData);
      this.data = barcodeData;


     }, (err) => {
         // An error occurred
         console.log(err);
     });

  }


  encodeData(){
this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE,this.encodemyData).then((res)=>{
console.log(res)
this.encodedData = res;
}, (err) => {
  // An error occurred
  console.log(err);
})
  }


  goLog(){
    this.navCtrl.setRoot(LoginPage);
  }*/


}

