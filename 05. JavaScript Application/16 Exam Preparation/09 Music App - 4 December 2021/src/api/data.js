import * as api from "./api.js";

const endpoints = {
  getAll: "/data/albums?sortBy=_createdOn%20desc&distinct=name",
  createAlbum: "/data/albums",
  detailsAlbumId: "/data/albums/",
  editAlbumById: "/data/albums/",
  deleteById: "/data/albums/",
  getByQuery: (query) => `/data/albums?where=name%20LIKE%20%22${query}%22`,
};

export async function getAll() {
  return api.get(endpoints.getAll);
}

export async function createAlbum(albumData) {
  return api.post(endpoints.createAlbum, albumData);
}

export async function detailsAlbumById(id) {
  return api.get(endpoints.detailsAlbumId + id);
}

export async function editAlbumById(id, data) {
  return api.put(endpoints.editAlbumById + id, data);
}

export async function deleteById(id) {
  return api.del(endpoints.deleteById + id);
}

export async function getByQuery(query) {
  return api.get(endpoints.getByQuery(query));
}
