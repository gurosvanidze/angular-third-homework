import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlithtWithRadio]'
})
export class HighlithtWithRadioDirective {
@Input() appHighlithtWithRadio = '';
@HostListener('mouseenter') onMouseEnter() {
  this.highlight(this.appHighlithtWithRadio || 'red');
}
@HostListener('mouseleave') onMouseLeave() {
  this.highlight('');
}
  constructor(private el: ElementRef) { }
highlight(color: string) {
  this.el.nativeElement.style.backgroundColor = color;
}
}
