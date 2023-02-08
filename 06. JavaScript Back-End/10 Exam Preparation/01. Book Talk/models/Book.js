const { Schema, model, Types } = require("mongoose");

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  imageUrl: { type: String, required: true },
  bookReview: { type: String, required: true },
  genre: { type: String, required: true },
  stars: { type: Number, required: true, minValue: 1, maxValue: 5 },
  owner: { type: Types.ObjectId, ref: "User" },
});

const Book = model("Book", bookSchema);

model.exports = Book;
