import { Directive, Input, ElementRef, Renderer } from '@angular/core';


@Directive({
  selector: '[hide]', // Attribute selector
  host:{
    '(ionScroll)': 'oncntscrl($event)'
  }
})
export class HideDirective {

  @Input("header") header:HTMLElement;
  headerHeight;
  scrlcnt;
  
  constructor(public el:ElementRef, public re:Renderer) {
    console.log('Hello HideDirective Directive');
  }

  ngOnInit(){
    this.headerHeight = this.header.clientHeight;
    this.re.setElementStyle(this.header, 'webkitTransition','top 700ms');
    this.scrlcnt = this.el.nativeElement.getElementsByClassName('scroll-content')[0];
    this.re.setElementStyle(this.scrlcnt,'webkitTransition', 'margin-top 700ms');
  }
  oncntscrl(event){
    if(event.scrollTop > 70){
      this.re.setElementStyle(this.header, 'top', '-'+ (this.headerHeight) + 'px')
      this.re.setElementStyle(this.scrlcnt, 'margin-top','0px')
    }else{
      this.re.setElementStyle(this.header, 'top','0px')
      this.re.setElementStyle(this.scrlcnt, 'margin-top',this.headerHeight)
    }
  }
}
