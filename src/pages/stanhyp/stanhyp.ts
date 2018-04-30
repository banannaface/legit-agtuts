import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
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
  public hinput:any=0;
  public kinput:any=0;
  public ainput:any=0;
  public binput:any=0;
  public axis:boolean;
  public firstn:string="x";
  public secn:string="y";
  public firstd:string="a";
  public secd:string="b";
  public formula:string = "wait lang";
 
 
  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public globalMeth:GlobalmethodsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StanhypPage');
    this.axis = true;
    this.formula = 'wait lang';
  }

  submit(){
    
    let data = {
     
      H:Number(this.hinput),
      K:Number(this.kinput),
      A:Number(this.ainput),
      B:Number(this.binput),
      for:this.formula,
      ax:this.axis
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

  note(){
    this.showAlert('How to Use','Input the values of center, a and b in the textbox below and use the toggle button to toggle the transverse axis then tap \'submit\' to see graph.');
  }
  showAlert(tit: string, stit: string) {
    let alert = this.alertCtrl.create({
      title: tit,
      subTitle: stit,
      buttons: ['OK']
    });
    alert.present();
  }

  togtachange(ax){
    if ((ax==true)&&(this.hinput==0)&&(this.kinput==0)){
      this.firstn="x";
      this.secn="y";
    }else if ((ax==true)&&(this.hinput<0)&&(this.kinput<0)){
      this.firstn="(x + "+this.hinput+")";
      this.secn="(y + "+this.kinput+")";
    }else if((ax==true)&&(this.hinput<0)&&(this.kinput!>0)){
      this.firstn="(x + "+this.hinput+")";
      this.secn="(y - "+this.kinput+")";
    }else if((ax==true)&&(this.hinput>0)&&(this.kinput>0)){
      this.firstn="(x - "+this.hinput+")";
      this.secn="(y - "+this.kinput+")";
    }else if((ax==true)&&(this.hinput>0)&&(this.kinput<0)){
      this.firstn="(x - "+this.hinput+")";
      this.secn="(y + "+this.kinput+")";
    }else if ((ax==false)&&(this.hinput==0)&&(this.kinput==0)){
      this.firstn="y";
      this.secn="x";
     
    }else if ((ax==false)&&(this.hinput<0)&&(this.kinput<0)){
      this.firstn="(y + "+this.kinput+")";
      this.secn="(x + "+this.hinput+")";
    }else if((ax==false)&&(this.hinput<0)&&(this.kinput!>0)){
      this.firstn="(y + "+this.kinput+")";
      this.secn="(x - "+this.hinput+")";
    }else if((ax==false)&&(this.hinput>0)&&(this.kinput>0)){
      this.firstn="(y - "+this.kinput+")";
      this.secn="(x - "+this.hinput+")";
    }else if((ax==false)&&(this.hinput>0)&&(this.kinput<0)){
      this.firstn="(y - "+this.kinput+")";
      this.secn="(x + "+this.hinput+")";
    }
    this.firstd=""+this.ainput*this.ainput;
    this.secd=""+this.binput*this.binput;
  }
  
  hchange(hh){
    if ((this.axis==true)&&(this.hinput==0)&&(this.kinput==0)){
      this.firstn="x";
      this.secn="y";
    }else if ((this.axis==true)&&(this.hinput<0)&&(this.kinput<0)){
      this.firstn="(x + "+this.hinput+")";
      this.secn="(y + "+this.kinput+")";
    }else if((this.axis==true)&&(this.hinput<0)&&(this.kinput!>0)){
      this.firstn="(x + "+this.hinput+")";
      this.secn="(y - "+this.kinput+")";
    }else if((this.axis==true)&&(this.hinput>0)&&(this.kinput>0)){
      this.firstn="(x - "+this.hinput+")";
      this.secn="(y - "+this.kinput+")";
    }else if((this.axis==true)&&(this.hinput>0)&&(this.kinput<0)){
      this.firstn="(x - "+this.hinput+")";
      this.secn="(y + "+this.kinput+")";
    }else if ((this.axis==false)&&(this.hinput==0)&&(this.kinput==0)){
      this.firstn="y";
      this.secn="x";
     
    }else if ((this.axis==false)&&(this.hinput<0)&&(this.kinput<0)){
      this.firstn="(y + "+this.hinput+")";
      this.secn="(x + "+this.kinput+")";
    }else if((this.axis==false)&&(this.hinput<0)&&(this.kinput!>0)){
      this.firstn="(y + "+this.hinput+")";
      this.secn="(x - "+this.kinput+")";
    }else if((this.axis==false)&&(this.hinput>0)&&(this.kinput>0)){
      this.firstn="(y - "+this.hinput+")";
      this.secn="(x - "+this.kinput+")";
    }else if((this.axis==false)&&(this.hinput>0)&&(this.kinput<0)){
      this.firstn="(y - "+this.hinput+")";
      this.secn="(x + "+this.kinput+")";
    }
    this.firstd=""+this.ainput*this.ainput;
    this.secd=""+this.binput*this.binput;
  }
  kchange(kk){
    if ((this.axis==true)&&(this.hinput==0)&&(this.kinput==0)){
      this.firstn="x";
      this.secn="y";
    }else if ((this.axis==true)&&(this.hinput<0)&&(this.kinput<0)){
      this.firstn="(x + "+this.hinput+")";
      this.secn="(y + "+this.kinput+")";
    }else if((this.axis==true)&&(this.hinput<0)&&(this.kinput!>0)){
      this.firstn="(x + "+this.hinput+")";
      this.secn="(y - "+this.kinput+")";
    }else if((this.axis==true)&&(this.hinput>0)&&(this.kinput>0)){
      this.firstn="(x - "+this.hinput+")";
      this.secn="(y - "+this.kinput+")";
    }else if((this.axis==true)&&(this.hinput>0)&&(this.kinput<0)){
      this.firstn="(x - "+this.hinput+")";
      this.secn="(y + "+this.kinput+")";
    }else if ((this.axis==false)&&(this.hinput==0)&&(this.kinput==0)){
      this.firstn="y";
      this.secn="x";
     
    }else if ((this.axis==false)&&(this.hinput<0)&&(this.kinput<0)){
      this.firstn="(y + "+this.hinput+")";
      this.secn="(x + "+this.kinput+")";
    }else if((this.axis==false)&&(this.hinput<0)&&(this.kinput!>0)){
      this.firstn="(y + "+this.hinput+")";
      this.secn="(x - "+this.kinput+")";
    }else if((this.axis==false)&&(this.hinput>0)&&(this.kinput>0)){
      this.firstn="(y - "+this.hinput+")";
      this.secn="(x - "+this.kinput+")";
    }else if((this.axis==false)&&(this.hinput>0)&&(this.kinput<0)){
      this.firstn="(y - "+this.hinput+")";
      this.secn="(x + "+this.kinput+")";
    }
    this.firstd=""+this.ainput*this.ainput;
    this.secd=""+this.binput*this.binput;
  }
  achange(aa){
    if ((this.axis==true)&&(this.hinput==0)&&(this.kinput==0)){
      this.firstn="x";
      this.secn="y";
    }else if ((this.axis==true)&&(this.hinput<0)&&(this.kinput<0)){
      this.firstn="(x + "+this.hinput+")";
      this.secn="(y + "+this.kinput+")";
    }else if((this.axis==true)&&(this.hinput<0)&&(this.kinput!>0)){
      this.firstn="(x + "+this.hinput+")";
      this.secn="(y - "+this.kinput+")";
    }else if((this.axis==true)&&(this.hinput>0)&&(this.kinput>0)){
      this.firstn="(x - "+this.hinput+")";
      this.secn="(y - "+this.kinput+")";
    }else if((this.axis==true)&&(this.hinput>0)&&(this.kinput<0)){
      this.firstn="(x - "+this.hinput+")";
      this.secn="(y + "+this.kinput+")";
    }else if ((this.axis==false)&&(this.hinput==0)&&(this.kinput==0)){
      this.firstn="y";
      this.secn="x";
     
    }else if ((this.axis==false)&&(this.hinput<0)&&(this.kinput<0)){
      this.firstn="(y + "+this.hinput+")";
      this.secn="(x + "+this.kinput+")";
    }else if((this.axis==false)&&(this.hinput<0)&&(this.kinput!>0)){
      this.firstn="(y + "+this.hinput+")";
      this.secn="(x - "+this.kinput+")";
    }else if((this.axis==false)&&(this.hinput>0)&&(this.kinput>0)){
      this.firstn="(y - "+this.hinput+")";
      this.secn="(x - "+this.kinput+")";
    }else if((this.axis==false)&&(this.hinput>0)&&(this.kinput<0)){
      this.firstn="(y - "+this.hinput+")";
      this.secn="(x + "+this.kinput+")";
    }
    this.firstd=""+this.ainput*this.ainput;
    this.secd=""+this.binput*this.binput;
  }
  bchange(bb){
    if ((this.axis==true)&&(this.hinput==0)&&(this.kinput==0)){
      this.firstn="x";
      this.secn="y";
    }else if ((this.axis==true)&&(this.hinput<0)&&(this.kinput<0)){
      this.firstn="(x + "+this.hinput+")";
      this.secn="(y + "+this.kinput+")";
    }else if((this.axis==true)&&(this.hinput<0)&&(this.kinput!>0)){
      this.firstn="(x + "+this.hinput+")";
      this.secn="(y - "+this.kinput+")";
    }else if((this.axis==true)&&(this.hinput>0)&&(this.kinput>0)){
      this.firstn="(x - "+this.hinput+")";
      this.secn="(y - "+this.kinput+")";
    }else if((this.axis==true)&&(this.hinput>0)&&(this.kinput<0)){
      this.firstn="(x - "+this.hinput+")";
      this.secn="(y + "+this.kinput+")";
    }else if ((this.axis==false)&&(this.hinput==0)&&(this.kinput==0)){
      this.firstn="y";
      this.secn="x";
     
    }else if ((this.axis==false)&&(this.hinput<0)&&(this.kinput<0)){
      this.firstn="(y + "+this.hinput+")";
      this.secn="(x + "+this.kinput+")";
    }else if((this.axis==false)&&(this.hinput<0)&&(this.kinput!>0)){
      this.firstn="(y + "+this.hinput+")";
      this.secn="(x - "+this.kinput+")";
    }else if((this.axis==false)&&(this.hinput>0)&&(this.kinput>0)){
      this.firstn="(y - "+this.hinput+")";
      this.secn="(x - "+this.kinput+")";
    }else if((this.axis==false)&&(this.hinput>0)&&(this.kinput<0)){
      this.firstn="(y - "+this.hinput+")";
      this.secn="(x + "+this.kinput+")";
    }
    this.firstd=""+this.ainput*this.ainput;
    this.secd=""+this.binput*this.binput;
  }

}
