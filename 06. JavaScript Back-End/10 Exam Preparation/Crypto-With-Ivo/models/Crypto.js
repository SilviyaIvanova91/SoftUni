const { Schema, model, Types } = require("mongoose");

const cryptoSchema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: [2, "Name must be at least 2 characters long!"],
  },
  imageUrl: {
    type: String,
    required: true,
    match: [/^https?:\/\//, "Image must be a valid URL!"],
  },
  price: {
    type: Number,
    required: true,
    min: [0, "Price is a positive number!"],
  },
  description: {
    type: String,
    required: true,
    minLength: [10, "Description must be at least 10 characters long!"],
  },
  method: {
    type: String,
    required: true,
    enum: {
      values: ["crypto-wallet", "credit-card", "debit-card", "paypal"],
      message: "Invalid payment method",
    },
  },
  buyers: [{ type: Types.ObjectId, ref: "User" }],
  owner: { type: Types.ObjectId, ref: "User" },
});

const Crypto = model("Crypto", cryptoSchema);
module.exports = Crypto;
