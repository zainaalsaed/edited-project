import { Component } from '@angular/core';
import { NavController, AlertController} from 'ionic-angular';
import { TripsPage } from '../trips/trips';
import { LoginPage } from '../login/login';
import { ScanPage } from '../scan/scan';
import { SearchLocationPage } from '../search-location/search-location';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { RegscPage } from '../regsc/regsc';
// import { StockListPage } from '../stock-list/stock-list';
//import { NativeAudio } from '@ionic-native/native-audio';

//import { IonicPage } from 'ionic-angular/navigation/ionic-page';
//import { Product, PosItem } from '../../providers/models';
//import { BarcodeScanner, BarcodeScannerOptions, BarcodeScanResult } from '@ionic-native/barcode-scanner';
//import { BackendProvider } from '../../providers/backend/backend';
//import { DatabaseProvider } from '../../providers/database/database';


@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})
export class NewsPage {
/*
  itemsInCart: Product[] = [];
  results: BarcodeScanResult;
  options: BarcodeScannerOptions;
*/
  constructor(
    public navCtrl: NavController,
   
    
    //private backEnd: BackendProvider,
    public alertCtrl: AlertController ) {

    }
    showLogin(){

      this.navCtrl.setRoot(LoginPage);
    }

    showComp(){


      this.navCtrl.setRoot(RegscPage);
    }
}
