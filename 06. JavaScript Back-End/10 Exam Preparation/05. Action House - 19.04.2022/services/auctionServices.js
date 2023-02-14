const Auction = require("../models/Auction");
const User = require("../models/User");
const ClosedAuction = require("../models/ClosedAction");

exports.getAll = async () => {
  return Auction.find({}).lean();
};

exports.getById = (id) => {
  return Auction.findById(id).lean();
};

exports.create = async (auctionData) => {
  return Auction.create(auctionData);
};

exports.auctionBidder = async (auctionId, userId, amout) => {
  const auction = await Auction.findById(auctionId);

  auction.bidder = userId;
  auction.price = amout;
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

exports.getUserAuction = (userId) => {
  return User.find(userId);
};

exports.getUserClosedAuction = (userId) => {
  return ClosedAuction.find({ owner: userId }).lean();
};

exports.closedAuctions = async (
  auction,
  auctionId,
  bidUserFirstName,
  bidUserLastName
) => {
  const newAuction = {
    title: auction.title,
    imageUrl: auction.imageUrl,
    price: auction.price,
    owner: auction.author,
    bidderFirstName: bidUserFirstName,
    bidderLastName: bidUserLastName,
  };
  const closedAuction = await ClosedAuction.create(newAuction);
  await Auction.findByIdAndDelete(auctionId);
};
