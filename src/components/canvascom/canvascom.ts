import { Component, ViewChild, Renderer } from '@angular/core';
import { Platform, NavParams } from 'ionic-angular';
import { GlobalmethodsProvider } from '../../providers/globalmethods/globalmethods';
@Component({
  selector: 'canvascom',
  templateUrl: 'canvascom.html'
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
      this.drawHyperbola();
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

  drawHyperbola(){

  }
}
