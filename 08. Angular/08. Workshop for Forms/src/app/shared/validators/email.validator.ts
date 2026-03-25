import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export function emailValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) {
      return { required: true };
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]{6,}@gmail\.(bg|com)$/;
    if (!emailRegex.test(value)) {
      return { invalidEmail: true };
    }
    return null;
  };
}
