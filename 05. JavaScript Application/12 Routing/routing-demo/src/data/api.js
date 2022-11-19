const host = 'http://localhost:3030';


async function request(method, url, data) {
    const options = {
        method,
        headers: {}
    };

    if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(host + url, options);

        if (response.ok != true) {
            const error = await response.json();
            throw new Error(error.message);
        }

        if (response.status == 204) {
            return response;
        } else {
            return response.json();
        }
    } catch (err) {
        alert(err.message);
        throw err;
    }
}

export function get(url) {
    return request('get', url);
}

export function post(url, data) {
    return request('post', url, data);
}

export function put(url, data) {
    return request('put', url, data);
}

export function del(url) {
    return request('delete', url);
}
