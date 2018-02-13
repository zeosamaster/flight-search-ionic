import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { Storage } from '@ionic/storage';

import { AppConfig } from './../../app/app.config';

@Injectable()
export class AuthProvider {
    private facebookLoginUrl = 'http://localhost:9000/api/auth/facebook';

    constructor(
        private facebook: Facebook,
        private http: HttpClient,
        private storage: Storage
    ) { }

    // Auth methods
    public facebookLogin(): Promise<any> {
        return Promise.resolve()
            .then(() => this.facebook.browserInit(AppConfig.facebookAppId))
            .then(() => this.facebook.login(['public_profile', 'email']))
            .then((res: FacebookLoginResponse) => this.http.post(this.facebookLoginUrl, { access_token: res.authResponse.accessToken }).toPromise())
            .then((res: any) => this.setToken(res.token))
            .catch(e => console.error('Error logging into Facebook', e));
    }

    // Token
    private setToken(token: string): Promise<void> {
        return this.storage.set('auth-token', token);
    }
}
