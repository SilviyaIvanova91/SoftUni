const { Schema, model, Types } = require("mongoose");

const auctionSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required!"],
    minLength: [4, "Title must be at least 4"],
  },
  description: {
    type: String,
    maxLength: [200, "Description should be maximum 200 characters long"],
  },
  category: {
    type: String,
    required: [true, "Category is required!"],
    enum: ["Vehicles", "Real Estate", "Electronics", "Furniture", "Other"],
  },
  imageUrl: {
    type: String,
  },
  price: {
    type: String,
    required: [true, "Price is required!"],
    min: [0, "Price must be a positive number!"],
  },
  author: {
    type: [Types.ObjectId],
    required: [true, "Author is required!"],
    ref: "User",
    default: [],
  },
  bidder: { type: [Types.ObjectId], ref: "User", default: [] },
});

const Auction = model("Auction", auctionSchema);
module.exports = Auction;
