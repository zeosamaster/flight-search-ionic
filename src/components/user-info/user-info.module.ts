import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { UserInfo } from './user-info';

@NgModule({
    declarations: [UserInfo],
    exports: [UserInfo],
    imports: [IonicModule]
})
export class UserInfoComponentModule { }