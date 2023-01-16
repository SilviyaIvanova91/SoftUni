module.exports = (req, res, next) => {
  console.log(`Request url: ${req.url} with method: ${req.method}`);

  next();
};
