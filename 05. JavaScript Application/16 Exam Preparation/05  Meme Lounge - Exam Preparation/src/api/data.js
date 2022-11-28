import { del, get, post, put } from "./api.js";

const endpoints = {
  createMem: "/data/memes",
  getAllMem: "/data/memes?sortBy=_createdOn%20desc",
  getMemById: "/data/memes/",
  userMemes: (userId) =>
    `/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
};

export async function createMemes(data) {
  return post(endpoints.createMem, data);
}

export async function getAllMem() {
  return get(endpoints.getAllMem);
}

export async function getMemById(id) {
  return get(endpoints.getMemById + id);
}

export async function editMemes(id, data) {
  return put(endpoints.getMemById + id, data);
}

export async function deleteById(id) {
  return del(endpoints.getMemById + id);
}

export async function userMemes(userId) {
  return get(endpoints.userMemes(userId));
}
