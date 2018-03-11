import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { UserPage } from './user';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
    declarations: [UserPage],
    imports: [
        IonicPageModule.forChild(UserPage),
        ComponentsModule
    ]
})
export class UserPageModule { }
