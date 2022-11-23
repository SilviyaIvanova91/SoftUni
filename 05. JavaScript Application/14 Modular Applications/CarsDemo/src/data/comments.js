import * as api from "./api.js";

const endpoints = {
  byCarId: (carId) =>
    "/data/comments?where=" +
    encodeURIComponent(`carId="${carId}"`) +
    "&load=" +
    encodeURIComponent("author=_ownerId:users"),
  create: "/data/comments",
};

export async function getCommentsByCarId(carId) {
  return api.get(endpoints.byCarId(carId));
}

export async function createComment(carId, content) {
  const comment = {
    carId,
    content,
  };
  return api.post(endpoints.create, comment);
}
