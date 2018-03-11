import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { UserInfo } from './user-info/user-info';
import { PasswordComponent } from './password/password';
import { PasswordConfirmComponent } from './password-confirm/password-confirm';
import { PasswordChangeComponent } from './password-change/password-change';

@NgModule({
    declarations: [
        UserInfo,
        PasswordComponent,
        PasswordConfirmComponent,
        PasswordChangeComponent
    ],
    imports: [
        IonicModule
    ],
    exports: [
        UserInfo,
        PasswordComponent,
        PasswordConfirmComponent,
        PasswordChangeComponent
    ]
})
export class ComponentsModule { }
