const Crypto = require("../models/Crypto");

async function searchCrypto(name, payment) {
  let crypto = await Crypto.find({
    name: { $regex: new RegExp(name, "i") },
  }).lean();
  crypto = crypto.filter((c) => c.payment == payment);
  return crypto;
}

module.exports = {
  searchCrypto,
};
