const { Schema, model, Types } = require("mongoose");

const adSchema = new Schema({
  headline: {
    type: String,
    required: [true, "Headline is required"],
  },
  location: {
    type: String,
    required: [true, "Location is required"],
  },
  companyName: {
    type: String,
    required: [true, "Company name is required"],
  },
  companyDescription: {
    type: String,
    required: [true, "Company description is required"],
  },
  author: { type: Types.ObjectId, ref: "User" },
  ussersApplied: [{ type: Types.ObjectId, ref: "User" }],
});

const Ad = model("Ad", adSchema);
module.exports = Ad;
