const Auction = require("../models/Auction");

exports.getAll = async () => {
  return Auction.find({}).lean();
};

exports.getById = (id) => {
  return Auction.findById(id).lean();
};

exports.create = async (auctionData) => {
  return Auction.create(auctionData);
};

exports.auctionBidder = async (auctionId, userId) => {
  const auction = await Auction.findById(auctionId);

  auction.bidder.push(userId);
  auction.save();
};

exports.edit = async (id, auction) => {
  const existingAuction = await Auction.findByIdAndUpdate(id, auction);

  existingAuction.title = auction.title;
  existingAuction.category = auction.category;
  existingAuction.imageUrl = auction.imageUrl;
  existingAuction.price = auction.price;
  existingAuction.description = auction.description;

  await existingAuction.save();
};

exports.deleteAuction = async (id) => {
  await Auction.findByIdAndDelete(id);
};
