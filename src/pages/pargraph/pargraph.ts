import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { GlobalmethodsProvider } from '../../providers/globalmethods/globalmethods';
/**
 * Generated class for the PargraphPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pargraph',
  templateUrl: 'pargraph.html',
})
export class PargraphPage {
  @ViewChild('canvas') canvasEl : ElementRef;
  private _CANVAS  : any;
  private _CONTEXT : any;
  public devwidth : number;
  public devheight : number;
  public toth : number;
  public rangech : number = 0;
  public rangeck : number = 0;
  public rangec : number = 1;
  public sq : number = 2;
  public axis : boolean = false;
  public origin : boolean = false;
  public opening : boolean = false;
  public ax : string = "(vertical)";
  public or : string = "(0,0)";
  public op : string = "(right)";
  public sqpart : string = "y";
  public nsqpart : string = " = -4x";
  constructor(public globalMeth:GlobalmethodsProvider, public platform: Platform, public navCtrl: NavController, public navParams: NavParams) {
    platform.ready().then((readySource) => {
      console.log('Width: plat' + platform.width());
      console.log('Height: plat' + platform.height());
      this.devwidth = platform.width();
      this.devheight = platform.height();
      this.toth = this.devheight*0.6;
    });
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PargraphPage');

    this.initialiseCanvas();
    this.drawGrid();
    this.drawParabola(this.rangech, this.rangeck, this.rangec, "maya na lang", this.axis, this.origin, this.opening);
    /*this.drawCircle(this.rangech, this.rangeck, this.ranger);*/
    console.log('Height: ' + this._CANVAS.height);
    console.log('width: ' + this._CANVAS.width);
  }

  initialiseCanvas(){
    this._CANVAS 	    = this.canvasEl.nativeElement;
    this._CANVAS.width  	= this.devwidth;
    this._CANVAS.height 	= this.toth;

    if(this._CANVAS.getContext)
    {
      this.setupCanvas();
    }
  }

  setupCanvas(){
    this._CONTEXT = this._CANVAS.getContext('2d');
    this._CONTEXT.fillStyle = "#3e3e3e";
    this._CONTEXT.fillRect(0, 0, this.devwidth, this.toth);
  }

  clearCanvas(){
    this._CONTEXT.clearRect(0, 0, this.devwidth, this.toth);
    this.setupCanvas();
  }

  public CenterX: number;
  public CenterY: number;
  public totwidth: number;
  public totheight: number;
  public CenterXpos: number;
  public CenterXneg: number;
  public CenterYpos: number;
  public CenterYneg: number;
  public unit: number;
  drawGrid(){
   
    this.totwidth = this.devwidth;
    this.totheight = this.toth;
    this.CenterY = this._CANVAS.height/2;
    this.CenterX = this._CANVAS.width/2;
    this._CONTEXT.beginPath();
    this._CONTEXT.moveTo(this.CenterX, 0); //y-axis
    this._CONTEXT.lineTo(this.CenterX, this.totheight);
    this._CONTEXT.moveTo(0, this.CenterY); //x-axis
    this._CONTEXT.lineTo(this.totwidth, this.CenterY);
    this._CONTEXT.lineWidth = 2;
    this._CONTEXT.strokeStyle = '#ffffff';
    this._CONTEXT.stroke();

    //drawing unit marks
    this._CONTEXT.font = '5pt Calibri'
    this._CONTEXT.textAlign = 'center'
    this._CONTEXT.textBaseline = 'top'
    this._CONTEXT.fillStyle = '#ffffff'

    this.CenterXpos = this.CenterX + 10; //x-axis positive unit marks
    this.unit = 1;
    while(this.CenterXpos <= this.totwidth){ 
      this._CONTEXT.moveTo(this.CenterXpos, this.CenterY - 5); 
      this._CONTEXT.lineTo(this.CenterXpos, this.CenterY + 5);
  
      this._CONTEXT.fillText(this.unit, this.CenterXpos, this.CenterY + 8);
    this.CenterXpos = this.CenterXpos + 10;
    this.unit = this.unit + 1;

    this._CONTEXT.lineWidth = 1;
    this._CONTEXT.strokeStyle = '#ffffff';
    this._CONTEXT.stroke();
    }

    this.CenterXneg = this.CenterX - 10; //x-axis negative unit marks
    this.unit =1;
    while(this.CenterXneg >= 0){ 
      this._CONTEXT.moveTo(this.CenterXneg, this.CenterY - 5); 
      this._CONTEXT.lineTo(this.CenterXneg, this.CenterY + 5);
  
      this._CONTEXT.fillText('-'+this.unit, this.CenterXneg, this.CenterY - 15);
    this.CenterXneg = this.CenterXneg - 10;
    this.unit = this.unit +1;

    this._CONTEXT.lineWidth = 1;
    this._CONTEXT.strokeStyle = '#ffffff';
    this._CONTEXT.stroke();
    }

    this.CenterYpos = this.CenterY - 10; //y-axis positive unit marks
    this.unit = 1;
    while(this.CenterYpos >= 0){ 
      this._CONTEXT.moveTo(this.CenterX - 5, this.CenterYpos); 
      this._CONTEXT.lineTo(this.CenterX + 5, this.CenterYpos);
      
      this._CONTEXT.fillText(this.unit, this.CenterX + 12, this.CenterYpos-3);
    this.CenterYpos = this.CenterYpos - 10;
    this.unit = this.unit + 1

    this._CONTEXT.lineWidth = 1;
    this._CONTEXT.strokeStyle = '#ffffff';
    this._CONTEXT.stroke();
    }

    this.CenterYneg = this.CenterY + 10; //y-axis negative unit marks
    this.unit = 1;
    while(this.CenterYneg <= this.totheight){ 
      this._CONTEXT.moveTo(this.CenterX - 5, this.CenterYneg); 
      this._CONTEXT.lineTo(this.CenterX + 5, this.CenterYneg);
  
      this._CONTEXT.fillText('-'+this.unit, this.CenterX - 12, this.CenterYneg-3);
    this.CenterYneg = this.CenterYneg + 10;
    this.unit = this.unit + 1
    
    this._CONTEXT.lineWidth = 1;
    this._CONTEXT.strokeStyle = '#ffffff';
    this._CONTEXT.stroke();
    }
  }

  drawPoint(xVal:number, yVal:number){
    
    this._CONTEXT.beginPath();
    this._CONTEXT.arc(xVal, yVal, 3, 0, 2 * Math.PI);      
    this._CONTEXT.fillStyle = '#ff0000';
    this._CONTEXT.fill();
  }

  writeLabel(str:string, x:number, y:number){
    
    this._CONTEXT.font = '12pt Calibri'
    this._CONTEXT.textAlign = 'center'
    this._CONTEXT.textBaseline = 'top'
    this._CONTEXT.fillStyle = '#de691a'
    this._CONTEXT.fillText(str, x, y);
  }

  drawDirectrix(x1, y1, x2, y2){

    this._CONTEXT.beginPath();
    this._CONTEXT.moveTo(x1, y1);  
    this._CONTEXT.lineTo(x2, y2)    
    this._CONTEXT.lineWidth = 2;
    this._CONTEXT.strokeStyle = "#ff0000";
    this._CONTEXT.stroke();
  }

  changeaxis(ax){
    this.axis = ax;
    if ((ax==true)&&(this.opening==true)){
      this.ax = "(vertical)";
      this.op = "(upward)";
    }else if ((ax==true)&&(this.opening==false)){
      this.ax = "(vertical)";
      this.op = "(upward)";
    }else if ((ax==false)&&(this.opening==true)){
      this.ax = "(vertical)";
      this.op = "(right)";
    }else if ((ax==false)&&(this.opening==false)){
      this.ax = "(vertical)";
      this.op = "(right)";
    }

    console.log(this.axis);
    this.drawParabola(this.rangech, this.rangeck, this.rangec, "maya na lang", this.axis, this.origin, this.opening);
  }

  changeorigin(or){
    this.origin = or;
    if (or==true){
      this.or = "(0,0)";
      this.rangech = 0;
      this.rangeck = 0;
    }
      
    console.log(this.origin);
    this.drawParabola(this.rangech, this.rangeck, this.rangec, "maya na lang", this.axis, this.origin, this.opening);
  }

  changeopening(op){
    this.opening = op;
    if ((op==true)&&(this.axis==true)){
      this.ax = "(vertical)";
      this.op = "(upward)";
    }else if ((op==true)&&(this.axis==false)){
      this.ax = "(vertical)";
      this.op = "(upward)";
    }else if ((op==false)&&(this.axis==true)){
      this.ax = "(vertical)";
      this.op = "(right)";
    }else if ((op==false)&&(this.axis==false)){
      this.ax = "(vertical)";
      this.op = "(right)";
    }

    console.log(this.opening);
    this.drawParabola(this.rangech, this.rangeck, this.rangec, "maya na lang", this.axis, this.origin, this.opening);

  }

  changeverh(rch){
    this.rangech = rch;
    console.log(this.rangech);
    this.drawParabola(this.rangech, this.rangeck, this.rangec, "maya na lang", this.axis, this.origin, this.opening);
   
  }

  changeverk(rck){
    this.rangeck = rck;
    console.log(this.rangeck);
    this.drawParabola(this.rangech, this.rangeck, this.rangec, "maya na lang", this.axis, this.origin, this.opening);
   
  }

  changec(rc){
    this.rangec = rc;
    console.log(this.rangec);
    this.drawParabola(this.rangech, this.rangeck, this.rangec, "maya na lang", this.axis, this.origin, this.opening);
   
  }

  public spntX:number;
  public spntY:number;
  public epntX:number;
  public epntY:number;
  public cpntX:number;
  public cpntY:number;
  drawParabola(h:number, k:number, c:number, fo:string, ax:boolean, or:boolean, op:boolean){
    this.clearCanvas();
    this.drawGrid();

    
    if ((ax==true)&&(or==true)&&(op==true)){//vertex origin, opening upward
      this.spntX = -(Math.sqrt(4*c*10)*10) + this.totwidth/2;
      this.spntY = this.totheight/2 - 100;
      this.epntX = (Math.sqrt(4*c*10)*10) + this.totwidth/2;
      this.epntY = this.totheight/2 - 100;
      this.cpntX = 0 + this.totwidth/2;
      this.cpntY = this.totheight/2 + 100;
      this._CONTEXT.lineWidth = 2;
      this._CONTEXT.strokeStyle = "#ffffff";
      this._CONTEXT.beginPath();
      //console.log(this.spntX+'  '+this.spntY+'  '+this.cpntX+'  '+this.cpntY+'  '+this.epntX+'  '+this.epntY);
      this._CONTEXT.moveTo(this.spntX, this.spntY);
      this._CONTEXT.quadraticCurveTo(this.cpntX, this.cpntY, this.epntX, this.epntY);
      this._CONTEXT.stroke();

      this.drawDirectrix(0, this.totheight/2+(c*10), this.totwidth,this.totheight/2+(c*10));
      this.writeLabel('V : ('+h+','+k+') F : ('+0+', '+(c)+') l : y = '+(-c), (this.totwidth/4)*3-20, this.totheight*0.9);

      this.drawPoint(this.totwidth/2,this.totheight/2);//vertex
      this.drawPoint(this.totwidth/2,this.totheight/2-(c*10));//focus
      this.drawPoint(this.spntX,this.spntY);//startpoint
      this.drawPoint(this.epntX,this.epntY);//endpoint
      let fourc:number;
      fourc = 4*c;
      this.sqpart = "x";
      this.nsqpart = " = "+fourc+"y";
      
    }else if ((ax==true)&&(or==true)&&(op==false)){// vertex origin opening downward
      this.spntX = -(Math.sqrt(4*c*10)*10) + this.totwidth/2;
      this.spntY = this.totheight/2 + 100;
      this.epntX = (Math.sqrt(4*c*10)*10) + this.totwidth/2;
      this.epntY = this.totheight/2 + 100;
      this.cpntX = 0 + this.totwidth/2;
      this.cpntY = this.totheight/2 - 100;
      this._CONTEXT.lineWidth = 2;
      this._CONTEXT.strokeStyle = "#ffffff";
      this._CONTEXT.beginPath();
     
      this._CONTEXT.moveTo(this.spntX, this.spntY);
      this._CONTEXT.quadraticCurveTo(this.cpntX, this.cpntY, this.epntX, this.epntY);
      this._CONTEXT.stroke();

      this.drawPoint(this.totwidth/2,this.totheight/2);//vertex
      this.drawPoint(this.totwidth/2,this.totheight/2+(c*10));//focus
      this.drawPoint(this.spntX,this.spntY);//startpoint
      this.drawPoint(this.epntX,this.epntY);//endpoint

      this.drawDirectrix(0,this.totheight/2-(c*10), this.totwidth,this.totheight/2-(c*10));
      this.writeLabel('V : ('+h+','+k+') F : ('+0+', '+(-c)+') l : y = '+(c), (this.totwidth/4)*3-20, this.totheight*0.9);
    
      let fourc:number;
      fourc = -4*c;
      this.sqpart = "x";
      this.nsqpart = " = "+fourc+"y";

    }else if ((ax==true)&&(or==false)&&(op==true)){//vertex h,k opening upward
     
      this.spntX = ((-Math.sqrt(4*c*(10 - k))+h)*10) + (this.totwidth/2);
      this.spntY = this.totheight/2 - ((10 + k)*10);
      this.epntX = ((Math.sqrt(4*c*(10 - k))+h)*10) + (this.totwidth/2);
      this.epntY = (this.totheight/2) - ((10 + k)*10);
      this.cpntX = (h*10) + (this.totwidth/2);
      this.cpntY = (this.totheight/2) + ((10 - k)*10);
      this._CONTEXT.lineWidth = 2;
      this._CONTEXT.strokeStyle = "#ffffff";
      this._CONTEXT.beginPath();
      //console.log(this.spntX+'  '+this.spntY+'  '+this.cpntX+'  '+this.cpntY+'  '+this.epntX+'  '+this.epntY);
      //console.log(-Math.sqrt(4*c*(15 - k)));
      //console.log(this.totheight/2+'  '+this.totwidth/2+'  '+Math.sqrt(4*c*(15-k))+'  '+(Math.sqrt(4*c*(15 - k))+h)+'  '+((Math.sqrt(4*c*(15 - k))+h)*10)+'  '+(10*(15+k)));
      //console.log(h+'  '+k+'  '+c+'  '+this.cpntY+'  '+this.epntX+'  '+this.epntY);
      this._CONTEXT.moveTo(this.spntX, this.spntY);
      this._CONTEXT.quadraticCurveTo(this.cpntX, this.cpntY, this.epntX, this.epntY);
      this._CONTEXT.stroke();
      this.drawPoint((h*10)+this.totwidth/2,this.totheight/2-(k*10));//vertex
      this.drawPoint((h*10)+this.totwidth/2,this.totheight/2-((k+c)*10));//focus
      this.drawPoint(this.spntX,this.spntY);//startpoint
      this.drawPoint(this.epntX,this.epntY);//endpoint

      this.drawDirectrix(0,this.totheight/2-(k-c)*10, this.totwidth,this.totheight/2-(k-c)*10);
      this.writeLabel('V : ('+h+','+k+') F : ('+(h)+', '+(k+c)+') l : y = '+(k-c), (this.totwidth/4)*3-20, this.totheight*0.9);
    
      let fourc:number;
      fourc = 4*c;
      if (h>0){
        this.sqpart = "(x - "+h+")";
      }else if (h<0){
        this.sqpart = "(x + "+(h*-1)+")";
      }else{
        this.sqpart = "x";
      }
      
      if (k>0){
        this.nsqpart = " = "+fourc+"(y - "+k+")";
      }else if (k<0){
        this.nsqpart = " = "+fourc+"(y + "+(k*-1)+")";
      }else{
        this.nsqpart = " = "+fourc+"y";
      }


    }else if ((ax==true)&&(or==false)&&(op==false)){//vertex h,k opening downward
      this.spntX = ((-Math.sqrt(4*c*(10 - k))+h)*10) + (this.totwidth/2);
      this.spntY = this.totheight/2 + ((10 - k)*10);
      this.epntX = ((Math.sqrt(4*c*(10 - k))+h)*10) + (this.totwidth/2);
      this.epntY = (this.totheight/2) + ((10 - k)*10);
      this.cpntX = (this.totwidth/2)+(h*10);
      this.cpntY = (this.totheight/2) - ((10 + k)*10);
      this._CONTEXT.lineWidth = 2;
      this._CONTEXT.strokeStyle = "#ffffff";
      this._CONTEXT.beginPath();

      this._CONTEXT.moveTo(this.spntX, this.spntY);
      this._CONTEXT.quadraticCurveTo(this.cpntX, this.cpntY, this.epntX, this.epntY);
      this._CONTEXT.stroke();
      this.drawPoint((h*10)+this.totwidth/2,this.totheight/2-(k*10));//vertex
      this.drawPoint((h*10)+this.totwidth/2,this.totheight/2-((k-c)*10));//focus
      this.drawPoint(this.spntX,this.spntY);//startpoint
      this.drawPoint(this.epntX,this.epntY);//endpoint
      
      this.drawDirectrix(0,this.totheight/2-((k+c)*10), this.totwidth,this.totheight/2-((k+c)*10));
      this.writeLabel('V : ('+h+','+k+') F : ('+(h)+', '+(k-c)+') l : y = '+(k+c), (this.totwidth/4)*3-20, this.totheight*0.9);
    

      let fourc:number;
      fourc = -4*c;
      if (h>0){
        this.sqpart = "(x - "+h+")";
      }else if (h<0){
        this.sqpart = "(x + "+(h*-1)+")";
      }else{
        this.sqpart = "x";
      }
      
      if (k>0){
        this.nsqpart = " = "+fourc+"(y - "+k+")";
      }else if (k<0){
        this.nsqpart = " = "+fourc+"(y + "+(k*-1)+")";
      }else{
        this.nsqpart = " = "+fourc+"y";
      }

    }else if ((ax==false)&&(or==true)&&(op==true)){//vertex origin opening right
      this.spntX = 100 + this.totwidth/2;
      this.spntY = this.totheight/2 - (Math.sqrt(4*c*10)*10);
      this.epntX = 100 + this.totwidth/2;
      this.epntY = this.totheight/2 + (Math.sqrt(4*c*10)*10);
      this.cpntX = this.totwidth/2 - 100;
      this.cpntY = 0 + this.totheight/2;
      this._CONTEXT.lineWidth = 2;
      this._CONTEXT.strokeStyle = "#ffffff";
      this._CONTEXT.beginPath();
      
      this._CONTEXT.moveTo(this.spntX, this.spntY);
      this._CONTEXT.quadraticCurveTo(this.cpntX, this.cpntY, this.epntX, this.epntY);
      this._CONTEXT.stroke();
      this.drawPoint(this.totwidth/2,this.totheight/2);//vertex
      this.drawPoint(this.totwidth/2+(c*10), this.totheight/2);//focus
      this.drawPoint(this.spntX,this.spntY);//startpoint
      this.drawPoint(this.epntX,this.epntY);//endpoint

      this.drawDirectrix(this.totwidth/2-(c*10),0, this.totwidth/2-(c*10),this.totheight);
      this.writeLabel('V : ('+h+','+k+') F : ('+(c)+', '+0+') l : x = '+(-c), (this.totwidth/4)*3-20, this.totheight*0.9);
    
      let fourc:number;
      fourc = 4*c;
      this.sqpart = "y";
      this.nsqpart = " = "+fourc+"x";

    }else if ((ax==false)&&(or==true)&&(op==false)){//vertex origin opening left
      this.spntX = -100 + this.totwidth/2;
      this.spntY = this.totheight/2 - (Math.sqrt(4*c*10)*10);
      this.epntX = -100 + this.totwidth/2;
      this.epntY = this.totheight/2 + (Math.sqrt(4*c*10)*10);
      this.cpntX = this.totwidth/2 + 100;
      this.cpntY = 0 + this.totheight/2;
      this._CONTEXT.lineWidth = 2;
      this._CONTEXT.strokeStyle = "#ffffff";
      this._CONTEXT.beginPath();
      
      this._CONTEXT.moveTo(this.spntX, this.spntY);
      this._CONTEXT.quadraticCurveTo(this.cpntX, this.cpntY, this.epntX, this.epntY);
      this._CONTEXT.stroke();
      this.drawPoint(this.totwidth/2,this.totheight/2);//vertex
      this.drawPoint(this.totwidth/2-(c*10), this.totheight/2);//focus
      this.drawPoint(this.spntX,this.spntY);//startpoint
      this.drawPoint(this.epntX,this.epntY);//endpoint-

      this.drawDirectrix(this.totwidth/2+(c)*10,0, this.totwidth/2+(c)*10,this.totheight);
      this.writeLabel('V : ('+h+','+k+') F : ('+(-c)+', '+0+') l : x = '+(c), (this.totwidth/4)*3-20, this.totheight*0.9);
    
      let fourc:number;
      fourc = -4*c;
      this.sqpart = "y";
      this.nsqpart = " = "+fourc+"x";

    }else if ((ax==false)&&(or==false)&&(op==true)){//vertex h,k opening right
      this.spntX = ((10+h)*10) + this.totwidth/2;
      this.spntY = this.totheight/2 - ((Math.sqrt(4*c*(10-h))+k)*10);
      this.epntX = ((10+h)*10) + this.totwidth/2;
      this.epntY = this.totheight/2 - ((-Math.sqrt(4*c*(10-h))+k)*10);
      this.cpntX = this.totwidth/2 - ((10-h)*10);
      this.cpntY = this.totheight/2 - (k*10);
      this._CONTEXT.lineWidth = 2;
      this._CONTEXT.strokeStyle = "#ffffff";
      this._CONTEXT.beginPath();
      //console.log(this.spntX+'  '+this.spntY+'  '+this.cpntX+'  '+this.cpntY+'  '+this.epntX+'  '+this.epntY);
      //console.log((Math.sqrt(4*c*(15-h))+k)+'   '+(Math.sqrt(4*c*(15-h)))+'   '+4*c*(15-h));
      this._CONTEXT.moveTo(this.spntX, this.spntY);
      this._CONTEXT.quadraticCurveTo(this.cpntX, this.cpntY, this.epntX, this.epntY);
      this._CONTEXT.stroke();
      this.drawPoint(h*10 + this.totwidth/2,this.totheight/2-(k*10));//vertex
      this.drawPoint(this.totwidth/2+((h+c)*10), this.totheight/2-(k*10));//focus
      this.drawPoint(this.spntX,this.spntY);//startpoint
      this.drawPoint(this.epntX,this.epntY);//endpoint

      this.drawDirectrix(this.totwidth/2+((h-c)*10),0, this.totwidth/2+((h-c)*10),this.totheight);
      this.writeLabel('V : ('+h+','+k+') F : ('+(h+c)+', '+k+') l : x = '+(h-c), (this.totwidth/4)*3-20, this.totheight*0.9);
    
      let fourc:number;
      fourc = 4*c;
      if (k>0){
        this.sqpart = "(y - "+k+")";
      }else if (k<0){
        this.sqpart = "(y + "+(k*-1)+")";
      }else{
        this.sqpart = "y";
      }
      
      if (h>0){
        this.nsqpart = " = "+fourc+"(x - "+h+")";
      }else if (h<0){
        this.nsqpart = " = "+fourc+"(x + "+(h*-1)+")";
      }else{
        this.nsqpart = " = "+fourc+"x";
      }

    }else if ((ax==false)&&(or==false)&&(op==false)){//vertex h,k opening left
      this.spntX = this.totwidth/2 - ((10-h)*10);
      this.spntY = this.totheight/2 - ((Math.sqrt(4*c*(10-h))+k)*10);
      this.epntX = this.totwidth/2 - ((10-h)*10);
      this.epntY = this.totheight/2 - ((-Math.sqrt(4*c*(10-h))+k)*10);
      this.cpntX = this.totwidth/2 + ((10+h)*10);
      this.cpntY = this.totheight/2 - (k*10);
      this._CONTEXT.lineWidth = 2;
      this._CONTEXT.strokeStyle = "#ffffff";
      this._CONTEXT.beginPath();
      //console.log(this.spntX+'  '+this.spntY+'  '+this.cpntX+'  '+this.cpntY+'  '+this.epntX+'  '+this.epntY);
      //console.log((Math.sqrt(4*c*(15-h))+k)+'   '+(Math.sqrt(4*c*(15-h)))+'   '+4*c*(15-h));
      this._CONTEXT.moveTo(this.spntX, this.spntY);
      this._CONTEXT.quadraticCurveTo(this.cpntX, this.cpntY, this.epntX, this.epntY);
      this._CONTEXT.stroke();
      this.drawPoint(this.totwidth/2 + (h*10),this.totheight/2-(k*10));//vertex
      this.drawPoint(this.totwidth/2+((h-c)*10), this.totheight/2-(k*10));//focus
      this.drawPoint(this.spntX,this.spntY);//startpoint
      this.drawPoint(this.epntX,this.epntY);//endpoint

      this.drawDirectrix((h+c)*10+this.totwidth/2,0, (h+c)*10+this.totwidth/2,this.totheight);      
      this.writeLabel('V : ('+h+','+k+') F : ('+(h-c)+', '+k+') l : x = ' +(h+c), (this.totwidth/4)*3-20, this.totheight*0.9);
    
      let fourc:number;
      fourc = -4*c;
      if (k>0){
        this.sqpart = "(y - "+k+")";
      }else if (k<0){
        this.sqpart = "(y + "+(k*-1)+")";
      }else{
        this.sqpart = "y";
      }
      
      if (h>0){
        this.nsqpart = " = "+fourc+"(x - "+h+")";
      }else if (h<0){
        this.nsqpart = " = "+fourc+"(x + "+(h*-1)+")";
      }else{
        this.nsqpart = " = "+fourc+"x";
      }
    }
    else{
      this.globalMeth.presentAlertOkOnly('Error!','Sorry, something is wrong.');
    }
    
  }

 
}
