import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScanRegisterPage } from './scan-register';

@NgModule({
  declarations: [
    ScanRegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(ScanRegisterPage),
  ],
})
export class ScanRegisterPageModule {}
