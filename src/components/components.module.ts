import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { UserInfo } from './user-info/user-info';
import { PasswordComponent } from './password/password';
import { PasswordConfirmComponent } from './password-confirm/password-confirm';
import { PasswordChangeComponent } from './password-change/password-change';
import { AirportInfoComponent } from './airport-info/airport-info';
import { ToggleCardComponent } from './toggle-card/toggle-card';

@NgModule({
    declarations: [
        UserInfo,
        PasswordComponent,
        PasswordConfirmComponent,
        PasswordChangeComponent,
        AirportInfoComponent,
        ToggleCardComponent
    ],
    imports: [
        IonicModule
    ],
    exports: [
        UserInfo,
        PasswordComponent,
        PasswordConfirmComponent,
        PasswordChangeComponent,
        AirportInfoComponent,
        ToggleCardComponent
    ]
})
export class ComponentsModule { }
