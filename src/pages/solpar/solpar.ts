import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the SolparPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-solpar',
  templateUrl: 'solpar.html',
})
export class SolparPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SolparPage');
    this.rstr = 'y';
    this.lstr = 'x';
    this.val4a = 4;
    this.type = 'stanor';
  }

  public type:string;
  public axis:boolean;
  public val4a:number;
  public hval:number;
  public kval:number;
  public aval:number;
  public cval:number;
  public dval:number;
  public eval:number;

  public aval2:string='A';
  public cval2:string='+C';
  public dval2:string='+D';
  public eval2:string='+E';
  public rstr:string; //right side eq
  public lstr:string; //left side eq

  public rcenval:number;
  public lcenval:number;

  public lcenval2:string='-0';
  public rcenval2:string='-0';
  

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
      if (varr=="4aval"){
        this.val4a = data.value;
        if (this.val4a==0){
          this.presentAlert("A should not be equal to 0. 1 will be the default value.");
          this.val4a = 1;
        }
      }else if (varr=="hvalr"){
        this.hval = data.value;
        if(this.hval>=0){
          this.rcenval2 = '-' + this.hval
        }else{
          this.rcenval2 = '+' + this.hval*-1
        }
      }else if (varr=="kvalr"){
        this.kval = data.value;
        if(this.kval>=0){
          this.rcenval2 = '-' + this.kval
        }else{
          this.rcenval2 = '+' + this.kval*-1
        }
      }else if (varr=="hvall"){
        this.hval = data.value;
        if(this.hval>=0){
          this.lcenval2 = '-' + this.hval
        }else{
          this.lcenval2 = '+' + this.hval*-1
        }
      }else if (varr=="kvall"){
        this.kval = data.value;
        if(this.kval>=0){
          this.lcenval2 = '-' + this.kval
        }else{
          this.lcenval2 = '+' + this.kval*-1
        }
      }else if (varr=="aaval"){
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

  changety(typee){

    var stanori = document.getElementById("stanordiv");
    var stand = document.getElementById("standiv");
    var gene = document.getElementById("gendiv");

   
    this.type = typee;
    console.log(typee);
    if (typee=="stanor"){
      stanori.style.display = "block";
      stand.style.display = "none";
      gene.style.display = "none";
      
     
      console.log(typee + ", stanor daw");
     
      
    }else if (typee=="stan"){
      stanori.style.display = "none";
      stand.style.display = "block";
      gene.style.display = "none";
      console.log(typee + ", stan daw");
      
      
    }else if (typee=="gen"){
      stanori.style.display = "none";
      stand.style.display = "none";
      gene.style.display = "block";
      console.log(typee + ", gen daw");
     
      
    }
   
  }
public gensq:string='y';
  changeax(axiss){
    this.axis = axiss;
    if (axiss==true){
      if (this.type=='gen'){
        this.gensq = 'x';
        
      }else{
        this.rstr='y';
        this.lstr='x';
        
      }
      
    }else{
      if(this.type=='gen'){
        this.gensq = 'y';
      }else{
        this.rstr='x';
        this.lstr='y';
      }
      
      
    }
  }

  val4p(){
    this.presentPromptneg("4a value", "4aval");
  }

  lcenvall(){
    if (this.axis==true){
      this.presentPromptneg("H value", "hvall");
    }else{
      this.presentPromptneg("K value", "kvall");
    }
    
  }

  rcenvall(){
    if (this.axis==true){
      this.presentPromptneg("K value", "kvalr");
    }else{
      this.presentPromptneg("H value", "hvalr");
    }
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


  presentAlert(subtit:string) {
    let alert = this.alertCtrl.create({
      title: 'Warning',
      subTitle: subtit,
      buttons: ['OK']
    });
    alert.present();
  }
  public vh:number;
  public vk:number;
  public fh:number;
  public fk:number;
  public axisym:string;
  public horver:string;
  public direc:string;
  public open:string;
  public a:number;
  public vhh:number;
  public vkk:number;
  public fhfor:string;
  public fkfor:string;
  public axfor:string;
  public dirfor:string;
  public opexp:string;
  public genform:string;
  public genformsub:string;
  public sol2:string;
  public sol3:string;
  public sol4:string;
  public sol5:string;
  public a4:number;
  solve(){
    var stanorisol = document.getElementById("stanorsol");
    var standsol = document.getElementById("stansol");
    var genesol = document.getElementById("gensol");
    
    this.a = this.val4a/4
    if(this.type=='stanor'){
      this.vh= 0;
      this.vk= 0;
      if(this.axis==true){//vertical xsquared
        if (this.a>0){//upward
          this.opexp = 'x-part is squared which means the parabola is vertical and because 4a = '+this.val4a + ' which is positive, the parabola opens upward.';
          this.dirfor = 'y = 0 - |a|';
          this.axfor = 'x = h';
          this.fhfor = '0';
          this.fkfor = '0 + |a|';
          this.fh= 0;
          this.fk= this.vk+this.a;
          this.axisym = 'x = '+this.vh;
          this.horver = 'vertical';
          this.direc = 'y = '+(this.vk-this.a);
          this.open = 'upward';
        }else{//downward
          this.opexp = 'x-part is squared which means the parabola is vertical and because 4a = '+this.val4a + ' which is negative, the parabola opens downward.';
          this.dirfor = 'y = 0 + |a|';
          this.axfor = 'x = h';
          this.fhfor = '0';
          this.fkfor = '0 - |a|';
          this.fh= 0;
          this.fk= this.vk+this.a;
          this.axisym = 'x = '+this.vh;
          this.horver = 'vertical';
          this.direc = 'y = '+(this.vk-this.a);
          this.open = 'downward';
        }
      }else{//horizontal ysquared
        if (this.a>0){//right
          this.opexp = 'y-part is squared which means the parabola is vertical and because 4a = '+this.val4a + ' which is positive, the parabola opens to the right.';
          this.dirfor = 'x = 0 - a';
          this.axfor = 'y = k';
          this.fhfor = '0 + a';
          this.fkfor = '0';
          this.fh= this.vh+this.a;
          this.fk= 0;
          this.axisym = 'y = '+this.vk;
          this.horver = 'horizontal';
          this.direc = 'x = '+(this.vh-this.a);
          this.open = 'right';
        }else{//left
          this.opexp = 'y-part is squared which means the parabola is vertical and because 4a = '+this.val4a + ' which is negative, the parabola opens to the left.';
          this.dirfor = 'x = 0 + a';
          this.axfor = 'y = k';
          this.fhfor = '0 - a';
          this.fkfor = '0';
          this.fh= this.vh+this.a;
          this.fk= 0;
          this.axisym = 'y = '+this.vk;
          this.horver = 'horizontal';
          this.direc = 'x = '+(this.vh-this.a);
          this.open = 'left';
        }
      }

      stanorisol.style.display = "block";
      standsol.style.display = "none";
      genesol.style.display = "none";
    }else if (this.type=='stan'){

      
      if(this.axis==true){//vertical xsquared
      
        if (this.a>0){//upward
          this.opexp = 'x-part is squared which means the parabola is vertical and because 4a = '+this.val4a + ' which is positive, the parabola opens upward.';
          this.dirfor = 'y = k - |a|';
          this.axfor = 'x = h';
          this.fhfor = 'h';
          this.fkfor = 'k + |a|';
          this.vh= this.hval;
          this.vk= this.kval;
          this.fh= this.hval;
          this.fk= +this.vk + +this.a;
          this.axisym = 'x = '+this.vh;
          this.horver = 'vertical';
          this.direc = 'y = '+(this.vk-this.a);
          this.open = 'upward';
        }else{//downward
          this.opexp = 'x-part is squared which means the parabola is vertical and because 4a = '+this.val4a + ' which is negative, the parabola opens downward.';
          this.dirfor = 'y = k + |a|';
          this.axfor = 'x = h';
          this.fhfor = 'h';
          this.fkfor = 'k - |a|';
          this.vh= this.hval;
          this.vk= this.kval;
          this.fh= this.hval;
          this.fk= +this.vk + +this.a;
          this.axisym = 'x = '+this.vh;
          this.horver = 'vertical';
          this.direc = 'y = '+(this.vk-this.a);
          this.open = 'downward';
        }
      }else{//horizontal ysquared
        if (this.a>0){//right
          this.opexp = 'y-part is squared which means the parabola is horizontal and because 4a = '+this.val4a + ' which is positive, the parabola opens to the right.';
          this.dirfor = 'x = h - |a|';
          this.axfor = 'y = k';
          this.fhfor = 'h + |a|';
          this.fkfor = 'k';
          this.vh= this.hval;
          this.vk= this.kval;
          this.fk= this.kval;
          this.fh= +this.vh + +this.a;
          this.axisym = 'y = '+this.vk;
          this.horver = 'horizontal';
          this.direc = 'x = '+(this.vh-this.a);
          this.open = 'right';
        }else{//left
          this.opexp = 'y-part is squared which means the parabola is horizontal and because 4a = '+this.val4a + ' which is negative, the parabola opens to the left.';
          this.dirfor = 'x = h + |a|';
          this.axfor = 'y = k';
          this.fhfor = 'h - |a|';
          this.fkfor = 'k';
          this.vh= this.hval;
          this.vk= this.kval;
          this.fh= +this.vh + +this.a;
          this.fk= this.kval;
          this.axisym = 'y = '+this.vk;
          this.horver = 'horizontal';
          this.direc = 'x = '+(this.vh-this.a);
          this.open = 'left';
        }
      }

      stanorisol.style.display = "none";
      standsol.style.display = "block";
      genesol.style.display = "none";
    }else if (this.type=='gen'){
      
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
        
        this.genform = 'Ax^2 + Cx + Dy + E = 0';
        this.genformsub = 'x';
        let comsq = (this.cval/2)*(this.cval/2);
        this.sol2 = 'x^2 '+this.cval2+'x + '+ comsq + this.dval2 +'y = '+ (this.eval*-1) + ' + '+ comsq;
        let totadd = (this.eval*-1) + comsq;
        let totadds:string;
        if (totadd>=0){
          totadds = '+' + totadd;
        }else{
          totadds = totadd.toString();
        }
        let vks:string;
        if (this.vk<0){
          vks = '+' + this.vk*-1;
        }else{
          vks = '-'+this.vk;
        }
        let vhs:string;
        if (this.vh<0){
          vhs = '+' + this.vh*-1;
        }else{
          vhs = '-' + this.vh;
        }

        this.sol3 = '(x '+vhs+')^2 = '+(this.dval*-1)+'y '+totadds;
        this.sol4 = '(x '+vhs+')^2 = '+(this.dval*-1)+'(y '+totadds+'/'+(this.dval*-1)+')';
        this.sol5 = '(x '+vhs+')^2 = '+(this.dval*-1/this.aval)+'(y '+vks+')';
        this.a4 = ((this.dval*-1)/this.aval);


        if(this.a>0){//upward
          this.opexp = 'x-part is squared which means the parabola is vertical and because 4a = '+this.val4a + ' which is positive, the parabola opens upward.';
          this.dirfor = 'y = k - |a|';
          this.axfor = 'x = h';
          this.fhfor = 'h';
          this.fkfor = 'k + |a|';
          this.fh= this.vh;
          this.fk= +this.vk + +this.a;
          this.axisym = 'x = '+this.vh;
          this.horver = 'vertical';
          this.direc = 'y = '+(this.vk-this.a);
          this.open = 'upward';
        }else{//downward
          this.opexp = 'x-part is squared which means the parabola is vertical and because 4a = '+this.val4a + ' which is negative, the parabola opens downward.';
          this.dirfor = 'y = k + |a|';
          this.axfor = 'x = h';
          this.fhfor = 'h';
          this.fkfor = 'k - |a|';
          this.fh= this.vh;
          this.fk= +this.vk + +this.a;
          this.axisym = 'x = '+this.vh;
          this.horver = 'vertical';
          this.direc = 'y = '+(this.vk-this.a);
          this.open = 'downward';
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
        
        this.genform = 'Ay^2 + Cx + Dy + E = 0';
        this.genformsub = 'y';
        let comsq = (this.dval/2)*(this.dval/2);
        this.sol2 = 'y^2 '+this.dval2+'y + '+ comsq + this.cval2 +'x = '+ (this.eval*-1) + ' + '+ comsq;
        let totadd = (this.eval*-1) + comsq;
        let totadds:string;
        if (totadd>=0){
          totadds = '+' + totadd;
        }else{
          totadds = totadd.toString();
        }
        let vks:string;
        if (this.vk<0){
          vks = '+' + this.vk*-1;
        }else{
          vks = '-'+this.vk;
        }
        let vhs:string;
        if (this.vh<0){
          vhs = '+' + this.vh*-1;
        }else{
          vhs = '-' + this.vh;
        }
        this.sol3 = '(y '+vks+')^2 = '+(this.cval*-1)+'x '+totadds;
        this.sol4 = '(y '+vks+')^2 = '+(this.cval*-1)+'(x '+totadds+'/'+(this.cval*-1)+')';
        this.sol5 = '(y '+vks+')^2 = '+(this.cval*-1/this.aval)+'(x '+vhs+')';
        this.a4 = ((this.cval*-1)/this.aval);

        if(this.a>0){//right
          this.opexp = 'y-part is squared which means the parabola is horizontal and because 4a = '+this.val4a + ' which is positive, the parabola opens to the right.';
          this.dirfor = 'x = h - |a|';
          this.axfor = 'y = k';
          this.fhfor = 'h + |a|';
          this.fkfor = 'k';
          this.fk= this.vk;
          this.fh= +this.vh + +this.a;
          this.axisym = 'y = '+this.vk;
          this.horver = 'horizontal';
          this.direc = 'x = '+(this.vh-this.a);
          this.open = 'right';
        }else{//left
          this.opexp = 'y-part is squared which means the parabola is horizontal and because 4a = '+this.val4a + ' which is negative, the parabola opens to the left.';
          this.dirfor = 'x = h + |a|';
          this.axfor = 'y = k';
          this.fhfor = 'h - |a|';
          this.fkfor = 'k';
          this.fh= +this.vh + +this.a;
          this.fk= this.vk;
          this.axisym = 'y = '+this.vk;
          this.horver = 'horizontal';
          this.direc = 'x = '+(this.vh-this.a);
          this.open = 'left';
        }

      }

      stanorisol.style.display = "none";
      standsol.style.display = "none";
      genesol.style.display = "block";
    }else{
      console.log("sumthins wrong na naman.");
    }
      
    
   
  }
}
