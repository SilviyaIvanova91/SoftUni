import { getUserData } from "../util.js";

const host = "http://localhost:3030";

async function request(method, url, data) {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const options = {
    method,
    headers: {},
  };

  if (data) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(data);
  }

  if (user) {
    const token = user.accessToken;
    options.headers["X-Authorization"] = token;
  }

  try {
    let response = await fetch(host + url, options);

    if (!response.ok) {
      if (response.status === 403) {
        sessionStorage.removeItem("user");
      }
      let err = await response.json();
      throw new Error(err.message);
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
