import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NonsolvePage } from './nonsolve';

@NgModule({
  declarations: [
    NonsolvePage,
  ],
  imports: [
    IonicPageModule.forChild(NonsolvePage),
  ],
})
export class NonsolvePageModule {}
