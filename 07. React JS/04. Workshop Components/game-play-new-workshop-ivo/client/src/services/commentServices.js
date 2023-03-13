import * as request from "../services/requester";

const baseUrl = "http://localhost:3030/jsonstore/comments";

export const getAll = async (gameId) => {
  const query = encodeURIComponent(`gameId="${gameId}"`);
  const result = await request.get(`${baseUrl}?where=${query}`);
  const comments = Object.values(result);

  return comments;
};

export const craete = async (data) => {
  const result = await request.post(baseUrl, data);

  return result;
};
