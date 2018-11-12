import { Directive, Renderer, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTextdirective]'
})
export class TextdirectiveDirective {

  constructor(private el:ElementRef, private renderer:Renderer) { 
    renderer.setElementStyle(el.nativeElement,'backgrouColor','gray');
  }

  @HostListener('mouseover') OnHover(){
    //window.alert('Mouse Over');
    let part=this.el.nativeElement.querySelector('.main-div');
    console.log('test on div class');
    this.renderer.setElementStyle(part,'color','red');
  }

  @HostListener('mouseout') onmouseout(){
    //window.alert('Mouse Out');
    let part=this.el.nativeElement.querySelector('.main-div');
    this.renderer.setElementStyle(part,'color','green');
  }

}
