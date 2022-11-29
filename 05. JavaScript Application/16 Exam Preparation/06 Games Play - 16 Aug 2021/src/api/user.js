import { clearUserData, setUserData } from "../util.js";
import { get, post } from "./api.js";

const endpoints = {
  login: "/users/login",
  register: "/users/register",
  logout: "/users/logout",
};

export async function login(email, password) {
  const user = await post(endpoints.login, { email, password });
  setUserData(user);
  return user;
}

export async function register(email, password) {
  const user = await post(endpoints.register, { email, password });
  setUserData(user);
  return user;
}

export async function logout() {
  await get(endpoints.logout);
  clearUserData();
}
