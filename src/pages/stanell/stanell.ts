import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { CanvascomComponent } from '../../components/canvascom/canvascom';
import { GlobalmethodsProvider } from '../../providers/globalmethods/globalmethods';
/**
 * Generated class for the StanellPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stanell',
  templateUrl: 'stanell.html',
})
export class StanellPage {
  public hinput:any;
  public kinput:any;
  public ainput:number;
  public binput:number;
  public origin:boolean;
  public major:boolean;
  public formula:string;
  public a:number;
  public b:number;
  public h:number;
  public k:number;
  
  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public globalMeth:GlobalmethodsProvider) {
  }

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad StanellPage');
   this.a = 0;
   this.b = 0;
   this.h = 0;
   this.k = 0;
    this.origin = false;
    this.formula = '((x-h)^2/'+this.a+'^2) + ((y-k)^2/'+this.b+'^2) = 1';
    
  }
  note(){
    this.showAlert('How to Use','Input the values of center, a and b in the textbox below and use the toggle button to toggle the origin and major axis then tap \'submit\' to see graph.');
  }
  showAlert(tit: string, stit: string) {
    let alert = this.alertCtrl.create({
      title: tit,
      subTitle: stit,
      buttons: ['OK']
    });
    alert.present();
  }

  
  togchangeor(){
    if (this.origin==true){
      this.hinput = 0;
      this.kinput = 0;
      this.formula = '(x^2/'+this.a+'^2) + (y^2/'+this.b+'^2) = 1';
    }else{
      this.hinput = '';
      this.kinput = '';
      this.formula = '((x-'+this.h+')^2/'+this.a+'^2) + ((y-'+this.k+')^2/'+this.b+'^2) = 1';
    }
  }
  togchangema(){
    if (this.major==true){
      if (this.origin==true){
        this.formula = '(x^2/'+this.a+'^2) + (y^2/'+this.b+'^2) = 1';
      }else{
        this.formula = '((x-'+this.h+')^2/'+this.a+'^2) + ((y-'+this.k+')^2/'+this.b+'^2) = 1';
      }
      
    }else{
      if (this.origin==true){
        this.formula = '(x^2/'+this.b+'^2) + (y^2/'+this.a+'^2) = 1';
      }else{
        this.formula = '((x-'+this.h+')^2/'+this.b+'^2) + ((y-'+this.k+')^2/'+this.a+'^2) = 1';
      }
      
    }
  }
  hinchange(){
    this.h = this.hinput;
    this.formula = '((x-'+this.h+')^2/'+this.a+'^2) + ((y-'+this.k+')^2/'+this.b+'^2) = 1';
  }
  kinchange(){
    this.k = this.kinput;
    this.formula = '((x-'+this.h+')^2/'+this.a+'^2) + ((y-'+this.k+')^2/'+this.b+'^2) = 1';
  }
  ainchange(){
    this.a = this.ainput;
    if (this.origin==true){
      this.hinput = 0;
      this.kinput = 0;
      this.formula = '(x^2/'+this.a+'^2) + (y^2/'+this.b+'^2) = 1';
    }else{
      this.formula = '((x-'+this.h+')^2/'+this.a+'^2) + ((y-'+this.k+')^2/'+this.b+'^2) = 1';
    }
   
  }
  binchange(){
    this.b = this.binput;
    if (this.origin==true){
      this.formula = '(x^2/'+this.a+'^2) + (y^2/'+this.b+'^2) = 1';
    }else{
      this.formula = '((x-'+this.h+')^2/'+this.a+'^2) + ((y-'+this.k+')^2/'+this.b+'^2) = 1';
    }
    
  }
  submit(){
    let data = {
      ma:this.major,
      for: this.formula,
      or:this.origin,
      H:Number(this.hinput),
      K:Number(this.kinput),
      A:Number(this.ainput),
      B:Number(this.binput)
    }

    this.globalMeth.conicsection = 'ellipse';
    if (this.ainput<=0 || this.binput<=0){
      this.globalMeth.presentAlertOkOnly('Error!','R should not be less than or equal to zero since it is a distance');
    }else if(this.ainput<this.binput){
      this.globalMeth.presentAlertOkOnly('Error!','a should always be more than b since 2a is the major axis while 2b is the minor axis.');
    }else{
      this.navCtrl.push(CanvascomComponent, data); 
    }
  }


}
