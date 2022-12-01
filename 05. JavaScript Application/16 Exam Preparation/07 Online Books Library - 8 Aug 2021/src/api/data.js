import { del, get, post, put } from "./api.js";

const endpoints = {
  createBook: "/data/books",
  getAllBooks: "/data/books?sortBy=_createdOn%20desc",
  bookById: "/data/books/",
  getMyBooks: (userId) =>
    `/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
  likes: "/data/likes",
  totalLike: (bookId) =>
    `/data/likes?where=bookId%3D%22${bookId}%22&distinct=_ownerId&count`,
  getNumOfLikes: (bookId, userId) =>
    `/data/likes?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
};

export async function createBook(data) {
  return post(endpoints.createBook, data);
}

export async function getAllBooks() {
  return get(endpoints.getAllBooks);
}

export async function bookById(id) {
  return get(endpoints.bookById + id);
}

export async function deleteBook(id) {
  return del(endpoints.bookById + id);
}

export async function editBook(id, data) {
  return put(endpoints.bookById + id, data);
}

export async function getMyBooks(userId) {
  return get(endpoints.getMyBooks(userId));
}

export async function likes(data) {
  return post(endpoints.likes, data);
}

export async function totalLike(bookId) {
  return get(endpoints.totalLike(bookId));
}

export async function getNumOfLikes(bookId, userId) {
  return get(endpoints.getNumOfLikes(bookId, userId));
}
