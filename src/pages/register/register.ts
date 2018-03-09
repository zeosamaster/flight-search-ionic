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
export class RegisterPage {

    private email: string;
    private password: string;
    private confirmPassword: string;
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
        if (this.password !== this.confirmPassword) {
            this.error = 'Passwords must match';
            return;
        }
        this.auth.register(this.email, this.password)
            .catch((e) => { this.error = JSON.stringify(e); });
    }

    private goToLogin() {
        this.navCtrl.push('login', { email: this.email })
    }
}
