import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { UserInfo } from './user-info/user-info';
import { PasswordComponent } from './password/password';
import { PasswordConfirmComponent } from './password-confirm/password-confirm';
import { PasswordChangeComponent } from './password-change/password-change';
import { AirportInfoComponent } from './airport-info/airport-info';

@NgModule({
    declarations: [
        UserInfo,
        PasswordComponent,
        PasswordConfirmComponent,
        PasswordChangeComponent,
        AirportInfoComponent
    ],
    imports: [
        IonicModule
    ],
    exports: [
        UserInfo,
        PasswordComponent,
        PasswordConfirmComponent,
        PasswordChangeComponent,
        AirportInfoComponent
    ]
})
export class ComponentsModule { }
