import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms'
import { Directive } from '@angular/core'

@Directive({
    selector: '[appConfirmEqualValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: ConfirmEqualValidatorDirective,
        multi: true
    }]
})

export class ConfirmEqualValidatorDirective implements Validator {
    // @Input() appConfigEqualValidator: string;
    // validate(control: AbstractControl): { [key: string]: any } | null {
    validate(psswordGroup: AbstractControl): { [key: string]: any } | null {
        // const controlToCompare = control.parent.get(this.appConfigEqualValidator);
        const passwordField = psswordGroup.get('password');
        const confirmPasswordField = psswordGroup.get('confirmPassword');

        if(passwordField && confirmPasswordField && passwordField.value !== confirmPasswordField.value) {
            return { 'notEqual': true }
        }
        return null;
    }
}