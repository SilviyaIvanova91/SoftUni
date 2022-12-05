export function getUserData() {
  return JSON.parse(sessionStorage.getItem("userData"));
}

export function setUserData(data) {
  sessionStorage.setItem("userData", JSON.stringify(data));
}

export function clearUserData() {
  sessionStorage.removeItem("userData");
}

export function createSubmitHandler(callback) {
  return function (ev) {
    ev.preventDefault();
    let formData = new FormData(ev.target);
    let data = Object.fromEntries(formData);

    callback(data, ev.target);
  };
}
