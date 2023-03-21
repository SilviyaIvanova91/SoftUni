import * as request from './requester';

const baseUrl = 'http://localhost:3030/jsonstore/games';

export const getAll = async () => {
    const result = await request.get(baseUrl);
    const games = Object.values(result);

    return games;
};

export const getOne = async (gameId) => {
    const result = await request.get(`${baseUrl}/${gameId}`);

    return result;
};

export const create = async (gameData) => {
    const result = await request.post(baseUrl, gameData);

    console.log(result);

    return result;
};

export const addComment = async (gameId, data) => {
    const result = await request.post(`${baseUrl}/${gameId}/comments`, data);

    return result;
};