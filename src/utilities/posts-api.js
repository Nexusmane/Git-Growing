import sendRequest from './send-request';

const BASE_URL = '/api/plantPosts';

export function getAll() {
    return sendRequest(BASE_URL);
}

export function add(plantData) {
    return sendRequest(BASE_URL, 'POST', plantData);
}

export function removePlant(plantData) {
    return sendRequest(BASE_URL, 'DELETE', plantData);
}

export function isWatered(plantData) {
    return sendRequest(BASE_URL, 'PUT', plantData);
}