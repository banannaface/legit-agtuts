import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CanvascomComponent } from '../../components/canvascom/canvascom';
import { GlobalmethodsProvider } from '../../providers/globalmethods/globalmethods';
/**
 * Generated class for the GraphstaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-graphsta',
  templateUrl: 'graphsta.html',
})
export class GraphstaPage {
  public hinput:any;
  public kinput:any;
  public rinput:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public globalMeth:GlobalmethodsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GraphstaPage');
  }

  submit(){

    let data = {
      H:this.hinput,
      K:this.kinput,
      R:this.rinput
    }
    this.globalMeth.conicsection = 'circle';
    if (this.rinput<=0){
      this.globalMeth.presentAlertOkOnly('Error!','R should not be less than or equal to zero since it is a distance');
    }else{
      this.navCtrl.push(CanvascomComponent, data); 
    }
   
  }
}
