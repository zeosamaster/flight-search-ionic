import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { AuthProvider } from './../../providers/auth/auth';
import { User } from '../../models/user';

@IonicPage()
@Component({
    selector: 'page-user',
    templateUrl: 'user.html',
})
export class UserPage {
    public user: User;

    constructor(
        private auth: AuthProvider
    ) { }

    ionViewDidEnter() {
        this.auth.user$.subscribe((user: User) => {
            this.user = user;
        });
    }

    public facebookLogin(): Promise<User> {
        return this.auth.facebookLogin();
    }

    public logout(): Promise<User> {
        return this.auth.logout();
    }
}
