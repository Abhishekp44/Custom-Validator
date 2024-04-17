import { AbstractControl, ValidatorFn } from '@angular/forms';

export function customValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const inputValue = control.value;

    // Example validation logic (you can replace this with your own)
    if (inputValue && inputValue.indexOf('example') !== -1) {
      return { 'customError': { value: inputValue } };
    }

    return null;
  };
}
