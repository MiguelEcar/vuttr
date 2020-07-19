import axios from 'axios';

import { httpAuthService } from './http.auth.service';

export const httpService = {
    post,
    put,
    get,
    del
};

async function post(path, body) {
    const response = await req({ method: 'post', path: path, data: body });
    return await response.data;
}

async function put(path, body) {
    const response = await req({ method: 'put', path: path, data: body });
    return await response.data;
}

// return body only 
async function get(path) {
    const response = await req({ method: 'get', path: path });
    return await response.data;
}

async function del(path) {
    return await req({ method: 'delete', path: path });
}

/////////////////////////////////////////////////////////////////////////////////
async function req({ method, path, data }) {
    await httpAuthService.tokenByRefresh(path);

    let url = path.args === undefined ? path.base + path.path : path.base + path.path + path.args;
    var response = await axios({
        method: method,
        url: url,
        data: data
    });
    return response;
}
/////////////////////////////////////////////////////////////////////////////////