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

exports.getAllClosed = () => {
  return ClosedAuction.find({}).lean();
};

exports.createClosedAuction = (auction, bidUser) => {
  console.log(auction);
  const newAuction = {
    title: auction.title,
    imageUrl: auction.imageUrl,
    price: auction.price,

    owner: auction.author,
  };
  newAuction.bidder = bidUser;
  console.log(newAuction);
  return ClosedAuction.create(newAuction);
};
