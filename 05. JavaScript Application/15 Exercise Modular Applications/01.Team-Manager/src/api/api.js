const host = "http://localhost:3030";

async function request(method, url, data) {
  const options = {
    method,
    headers: {},
  };

  const user = JSON.parse(sessionStorage.getItem("user"));
  if (user) {
    options.headers["X-Authorization"] = user.accessToken;
  } else {
    return null;
  }

  if (data) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(data);
  }

  try {
    let response = await fetch(host + url, options);

    if (response.ok != true) {
      if (response.status == 403) {
        localStorage.removeItem("userData");
      }
      let error = await response.json();
      throw new Error(error.message);
    }

    if (response.status == 204) {
      return response;
    } else {
      return response.json();
    }
  } catch (error) {
    alert(error.message);
    throw error;
  }
}

export const get = request.bind(null, "get");
export const post = request.bind(null, "post");
export const put = request.bind(null, "put");
export const del = request.bind(null, "delete");

/*
const host = "http://localhost:3030";

async function request(url, options) {
  try {
    const response = await fetch(host + url, options);
    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.message);
    }

    try {
      if (response.status == 204) {
        return response;
      }
      const data = await response.json();
      return data;
    } catch (error) {
      //alert(error.message);
      throw error;
    }
  } catch (error) {
    //alert(error.message);
    throw error;
  }
}

function getOption(method, body) {
  const options = {
    method,
    headers: {},
  };

  const user = JSON.parse(sessionStorage.getItem("userData"));

  if (user) {
    options.headers["X-Authorization"] = user.accessToken;
  }

  if (body) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(body);
  }

  return options;
}

export async function get(url) {
  return await request(url, getOption("GET"));
}

export async function post(url, data) {
  return await request(url, getOption("POST", data));
}

export async function put(url, data) {
  return await request(url, getOption("PUT", data));
}

export async function del(url) {
  return await request(url, getOption("DELETE"));
}
*/
