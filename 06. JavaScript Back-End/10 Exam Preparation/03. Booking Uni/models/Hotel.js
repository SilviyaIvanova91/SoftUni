const { Schema, model, Types } = require("mongoose");

const hotelSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minLength: [4, "Hotel name must at least 4 characters long"],
  },
  city: {
    type: String,
    required: true,
    minLength: [3, "City name must at least 3 characters long"],
  },
  imageUrl: {
    type: String,
    required: true,
    match: [/^https?/, "Image must be a valid URL!"],
  },
  bookings: { type: [Types.ObjectId], ref: "User", default: [] },
  rooms: {
    type: Number,
    required: true,
    min: [1, "Rooms must be between 1 and 100"],
    max: [100, "Room must be between 1 and 100"],
  },
  owner: { type: Types.ObjectId, ref: "User", required: true },
});

const Hotel = model("Hotel", hotelSchema);
module.exports = Hotel;
