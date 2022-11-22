import * as api from "./api.js";

let endpoints = {
  getPets: "/data/pets?sortBy=_createdOn%20desc&distinct=name",
  createPet: "/data/pets",
  getWithId: "/data/pets/",
  editPet: "/data/pets/",
  deletePet: "/data/pets/",
  donateToPet: "/data/donation",
  donationCount: (petId) =>
    `/data/donation?where=petId%3D%22${petId}%22&distinct=_ownerId&count`,
  totalDonations: (petId, userId) =>
    `/data/donation?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
};

export async function getPets() {
  return await api.get(endpoints.getPets);
}

export async function createPet(data) {
  return await api.post(endpoints.createPet, data);
}

export async function getWithId(id) {
  return await api.get(endpoints.getWithId + id);
}

export async function editPet(id, data) {
  return await api.put(endpoints.editPet + id, data);
}

export async function deletePet(id) {
  return await api.del(endpoints.deletePet + id);
}

export async function donateToPet(data) {
  return await api.post(endpoints.donateToPet, data);
}

export async function getDonateAmout(petId) {
  return await api.get(endpoints.donationCount(petId));
}

export async function totalDonateAmout(petId, userId) {
  return await api.get(endpoints.totalDonations(petId, userId));
}
