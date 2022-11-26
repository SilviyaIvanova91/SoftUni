import * as api from "./api.js";

const endpoints = {
  getAll: "/data/shoes?sortBy=_createdOn%20desc",
  createCard: "/data/shoes",
  cardById: "/data/shoes/",
  search: (query) => `/data/shoes?where=brand%20LIKE%20%22${query}%22`,
};

export async function getAll() {
  return api.get(endpoints.getAll);
}

export async function createCard(data) {
  return api.post(endpoints.createCard, data);
}

export async function detailsCard(id) {
  return api.get(endpoints.cardById + id);
}

export async function deleteCard(id) {
  return api.del(endpoints.cardById + id);
}

export async function editCard(id, data) {
  return api.put(endpoints.cardById + id, data);
}

export async function searchShoes(query) {
  return api.get(endpoints.search(query));
}
