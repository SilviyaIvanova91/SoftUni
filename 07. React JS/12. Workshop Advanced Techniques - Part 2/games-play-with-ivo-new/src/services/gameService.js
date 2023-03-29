import { requestFactory } from "./requester";

// console.log(process.env.NODE_ENV);
//const baseUrl = "http://localhost:3030";
const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3030"
    : "http://localhost:3030"; //TODO Add server url when deployed
const url = `${baseUrl}/data/games`;

export const gameServiceFactory = (token) => {
  const request = requestFactory(token);

  const getAll = async () => {
    const result = await request.get(url);
    const games = Object.values(result);

    return games;
  };

  const getOne = async (gameId) => {
    const result = await request.get(`${url}/${gameId}`);

    return result;
  };

  const create = async (gameData) => {
    //const create = async (gameData, token) => {
    const result = await request.post(url, gameData);
    //const result = await request.post(url,token, gameData);

    console.log(result);

    return result;
  };

  // const addComment = async (gameId, data) => {
  //   const result = await request.post(`${url}/${gameId}/comments`, data);

  //   return result;
  // };

  const deleteGame = (gameId) => request.delete(`${url}/${gameId}`);

  const edit = (gameId, data) => request.put(`${url}/${gameId}`, data);

  return {
    getAll,
    getOne,
    create,
    // addComment,
    delete: deleteGame,
    edit,
  };
};
