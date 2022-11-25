import { clearUserData, setUserData } from "../util.js";
import * as api from "./api.js";

const endpoints = {
  login: "/users/login",
  register: "/users/register",
  logout: "/users/logout",
};

export async function login(email, password) {
  let {
    _id,
    email: resultEmail,
    accessToken,
  } = await api.post(endpoints.login, { email, password });

  setUserData({
    _id,
    email: resultEmail,
    accessToken,
  });
}

export async function register(email, password) {
  let {
    _id,
    email: resultEmail,
    accessToken,
  } = await api.post(endpoints.register, { email, password });

  setUserData({
    _id,
    email: resultEmail,
    accessToken,
  });
}

export function logout() {
  api.get(endpoints.logout);
  clearUserData();
}
