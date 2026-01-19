import { FormGroup } from '@angular/forms';

export class FormUtils {
  static isValidField(form: FormGroup, fieldName: string): boolean | null {
    return !!form.controls[fieldName].errors && form.controls[fieldName].touched;
  }

  static getFieldErrors(form: FormGroup, fieldName: string): string | null {
    if (!form.controls[fieldName].errors) return null;

    const errors = form.controls[fieldName].errors;

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';
        case 'minlength':
          return `Este campo debe tener al menos ${errors['minlength'].requiredLength} caracteres`;
        case 'min':
          return `Valor minimo de  ${errors['min'].min}`;
      }
    }
    return null;
  }

  static onSubmit(form: FormGroup) {
    if (form.invalid) {
      form.markAllAsTouched();
      return;
    }
    console.log(form.value);
    form.reset({
      price: 0,
      inStorage: 0,
    });
  }
}
