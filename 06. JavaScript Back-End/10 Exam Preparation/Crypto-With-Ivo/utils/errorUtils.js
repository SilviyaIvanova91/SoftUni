//const mongoose = require("mongoose");

function getFirstMongooseError(error) {
  const firstError = Object.values(error.errors)[0].message;
  return firstError[0];

  //   const errors = Object.keys(error.errors).map(
  //     (key) => error.errors[key].message
  //   );
  //   return errors[0];
}

exports.getErrorMessage = (error) => {
  //   console.log(error.name);
  //   console.log(error instanceof Error);
  //   console.log(error instanceof mongoose.Error);
  //------------------------------------------------
  switch (error.name) {
    case "Error":
      return error.message;
    case "MongooseError":
      return getFirstMongooseError(error);
    default:
      return error.message;
  }

  // return error.message;
};
