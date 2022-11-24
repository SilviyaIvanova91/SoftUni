export function getUserData() {
  return JSON.parse(sessionStorage.getItem("user"));
}

export function setUserdata(data) {
  sessionStorage.setItem("user", JSON.stringify(data));
}

export function clearUserdata() {
  sessionStorage.removeItem("user");
}

export function createSubmitHandler(callback) {
  return function (event) {
    event.preventDefault();
    let formData = new FormData(event.target);
    let data = Object.fromEntries(formData);

    callback(data, event.target);
  };
}
