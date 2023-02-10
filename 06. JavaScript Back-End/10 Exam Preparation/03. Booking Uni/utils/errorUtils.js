function getFirstMongooseError(error) {
  const firstErr = Object.values(error.errors)[0].message;
  return firstErr;
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
