import * as api from "./api.js";

const endpoints = {
  createAlbum: "/data/albums",
  getAll: "/data/albums?sortBy=_createdOn%20desc&distinct=name",
  singleAlbums: "/data/albums/",
  //searchAlbum: "/data/albums?where=name",
  //getByQuery: (query) => `/data/albums?where=name%20LIKE%20%22${query}%22`,
};

export async function createAlbum(data) {
  return api.post(endpoints.createAlbum, data);
}

export async function getAll() {
  return api.get(endpoints.getAll);
}

export async function detailsAlbumById(id) {
  return api.get(endpoints.singleAlbums + id);
}

export async function editAlbumById(id, data) {
  return api.put(endpoints.singleAlbums + id, data);
}

export async function deleteById(id) {
  return api.del(endpoints.singleAlbums + id);
}

// export async function searchAlbum(query) {
//   return api.get(endpoints.searchAlbum + encodeURIComponent(`LIKE "${query}"`));
//   // return api.get(endpoints.getByQuery(query));
// }
//--without endpoint:
export async function searchAlbum(query) {
  return api.get(`/data/albums?where=name%20LIKE%20%22${query}%22`);
}
