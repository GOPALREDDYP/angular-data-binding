import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[app-Highlight]'
})
export class HighlightDirective {

  constructor(private element:ElementRef,private render:Renderer2) { 

  }

  @HostListener('mouseenter') OnMouseEnter(){
     this.render.addClass(this.element.nativeElement,'highlight-product');
  }
  @HostListener('mouseout') OnMouseOut(){
        this.render.removeClass(this.element.nativeElement,'highlight-product');

  }

}
