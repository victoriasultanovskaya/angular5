import {AbstractControl} from "@angular/forms";

export class PasswordValidators {

    static invalidateOldPassword(control: AbstractControl) {
        return new Promise((resolve, reject) => {
            if (control.value !== '123') {
                resolve({invalidateOldPassword: true});
            } else {
                resolve(null);
            }
        });
    }

    static passwordsShouldMatch(control: AbstractControl) {
        let newPassword = control.get('newPassword');
        let confirmPassword = control.get('confirmPassword');

        if (newPassword.value !== confirmPassword.value) {
            return {passwordsShouldMatch: true};
        }
        return null;
    }
}