import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AuthProvider } from '../../providers/auth/auth';
import { User } from '../../models/user';

@IonicPage()
@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {
    private homeTab: string = 'HomePage';
    private userTab: string = 'UserPage';
    private loginTab: string = 'LoginPage';

    private isLogged$: Observable<boolean>;
    
    constructor(
        private auth: AuthProvider
    ) { }

    ngOnInit() {
        this.isLogged$ = this.auth.user$.asObservable()
            .map((user: User) => !!user);
    }
}
