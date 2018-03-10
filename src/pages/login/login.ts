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
export class LoginPage implements OnInit {

    private email: string;
    private password: string;
    private error: string;

    constructor(
        public nav: NavController,
        public navParams: NavParams,
        public auth: AuthProvider
    ) { }

    ngOnInit() {
        this.email = this.navParams.get('email') || '';
    }

    public login(): Promise<void> {
        return this.auth.passwordLogin(this.email, this.password)
            .then(() => this.goToUserPage())
            .catch((e) => { this.error = JSON.stringify(e); });
    }

    public facebookLogin(): Promise<void> {
        return this.auth.facebookLogin()
            .then(() => this.goToUserPage())
            .catch((e) => { this.error = JSON.stringify(e); });
    }

    private goToUserPage(): Promise<any> {
        return this.nav.push('UserPage');
    }

    public goToRegisterPage(): Promise<any> {
        return this.nav.push('RegisterPage', { email: this.email });
    }

}
