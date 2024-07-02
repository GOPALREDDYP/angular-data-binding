import { Directive, ElementRef, OnInit, Renderer2, importProvidersFrom } from "@angular/core";
@Directive({
selector:'[setBackground]'

})
export class SetBackGround implements OnInit{

    // Custom directive chagnes
    // constructor(private element: ElementRef){
    // }
    // ngOnInit(){
    //     this.element.nativeElement.style.backgroundColor='#36454F';
    //     this.element.nativeElement.style.color='white';
    // }

   //Renderer2 changes.
    constructor(private element: ElementRef, private renderer:Renderer2){
    }
    ngOnInit(){
        this.element.nativeElement.style.backgroundColor='#36454F';
        this.element.nativeElement.style.color='white';

        this.renderer.setStyle(this.element.nativeElement,'backgroundColor','#36454F');
        this.renderer.setStyle(this.element.nativeElement,'color','white');
        this.renderer.setAttribute(this.element.nativeElement,'title','Renderer property setting');
    }
}