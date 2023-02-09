const Book = require("../models/Book");
const User = require("../models/User");

function getAllBooks() {
  return Book.find({}).lean();
}

function getById(id) {
  return Book.findById(id).lean();
}

async function create(bookData) {
  return await Book.create(bookData);
}

async function edit(id, book) {
  const existingBook = await Book.findByIdAndUpdate(id, book);

  existingBook.title = book.title;
  existingBook.author = book.author;
  existingBook.imageUrl = book.imageUrl;
  existingBook.bookReview = book.bookReview;
  existingBook.genre = book.genre;
  existingBook.stars = book.stars;

  await existingBook.save();
}

async function deleteBook(id) {
  await Book.findByIdAndDelete(id);
}

async function wishBook(bookId, userId) {
  const book = await Book.findById(bookId);

  book.wishingList.push(userId);
  book.save();
}

async function getUserWishing(userId) {
  return Book.find({ wishingList: userId }).lean();
}

module.exports = {
  getAllBooks,
  getById,
  create,
  edit,
  deleteBook,
  getUserWishing,
  wishBook,
};
