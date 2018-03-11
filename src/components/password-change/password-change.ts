import { Component, Input } from '@angular/core';
import { User } from '../../models/user';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the PasswordChangeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'password-change',
    templateUrl: 'password-change.html'
})
export class PasswordChangeComponent {

    @Input()
    public oldPassword: string;
    @Input()
    public newPassword: string;

    public attemptedSubmit: boolean = false;

    constructor(
        private auth: AuthProvider
    ) { }

    submit(): Promise<void> {
        this.attemptedSubmit = true;
        return this.auth.changePassword(this.oldPassword, this.newPassword);
    }

}
