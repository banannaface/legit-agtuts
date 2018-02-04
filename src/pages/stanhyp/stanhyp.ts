import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalmethodsProvider } from '../../providers/globalmethods/globalmethods';
import { CanvascomComponent } from '../../components/canvascom/canvascom';
/**
 * Generated class for the StanhypPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stanhyp',
  templateUrl: 'stanhyp.html',
})
export class StanhypPage {
  public hinput:any;
  public kinput:any;
  public ainput:any;
  public binput:any;
 
  public formula:string = "wait lang";
 
 
  constructor(public navCtrl: NavController, public navParams: NavParams, public globalMeth:GlobalmethodsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StanhypPage');
    
    this.formula = 'wait lang';
  }

  submit(){
    
    let data = {
     
      H:Number(this.hinput),
      K:Number(this.kinput),
      A:Number(this.ainput),
      B:Number(this.binput)
    }
    console.log();
    this.globalMeth.conicsection = 'hyperbola';
    if ((this.ainput<=0) || (this.binput<=0)){
      this.globalMeth.presentAlertOkOnly('Error!','a and b should not be less than or equal to zero since it is a distance');
    }else if(this.binput >= this.ainput){
      this.globalMeth.presentAlertOkOnly('Error!','b should not be greater than or equal to a.');
    }
    else{
      this.navCtrl.push(CanvascomComponent, data); //.catch(() => this.globalMeth.presentAlertOkOnly('Error!','Please input valid numbers.'));
    }
   
  
  }

}
