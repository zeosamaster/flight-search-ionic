import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the PasswordComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'password',
    templateUrl: 'password.html'
})
export class PasswordComponent {

    @Input()
    public password: string;
    @Output()
    public onPassword: EventEmitter<string> = new EventEmitter<string>();

    @Input()
    public label: string = 'Password';
    @Input()
    public name: string = 'password';

    private onChange() {
        this.onPassword.emit(this.password);
    }

}
