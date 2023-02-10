const Crypto = require("../models/Crypto");

function getAll() {
  return Crypto.find({}).lean();
}

function getById(id) {
  return Crypto.findById(id).lean();
}

async function create(cryptoData) {
  return await Crypto.create(cryptoData);
}

async function edit(id, crypto) {
  const existingCrypto = await Crypto.findByIdAndUpdate(id, crypto);

  existingCrypto.name = crypto.name;
  existingCrypto.imageUrl = crypto.imageUrl;
  existingCrypto.price = crypto.price;
  existingCrypto.description = crypto.description;
  existingCrypto.method = crypto.method;

  await existingCrypto.save();
}

async function deleteCrypto(id) {
  await Crypto.findByIdAndDelete(id);
}

async function buyCrypto(cryptoId, userId) {
  const crypto = await Crypto.findById(cryptoId);

  crypto.byingCrypto.push(userId);
  crypto.save();
}

module.exports = {
  getAll,
  getById,
  create,
  edit,
  deleteCrypto,
  buyCrypto,
};
