import { del, get, post, put } from "./api.js";

const endpoints = {
  create: "/data/catalog",
  getById: "/data/catalog/",
  getMyFurniture: (userId) => `/data/catalog?where=_ownerId%3D%22${userId}%22`,
};

export async function createFurniture(data) {
  return post(endpoints.create, data);
}

export async function getAllFurniture() {
  return get(endpoints.create);
}

export async function getById(id) {
  return get(endpoints.getById + id);
}

export async function deleteById(id) {
  return del(endpoints.getById + id);
}

export async function updateById(id, data) {
  return put(endpoints.getById + id, data);
}

export async function getMyFurniture(userId) {
  return get(endpoints.getMyFurniture(userId));
}
