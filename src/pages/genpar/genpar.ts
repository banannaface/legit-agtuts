import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { GlobalmethodsProvider } from '../../providers/globalmethods/globalmethods';
import { CanvascomComponent } from '../../components/canvascom/canvascom';

/**
 * Generated class for the GenparPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-genpar',
  templateUrl: 'genpar.html',
})
export class GenparPage {

  constructor(public globalMeth:GlobalmethodsProvider, public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GenparPage');
  }


  presentAlert(subtit:string) {
    let alert = this.alertCtrl.create({
      title: 'Warning',
      subTitle: subtit,
      buttons: ['OK']
    });
    alert.present();
  }

  public aval:number;
  public cval:number;
  public dval:number;
  public eval:number;
  public aval2:string='A';
  public cval2:string='+C';
  public dval2:string='+D';
  public eval2:string='+E';

  presentPromptneg(xx:string, varr) {
    let alert = this.alertCtrl.create({
      title: 'Enter Value',
      inputs: [
        {
          name: 'value',
          placeholder: xx,
          type: 'number',
          max:100,
          min:-100
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Enter',
          handler: data => {
            
            console.log(varr + ", " + xx);
           
          }
        }
      ]
    });
    alert.present();

    alert.onDidDismiss((data) => {
      console.log('Yes/No', data.value);
      console.log('varr, ', varr);

      if (varr=="aaval"){
       this.aval = data.value;
       if (this.aval>0){
          this.aval2 = this.aval.toString();
        }else if (this.aval<0){
          this.aval2 = this.aval.toString();
        }else{
          this.presentAlert("A should not be equal to 0. 1 will be the default value.");
          this.aval = 1;
        }
      }else if (varr=="ccval"){
        this.cval = data.value;
        if (this.cval>0){
          this.cval2 = '+'+this.cval;
        }else if (this.cval<0){
          this.cval2 = this.cval.toString();
        }else{
          this.presentAlert("C should not be equal to 0. 1 will be the default value.");
          this.cval = 1;
        }
      }else if (varr=="ddval"){
        this.dval = data.value;
        if (this.dval>=0){
          this.dval2 = '+'+this.dval;
        }else{
          this.dval2 = this.dval.toString();
        }
      }else if (varr=="eeval"){
        this.eval = data.value;
        if (this.eval>=0){
          this.eval2 = '+'+this.eval;
        }else{
          this.eval2 = this.eval.toString();
        }
      }else{
        console.log("badtrip wala?");
      }
      
    });
  }


  aaval(){
    this.presentPromptneg("A value", "aaval");
  }

  ccval(){
    this.presentPromptneg("C value", "ccval");
  }

  ddval(){
    this.presentPromptneg("D value", "ddval");
  }

  eeval(){
    this.presentPromptneg("E value", "eeval");
  }
  //public axis:boolean;
  public gensq:string='y';
 

  changeax(axiss){
    this.axis = axiss;
    this.axis = axiss;
    if (axiss==true){
     
        this.gensq = 'x';
     
    }else{
      
        this.gensq = 'y';
     
      
    }
  }

  public a:number;
  public vhh:number;
  public vkk:number;
  public vh:number;
  public vk:number;

  solve(){

      
    if (this.axis==true){//vertical xsquared
      
      this.vhh = (this.cval/this.aval)/2;
      if(this.vhh>0){
        this.vh = this.vhh*-1;
      }else{
        this.vh = this.vhh*-1;
      }

      this.vkk = ((this.eval*-1) + (this.vh*this.vh*this.aval))/(this.dval*-1)
      if(this.vkk>0){
        this.vk = this.vkk*-1;
      }else{
        this.vk = this.vkk*-1;
      }
      
      this.a = parseFloat(Number(((this.dval*-1)/this.aval)/4).toFixed(2));
  
      if(this.a>0){//upward
     
        this.hinput = this.vh
        this.kinput = this.vk
        this.cinput = this.a
        this.axis = true
        this.opening = true
        if (this.hinput==0 && this.kinput==0){
          this.origin = true
        }else{
          this.origin = false
        }
       
      }else{//downward
        this.hinput = this.vh
        this.kinput = this.vk
        this.cinput = this.a*-1
        this.axis = true
        this.opening = false
        if (this.hinput==0 && this.kinput==0){
          this.origin = true
        }else{
          this.origin = false
        }
   
      }
    }else{//horizontal ysquared

      this.vkk =  (this.dval/this.aval)/2;
      if(this.vkk>0){
        this.vk = this.vkk*-1;
      }else{
        this.vk = this.vkk*-1;
      }
      //this.vk = (this.bval/this.aval)/2;

      this.vhh = ((this.eval*-1) + (this.vk*this.vk*this.aval))/(this.cval*-1)
      if(this.vhh>0){
        this.vh = this.vhh*-1;
      }else{
        this.vh = this.vhh*-1;
      }

      this.a = parseFloat(Number(((this.cval*-1)/this.aval)/4).toFixed(2));
      
     
  
     

      if(this.a>0){//right
        this.hinput = this.vh
        this.kinput = this.vk
        this.cinput = this.a
        this.axis = false
        this.opening = true
        if (this.hinput==0 && this.kinput==0){
          this.origin = true
        }else{
          this.origin = false
        }
       
      }else{//left
        this.hinput = this.vh
        this.kinput = this.vk
        this.cinput = this.a*-1
        this.axis = false
        this.opening = false
        if (this.hinput==0 && this.kinput==0){
          this.origin = true
        }else{
          this.origin = false
        }
      
      }

    }



  }

  public hinput:any;
  public kinput:any;
  public cinput:any = 1;
  public axis : boolean = false;
  public origin : boolean = false;
  public opening : boolean = false;
  public formula:string="Parabola";
  submit(){
    this.solve();

    
    let data = {
      op: this.opening,
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

}
