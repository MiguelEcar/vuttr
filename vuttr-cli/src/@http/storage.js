import jwt from 'jwt-decode';

import { path } from '@http/path';

const token = path.token;

const set = (data) => {
    localStorage.setItem(token, data);
}

const remove = () => {
    localStorage.removeItem(token);
}

const get = () => {
    return localStorage.getItem(token);
}

const content = () => {
    try {
        return jwt(get());
    } catch (err) {
        return { }
    }
}

export const storage = {
    set,
    remove,
    get,
    content
}
