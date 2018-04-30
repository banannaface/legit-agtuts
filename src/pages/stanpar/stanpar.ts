import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
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
  public cinput:any = 1;
  public axis : boolean = false;
  public origin : boolean = false;
  public opening : boolean = false;
  public sq : number = 2;
  public ax : string = "(vertical)";
  public or : string = "(0,0)";
  public op : string = "(right)";
  public sqpart : string = "y";
  public nsqpart : string = " = -4x";
  public two: string;
  public formula:string="extra";

  public stropen:string;
  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public globalMeth:GlobalmethodsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StanparPage');
    this.origin = false;
    this.axis = false;
    this.opening = false;
    this.stropen = 'Opening (right)';
    this.formula = '(y-k)^2'+' = 4c(x-h)';
  }
  note(){
    this.showAlert('How to Use','Input the values of center and C in the textbox below and use the toggle button to toggle the origin, axis of symmetry and opening then tap \'submit\' to see graph.');
  }

  showAlert(tit: string, stit: string) {
    let alert = this.alertCtrl.create({
      title: tit,
      subTitle: stit,
      buttons: ['OK']
    });
    alert.present();
  }

  submit(){
    
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

  changeaxis(ax){
    this.axis = ax;
   
    if ((this.axis==true)&&(this.origin==true)&&(this.opening==true)){//vertex origin, opening upward
      let fourc:number;
     fourc = 4*this.cinput;
     this.ax = "(vertical)";
      this.op = "(upward)";
     this.sqpart = "x";
     this.nsqpart = " = "+fourc+"y";
     
   }else if ((this.axis==true)&&(this.origin==true)&&(this.opening==false)){// vertex origin opening downward
     
    this.ax = "(vertical)";
    this.op = "(upward)";
     let fourc:number;
     fourc = -4*this.cinput;
     this.sqpart = "x";
     this.nsqpart = " = "+fourc+"y";
  
   }else if ((this.axis==true)&&(this.origin==false)&&(this.opening==true)){//vertex h,k opening upward
    
    this.ax = "(vertical)";
     this.op = "(upward)";
   
     let fourc:number;
     fourc = 4*this.cinput;
     if (this.hinput>0){
       this.sqpart = "(x - "+this.hinput+")";
     }else if (this.hinput<0){
       this.sqpart = "(x + "+(this.hinput*-1)+")";
     }else{
       this.sqpart = "x";
     }
     
     if (this.kinput>0){
       this.nsqpart = " = "+fourc+"(y - "+this.kinput+")";
     }else if (this.kinput<0){
       this.nsqpart = " = "+fourc+"(y + "+(this.kinput*-1)+")";
     }else{
       this.nsqpart = " = "+fourc+"y";
     }
  
  
   }else if ((this.axis==true)&&(this.origin==false)&&(this.opening==false)){//vertex h,k opening downward
    this.ax = "(vertical)";
     this.op = "(upward)";
   
  
     let fourc:number;
     fourc = -4*this.cinput;
     if (this.hinput>0){
       this.sqpart = "(x - "+this.hinput+")";
     }else if (this.hinput<0){
       this.sqpart = "(x + "+(this.hinput*-1)+")";
     }else{
       this.sqpart = "x";
     }
     
     if (this.kinput>0){
       this.nsqpart = " = "+fourc+"(y - "+this.kinput+")";
     }else if (this.kinput<0){
       this.nsqpart = " = "+fourc+"(y + "+(this.kinput*-1)+")";
     }else{
       this.nsqpart = " = "+fourc+"y";
     }
  
   }else if ((this.axis==false)&&(this.origin==true)&&(this.opening==true)){//vertex origin opening right
    this.ax = "(vertical)";
    this.op = "(right)";
   
     let fourc:number;
     fourc = 4*this.cinput;
     this.sqpart = "y";
     this.nsqpart = " = "+fourc+"x";
    }else if ((this.axis==false)&&(this.origin==true)&&(this.opening==false)){//vertex origin opening left
      this.ax = "(vertical)";
      this.op = "(right)";
    
      let fourc:number;
      fourc = -4*this.cinput;
      this.sqpart = "y";
      this.nsqpart = " = "+fourc+"x";
  
    
   }else if ((this.axis==false)&&(this.origin==false)&&(this.opening==true)){//vertex h,k opening right
    this.ax = "(vertical)";
    this.op = "(right)";
     let fourc:number;
     fourc = 4*this.cinput;
     if (this.kinput>0){
       this.sqpart = "(y - "+this.kinput+")";
     }else if (this.kinput<0){
       this.sqpart = "(y + "+(this.kinput*-1)+")";
     }else{
       this.sqpart = "y";
     }
     
     if (this.hinput>0){
       this.nsqpart = " = "+fourc+"(x - "+this.hinput+")";
     }else if (this.hinput<0){
       this.nsqpart = " = "+fourc+"(x + "+(this.hinput*-1)+")";
     }else{
       this.nsqpart = " = "+fourc+"x";
     }
  
   }else if ((this.axis==false)&&(this.origin==false)&&(this.opening==false)){//vertex h,k opening left
     this.ax = "(vertical)";
     this.op = "(right)";
   
     let fourc:number;
     fourc = -4*this.cinput;
     if (this.kinput>0){
       this.sqpart = "(y - "+this.kinput+")";
     }else if (this.kinput){
       this.sqpart = "(y + "+(this.kinput*-1)+")";
     }else{
       this.sqpart = "y";
     }
     
     if (this.hinput>0){
       this.nsqpart = " = "+fourc+"(x - "+this.hinput+")";
     }else if (this.hinput<0){
       this.nsqpart = " = "+fourc+"(x + "+(this.hinput*-1)+")";
     }else{
       this.nsqpart = " = "+fourc+"x";
     }
   }
   else{
     this.globalMeth.presentAlertOkOnly('Error!','Sorry, something is wrong.');
   }

  }

  changeorigin(or){
    this.origin = or;
    if (or==true){
      this.or = "(0,0)";
      this.hinput = 0;
      this.kinput = 0;
    }
      
    
    
    if ((this.axis==true)&&(this.origin==true)&&(this.opening==true)){//vertex origin, opening upward
      let fourc:number;
     fourc = 4*this.cinput;
     this.ax = "(vertical)";
      this.op = "(upward)";
     this.sqpart = "x";
     this.nsqpart = " = "+fourc+"y";
     
   }else if ((this.axis==true)&&(this.origin==true)&&(this.opening==false)){// vertex origin opening downward
     
    this.ax = "(vertical)";
    this.op = "(upward)";
     let fourc:number;
     fourc = -4*this.cinput;
     this.sqpart = "x";
     this.nsqpart = " = "+fourc+"y";
  
   }else if ((this.axis==true)&&(this.origin==false)&&(this.opening==true)){//vertex h,k opening upward
    
    this.ax = "(vertical)";
     this.op = "(upward)";
   
     let fourc:number;
     fourc = 4*this.cinput;
     if (this.hinput>0){
       this.sqpart = "(x - "+this.hinput+")";
     }else if (this.hinput<0){
       this.sqpart = "(x + "+(this.hinput*-1)+")";
     }else{
       this.sqpart = "x";
     }
     
     if (this.kinput>0){
       this.nsqpart = " = "+fourc+"(y - "+this.kinput+")";
     }else if (this.kinput<0){
       this.nsqpart = " = "+fourc+"(y + "+(this.kinput*-1)+")";
     }else{
       this.nsqpart = " = "+fourc+"y";
     }
  
  
   }else if ((this.axis==true)&&(this.origin==false)&&(this.opening==false)){//vertex h,k opening downward
    this.ax = "(vertical)";
     this.op = "(upward)";
   
  
     let fourc:number;
     fourc = -4*this.cinput;
     if (this.hinput>0){
       this.sqpart = "(x - "+this.hinput+")";
     }else if (this.hinput<0){
       this.sqpart = "(x + "+(this.hinput*-1)+")";
     }else{
       this.sqpart = "x";
     }
     
     if (this.kinput>0){
       this.nsqpart = " = "+fourc+"(y - "+this.kinput+")";
     }else if (this.kinput<0){
       this.nsqpart = " = "+fourc+"(y + "+(this.kinput*-1)+")";
     }else{
       this.nsqpart = " = "+fourc+"y";
     }
  
   }else if ((this.axis==false)&&(this.origin==true)&&(this.opening==true)){//vertex origin opening right
    this.ax = "(vertical)";
    this.op = "(right)";
   
     let fourc:number;
     fourc = 4*this.cinput;
     this.sqpart = "y";
     this.nsqpart = " = "+fourc+"x";
    }else if ((this.axis==false)&&(this.origin==true)&&(this.opening==false)){//vertex origin opening left
      this.ax = "(vertical)";
      this.op = "(right)";
    
      let fourc:number;
      fourc = -4*this.cinput;
      this.sqpart = "y";
      this.nsqpart = " = "+fourc+"x";
  
    
   }else if ((this.axis==false)&&(this.origin==false)&&(this.opening==true)){//vertex h,k opening right
    this.ax = "(vertical)";
    this.op = "(right)";
     let fourc:number;
     fourc = 4*this.cinput;
     if (this.kinput>0){
       this.sqpart = "(y - "+this.kinput+")";
     }else if (this.kinput<0){
       this.sqpart = "(y + "+(this.kinput*-1)+")";
     }else{
       this.sqpart = "y";
     }
     
     if (this.hinput>0){
       this.nsqpart = " = "+fourc+"(x - "+this.hinput+")";
     }else if (this.hinput<0){
       this.nsqpart = " = "+fourc+"(x + "+(this.hinput*-1)+")";
     }else{
       this.nsqpart = " = "+fourc+"x";
     }
  
   }else if ((this.axis==false)&&(this.origin==false)&&(this.opening==false)){//vertex h,k opening left
     this.ax = "(vertical)";
     this.op = "(right)";
   
     let fourc:number;
     fourc = -4*this.cinput;
     if (this.kinput>0){
       this.sqpart = "(y - "+this.kinput+")";
     }else if (this.kinput){
       this.sqpart = "(y + "+(this.kinput*-1)+")";
     }else{
       this.sqpart = "y";
     }
     
     if (this.hinput>0){
       this.nsqpart = " = "+fourc+"(x - "+this.hinput+")";
     }else if (this.hinput<0){
       this.nsqpart = " = "+fourc+"(x + "+(this.hinput*-1)+")";
     }else{
       this.nsqpart = " = "+fourc+"x";
     }
   }
   else{
     this.globalMeth.presentAlertOkOnly('Error!','Sorry, something is wrong.');
   }
   }

  changeopening(op){
    this.opening = op;
    
    if ((this.axis==true)&&(this.origin==true)&&(this.opening==true)){//vertex origin, opening upward
      let fourc:number;
     fourc = 4*this.cinput;
     this.ax = "(vertical)";
      this.op = "(upward)";
     this.sqpart = "x";
     this.nsqpart = " = "+fourc+"y";
     
   }else if ((this.axis==true)&&(this.origin==true)&&(this.opening==false)){// vertex origin opening downward
     
    this.ax = "(vertical)";
    this.op = "(upward)";
     let fourc:number;
     fourc = -4*this.cinput;
     this.sqpart = "x";
     this.nsqpart = " = "+fourc+"y";
  
   }else if ((this.axis==true)&&(this.origin==false)&&(this.opening==true)){//vertex h,k opening upward
    
    this.ax = "(vertical)";
     this.op = "(upward)";
   
     let fourc:number;
     fourc = 4*this.cinput;
     if (this.hinput>0){
       this.sqpart = "(x - "+this.hinput+")";
     }else if (this.hinput<0){
       this.sqpart = "(x + "+(this.hinput*-1)+")";
     }else{
       this.sqpart = "x";
     }
     
     if (this.kinput>0){
       this.nsqpart = " = "+fourc+"(y - "+this.kinput+")";
     }else if (this.kinput<0){
       this.nsqpart = " = "+fourc+"(y + "+(this.kinput*-1)+")";
     }else{
       this.nsqpart = " = "+fourc+"y";
     }
  
  
   }else if ((this.axis==true)&&(this.origin==false)&&(this.opening==false)){//vertex h,k opening downward
    this.ax = "(vertical)";
     this.op = "(upward)";
   
  
     let fourc:number;
     fourc = -4*this.cinput;
     if (this.hinput>0){
       this.sqpart = "(x - "+this.hinput+")";
     }else if (this.hinput<0){
       this.sqpart = "(x + "+(this.hinput*-1)+")";
     }else{
       this.sqpart = "x";
     }
     
     if (this.kinput>0){
       this.nsqpart = " = "+fourc+"(y - "+this.kinput+")";
     }else if (this.kinput<0){
       this.nsqpart = " = "+fourc+"(y + "+(this.kinput*-1)+")";
     }else{
       this.nsqpart = " = "+fourc+"y";
     }
  
   }else if ((this.axis==false)&&(this.origin==true)&&(this.opening==true)){//vertex origin opening right
    this.ax = "(vertical)";
    this.op = "(right)";
   
     let fourc:number;
     fourc = 4*this.cinput;
     this.sqpart = "y";
     this.nsqpart = " = "+fourc+"x";
    }else if ((this.axis==false)&&(this.origin==true)&&(this.opening==false)){//vertex origin opening left
      this.ax = "(vertical)";
      this.op = "(right)";
    
      let fourc:number;
      fourc = -4*this.cinput;
      this.sqpart = "y";
      this.nsqpart = " = "+fourc+"x";
  
    
   }else if ((this.axis==false)&&(this.origin==false)&&(this.opening==true)){//vertex h,k opening right
    this.ax = "(vertical)";
    this.op = "(right)";
     let fourc:number;
     fourc = 4*this.cinput;
     if (this.kinput>0){
       this.sqpart = "(y - "+this.kinput+")";
     }else if (this.kinput<0){
       this.sqpart = "(y + "+(this.kinput*-1)+")";
     }else{
       this.sqpart = "y";
     }
     
     if (this.hinput>0){
       this.nsqpart = " = "+fourc+"(x - "+this.hinput+")";
     }else if (this.hinput<0){
       this.nsqpart = " = "+fourc+"(x + "+(this.hinput*-1)+")";
     }else{
       this.nsqpart = " = "+fourc+"x";
     }
  
   }else if ((this.axis==false)&&(this.origin==false)&&(this.opening==false)){//vertex h,k opening left
     this.ax = "(vertical)";
     this.op = "(right)";
   
     let fourc:number;
     fourc = -4*this.cinput;
     if (this.kinput>0){
       this.sqpart = "(y - "+this.kinput+")";
     }else if (this.kinput){
       this.sqpart = "(y + "+(this.kinput*-1)+")";
     }else{
       this.sqpart = "y";
     }
     
     if (this.hinput>0){
       this.nsqpart = " = "+fourc+"(x - "+this.hinput+")";
     }else if (this.hinput<0){
       this.nsqpart = " = "+fourc+"(x + "+(this.hinput*-1)+")";
     }else{
       this.nsqpart = " = "+fourc+"x";
     }
   }
   else{
     this.globalMeth.presentAlertOkOnly('Error!','Sorry, something is wrong.');
   }
  
    
  }

  changeverh(rch){
    this.hinput = rch;
    
 
    if ((this.axis==true)&&(this.origin==true)&&(this.opening==true)){//vertex origin, opening upward
      let fourc:number;
     fourc = 4*this.cinput;
     this.ax = "(vertical)";
      this.op = "(upward)";
     this.sqpart = "x";
     this.nsqpart = " = "+fourc+"y";
     
   }else if ((this.axis==true)&&(this.origin==true)&&(this.opening==false)){// vertex origin opening downward
     
    this.ax = "(vertical)";
    this.op = "(upward)";
     let fourc:number;
     fourc = -4*this.cinput;
     this.sqpart = "x";
     this.nsqpart = " = "+fourc+"y";
  
   }else if ((this.axis==true)&&(this.origin==false)&&(this.opening==true)){//vertex h,k opening upward
    
    this.ax = "(vertical)";
     this.op = "(upward)";
   
     let fourc:number;
     fourc = 4*this.cinput;
     if (this.hinput>0){
       this.sqpart = "(x - "+this.hinput+")";
     }else if (this.hinput<0){
       this.sqpart = "(x + "+(this.hinput*-1)+")";
     }else{
       this.sqpart = "x";
     }
     
     if (this.kinput>0){
       this.nsqpart = " = "+fourc+"(y - "+this.kinput+")";
     }else if (this.kinput<0){
       this.nsqpart = " = "+fourc+"(y + "+(this.kinput*-1)+")";
     }else{
       this.nsqpart = " = "+fourc+"y";
     }
  
  
   }else if ((this.axis==true)&&(this.origin==false)&&(this.opening==false)){//vertex h,k opening downward
    this.ax = "(vertical)";
     this.op = "(upward)";
   
  
     let fourc:number;
     fourc = -4*this.cinput;
     if (this.hinput>0){
       this.sqpart = "(x - "+this.hinput+")";
     }else if (this.hinput<0){
       this.sqpart = "(x + "+(this.hinput*-1)+")";
     }else{
       this.sqpart = "x";
     }
     
     if (this.kinput>0){
       this.nsqpart = " = "+fourc+"(y - "+this.kinput+")";
     }else if (this.kinput<0){
       this.nsqpart = " = "+fourc+"(y + "+(this.kinput*-1)+")";
     }else{
       this.nsqpart = " = "+fourc+"y";
     }
  
   }else if ((this.axis==false)&&(this.origin==true)&&(this.opening==true)){//vertex origin opening right
    this.ax = "(vertical)";
    this.op = "(right)";
   
     let fourc:number;
     fourc = 4*this.cinput;
     this.sqpart = "y";
     this.nsqpart = " = "+fourc+"x";
    }else if ((this.axis==false)&&(this.origin==true)&&(this.opening==false)){//vertex origin opening left
      this.ax = "(vertical)";
      this.op = "(right)";
    
      let fourc:number;
      fourc = -4*this.cinput;
      this.sqpart = "y";
      this.nsqpart = " = "+fourc+"x";
  
    
   }else if ((this.axis==false)&&(this.origin==false)&&(this.opening==true)){//vertex h,k opening right
    this.ax = "(vertical)";
    this.op = "(right)";
     let fourc:number;
     fourc = 4*this.cinput;
     if (this.kinput>0){
       this.sqpart = "(y - "+this.kinput+")";
     }else if (this.kinput<0){
       this.sqpart = "(y + "+(this.kinput*-1)+")";
     }else{
       this.sqpart = "y";
     }
     
     if (this.hinput>0){
       this.nsqpart = " = "+fourc+"(x - "+this.hinput+")";
     }else if (this.hinput<0){
       this.nsqpart = " = "+fourc+"(x + "+(this.hinput*-1)+")";
     }else{
       this.nsqpart = " = "+fourc+"x";
     }
  
   }else if ((this.axis==false)&&(this.origin==false)&&(this.opening==false)){//vertex h,k opening left
     this.ax = "(vertical)";
     this.op = "(right)";
   
     let fourc:number;
     fourc = -4*this.cinput;
     if (this.kinput>0){
       this.sqpart = "(y - "+this.kinput+")";
     }else if (this.kinput){
       this.sqpart = "(y + "+(this.kinput*-1)+")";
     }else{
       this.sqpart = "y";
     }
     
     if (this.hinput>0){
       this.nsqpart = " = "+fourc+"(x - "+this.hinput+")";
     }else if (this.hinput<0){
       this.nsqpart = " = "+fourc+"(x + "+(this.hinput*-1)+")";
     }else{
       this.nsqpart = " = "+fourc+"x";
     }
   }
   else{
     this.globalMeth.presentAlertOkOnly('Error!','Sorry, something is wrong.');
   }
  
  }

  changeverk(rck){
    this.kinput = rck;
    
    
    
    if ((this.axis==true)&&(this.origin==true)&&(this.opening==true)){//vertex origin, opening upward
      let fourc:number;
     fourc = 4*this.cinput;
     this.ax = "(vertical)";
      this.op = "(upward)";
     this.sqpart = "x";
     this.nsqpart = " = "+fourc+"y";
     
   }else if ((this.axis==true)&&(this.origin==true)&&(this.opening==false)){// vertex origin opening downward
     
    this.ax = "(vertical)";
    this.op = "(upward)";
     let fourc:number;
     fourc = -4*this.cinput;
     this.sqpart = "x";
     this.nsqpart = " = "+fourc+"y";
  
   }else if ((this.axis==true)&&(this.origin==false)&&(this.opening==true)){//vertex h,k opening upward
    
    this.ax = "(vertical)";
     this.op = "(upward)";
   
     let fourc:number;
     fourc = 4*this.cinput;
     if (this.hinput>0){
       this.sqpart = "(x - "+this.hinput+")";
     }else if (this.hinput<0){
       this.sqpart = "(x + "+(this.hinput*-1)+")";
     }else{
       this.sqpart = "x";
     }
     
     if (this.kinput>0){
       this.nsqpart = " = "+fourc+"(y - "+this.kinput+")";
     }else if (this.kinput<0){
       this.nsqpart = " = "+fourc+"(y + "+(this.kinput*-1)+")";
     }else{
       this.nsqpart = " = "+fourc+"y";
     }
  
  
   }else if ((this.axis==true)&&(this.origin==false)&&(this.opening==false)){//vertex h,k opening downward
    this.ax = "(vertical)";
     this.op = "(upward)";
   
  
     let fourc:number;
     fourc = -4*this.cinput;
     if (this.hinput>0){
       this.sqpart = "(x - "+this.hinput+")";
     }else if (this.hinput<0){
       this.sqpart = "(x + "+(this.hinput*-1)+")";
     }else{
       this.sqpart = "x";
     }
     
     if (this.kinput>0){
       this.nsqpart = " = "+fourc+"(y - "+this.kinput+")";
     }else if (this.kinput<0){
       this.nsqpart = " = "+fourc+"(y + "+(this.kinput*-1)+")";
     }else{
       this.nsqpart = " = "+fourc+"y";
     }
  
   }else if ((this.axis==false)&&(this.origin==true)&&(this.opening==true)){//vertex origin opening right
    this.ax = "(vertical)";
    this.op = "(right)";
   
     let fourc:number;
     fourc = 4*this.cinput;
     this.sqpart = "y";
     this.nsqpart = " = "+fourc+"x";
    }else if ((this.axis==false)&&(this.origin==true)&&(this.opening==false)){//vertex origin opening left
      this.ax = "(vertical)";
      this.op = "(right)";
    
      let fourc:number;
      fourc = -4*this.cinput;
      this.sqpart = "y";
      this.nsqpart = " = "+fourc+"x";
  
    
   }else if ((this.axis==false)&&(this.origin==false)&&(this.opening==true)){//vertex h,k opening right
    this.ax = "(vertical)";
    this.op = "(right)";
     let fourc:number;
     fourc = 4*this.cinput;
     if (this.kinput>0){
       this.sqpart = "(y - "+this.kinput+")";
     }else if (this.kinput<0){
       this.sqpart = "(y + "+(this.kinput*-1)+")";
     }else{
       this.sqpart = "y";
     }
     
     if (this.hinput>0){
       this.nsqpart = " = "+fourc+"(x - "+this.hinput+")";
     }else if (this.hinput<0){
       this.nsqpart = " = "+fourc+"(x + "+(this.hinput*-1)+")";
     }else{
       this.nsqpart = " = "+fourc+"x";
     }
  
   }else if ((this.axis==false)&&(this.origin==false)&&(this.opening==false)){//vertex h,k opening left
     this.ax = "(vertical)";
     this.op = "(right)";
   
     let fourc:number;
     fourc = -4*this.cinput;
     if (this.kinput>0){
       this.sqpart = "(y - "+this.kinput+")";
     }else if (this.kinput){
       this.sqpart = "(y + "+(this.kinput*-1)+")";
     }else{
       this.sqpart = "y";
     }
     
     if (this.hinput>0){
       this.nsqpart = " = "+fourc+"(x - "+this.hinput+")";
     }else if (this.hinput<0){
       this.nsqpart = " = "+fourc+"(x + "+(this.hinput*-1)+")";
     }else{
       this.nsqpart = " = "+fourc+"x";
     }
   }
   else{
     this.globalMeth.presentAlertOkOnly('Error!','Sorry, something is wrong.');
   }
  


  }

  changec(rc){
    this.cinput = rc;
  
    
    if ((this.axis==true)&&(this.origin==true)&&(this.opening==true)){//vertex origin, opening upward
      let fourc:number;
     fourc = 4*this.cinput;
     this.ax = "(vertical)";
      this.op = "(upward)";
     this.sqpart = "x";
     this.nsqpart = " = "+fourc+"y";
     
   }else if ((this.axis==true)&&(this.origin==true)&&(this.opening==false)){// vertex origin opening downward
     
    this.ax = "(vertical)";
    this.op = "(upward)";
     let fourc:number;
     fourc = -4*this.cinput;
     this.sqpart = "x";
     this.nsqpart = " = "+fourc+"y";
  
   }else if ((this.axis==true)&&(this.origin==false)&&(this.opening==true)){//vertex h,k opening upward
    
    this.ax = "(vertical)";
     this.op = "(upward)";
   
     let fourc:number;
     fourc = 4*this.cinput;
     if (this.hinput>0){
       this.sqpart = "(x - "+this.hinput+")";
     }else if (this.hinput<0){
       this.sqpart = "(x + "+(this.hinput*-1)+")";
     }else{
       this.sqpart = "x";
     }
     
     if (this.kinput>0){
       this.nsqpart = " = "+fourc+"(y - "+this.kinput+")";
     }else if (this.kinput<0){
       this.nsqpart = " = "+fourc+"(y + "+(this.kinput*-1)+")";
     }else{
       this.nsqpart = " = "+fourc+"y";
     }
  
  
   }else if ((this.axis==true)&&(this.origin==false)&&(this.opening==false)){//vertex h,k opening downward
    this.ax = "(vertical)";
     this.op = "(upward)";
   
  
     let fourc:number;
     fourc = -4*this.cinput;
     if (this.hinput>0){
       this.sqpart = "(x - "+this.hinput+")";
     }else if (this.hinput<0){
       this.sqpart = "(x + "+(this.hinput*-1)+")";
     }else{
       this.sqpart = "x";
     }
     
     if (this.kinput>0){
       this.nsqpart = " = "+fourc+"(y - "+this.kinput+")";
     }else if (this.kinput<0){
       this.nsqpart = " = "+fourc+"(y + "+(this.kinput*-1)+")";
     }else{
       this.nsqpart = " = "+fourc+"y";
     }
  
   }else if ((this.axis==false)&&(this.origin==true)&&(this.opening==true)){//vertex origin opening right
    this.ax = "(vertical)";
    this.op = "(right)";
   
     let fourc:number;
     fourc = 4*this.cinput;
     this.sqpart = "y";
     this.nsqpart = " = "+fourc+"x";
    }else if ((this.axis==false)&&(this.origin==true)&&(this.opening==false)){//vertex origin opening left
      this.ax = "(vertical)";
      this.op = "(right)";
    
      let fourc:number;
      fourc = -4*this.cinput;
      this.sqpart = "y";
      this.nsqpart = " = "+fourc+"x";
  
    
   }else if ((this.axis==false)&&(this.origin==false)&&(this.opening==true)){//vertex h,k opening right
    this.ax = "(vertical)";
    this.op = "(right)";
     let fourc:number;
     fourc = 4*this.cinput;
     if (this.kinput>0){
       this.sqpart = "(y - "+this.kinput+")";
     }else if (this.kinput<0){
       this.sqpart = "(y + "+(this.kinput*-1)+")";
     }else{
       this.sqpart = "y";
     }
     
     if (this.hinput>0){
       this.nsqpart = " = "+fourc+"(x - "+this.hinput+")";
     }else if (this.hinput<0){
       this.nsqpart = " = "+fourc+"(x + "+(this.hinput*-1)+")";
     }else{
       this.nsqpart = " = "+fourc+"x";
     }
  
   }else if ((this.axis==false)&&(this.origin==false)&&(this.opening==false)){//vertex h,k opening left
     this.ax = "(vertical)";
     this.op = "(right)";
   
     let fourc:number;
     fourc = -4*this.cinput;
     if (this.kinput>0){
       this.sqpart = "(y - "+this.kinput+")";
     }else if (this.kinput){
       this.sqpart = "(y + "+(this.kinput*-1)+")";
     }else{
       this.sqpart = "y";
     }
     
     if (this.hinput>0){
       this.nsqpart = " = "+fourc+"(x - "+this.hinput+")";
     }else if (this.hinput<0){
       this.nsqpart = " = "+fourc+"(x + "+(this.hinput*-1)+")";
     }else{
       this.nsqpart = " = "+fourc+"x";
     }
   }
   else{
     this.globalMeth.presentAlertOkOnly('Error!','Sorry, something is wrong.');
   }
  }
  

  
 
    

  

  
  

  
}
