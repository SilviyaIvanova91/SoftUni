const host = "http://localhost:3030";

async function request(method, url, data) {
  const options = {
    method,
    headers: {},
  };

  if (data != undefined) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(data);
  }

  const token = sessionStorage.getItem("accessToken");
  if (token) {
    options.headers["X-Authorization"] = token;
  }

  try {
    const response = await fetch(host + url, options);

    if (response.ok != true) {
      const error = await response.json();
      throw new Error(error.message);
    }

    if (response.status == 204) {
      return response;
    }

    return response.json();
  } catch (error) {
    alert(error.message);
    throw error; //ЗАДЪЛЖИТЕЛНО прехвърляме грешката за да спре да работи целия код, иначе ще продължи да се изпълнява с измисленни данни
  }
}

export const get = request.bind(null, "get");
export const post = request.bind(null, "post");
export const put = request.bind(null, "put");
export const del = request.bind(null, "delete");
