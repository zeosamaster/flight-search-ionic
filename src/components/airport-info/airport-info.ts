import { Component, Input } from '@angular/core';

import { Airport } from '../../models';

/**
 * Generated class for the AirportInfoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'airport-info',
    templateUrl: 'airport-info.html'
})
export class AirportInfoComponent {

    @Input()
    public airport: Airport;

}
