import { del, get, post, put } from "./api.js";

const endpoints = {
  getAllCars: "/data/cars?sortBy=_createdOn%20desc",
  createCar: "/data/cars",
  carById: "/data/cars/",
  myCar: (userId) =>
    `/data/cars?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
  searchByYear: (query) => `/data/cars?where=year%3D${query}`,
};

export async function getAllCars() {
  return await get(endpoints.getAllCars);
}

export async function createCar(data) {
  return await post(endpoints.createCar, data);
}

export async function getCarById(id) {
  return await get(endpoints.carById + id);
}

export async function editCarById(id, data) {
  return await put(endpoints.carById + id, data);
}

export async function deleteCarById(id) {
  return await del(endpoints.carById + id);
}

export async function getMyCars(userId) {
  return await get(endpoints.myCar(userId));
}

export async function searchByYear(query) {
  return await get(endpoints.searchByYear(query));
}
