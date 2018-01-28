import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NondefinePage } from './nondefine';

@NgModule({
  declarations: [
    NondefinePage,
  ],
  imports: [
    IonicPageModule.forChild(NondefinePage),
  ],
})
export class NondefinePageModule {}
