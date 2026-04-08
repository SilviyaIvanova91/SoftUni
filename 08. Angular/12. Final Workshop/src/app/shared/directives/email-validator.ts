import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appEmailValidator]',
  providers: [
    {
      provide: 'NG_VALIDATORS',
      useExisting: EmailValidatorDirective,
      multi: true,
    },
  ],
})
export class EmailValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (!value) {
      return null; // Don't validate empty values, use required validator for that
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]{6,}@gmail\.(bg|com)$/;
    if (!emailRegex.test(value)) {
      return { invalidEmail: true };
    }
    return null;
  }
}
