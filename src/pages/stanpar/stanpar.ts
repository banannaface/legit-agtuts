import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { GraphPage } from '../graph/graph';
import { GlobalmethodsProvider } from '../../providers/globalmethods/globalmethods';
import { CanvascomComponent } from '../../components/canvascom/canvascom';
@IonicPage()
@Component({
  selector: 'page-stanpar',
  templateUrl: 'stanpar.html',
})
export class StanparPage {
  public hinput:any;
  public kinput:any;
  public cinput:any;
  public origin:boolean;
  public axis:boolean;
  public open:boolean;
  public formula:string;
  public two: string;

  public stropen:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public globalMeth:GlobalmethodsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StanparPage');
    this.origin = false;
    this.axis = false;
    this.open = false;
    this.stropen = 'Opening (right)';
    this.formula = '(y-k)^2'+' = 4c(x-h)';
  }

  submit(){
    
    let data = {
      op: this.open,
      for: this.formula,
      ax:this.axis,
      or:this.origin,
      H:Number(this.hinput),
      K:Number(this.kinput),
      C:Number(this.cinput)
    }
    console.log(this.origin);
    this.globalMeth.conicsection = 'parabola';
    if (this.cinput<=0){
      this.globalMeth.presentAlertOkOnly('Error!','C should not be less than or equal to zero since it is a distance');
    }else{
      this.navCtrl.push(CanvascomComponent, data); //.catch(() => this.globalMeth.presentAlertOkOnly('Error!','Please input valid numbers.'));
    }
   
  
  }
  
  togchangeor(){
    if (this.origin==true){
      this.hinput = 0;
      this.kinput = 0;
    }else{
      this.hinput = '';
      this.kinput = '';
    }
  }

  togchangeax(){
    if (this.axis==true){
      this.formula = '(x-h)^2'+' = 4c(y-k)';
      this.stropen = 'Opening (upward)';
    }else{
      this.formula = '(y-k)^2'+' = 4c(x-h)';
      this.stropen = 'Opening (right)';
    }
  }
 
}
