import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CirsolvePage } from './cirsolve';

@NgModule({
  declarations: [
    CirsolvePage,
  ],
  imports: [
    IonicPageModule.forChild(CirsolvePage),
  ],
})
export class CirsolvePageModule {}
