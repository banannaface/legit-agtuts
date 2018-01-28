import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Injectable()
export class GlobalmethodsProvider {
  conicsection: string;
  constructor(public alertCtrl: AlertController) {
    console.log('Hello GlobalmethodsProvider Provider');
  }

  presentAlertOkOnly(tit: string, subtit: string) {
    const alert = this.alertCtrl.create({
      title: tit,
      subTitle: subtit,
      buttons: ['Dismiss']
    });
    alert.present();
  }
}
