import axios from 'axios';
import { storage } from './';
import { createBrowserHistory } from 'history';

import qs from 'qs'

export const httpAuthService = {
    login,
    tokenByRefresh,
    logout,
};

async function login(path, {email, password}) {

    const body = {
        client: 'rear',
        username: email,
        password: password,
        grant_type: 'password'
    }

    // store user details and jwt token in local storage to keep user logged in between page refreshes
    var data = await req({path: path, body: body});
    storage.set(data.access_token);
    createBrowserHistory().push('/');
    window.location.reload();
    return data;
}

async function tokenByRefresh(path) {
    const body = {
        client: 'react-cli',
        grant_type: 'refresh_token'
    }

    var data = await req({path: path, body: body});
    storage.set(data.access_token);
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + data.access_token;
};


function logout() {
    // remove user from local storage to log user out
    storage.remove();
}


async function req({path, body}) {
    axios.defaults.withCredentials = true;

    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        'Authorization': 'Basic cmVhY3QtY2xpOkB2dXR0cg==',
    };

    return await axios.request({
        withCredentials: true,
        url: '/oauth/token',
        method: 'POST',
        baseURL: path.base,
        timeout: 10000,
        headers: headers,
        data: qs.stringify(body),
    }).then(({ data }) => {
        return data;
    }).catch(error => {

        console.log(error.response)
        try {
            if (error.response.status === 401) {
                logout(path);
                return Promise.reject({ text: 'Error!', errorDescription: error.response.data.error_description });
            }
            if (error.response.status === 400) {
                return Promise.reject({ text: 'Bad Credentials! Verify the Fields!' });
            }
        } catch (err) {
            // window.location.reload();
            return Promise.reject({text: 'Service unavailable! Try again...'});
        }

    })
};