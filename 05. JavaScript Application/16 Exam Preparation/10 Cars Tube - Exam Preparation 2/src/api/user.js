import { clearUserData, setUserData } from "../util.js";
import { get, post } from "./api.js";

const endpoints = {
  login: "/users/login",
  register: "/users/register",
  logout: "/users/logout",
};

export async function login(username, password) {
  const user = await post(endpoints.login, { username, password });
  setUserData(user);
  return user;
}

export async function register(username, password) {
  const user = await post(endpoints.register, { username, password });
  setUserData(user);
  return user;
}

export async function logout() {
  const user = await get(endpoints.logout);
  clearUserData(user);
}
