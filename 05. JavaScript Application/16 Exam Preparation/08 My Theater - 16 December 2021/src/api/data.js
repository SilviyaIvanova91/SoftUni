import { del, get, post, put } from "./api.js";

const endpoints = {
  getAllEvents: "/data/theaters?sortBy=_createdOn%20desc&distinct=title",
  createEvent: "/data/theaters",
  eventById: "/data/theaters/",
  myProfile: (userId) =>
    `/data/theaters?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
  likes: "/data/likes",
  getTotalLikes: (theaterId) =>
    `/data/likes?where=theaterId%3D%22${theaterId}%22&distinct=_ownerId&count`,
  hasUserLike: (theaterId, userId) =>
    `/data/likes?where=theaterId%3D%22${theaterId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
};

export async function getAllEvents() {
  return await get(endpoints.getAllEvents);
}

export async function createEvent(data) {
  return await post(endpoints.createEvent, data);
}

export async function getEventById(id) {
  return await get(endpoints.eventById + id);
}

export async function editEvent(id, data) {
  return await put(endpoints.eventById + id, data);
}

export async function deleteEventById(id) {
  return await del(endpoints.eventById + id);
}

export async function getMyProfile(userId) {
  return await get(endpoints.myProfile(userId));
}

export async function likes(data) {
  return await post(endpoints.likes, data);
}

export async function getTotalLikes(theaterId) {
  return await get(endpoints.getTotalLikes(theaterId));
}

export async function hasUserLike(theaterId, userId) {
  return await get(endpoints.hasUserLike(theaterId, userId));
}
