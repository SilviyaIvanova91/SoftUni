import { del, get, post, put } from "./api.js";

const endpoints = {
  getAllGames: "/data/games?sortBy=_createdOn%20desc",
  readTheNewGame: "/data/games?sortBy=_createdOn%20desc&distinct=category",
  createGame: "/data/games",
  gameById: "/data/games/",
  getAllComents: (gameId) => `/data/comments?where=gameId%3D%22${gameId}%22`,
  postComments: "/data/comments",
};

export async function getAllGames() {
  return get(endpoints.getAllGames);
}

export async function readTheNewGame() {
  return get(endpoints.readTheNewGame);
}

export async function createGame(data) {
  return post(endpoints.createGame, data);
}

export async function getGameById(id) {
  return get(endpoints.gameById + id);
}

export async function deleteGameById(id) {
  return del(endpoints.gameById + id);
}

export async function editGameById(id, data) {
  return put(endpoints.gameById + id, data);
}

export async function getAllComents(gameId) {
  return get(endpoints.getAllComents(gameId));
}

export async function postComments(data) {
  return post(endpoints.postComments, data);
}
