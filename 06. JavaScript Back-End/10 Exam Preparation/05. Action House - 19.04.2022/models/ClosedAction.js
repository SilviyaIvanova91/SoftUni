const { Schema, model, Types } = require("mongoose");

const closedAuctionSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required!"],
    minLength: [4, "Title must be at least 4"],
  },
  imageUrl: {
    type: String,
  },
  price: {
    type: String,
    required: [true, "Price is required!"],
    min: [0, "Price must be a positive number!"],
  },
  owner: {
    type: [Types.ObjectId],
    required: [true, "Author is required!"],
    ref: "User",
    default: [],
  },
});

const ClosedAuction = model("ClosedAuction", closedAuctionSchema);
module.exports = ClosedAuction;
