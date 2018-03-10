import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-register',
    templateUrl: 'register.html',
})
export class RegisterPage implements OnInit {

    private email: string;
    private password: string;
    private confirmPassword: string;
    private error: string;

    constructor(
        public nav: NavController,
        public navParams: NavParams,
        public auth: AuthProvider
    ) { }

    ngOnInit() {
        this.email = this.navParams.get('email') || '';
    }

    public register(): Promise<any> {
        if (this.password !== this.confirmPassword) {
            this.error = 'Passwords must match';
            return;
        }
        return this.auth.register(this.email, this.password)
            .then(() => this.goToLoginPage())
            .catch((e) => { this.error = JSON.stringify(e); });
    }

    public goToLoginPage(): Promise<any> {
        return this.nav.push('LoginPage', { email: this.email });
    }
}
