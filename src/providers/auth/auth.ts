import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { Storage } from '@ionic/storage';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { masterToken, endpoints } from './auth.config';
import { User } from '../../models/user';

@Injectable()
export class AuthProvider {
    public user$: BehaviorSubject<User>;

    private get user(): User {
        return this.user$.getValue();
    }

    constructor(
        private facebook: Facebook,
        private http: HttpClient,
        private storage: Storage
    ) {
        this.user$ = new BehaviorSubject<User>(null);

        this.loadUser();
        this.user$.subscribe((user: User) => this.storage.set('user', user));
    }

    private loadUser(): Promise<User> {
        return this.storage.ready()
            .then(() => this.storage.get('user'))
            .then((user: User) => this.setUser(user));
    }

    // Auth methods
    public register(email: string, password: string): Promise<void> {
        return Promise.resolve()
            .then(() => this.http.post(endpoints.register(), { email, password, access_token: masterToken }).toPromise())
            .then(() => { })
            .catch(e => {
                console.error('Error logging into Facebook', e);
                return Promise.reject(e);
            });
    }

    public passwordLogin(username: string, password: string): Promise<User> {
        return Promise.resolve()
            .then(() => this.http.post(endpoints.passwordLogin(), { access_token: masterToken }, { headers: { Authorization: this.basicAuthHeader(username, password) } }).toPromise())
            .then((res: any) => new User(res))
            .then((user: User) => this.setUser(user))
            .catch(e => {
                console.error('Error logging using password', e);
                return Promise.reject(e);
            });
    }

    public facebookLogin(): Promise<User> {
        return Promise.resolve()
            .then(() => this.facebook.login(['public_profile', 'email']))
            .then((res: FacebookLoginResponse) => this.http.post(endpoints.facebookLogin(), { access_token: res.authResponse.accessToken }).toPromise())
            .then((res: any) => new User(res))
            .then((user: User) => this.setUser(user))
            .catch(e => {
                console.error('Error logging into Facebook', e);
                return Promise.reject(e);
            });
    }

    public changePassword(oldPassword: string, newPassword: string): Promise<void> {
        return Promise.resolve()
            .then(() => this.http.put(endpoints.changePassword(), { password: newPassword }, { headers: { Authorization: this.basicAuthHeader(this.user.email, oldPassword) } }).toPromise())
            .then(() => { })
            .catch(e => {
                console.error('Error changing password', e);
                return Promise.reject(e);
            });
    }

    public logout(): Promise<User> {
        return Promise.resolve()
            .then(() => this.http.get(endpoints.logout()).toPromise())
            .then((res: any) => this.clear())
            .catch(e => {
                console.error('Error logging out', e);
                return Promise.reject(e);
            });
    }

    // User
    private setUser(user: User = null): Promise<User> {
        return Promise.resolve()
            .then(() => this.user$.next(user))
            .then(() => user);
    }

    private clear(): Promise<User> {
        return this.setUser(null);
    }

    // Headers
    private basicAuthHeader(username: string, password: string): string {
        return 'Basic ' + btoa(username + ':' + password);
    }
    
    private bearerAuthHeader(): string {
        return 'Bearer ' + this.user.token;
    }
}
