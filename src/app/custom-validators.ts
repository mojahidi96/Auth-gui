import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

export class CustomValidators extends Validators {
    static passwordMatchValidator(password: string, confirmPassword: string) {
        return (control: AbstractControl) => {
            const tempPassword: string = control.get(password).value;
            const tempConfirmPassword: string = control.get(confirmPassword).value;
            if (tempPassword !== tempConfirmPassword) {
                control.get(confirmPassword).setErrors({ NoPassswordMatch: true });
            }
        }
    }

    static patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
            if (!control.value) {
                return null;
            }
            const valid = regex.test(control.value);
            return valid ? null : error;
        };
    }
}
