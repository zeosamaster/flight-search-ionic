import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { endpoints } from './data.config';
import { Airport } from '../../models';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

    constructor(
        public http: HttpClient
    ) { }

    public getLocations(): Observable<Airport[]> {
        return this.http.get(endpoints.locations())
            .map((data: any[]) => data.map(item => item as Airport));
    }

}
