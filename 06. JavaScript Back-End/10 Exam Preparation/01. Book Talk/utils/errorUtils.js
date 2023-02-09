function getFirstMongooseError(error) {
  const firstError = Object.values(error.errors)[0].message;
  return firstError[0];
}

exports.getErrorMessage = (error) => {
  switch (error.name) {
    case "Error":
      return error.message;
    case "MongooseError":
      return getFirstMongooseError(error);
    default:
      return error.message;
  }
};
