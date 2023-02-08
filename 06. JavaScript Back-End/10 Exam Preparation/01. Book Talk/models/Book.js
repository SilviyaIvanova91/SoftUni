const { Schema, model, Types } = require("mongoose");

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
    minLength: [2, "Title must be at least 2 characters long!"],
  },
  author: {
    type: String,
    required: true,
    minLength: [5, "Author must be at least 2 characters long!"],
  },
  imageUrl: {
    type: String,
    required: true,
    validate: /^https?:\/\//i,
  },
  bookReview: {
    type: String,
    required: true,
    minLength: [10, "Review must be at least 10 characters long!"],
  },
  genre: {
    type: String,
    required: true,
    minLength: [3, "Genre must be at least 2 characters long!"],
  },
  stars: { type: Number, required: true, minValue: 1, maxValue: 5 },
  wishingList: [{ type: Types.ObjectId, ref: "User" }],

  owner: { type: Types.ObjectId, ref: "User" },
});

const Book = model("Book", bookSchema);

module.exports = Book;
