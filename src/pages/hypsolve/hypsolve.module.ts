import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HypsolvePage } from './hypsolve';

@NgModule({
  declarations: [
    HypsolvePage,
  ],
  imports: [
    IonicPageModule.forChild(HypsolvePage),
  ],
})
export class HypsolvePageModule {}
