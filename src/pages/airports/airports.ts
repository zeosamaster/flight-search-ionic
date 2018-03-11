import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import { DataProvider } from '../../providers/data/data';

import { Airport, City, Continent, Country } from '../../models';

/**
 * Generated class for the AirportsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-airports',
    templateUrl: 'airports.html',
})
export class AirportsPage {

    public airports$: Observable<Airport[]>;
    public world = { continents: [] };

    constructor(
        private dataProvider: DataProvider
    ) { }

    ionViewDidLoad() {
        this.airports$ = this.dataProvider.getLocations();
        this.airports$
            .subscribe((airports: Airport[]) => {
                airports.forEach((airport: Airport) => {
                    let airportContinent: Continent = airport.city.country.continent;
                    let airportCountry: Country = airport.city.country;
                    let airportCity: City = airport.city;

                    let continent = this.world.continents.find(c => c.id === airportContinent.id);
                    if (!continent) {
                        continent = { id: airportContinent.id, name: airportContinent.name, countries: [] };
                        this.world.continents.push(continent);
                    }

                    let country = continent.countries.find(c => c.id === airportCountry.id);
                    if (!country) {
                        country = { id: airportCountry.id, name: airportCountry.name, cities: [] };
                        continent.countries.push(country);
                    }

                    let city = country.cities.find(c => c.id === airportCity.id);
                    if (!city) {
                        city = { id: airportCity.id, name: airportCity.name, airports: [] };
                        country.cities.push(city);
                    }

                    city.airports.push(airport);
                });

                this.world.continents = this.world.continents.sort((a, b) => a.name.localeCompare(b.name));
                this.world.continents.forEach(c => {
                    c.countries = c.countries.sort((a, b) => a.name.localeCompare(b.name));
                    c.countries.forEach(c => {
                        c.cities = c.cities.sort((a, b) => a.name.localeCompare(b.name));
                        c.cities.forEach(c => {
                            c.airports = c.airports.sort((a, b) => a.name.localeCompare(b.name));
                        });
                    });
                });
            });
    }

}
