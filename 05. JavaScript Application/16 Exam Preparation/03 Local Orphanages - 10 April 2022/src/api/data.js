import { del, get, post, put } from "./api.js";

const endpoints = {
  getAll: "/data/posts?sortBy=_createdOn%20desc",
  create: "/data/posts",
  getById: "/data/posts/",
  getMyPost: (userId) =>
    `/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
  donation: "/data/donations",
  getDonationCount: (postId) =>
    `/data/donations?where=postId%3D%22${postId}%22&distinct=_ownerId&count`,
  getTotalDonation: (postId, userId) =>
    `/data/donations?where=postId%3D%22${postId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
};

export async function getAll() {
  return get(endpoints.getAll);
}

export async function createOrph(data) {
  return post(endpoints.create, data);
}

export async function getById(id) {
  return get(endpoints.getById + id);
}

export async function deleteById(id) {
  return del(endpoints.getById + id);
}

export async function editById(id, data) {
  return put(endpoints.getById + id, data);
}

export async function getMyPost(ownerId) {
  return get(endpoints.getMyPost(ownerId));
}

export async function donations(data) {
  return post(endpoints.donation, data);
}

export async function getDonationCount(postId) {
  return get(endpoints.getDonationCount(postId));
}

export async function getTotalDonation(postId, userId) {
  return get(endpoints.getTotalDonation(postId, userId));
}
