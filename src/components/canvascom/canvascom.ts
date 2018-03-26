import { Component, ViewChild, Renderer } from '@angular/core';
import { Platform, NavParams } from 'ionic-angular';
import { GlobalmethodsProvider } from '../../providers/globalmethods/globalmethods';

@Component({
  selector: 'canvascom',
  templateUrl: 'canvascom.html',
  
})

export class CanvascomComponent {
  
  @ViewChild('myCanvas') canvas:any;
  canvasElement:any;
  
  public totwidth: number;
  public totheight: number;

  public CenterX: number;
  public CenterY: number;
  public CenterXpos: number;
  public CenterXneg: number;
  public CenterYpos: number;
  public CenterYneg: number;
  public unit: number;

  public h:number;
  public k:number;
  public r:number;
  public a:number;
  public b:number;
  public c:number;
  public formula: string;
  public axis: boolean;
  public origin: boolean;
  public major: boolean;
  public open: boolean;
  public canvalX:number;
  public canvalY:number;
  public canvalR:number;

  constructor(public navParams: NavParams, public platform:Platform, public renderer:Renderer, public globalMeth:GlobalmethodsProvider) {
    console.log('Hello CanvascomComponent Component');
   
  }

  ngAfterViewInit(){
    this.canvasElement = this.canvas.nativeElement;
    this.renderer.setElementAttribute(this.canvasElement, 'width', this.platform.width()+'');
    this.renderer.setElementAttribute(this.canvasElement, 'height', this.platform.height() +'');
    this.totwidth = this.canvasElement.width;
    this.totheight = this.canvasElement.height;
    console.log(this.totheight+'  wthjf  '+this.totwidth);

    this.setupCanvas();
    this.drawGrid();

    if (this.globalMeth.conicsection == 'circle'){
      this.h = this.navParams.get('H');
      this.k = this.navParams.get('K');
      this.r = this.navParams.get('R');
      
      this.drawCircle(this.h, this.k, this.r);
    }else if (this.globalMeth.conicsection == 'parabola'){
      this.h = this.navParams.get('H');
      this.k = this.navParams.get('K');
      this.r = this.navParams.get('C');
      this.formula = this.navParams.get('for');
      this.axis = this.navParams.get('ax');
      this.origin = this.navParams.get('or');
      this.open = this.navParams.get('op');
      
      this.drawParabola(this.h, this.k, this.r, this.formula, this.axis, this.origin, this.open);
      
    }else if (this.globalMeth.conicsection == 'ellipse'){
      this.h = this.navParams.get('H');
      this.k = this.navParams.get('K');
      this.a = this.navParams.get('A');
      this.b = this.navParams.get('B');
      this.formula = this.navParams.get('for');
      this.origin = this.navParams.get('or');
      this.major = this.navParams.get('ma');
      this.drawEllipse(this.h, this.k, this.a, this.b, this.formula, this.origin, this.major);
    
    }else if (this.globalMeth.conicsection == 'hyperbola'){
      this.h = this.navParams.get('H');
      this.k = this.navParams.get('K');
      this.a = this.navParams.get('A');
      this.b = this.navParams.get('B');
      this.formula = this.navParams.get('for');
      this.axis = this.navParams.get('ax');
 
      this.drawHyperbola(this.h, this.k, this.a, this.b, this.formula, this.axis);
    }else{
      this.globalMeth.presentAlertOkOnly('Error!','Please input valid numbers.');
    }
  }
  setupCanvas(){
    let can = this.canvasElement.getContext('2d');
    can.fillStyle = "#3e3e3e";
    can.fillRect(0, 0, this.totwidth, this.totheight);
  }
  
  clearCanvas()
  {
    let can = this.canvasElement.getContext('2d');
    can.clearRect(0, 0, this.totwidth, this.totheight);
    this.setupCanvas();
  }

  drawGrid(){
    let can = this.canvasElement.getContext('2d');
    this.CenterY = this.totheight/2;
    this.CenterX = this.totwidth/2;
    can.beginPath();
    can.moveTo(this.CenterX, 0); //y-axis
    can.lineTo(this.CenterX, this.totheight);
    can.moveTo(0, this.CenterY); //x-axis
    can.lineTo(this.totwidth, this.CenterY);
    can.lineWidth = 1;
    can.strokeStyle = '#ffffff';
    can.stroke();

    //drawing unit marks
    can.font = '5pt Calibri'
    can.textAlign = 'center'
    can.textBaseline = 'top'
    can.fillStyle = '#ffffff'

    this.CenterXpos = this.CenterX + 10; //x-axis positive unit marks
    this.unit = 1;
    while(this.CenterXpos <= this.totwidth){ 
    can.moveTo(this.CenterXpos, this.CenterY - 5); 
    can.lineTo(this.CenterXpos, this.CenterY + 5);
  
    can.fillText(this.unit, this.CenterXpos, this.CenterY + 8);
    this.CenterXpos = this.CenterXpos + 10;
    this.unit = this.unit + 1;

    can.lineWidth = 1;
    can.strokeStyle = '#ffffff';
    can.stroke();
    }

    this.CenterXneg = this.CenterX - 10; //x-axis negative unit marks
    this.unit =1;
    while(this.CenterXneg >= 0){ 
    can.moveTo(this.CenterXneg, this.CenterY - 5); 
    can.lineTo(this.CenterXneg, this.CenterY + 5);
  
    can.fillText('-'+this.unit, this.CenterXneg, this.CenterY - 15);
    this.CenterXneg = this.CenterXneg - 10;
    this.unit = this.unit +1;

    can.lineWidth = 1;
    can.strokeStyle = '#ffffff';
    can.stroke();
    }

    this.CenterYpos = this.CenterY - 10; //y-axis positive unit marks
    this.unit = 1;
    while(this.CenterYpos >= 0){ 
    can.moveTo(this.CenterX - 5, this.CenterYpos); 
    can.lineTo(this.CenterX + 5, this.CenterYpos);
      
    can.fillText(this.unit, this.CenterX + 12, this.CenterYpos-3);
    this.CenterYpos = this.CenterYpos - 10;
    this.unit = this.unit + 1

    can.lineWidth = 1;
    can.strokeStyle = '#ffffff';
    can.stroke();
    }

    this.CenterYneg = this.CenterY + 10; //y-axis negative unit marks
    this.unit = 1;
    while(this.CenterYneg <= this.totheight){ 
    can.moveTo(this.CenterX - 5, this.CenterYneg); 
    can.lineTo(this.CenterX + 5, this.CenterYneg);
  
    can.fillText('-'+this.unit, this.CenterX - 12, this.CenterYneg-3);
    this.CenterYneg = this.CenterYneg + 10;
    this.unit = this.unit + 1
    
    can.lineWidth = 1;
    can.strokeStyle = '#ffffff';
    can.stroke();
    }
  }

  drawCircle(h:number, k:number, r:number){
    console.log(h+'  '+k+'  '+r)
    let can = this.canvasElement.getContext('2d');
    can.beginPath();

    this.canvalX = (h*10)+this.totwidth/2;
    this.canvalY = this.totheight/2 - (k*10);

    this.canvalR = (r*10);
    console.log(this.canvalX+'  '+this.canvalY+'  '+this.canvalR)
      // x, y, radius, startAngle, endAngle
    can.arc(this.canvalX, this.canvalY, this.canvalR, 0, 2 * Math.PI);      
    can.lineWidth = 2;
    can.strokeStyle = '#ffffff';
    can.stroke();
    this.drawPoint(this.canvalX, this.canvalY);
    this.writeLabel('center: ('+h+','+k+') radius: '+r, this.totwidth-150, this.totheight-100);
  }

  drawPoint(xVal:number, yVal:number){
    let ctx = this.canvasElement.getContext('2d');
    ctx.beginPath();
    ctx.arc(xVal, yVal, 3, 0, 2 * Math.PI);      
    ctx.fillStyle = '#ff0000';
    ctx.fill();
  }
  drawDirectrix(x1, y1, x2, y2){
    let ctx = this.canvasElement.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(x1, y1);  
    ctx.lineTo(x2, y2)    
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#ff0000";
    ctx.stroke();
  }
  writeLabel(str:string, x:number, y:number){
    let ctx = this.canvasElement.getContext('2d');
    ctx.font = '12pt Calibri'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'top'
    ctx.fillStyle = '#de691a'
    ctx.fillText(str, x, y);
  }
public spntX:number;
public spntY:number;
public epntX:number;
public epntY:number;
public cpntX:number;
public cpntY:number;
  drawParabola(h:number, k:number, c:number, fo:string, ax:boolean, or:boolean, op:boolean){
    let ctx = this.canvasElement.getContext('2d');
    
    if ((ax==true)&&(or==true)&&(op==true)){//vertex origin, opening upward
      this.spntX = -(Math.sqrt(4*c*15)*10) + this.totwidth/2;
      this.spntY = this.totheight/2 - 150;
      this.epntX = (Math.sqrt(4*c*15)*10) + this.totwidth/2;
      this.epntY = this.totheight/2 - 150;
      this.cpntX = 0 + this.totwidth/2;
      this.cpntY = this.totheight/2 + 150;
      ctx.lineWidth = 2;
      ctx.strokeStyle = "#ffffff";
      ctx.beginPath();
      //console.log(this.spntX+'  '+this.spntY+'  '+this.cpntX+'  '+this.cpntY+'  '+this.epntX+'  '+this.epntY);
      ctx.moveTo(this.spntX, this.spntY);
      ctx.quadraticCurveTo(this.cpntX, this.cpntY, this.epntX, this.epntY);
      ctx.stroke();

      this.drawDirectrix(0, this.totheight/2+(c*10), this.totwidth,this.totheight/2+(c*10));
      this.writeLabel('vertex: ('+h+','+k+') focus: ('+0+', '+(c)+') directrix: y='+(-c), 200, this.totheight-100);

      this.drawPoint(this.totwidth/2,this.totheight/2);//vertex
      this.drawPoint(this.totwidth/2,this.totheight/2-(c*10));//focus
      this.drawPoint(this.spntX,this.spntY);//startpoint
      this.drawPoint(this.epntX,this.epntY);//endpoint

      
    }else if ((ax==true)&&(or==true)&&(op==false)){// vertex origin opening downward
      this.spntX = -(Math.sqrt(4*c*15)*10) + this.totwidth/2;
      this.spntY = this.totheight/2 + 150;
      this.epntX = (Math.sqrt(4*c*15)*10) + this.totwidth/2;
      this.epntY = this.totheight/2 + 150;
      this.cpntX = 0 + this.totwidth/2;
      this.cpntY = this.totheight/2 - 150;
      ctx.lineWidth = 2;
      ctx.strokeStyle = "#ffffff";
      ctx.beginPath();
     
      ctx.moveTo(this.spntX, this.spntY);
      ctx.quadraticCurveTo(this.cpntX, this.cpntY, this.epntX, this.epntY);
      ctx.stroke();

      this.drawPoint(this.totwidth/2,this.totheight/2);//vertex
      this.drawPoint(this.totwidth/2,this.totheight/2+(c*10));//focus
      this.drawPoint(this.spntX,this.spntY);//startpoint
      this.drawPoint(this.epntX,this.epntY);//endpoint

      this.drawDirectrix(0,this.totheight/2-(c*10), this.totwidth,this.totheight/2-(c*10));
      this.writeLabel('vertex: ('+h+','+k+') focus: ('+0+', '+(-c)+') directrix: y='+(c), 200, this.totheight-100);
    }else if ((ax==true)&&(or==false)&&(op==true)){//vertex h,k opening upward
     
      this.spntX = ((-Math.sqrt(4*c*(10 - k))+h)*10) + (this.totwidth/2);
      this.spntY = this.totheight/2 - ((10 + k)*10);
      this.epntX = ((Math.sqrt(4*c*(10 - k))+h)*10) + (this.totwidth/2);
      this.epntY = (this.totheight/2) - ((10 + k)*10);
      this.cpntX = (h*10) + (this.totwidth/2);
      this.cpntY = (this.totheight/2) + ((10 - k)*10);
      ctx.lineWidth = 2;
      ctx.strokeStyle = "#ffffff";
      ctx.beginPath();
      //console.log(this.spntX+'  '+this.spntY+'  '+this.cpntX+'  '+this.cpntY+'  '+this.epntX+'  '+this.epntY);
      //console.log(-Math.sqrt(4*c*(15 - k)));
      //console.log(this.totheight/2+'  '+this.totwidth/2+'  '+Math.sqrt(4*c*(15-k))+'  '+(Math.sqrt(4*c*(15 - k))+h)+'  '+((Math.sqrt(4*c*(15 - k))+h)*10)+'  '+(10*(15+k)));
      //console.log(h+'  '+k+'  '+c+'  '+this.cpntY+'  '+this.epntX+'  '+this.epntY);
      ctx.moveTo(this.spntX, this.spntY);
      ctx.quadraticCurveTo(this.cpntX, this.cpntY, this.epntX, this.epntY);
      ctx.stroke();
      this.drawPoint((h*10)+this.totwidth/2,this.totheight/2-(k*10));//vertex
      this.drawPoint((h*10)+this.totwidth/2,this.totheight/2-((k+c)*10));//focus
      this.drawPoint(this.spntX,this.spntY);//startpoint
      this.drawPoint(this.epntX,this.epntY);//endpoint

      this.drawDirectrix(0,this.totheight/2-(k-c)*10, this.totwidth,this.totheight/2-(k-c)*10);
      this.writeLabel('vertex: ('+h+','+k+') focus: ('+(h)+', '+(k+c)+') directrix: y='+(k-c), 200, this.totheight-100);
    }else if ((ax==true)&&(or==false)&&(op==false)){//vertex h,k opening downward
      this.spntX = ((-Math.sqrt(4*c*(10 - k))+h)*10) + (this.totwidth/2);
      this.spntY = this.totheight/2 + ((10 - k)*10);
      this.epntX = ((Math.sqrt(4*c*(10 - k))+h)*10) + (this.totwidth/2);
      this.epntY = (this.totheight/2) + ((10 - k)*10);
      this.cpntX = (this.totwidth/2)+(h*10);
      this.cpntY = (this.totheight/2) - ((10 + k)*10);
      ctx.lineWidth = 2;
      ctx.strokeStyle = "#ffffff";
      ctx.beginPath();

      ctx.moveTo(this.spntX, this.spntY);
      ctx.quadraticCurveTo(this.cpntX, this.cpntY, this.epntX, this.epntY);
      ctx.stroke();
      this.drawPoint((h*10)+this.totwidth/2,this.totheight/2-(k*10));//vertex
      this.drawPoint((h*10)+this.totwidth/2,this.totheight/2-((k-c)*10));//focus
      this.drawPoint(this.spntX,this.spntY);//startpoint
      this.drawPoint(this.epntX,this.epntY);//endpoint
      
      this.drawDirectrix(0,this.totheight/2-((k+c)*10), this.totwidth,this.totheight/2-((k+c)*10));
      this.writeLabel('vertex: ('+h+','+k+') focus: ('+(h)+', '+(k-c)+') directrix: y='+(k+c), 200, this.totheight-100);
    }else if ((ax==false)&&(or==true)&&(op==true)){//vertex origin opening right
      this.spntX = 150 + this.totwidth/2;
      this.spntY = this.totheight/2 - (Math.sqrt(4*c*15)*10);
      this.epntX = 150 + this.totwidth/2;
      this.epntY = this.totheight/2 + (Math.sqrt(4*c*15)*10);
      this.cpntX = this.totwidth/2 - 150;
      this.cpntY = 0 + this.totheight/2;
      ctx.lineWidth = 2;
      ctx.strokeStyle = "#ffffff";
      ctx.beginPath();
      
      ctx.moveTo(this.spntX, this.spntY);
      ctx.quadraticCurveTo(this.cpntX, this.cpntY, this.epntX, this.epntY);
      ctx.stroke();
      this.drawPoint(this.totwidth/2,this.totheight/2);//vertex
      this.drawPoint(this.totwidth/2+(c*10), this.totheight/2);//focus
      this.drawPoint(this.spntX,this.spntY);//startpoint
      this.drawPoint(this.epntX,this.epntY);//endpoint

      this.drawDirectrix(this.totwidth/2-(c*10),0, this.totwidth/2-(c*10),this.totheight);
      this.writeLabel('vertex: ('+h+','+k+') focus: ('+(c)+', '+0+') directrix: x='+(-c), 200, this.totheight-100);
    }else if ((ax==false)&&(or==true)&&(op==false)){//vertex origin opening left
      this.spntX = -150 + this.totwidth/2;
      this.spntY = this.totheight/2 - (Math.sqrt(4*c*15)*10);
      this.epntX = -150 + this.totwidth/2;
      this.epntY = this.totheight/2 + (Math.sqrt(4*c*15)*10);
      this.cpntX = this.totwidth/2 + 150;
      this.cpntY = 0 + this.totheight/2;
      ctx.lineWidth = 2;
      ctx.strokeStyle = "#ffffff";
      ctx.beginPath();
      
      ctx.moveTo(this.spntX, this.spntY);
      ctx.quadraticCurveTo(this.cpntX, this.cpntY, this.epntX, this.epntY);
      ctx.stroke();
      this.drawPoint(this.totwidth/2,this.totheight/2);//vertex
      this.drawPoint(this.totwidth/2-(c*10), this.totheight/2);//focus
      this.drawPoint(this.spntX,this.spntY);//startpoint
      this.drawPoint(this.epntX,this.epntY);//endpoint-

      this.drawDirectrix(this.totwidth/2+(c)*10,0, this.totwidth/2+(c)*10,this.totheight);
      this.writeLabel('vertex: ('+h+','+k+') focus: ('+(-c)+', '+0+') directrix: x='+(c), 200, this.totheight-100);
    }else if ((ax==false)&&(or==false)&&(op==true)){//vertex h,k opening right
      this.spntX = ((10+h)*10) + this.totwidth/2;
      this.spntY = this.totheight/2 - ((Math.sqrt(4*c*(10-h))+k)*10);
      this.epntX = ((10+h)*10) + this.totwidth/2;
      this.epntY = this.totheight/2 - ((-Math.sqrt(4*c*(10-h))+k)*10);
      this.cpntX = this.totwidth/2 - ((10-h)*10);
      this.cpntY = this.totheight/2 - (k*10);
      ctx.lineWidth = 2;
      ctx.strokeStyle = "#ffffff";
      ctx.beginPath();
      //console.log(this.spntX+'  '+this.spntY+'  '+this.cpntX+'  '+this.cpntY+'  '+this.epntX+'  '+this.epntY);
      //console.log((Math.sqrt(4*c*(15-h))+k)+'   '+(Math.sqrt(4*c*(15-h)))+'   '+4*c*(15-h));
      ctx.moveTo(this.spntX, this.spntY);
      ctx.quadraticCurveTo(this.cpntX, this.cpntY, this.epntX, this.epntY);
      ctx.stroke();
      this.drawPoint(h*10 + this.totwidth/2,this.totheight/2-(k*10));//vertex
      this.drawPoint(this.totwidth/2+((h+c)*10), this.totheight/2-(k*10));//focus
      this.drawPoint(this.spntX,this.spntY);//startpoint
      this.drawPoint(this.epntX,this.epntY);//endpoint

      this.drawDirectrix(this.totwidth/2+((h-c)*10),0, this.totwidth/2+((h-c)*10),this.totheight);
      this.writeLabel('vertex: ('+h+','+k+') focus: ('+(h+c)+', '+k+') directrix: x='+(h-c), 200, this.totheight-100);
    }else if ((ax==false)&&(or==false)&&(op==false)){//vertex h,k opening left
      this.spntX = this.totwidth/2 - ((10-h)*10);
      this.spntY = this.totheight/2 - ((Math.sqrt(4*c*(10-h))+k)*10);
      this.epntX = this.totwidth/2 - ((10-h)*10);
      this.epntY = this.totheight/2 - ((-Math.sqrt(4*c*(10-h))+k)*10);
      this.cpntX = this.totwidth/2 + ((10+h)*10);
      this.cpntY = this.totheight/2 - (k*10);
      ctx.lineWidth = 2;
      ctx.strokeStyle = "#ffffff";
      ctx.beginPath();
      //console.log(this.spntX+'  '+this.spntY+'  '+this.cpntX+'  '+this.cpntY+'  '+this.epntX+'  '+this.epntY);
      //console.log((Math.sqrt(4*c*(15-h))+k)+'   '+(Math.sqrt(4*c*(15-h)))+'   '+4*c*(15-h));
      ctx.moveTo(this.spntX, this.spntY);
      ctx.quadraticCurveTo(this.cpntX, this.cpntY, this.epntX, this.epntY);
      ctx.stroke();
      this.drawPoint(this.totwidth/2 + (h*10),this.totheight/2-(k*10));//vertex
      this.drawPoint(this.totwidth/2+((h-c)*10), this.totheight/2-(k*10));//focus
      this.drawPoint(this.spntX,this.spntY);//startpoint
      this.drawPoint(this.epntX,this.epntY);//endpoint

      this.drawDirectrix((h+c)*10+this.totwidth/2,0, (h+c)*10+this.totwidth/2,this.totheight);      
      this.writeLabel('vertex: ('+h+','+k+') focus: ('+(h-c)+', '+k+') directrix: x='+(h+c), 200, this.totheight-100);
    }
    else{
      this.globalMeth.presentAlertOkOnly('Error!','Sorry, something is wrong.');
    }
    
  }

  drawEllipse(h:number, k:number, a:number, b:number, fo:string, or:boolean, ma:boolean){
    let ctx = this.canvasElement.getContext('2d');
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
      


      ctx.lineWidth = 2;
      ctx.strokeStyle = '#ffffff';
      //top curve
      ctx.beginPath();
      ctx.moveTo(this.totwidth/2+((h+a)*10), this.canvalY);//-a
      //ctx.moveTo(150,250);
      ctx.bezierCurveTo(plrx,plry,nlrx,plry,this.totwidth/2+((h-a)*10), this.canvalY);//end point is +a
      //ctx.bezierCurveTo(150,150,250,150,250,250);
      ctx.stroke();
      
      //below curve
      //ctx.moveTo(150,250);
      //ctx.bezierCurveTo(150,350,250,350,250,250);
      ctx.moveTo(this.totwidth/2+((h+a)*10), this.canvalY);
      ctx.bezierCurveTo(plrx,nlry,nlrx,nlry,this.totwidth/2+((h-a)*10), this.canvalY);
      ctx.stroke();

      this.writeLabel('center: ('+h+','+k+') foci: ('+(h+this.c)+', '+(k)+'), ('+(h-this.c)+', '+(k)+')', 200, this.totheight-125);
      this.writeLabel('vertices: ('+(h+a)+','+k+'), ('+(h-a)+','+k+') minor: ('+h+', '+(k+b)+'), ('+h+', '+(k-b)+')', 200, this.totheight-100);
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

      ctx.lineWidth = 2;
      ctx.strokeStyle = '#ffffff';
      //left curve
      ctx.beginPath();
      ctx.moveTo(this.canvalX, this.totheight/2-((k+a)*10));//-a
      //ctx.moveTo(150,250);
      ctx.bezierCurveTo(nlrx,plry,nlrx,nlry,this.canvalX, this.totheight/2-((k-a)*10));//end point is +a
      //ctx.bezierCurveTo(150,150,250,150,250,250);
      ctx.stroke();
      
      //right curve
      //ctx.moveTo(150,250);
      //ctx.bezierCurveTo(150,350,250,350,250,250);
      ctx.moveTo(this.canvalX, this.totheight/2-((k+a)*10));
      ctx.bezierCurveTo(plrx,plry,plrx,nlry,this.canvalX, this.totheight/2-((k-a)*10));
      ctx.stroke();
      this.writeLabel('center: ('+h+','+k+') foci: ('+(h)+', '+(k+this.c)+'), ('+(h)+', '+(k-this.c)+')', 200, this.totheight-125);
      this.writeLabel('vertices: ('+(h)+','+(k+a)+'), ('+(h)+','+(k-a)+') minor: ('+(h+b)+', '+(k)+'), ('+(h-b)+', '+(k)+')', 200, this.totheight-100);
      
    }
  }

  public cvx:number; //canvasvaluex
  public cvy:number;
  public cva:number;
  public cvb:number;
  public hypc:number; //hyperbola c
  public lr:number;
  
  drawHyperbola(h:number, k:number, a:number, b:number, fo:string, ma:boolean){
      
    let ctx = this.canvasElement.getContext('2d');
    let ctx2 = this.canvasElement.getContext('2d');
    this.hypc = Math.sqrt((a*a)+(b*b));
    this.cvx = (h*10)+this.totwidth/2;
    this.cvy = this.totheight/2 - (k*10);
    this.cva = a*10;
    this.cvb = b*10;
  
    this.lr = ((b*b)/a);
  
    let lr11x = ((h*10)+this.totwidth/2) + (this.hypc*10);
    let lr11y = (this.totheight/2 - (k*10)) - (this.lr*10);
  
    let lr12x = ((h*10)+this.totwidth/2) + (this.hypc*10);
    let lr12y = (this.totheight/2 - (k*10)) + (this.lr*10);
  
    let lr21x = ((h*10)+this.totwidth/2) - (this.hypc*10);
    let lr21y = (this.totheight/2 - (k*10)) - (this.lr*10);
  
    let lr22x = ((h*10)+this.totwidth/2) - (this.hypc*10);
    let lr22y = (this.totheight/2 - (k*10)) + (this.lr*10);
  
    let cp1x = lr11x - ((this.hypc-a)*2*10);
    let cp1y = this.totheight/2 - (k*10);
  
    let cp2x = lr21x + ((this.hypc-a)*2*10);
    let cp2y = this.totheight/2 - (k*10);

    let f1x = ((h*10)+this.totwidth/2) + (this.hypc*10);
    let f1y = this.totheight/2 - (k*10);

    let f2x = ((h*10)+this.totwidth/2) - (this.hypc*10);
    let f2y = this.totheight/2 - (k*10);

    let v1x = ((h*10)+this.totwidth/2) + (a*10);
    let v1y = this.totheight/2 - (k*10);

    let v2x = ((h*10)+this.totwidth/2) - (a*10);
    let v2y = this.totheight/2 - (k*10);

    let b11x = ((h*10)+this.totwidth/2) + (a*10);
    let b11y = (this.totheight/2 - (k*10)) - (b*10);

    let b12x = ((h*10)+this.totwidth/2) + (a*10);
    let b12y = (this.totheight/2 - (k*10)) + (b*10);

    let b21x = ((h*10)+this.totwidth/2) - (a*10);
    let b21y = (this.totheight/2 - (k*10)) - (b*10);

    let b22x = ((h*10)+this.totwidth/2) - (a*10);
    let b22y = (this.totheight/2 - (k*10)) + (b*10);

    let m1 = (b11y-b22y)/(b11x-b22x);
    let m2 = (b12y-b21y)/(b12x-b21x);

    let l11x = ((h*10)+this.totwidth/2) + (15*10);
    let l11y = b11y+(m1*(l11x-b11x));

    let l12x = ((h*10)+this.totwidth/2) - (15*10);
    let l12y = b11y+(m1*(l12x-b11x));

    let l21x = ((h*10)+this.totwidth/2) - (15*10);
    let l21y = b21y+(m2*(l21x-b21x));

    let l22x = ((h*10)+this.totwidth/2) + (15*10);
    let l22y = b21y+(m2*(l22x-b21x));

    let ppy = (this.totheight/2 - (k*10))-(Math.sqrt(((15*15)/(a*a)-1)*(b*b)))*10; //+y
    let pny = (this.totheight/2 - (k*10))+(Math.sqrt(((15*15)/(a*a)-1)*(b*b)))*10; //-y
    //-------------------------------what theeffffffuuuuuccckk??------------------



    let lr11xv = ((h*10)+this.totwidth/2) - (this.lr*10);
    let lr11yv = (this.totheight/2 - (k*10)) - (this.hypc*10);
  
    let lr12xv = ((h*10)+this.totwidth/2) + (this.lr*10);
    let lr12yv = (this.totheight/2 - (k*10)) - (this.hypc*10);
  
    let lr21xv = ((h*10)+this.totwidth/2) - (this.lr*10);
    let lr21yv = (this.totheight/2 - (k*10)) + (this.hypc*10);
  
    let lr22xv = ((h*10)+this.totwidth/2) + (this.lr*10);
    let lr22yv = (this.totheight/2 - (k*10)) + (this.hypc*10);
  
    let cp1xv = (h*10)+this.totwidth/2;
    let cp1yv = lr11yv + ((this.hypc-a)*2*10);
  
    let cp2xv = (h*10)+this.totwidth/2;
    let cp2yv = lr21yv - ((this.hypc-a)*2*10);

    let f1xv = (h*10)+this.totwidth/2;
    let f1yv = this.totheight/2 - (k*10) - (this.hypc*10);

    let f2xv = (h*10)+this.totwidth/2;
    let f2yv = this.totheight/2 - (k*10) + (this.hypc*10);;

    let v1xv = ((h*10)+this.totwidth/2);
    let v1yv = this.totheight/2 - (k*10) - (a*10);

    let v2xv = ((h*10)+this.totwidth/2);
    let v2yv = this.totheight/2 - (k*10) + (a*10);

    let b11xv = ((h*10)+this.totwidth/2) - (b*10);
    let b11yv = (this.totheight/2 - (k*10)) - (a*10);

    let b12xv = ((h*10)+this.totwidth/2) + (b*10);
    let b12yv = (this.totheight/2 - (k*10)) - (a*10);

    let b21xv = ((h*10)+this.totwidth/2) - (b*10);
    let b21yv = (this.totheight/2 - (k*10)) + (a*10);

    let b22xv = ((h*10)+this.totwidth/2) + (b*10);
    let b22yv = (this.totheight/2 - (k*10)) + (a*10);

    let m1v = (b12yv-b21yv)/(b12xv-b21xv);
    let m2v = (b11yv-b22yv)/(b11xv-b22xv);

    let l11xv = ((h*10)+this.totwidth/2) + (15*10);
    let l11yv = b12yv+(m1v*(l11xv-b12xv));

    let l12xv = ((h*10)+this.totwidth/2) - (15*10);
    let l12yv = b12yv+(m1v*(l12xv-b12xv));

    let l21xv = ((h*10)+this.totwidth/2) - (15*10);
    let l21yv = b11yv+(m2v*(l21xv-b11xv));

    let l22xv = ((h*10)+this.totwidth/2) + (15*10);
    let l22yv = b11yv+(m2v*(l22xv-b11xv));

    let ppyv = (this.totheight/2 - (k*10))-(Math.sqrt(((15*15)/(b*b)+1)*(a*a)))*10; //+y
    let pnyv = (this.totheight/2 - (k*10))+(Math.sqrt(((15*15)/(b*b)+1)*(a*a)))*10; //-y
    let numv = (Math.sqrt(((15*15)/(a*a)-1)*(b*b)))*10;

    if (ma==true){//transverse axis is horizontal

      ctx.lineWidth = 2;
      ctx.strokeStyle = "#ffffff";
      ctx.beginPath();
     
      ctx.moveTo(lr11x, lr11y); //parabola1 right
      ctx.quadraticCurveTo(cp1x, cp1y, lr12x, lr12y);
      ctx.stroke();

      ctx.moveTo(lr21x, lr21y); //parabola2 left
      ctx.quadraticCurveTo(cp2x, cp2y, lr22x, lr22y);
      ctx.stroke();

      ctx.moveTo(lr11x, lr11y);  
      ctx.lineTo(l11x, ppy)     
      ctx.stroke();

      ctx.moveTo(lr12x, lr12y);  
      ctx.lineTo(l22x, pny)     
      ctx.stroke();

      console.log("num: "+numv);

      ctx.moveTo(lr21x, lr21y);  
      ctx.lineTo(l21x, ppy)     
      ctx.stroke();

      ctx.moveTo(lr22x, lr22y);  
      ctx.lineTo(l12x, pny);    
      ctx.stroke();

      ctx2.lineWidth = 2;
      ctx2.strokeStyle = "#ffffff";
      ctx2.setLineDash([5, 3]);/*dashes are 5px and spaces are 3px*/
      ctx2.beginPath();

      ctx2.moveTo(l11x, l11y);  //l1
      ctx2.lineTo(l12x, l12y);     
      ctx2.stroke();

      ctx2.moveTo(l21x, l21y);  //l2
      ctx2.lineTo(l22x, l22y);     
      ctx2.stroke();

      ctx2.moveTo(b21x, b21y);  //b up side
      ctx2.lineTo(b11x, b11y);   
      ctx2.stroke();

      ctx2.moveTo(b11x, b11y);  //b right side
      ctx2.lineTo(b12x, b12y);   
      ctx2.stroke();

      ctx2.moveTo(b12x, b12y);  //b down side
      ctx2.lineTo(b22x, b22y);   
      ctx2.stroke();

      ctx2.moveTo(b22x, b22y);  //b left side
      ctx2.lineTo(b21x, b21y);   
      ctx2.stroke();

      this.drawPoint(this.cvx, this.cvy); //center
      this.drawPoint(v1x, v1y);//vertex1
      this.drawPoint(v2x, v2y);//vertex2
      this.drawPoint(f1x, f1y);//focus1
      this.drawPoint(f2x, f2y);//focus2
      this.drawPoint(lr11x, lr11y);//lr upper right
      this.drawPoint(lr12x, lr12y);//lr lower right
      this.drawPoint(lr21x, lr21y);//lr upper left
      this.drawPoint(lr22x, lr22y);//lr lower left

      this.drawPoint(l11x, l11y);//l1 upper right
      this.drawPoint(l12x, l12y);//l1 lower left
      this.drawPoint(l21x, l21y);//l2 upper left
      this.drawPoint(l22x, l22y);//l2 lower right

      this.drawPoint(b11x, b11y);//b upper right
      this.drawPoint(b12x, b12y);//b lower left
      this.drawPoint(b21x, b21y);//b upper left
      this.drawPoint(b22x, b22y);//b lower right

    }else{//vertical

      ctx.lineWidth = 2;
      ctx.strokeStyle = "#ffffff";
      ctx.beginPath();
     
      ctx.moveTo(lr11xv, lr11yv); //parabola1 right
      ctx.quadraticCurveTo(cp1xv, cp1yv, lr12xv, lr12yv);
      ctx.stroke();

      ctx.moveTo(lr21xv, lr21yv); //parabola2 left
      ctx.quadraticCurveTo(cp2xv, cp2yv, lr22xv, lr22yv);
      ctx.stroke();

      ctx.moveTo(lr11xv, lr11yv);  
      ctx.lineTo(l21xv, ppyv)     
      ctx.stroke();

      ctx.moveTo(lr12xv, lr12yv);  
      ctx.lineTo(l11xv, ppyv)     
      ctx.stroke();

      console.log("num: "+numv);

      ctx.moveTo(lr21xv, lr21yv);  
      ctx.lineTo(l12xv, pnyv)     
      ctx.stroke();

      ctx.moveTo(lr22xv, lr22yv);  
      ctx.lineTo(l22xv, pnyv);    
      ctx.stroke();

      ctx2.lineWidth = 2;
      ctx2.strokeStyle = "#ffffff";
      ctx2.setLineDash([5, 3]);/*dashes are 5px and spaces are 3px*/
      ctx2.beginPath();

      ctx2.moveTo(l11xv, l11yv);  //l1
      ctx2.lineTo(l12xv, l12yv);     
      ctx2.stroke();

      ctx2.moveTo(l21xv, l21yv);  //l2
      ctx2.lineTo(l22xv, l22yv);     
      ctx2.stroke();

      ctx2.moveTo(b21xv, b21yv);  //b left side
      ctx2.lineTo(b11xv, b11yv);   
      ctx2.stroke();

      ctx2.moveTo(b11xv, b11yv);  //b up side
      ctx2.lineTo(b12xv, b12yv);   
      ctx2.stroke();

      ctx2.moveTo(b12xv, b12yv);  //b right side
      ctx2.lineTo(b22xv, b22yv);   
      ctx2.stroke();

      ctx2.moveTo(b22xv, b22yv);  //b down side
      ctx2.lineTo(b21xv, b21yv);   
      ctx2.stroke();

      this.drawPoint(this.cvx, this.cvy); //center
      this.drawPoint(v1xv, v1yv);//vertex1
      this.drawPoint(v2xv, v2yv);//vertex2
      this.drawPoint(f1xv, f1yv);//focus1
      this.drawPoint(f2xv, f2yv);//focus2
      this.drawPoint(lr11xv, lr11yv);//lr upper left
      this.drawPoint(lr12xv, lr12yv);//lr upper right
      this.drawPoint(lr21xv, lr21yv);//lr lower left
      this.drawPoint(lr22xv, lr22yv);//lr lower right

      this.drawPoint(l11xv, l11yv);//l1 upper right
      this.drawPoint(l12xv, l12yv);//l1 lower left
      this.drawPoint(l21xv, l21yv);//l2 upper left
      this.drawPoint(l22xv, l22yv);//l2 lower right

      this.drawPoint(b11xv, b11yv);//b upper left
      this.drawPoint(b12xv, b12yv);//b upper right
      this.drawPoint(b21xv, b21yv);//b lower left
      this.drawPoint(b22xv, b22yv);//b lower right

    }

    

  }
}
