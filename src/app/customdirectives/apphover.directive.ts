import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[apphover]'
})
export class ApphoverDirective {

  constructor(private element: ElementRef , render: Renderer2) {
     
   }
  
@HostBinding('style.backgroundColor') backgroundColor:string = '#2828B';
@HostBinding('style.border') border:string = 'none';
@HostBinding('style.color') textColor:string = 'white';

@HostListener('mouseenter') OnMouseEnter(){
       this.backgroundColor = 'white';
       this.textColor = '#28282B';
       this.border = '#28282B 1px solid';
}
 @HostListener('mouseout') OnMouseOut(){

       this.backgroundColor = '#28282B';
       this.textColor ='white';
       this.border ='none';

 }
}

