import * as api from "./api.js";

let endpoints = {
  getAll: "/data/pets?sortBy=_createdOn%20desc&distinct=name",
  getById: "/data/pets/",
  deletePet: "/data/pets/",
  createPet: "/data/pets",
  editPet: "/data/pets/",
};

export async function getAll() {
  return api.get(endpoints.getAll);
}

export async function getById(id) {
  return api.get(endpoints.getById + id);
}

export async function deleteById(id) {
  return api.del(endpoints.deletePet + id);
}

export async function createPet(petData) {
  return api.post(endpoints.createPet, petData);
}

export async function editPet(id, petData) {
  return api.put(endpoints.editPet + id, petData);
}
