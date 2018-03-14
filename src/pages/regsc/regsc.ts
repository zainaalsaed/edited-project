import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner,BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import{LoginPage} from "../login/login";

import{RegisterPage } from "../register/register";
/**
 * Generated class for the RegscPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-regsc',
  templateUrl: 'regsc.html',
})
export class RegscPage {
  
  constructor(public navCtrl: NavController,public barcodeScanner:BarcodeScanner) {

  }


}
