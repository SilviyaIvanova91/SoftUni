import * as api from "./api.js";

let endpoints = {
  donate: "/data/donation",
  getDonations: (petId) =>
    `/data/donation?where=petId%3D%22${petId}%22&distinct=_ownerId&count`,
  allDonation: (petId, userId) =>
    `/data/donation?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
};

export async function donate(petId) {
  return api.post(endpoints.donate, { petId });
}

export async function getDonations(petId) {
  return api.get(endpoints.getDonations(petId));
}

export async function getAllDonations(petId, userId) {
  return await api.get(endpoints.allDonation(petId, userId));
}
