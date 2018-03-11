import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AirportsPage } from './airports';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    AirportsPage,
  ],
  imports: [
    IonicPageModule.forChild(AirportsPage),
    ComponentsModule
  ],
})
export class AirportsPageModule {}
