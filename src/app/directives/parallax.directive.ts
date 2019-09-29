import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[asoParallax]'
})
export class ParallaxDirective {
  @Input() parallaxRatio = 1;
  @Input() backgroundImg?;
  initialTop = 0;

  constructor(private eleRef: ElementRef) {
    this.eleRef.nativeElement.style.position = 'fixed';
    this.eleRef.nativeElement.style.width = '100%';
    if (this.backgroundImg) {
      this.eleRef.nativeElement.style.background = `url('${this.backgroundImg}')`;
    }
    this.initialTop = this.eleRef.nativeElement.getBoundingClientRect().top;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event) {
    this.eleRef.nativeElement.style.top =
      this.initialTop - window.scrollY * this.parallaxRatio + 'px';
  }
}
