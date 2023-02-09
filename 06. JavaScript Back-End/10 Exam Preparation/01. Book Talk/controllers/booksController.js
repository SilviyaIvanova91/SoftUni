const Book = require("../models/Book");
const User = require("../models/User");
const {
  getAllBooks,
  create,
  getById,
  edit,
  deleteBook,
  wishBook,
  getUserWishing,
} = require("../services/booksServices");

exports.getCatalogBooks = async (req, res) => {
  let books = await getAllBooks();
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

    res.redirect("/catalog");
  } catch (error) {
    console.log(error);
    res.render("404", {
      titlle: "Request Error",
      body: req.body,
    });
  }
};

exports.getDetails = async (req, res) => {
  const book = await Book.findById(req.params.id).lean();

  if (!book) {
    return res.redirect("404", { error: "Book not found!" });
  }

  if (!book.wishingList) {
    book.wishingList = [];
  }

  if (req.user) {
    if (book.owner == req.user._id) {
      book.isOwner = true;
    } else if (
      book.wishingList
        .map((b) => b.toString())
        .includes(req.user._id.toString())
    ) {
      book.isWished = true;
    }
  }
  res.render("books/details", { book });
};

exports.getEditBook = async (req, res) => {
  const book = await getById(req.params.id);

  res.render("books/edit", { book });
};

exports.postEditBook = async (req, res) => {
  const { title, author, genre, stars, imageUrl, bookReview } = req.body;
  await edit(req.params.id, {
    title,
    author,
    genre,
    stars,
    imageUrl,
    bookReview,
  });

  res.redirect(`/book/details/${req.params.id}`);
};

exports.getDeleteBook = async (req, res) => {
  await deleteBook(req.params.id);

  res.redirect("/catalog");
};

exports.getProfile = async (req, res) => {
  try {
    const user = await getUserWishing(req.user._id);

    res.render("profile", { user });
  } catch (error) {
    console.log(error.message);
    res.redirect("/404");
  }
};

exports.wishingBook = async (req, res) => {
  const book = await getById(req.params.id).lean();

  try {
    if (book.owner == req.user._id) {
      book.isOwner = true;
      return res.render(`book/details`, {
        book,
        error: "Cannot wish your own book",
      });
    }

    await wishBook(req.params.id, req.user._id);

    res.redirect(`/book/details/${req.params.id}`);
  } catch (error) {
    return res.render(`books/details`, { book, error: error.message });
  }
};
