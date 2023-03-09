import { FormGroup } from "@angular/forms";

export function passwordValidator(control : FormGroup) {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if(password?.value != confirmPassword?.value) {
        confirmPassword?.setErrors({passwordMatch : true});
    } else {
        confirmPassword?.setErrors(null);
    }

    return null;
}