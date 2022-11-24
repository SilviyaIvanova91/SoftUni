import { clearUserdata, setUserdata } from "../util.js";
import * as api from "./api.js";

const endpoints = {
  login: "/users/login",
  register: "/users/register",
  logout: "/users/logout",
};

export async function login(email, password) {
  let user = await api.post(endpoints.login, { email, password });
  setUserdata(user);
  return user;
}

export async function register(email, password) {
  let user = await api.post(endpoints.register, { email, password });
  setUserdata(user);
  return user;
}

export async function logout() {
  await api.get(endpoints.logout);
  clearUserdata();
}
