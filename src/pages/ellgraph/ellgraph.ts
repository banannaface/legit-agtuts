import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { GlobalmethodsProvider } from '../../providers/globalmethods/globalmethods';
/**
 * Generated class for the EllgraphPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ellgraph',
  templateUrl: 'ellgraph.html',
})
export class EllgraphPage {
  @ViewChild('canvas') canvasEl : ElementRef;
  private _CANVAS  : any;
  private _CONTEXT : any;
  public devwidth : number;
  public devheight : number;
  public toth : number;
  public axis : boolean = false;
  public rangech : number = 0;
  public rangeck : number = 0;
  public rangea : number = 2;
  public rangeb : number = 1;

  public firstn : string = "x";
  public secondn : string = "y";
  public firstd : number = 1;
  public secondd : number = 4;
  public cc : number = 1.73;

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
    console.log('ionViewDidLoad EllgraphPage');

    this.initialiseCanvas();
    this.drawGrid();
    this.drawEllipse(this.rangech, this.rangeck, this.rangea, this.rangeb, "maya na lang", this.axis, this.axis);
    /*this.drawParabola(this.rangech, this.rangeck, this.rangec, "maya na lang", this.axis, this.origin, this.opening);
    this.drawCircle(this.rangech, this.rangeck, this.ranger);*/
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
    this.CenterY = this.totheight/2;
    this.CenterX = this.totwidth/2;
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
    
    this._CONTEXT.font = 'bold 12pt Calibri'
    this._CONTEXT.textAlign = 'center'
    this._CONTEXT.textBaseline = 'top'
    this._CONTEXT.fillStyle = '#de691a'
    this._CONTEXT.fillText(str, x, y);
  }

  changeaxis(ax){
   
   this.axis = ax;
   if (this.axis==true){
    this.firstd = this.rangea*this.rangea;
    this.secondd = this.rangeb*this.rangeb;
  }else{
    this.firstd = this.rangeb*this.rangeb;
    this.secondd = this.rangea*this.rangea;
  }
    console.log(this.axis);
    this.drawEllipse(this.rangech, this.rangeck, this.rangea, this.rangeb, "maya na lang", this.axis, this.axis);
  }

  changeverh(rch){
    this.rangech = rch;
    if (rch>0){
      this.firstn = "(x - "+this.rangech+")";
    }else if (rch<0){
      this.firstn = "(x + "+this.rangech*-1+")";
    }else{
      this.firstn = "x";
    }
    
    console.log(this.rangech);
    this.drawEllipse(this.rangech, this.rangeck, this.rangea, this.rangeb, "maya na lang", this.axis, this.axis);
  }

  changeverk(rck){
    this.rangeck = rck;

    if (rck>0){
      this.secondn = "(y - "+this.rangeck+")";
    }else if (rck<0){
      this.secondn = "(y + "+this.rangeck*-1+")";
    }else{
      this.secondn = "y";
    }
    console.log(this.rangeck);
    this.drawEllipse(this.rangech, this.rangeck, this.rangea, this.rangeb, "maya na lang", this.axis, this.axis);
  }

  changea(ra){
    this.rangea = ra;
    if (this.axis==true){
      this.firstd = ra*ra;
      this.secondd = this.rangeb*this.rangeb;
    }else{
      this.firstd = this.rangeb*this.rangeb;
      this.secondd = ra*ra;
    }
    console.log(this.rangea);
    this.drawEllipse(this.rangech, this.rangeck, this.rangea, this.rangeb, "maya na lang", this.axis, this.axis);
  }

  changeb(rb){
    this.rangeb = rb;
    if (this.axis==true){
      this.firstd = this.rangea*this.rangea;
      this.secondd = rb*rb;
    }else{
      this.firstd = rb*rb;
      this.secondd = this.rangea*this.rangea;
    }
    console.log(this.rangeb);
    this.drawEllipse(this.rangech, this.rangeck, this.rangea, this.rangeb, "maya na lang", this.axis, this.axis);
  }

  public canvalX:number;
  public canvalY:number;
  public canvalR:number;
  public c:number;

  drawEllipse(h:number, k:number, a:number, b:number, fo:string, or:boolean, ma:boolean){
    this.clearCanvas();
    this.drawGrid();

    this.c = Math.sqrt((a*a)-(b*b));
    this.canvalX = (h*10)+this.totwidth/2;
    this.canvalY = this.totheight/2 - (k*10);
    this.canvalR = b*10;
    let plry:number;
    let nlry:number;
    
    let plrx:number;
    let nlrx:number;
    

    if (ma==true){//means horizontal major axis
      
      this.drawPoint(this.canvalX, this.totheight/2-((k+b)*10));//+b
      this.drawPoint(this.canvalX, this.totheight/2-((k-b)*10));//-b 
      this.drawPoint(this.totwidth/2+((h+a)*10), this.canvalY);//+a vertex2
      this.drawPoint(this.totwidth/2+((h-a)*10), this.canvalY);//-a vertex1
      this.drawPoint(this.totwidth/2+((h+this.c)*10), this.canvalY);//+c focus2
      this.drawPoint(this.totwidth/2+((h-this.c)*10), this.canvalY);//-c focus1
      this.drawPoint(this.canvalX, this.canvalY);//center


      plry = this.totheight/2-(k+(b/3)*4)*10;//top curve
      nlry = this.totheight/2-(k-(b/3)*4)*10;//below curve
     
      plrx = this.totwidth/2+((h+a)*10)
      nlrx = this.totwidth/2+((h-a)*10)
      


      this._CONTEXT.lineWidth = 2;
      this._CONTEXT.strokeStyle = '#ffffff';
      //top curve
      this._CONTEXT.beginPath();
      this._CONTEXT.moveTo(this.totwidth/2+((h+a)*10), this.canvalY);//-a
      //ctx.moveTo(150,250);
      this._CONTEXT.bezierCurveTo(plrx,plry,nlrx,plry,this.totwidth/2+((h-a)*10), this.canvalY);//end point is +a
      //ctx.bezierCurveTo(150,150,250,150,250,250);
      this._CONTEXT.stroke();
      
      //below curve
      //ctx.moveTo(150,250);
      //ctx.bezierCurveTo(150,350,250,350,250,250);
      this._CONTEXT.moveTo(this.totwidth/2+((h+a)*10), this.canvalY);
      this._CONTEXT.bezierCurveTo(plrx,nlry,nlrx,nlry,this.totwidth/2+((h-a)*10), this.canvalY);
      this._CONTEXT.stroke();
      this.cc = Number(this.c.toFixed(2));
      let num : number = h+this.cc;
      let num1 : number = h-this.cc;
      this.writeLabel('center: ('+h+','+k+')', this.totwidth*0.25, this.totheight*0.8);
      this.writeLabel('F₁('+(num1.toFixed(2))+', '+(k)+'); F₂('+(num.toFixed(2))+'; '+(k)+')', this.totwidth*0.25, this.totheight*0.85);
      this.writeLabel('V₁('+(h-a)+','+k+'); V₂('+(h+a)+','+k+')', this.totwidth*0.75-10, this.totheight*0.8);
      this.writeLabel('W₁('+h+', '+(k-b)+'); W₂('+h+', '+(k+b)+')', this.totwidth*0.75-10, this.totheight*0.85);
    
    }else{//means vertical major axis
      this.drawPoint(this.totwidth/2+((h+b)*10), this.canvalY) ;//+b
      this.drawPoint(this.totwidth/2+((h-b)*10), this.canvalY);//-b 
      this.drawPoint(this.canvalX, this.totheight/2-((k+a)*10));//+a vertex2
      this.drawPoint(this.canvalX, this.totheight/2-((k-a)*10));//-a vertex1
      this.drawPoint(this.canvalX, this.totheight/2-((k+this.c)*10));//+c focus2
      this.drawPoint(this.canvalX, this.totheight/2-((k-this.c)*10));//-c focus1
      this.drawPoint(this.canvalX, this.canvalY);//center

      plrx = this.totwidth/2+(h+(b/3)*4)*10;
      nlrx = this.totwidth/2+(h-(b/3)*4)*10;
     
      plry = this.totheight/2-((k+a)*10);
      nlry = this.totheight/2-((k-a)*10);

      this._CONTEXT.lineWidth = 2;
      this._CONTEXT.strokeStyle = '#ffffff';
      //left curve
      this._CONTEXT.beginPath();
      this._CONTEXT.moveTo(this.canvalX, this.totheight/2-((k+a)*10));//-a
      //ctx.moveTo(150,250);
      this._CONTEXT.bezierCurveTo(nlrx,plry,nlrx,nlry,this.canvalX, this.totheight/2-((k-a)*10));//end point is +a
      //ctx.bezierCurveTo(150,150,250,150,250,250);
      this._CONTEXT.stroke();
      
      //right curve
      //ctx.moveTo(150,250);
      //ctx.bezierCurveTo(150,350,250,350,250,250);
      this._CONTEXT.moveTo(this.canvalX, this.totheight/2-((k+a)*10));
      this._CONTEXT.bezierCurveTo(plrx,plry,plrx,nlry,this.canvalX, this.totheight/2-((k-a)*10));
      this._CONTEXT.stroke();

      this.cc = Number(this.c.toFixed(2));
      let num : number = k+this.cc;
      let num1 : number = k-this.cc;
      this.writeLabel('center: ('+h+','+k+')', this.totwidth*0.25, this.totheight*0.8);
      this.writeLabel('F₁('+(h)+', '+(num1.toFixed(2))+'); F₂('+(h)+', '+(num.toFixed(2))+')', this.totwidth*0.25, this.totheight*0.85);
      this.writeLabel('V₁('+(h)+','+(k-a)+'); V₂('+(h)+','+(k+a)+')', this.totwidth*0.75-10, this.totheight*0.8);
      this.writeLabel('W₁('+(h-b)+', '+(k)+'); W₂('+(h+b)+', '+(k)+')', this.totwidth*0.75-10, this.totheight*0.85);
    }
  }

}
