const mongoose = require("mongoose");

function getFirstMongooseError(error) {
  console.log(error.message);
  const firstErr = Object.values(error.errors)[0].message;
  return firstErr;
}

exports.getErrorMessage = (error) => {
  console.log(error.name);
  switch (error.name) {
    case "Error":
      return error.message;
    case "ValidationError":
      return getFirstMongooseError(error);
    default:
      return error.message;
  }
};
