export const FACEBOOK_APP_ID = 2028204957456727;

const serverUrl = 'http://localhost:9000/api';

export const masterToken = 'MASTER_KEY';

function getServerUrl(url) {
    return `${serverUrl}/${url}`;
}

export const endpoints = {
    register:           () =>           getServerUrl('users'),
    changePassword:     () =>           getServerUrl(`users/me/password`),
    passwordLogin:      () =>           getServerUrl('auth'),
    facebookLogin:      () =>           getServerUrl('auth/facebook'),
    logout:             () =>           getServerUrl('auth/logout')
};
