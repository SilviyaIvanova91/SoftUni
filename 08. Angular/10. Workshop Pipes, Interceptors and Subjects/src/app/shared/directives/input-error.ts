import { Directive, ElementRef, HostBinding, inject, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appInputError]',
})
export class InputError implements OnInit {
  private el = inject(ElementRef);
  private control = inject(NgControl, { optional: true });

  @HostBinding('class.input-error') get hasError() {
    return (this.control?.invalid && this.control?.touched) || false;
  }

  ngOnInit(): void {
    this.el.nativeElement.classList.remove('input-error');
  }
}
