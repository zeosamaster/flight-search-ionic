import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {

    private email: string;
    private password: string;
    private error: string;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public auth: AuthProvider
    ) { }

    ngOnInit() {
        this.email = this.navParams.get('email') || '';
    }

    private login() {
        this.auth.passwordLogin(this.email, this.password)
            .catch((e) => { this.error = JSON.stringify(e); });
    }

}
