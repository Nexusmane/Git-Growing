import sendRequest from './send-request';

const BASE_URL = '/api/plantPosts';

export function getAll() {
    return sendRequest(BASE_URL);
}