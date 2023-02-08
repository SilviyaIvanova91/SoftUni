const Book = require("../models/Book");
const { getAllBooks, create } = require("../services/booksServices");

exports.getCatalogBooks = async (req, res) => {
  const books = await getAllBooks();
  res.render("books/catalog", { books });
};

exports.getCreateBook = async (req, res) => {
  res.render("books/create");
};

exports.postCreateBook = async (req, res) => {
  try {
    const book = {
      title: req.body.title,
      author: req.body.author,
      imageUrl: req.body.imageUrl,
      bookReview: req.body.bookReview,
      genre: req.body.genre,
      stars: req.body.stars,
      owner: req.user._id,
    };

    await create(book);

    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.render("404", {
      titlle: "Request Error",
      body: req.body,
    });
  }
};
