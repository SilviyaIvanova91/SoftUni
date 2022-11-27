import { del, get, post, put } from "./api.js";

const endpoints = {
  getAll: "/data/offers?sortBy=_createdOn%20desc",
  createOffer: "/data/offers",
  offersById: "/data/offers/",
  apply: "/data/applications",
  getTotalApplication: (offerId) =>
    `/data/applications?where=offerId%3D%22${offerId}%22&distinct=_ownerId&count`,
  getNumOfApplication: (offerId, userId) =>
    `/data/applications?where=offerId%3D%22${offerId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
};

export async function getAll() {
  return get(endpoints.getAll);
}

export async function createOffer(data) {
  return post(endpoints.createOffer, data);
}

export async function getOffersById(id) {
  return get(endpoints.offersById + id);
}

export async function deleteOffer(id) {
  return del(endpoints.offersById + id);
}

export async function editOffer(id, data) {
  return put(endpoints.offersById + id, data);
}

export async function apply(data) {
  return post(endpoints.apply, data);
}

export async function getTotalApplication(offerId) {
  return get(endpoints.getTotalApplication(offerId));
}

export async function getNumOfApplication(offerId, userId) {
  return get(endpoints.getNumOfApplication(offerId, userId));
}
