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

// async function wishBook(bookId, userId) {
//   const user = await User.findById(userId);
//   const book = await Book.findById(bookId);
//   console.log(user);
//   console.log(book);

//   if (book.owner == user._id) {
//     res.render("book/details", { error: "Cannot add your own book!" });
//     throw new Error("Cannot add your own book!");
//   }

//   user.wishingList.push(book);
//   await user.save();
// }

async function getMyWishBooks(bookId, userId) {
  const book = await Book.findById(bookId);

  book.wishingList.push(userId);
  await book.save();
}

async function getUserWishing(userId) {
  const user = await User.findById(userId).populate("wishingList").lean();
  return user;
}

module.exports = {
  getAllBooks,
  getById,
  create,
  edit,
  deleteBook,
  getMyWishBooks,
  getUserWishing,
};
