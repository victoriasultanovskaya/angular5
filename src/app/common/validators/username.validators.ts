import {AbstractControl, ValidationErrors, AsyncValidatorFn } from "@angular/forms";

export class UsernameValidators {

    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0) {
            return {cannotContainSpace: true};
        }
        return null;
    }

    // https://angular.io/api/forms/AsyncValidatorFn
    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'some_text') {
                    resolve({ shouldBeUnique: true });
                } else {
                    resolve(null);
                }

            }, 2000);
        });
    }
}
