const Book = require("../models/Book");

async function getAllBooks() {
  return Book.find({}).lean();
}

function getById(id) {
  return Book.findById(id).lean();
}

async function create(bookData) {
  return await Book.create(bookData);
}

module.exports = {
  getAllBooks,
  getById,
  create,
};
