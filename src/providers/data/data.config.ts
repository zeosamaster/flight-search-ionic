const serverUrl = 'http://localhost:9000/api';

function getServerUrl(url) {
    return `${serverUrl}/${url}`;
}

export const endpoints = {
    locations:          () =>           getServerUrl('locations')
};
