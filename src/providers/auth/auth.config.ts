export const FACEBOOK_APP_ID = 2028204957456727;

const serverUrl = 'http://localhost:9000/api/';

export const masterToken = 'MASTER_KEY';

export const endpoints = {
    register: serverUrl + 'users/',
    passwordLogin: serverUrl + 'auth/',
    facebookLogin: serverUrl + 'auth/facebook',
    logout: serverUrl + 'auth/logout'
};
