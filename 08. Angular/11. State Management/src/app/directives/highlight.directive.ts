import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  @Input() appHighlight: string = ''; //да подадем цвят от вън
  @Input() defaultColor: string = 'transparent'; //ако не подадем цвят, да е прозрачен

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnInit(): void {
    this.setBackgroundColor(this.defaultColor);
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    const color = this.appHighlight || '#eef2a1';
    this.setBackgroundColor(color);
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.setBackgroundColor(this.defaultColor);
  }

  private setBackgroundColor(color: string): void {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);

    this.renderer.setStyle(this.el.nativeElement, 'transition', 'background-color 0.3s ease');
  }
}
