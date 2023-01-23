const bcrypt = require("bcrypt");

async function hash(password) {
  return bcrypt.hash(password, 10);
}

async function compare(password, hashedPassword) {
  return bcrypt.compare(password, hashedPassword);
}

module.exports = {
  hash,
  compare,
};

//------First Demo-----------------
// const bcrypt = require("bcrypt");

// const hashPass = bcrypt.hashSync("123456", 10);
// console.log(hashPass);

// const result = bcrypt.compareSync(
//   "123456",
//   "$2b$10$DKLPICg0H7dnwl3v0J5MbeulYs37.Ai/OwpE71n.6tdLL/Lr9Umx."
// );
// console.log(result);
