import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the PasswordConfirmComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'password-confirm',
    templateUrl: 'password-confirm.html'
})
export class PasswordConfirmComponent {

    @Input()
    public password: string;
    @Output()
    public onPassword: EventEmitter<string> = new EventEmitter<string>();

    @Input()
    public validateError: string;

    public confirmPassword: string;

    private onChange() {
        if (this.password == this.confirmPassword) {
            this.onPassword.emit(this.password);
        }
    }

}
