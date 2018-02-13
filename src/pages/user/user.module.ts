import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserInfoComponentModule } from '../../components/user-info/user-info.module';

import { UserPage } from './user';

@NgModule({
    declarations: [UserPage],
    imports: [
        IonicPageModule.forChild(UserPage),
        UserInfoComponentModule
    ]
})
export class UserPageModule { }
