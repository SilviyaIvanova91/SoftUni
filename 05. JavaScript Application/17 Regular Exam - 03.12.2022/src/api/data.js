import { del, get, post, put } from "./api.js";

const endpoints = {
  albumsCatalog: "/data/albums?sortBy=_createdOn%20desc",
  createAlbum: "/data/albums",
  albumById: "/data/albums/",
  likes: "/data/likes",
  tottalLikesCount: (albumId) =>
    `/data/likes?where=albumId%3D%22${albumId}%22&distinct=_ownerId&count`,
  hasUserLike: (albumId, userId) =>
    `/data/likes?where=albumId%3D%22${albumId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
};

export async function albumsCatalog() {
  return await get(endpoints.albumsCatalog);
}

export async function createAlbum(data) {
  return await post(endpoints.createAlbum, data);
}

export async function albumById(id) {
  return await get(endpoints.albumById + id);
}

export async function editAlbum(id, data) {
  return await put(endpoints.albumById + id, data);
}

export async function deleteAlbumById(id) {
  return await del(endpoints.albumById + id);
}

export async function likes(data) {
  return await post(endpoints.likes, data);
}

export async function tottalLikesCount(albumId) {
  return await get(endpoints.tottalLikesCount(albumId));
}

export async function hasUserLike(albumId, userId) {
  return await get(endpoints.hasUserLike(albumId, userId));
}
