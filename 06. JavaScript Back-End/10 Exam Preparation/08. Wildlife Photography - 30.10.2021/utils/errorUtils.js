exports.getErrorMessage = (error) => {
  if (error.name === "ValidationError") {
    return Object.values(error.errors).map((v) => v.message);
  } else if (Array.isArray(error)) {
    return error.map((e) => e.msg);
  } else {
    return error.message.split("\n");
  }
};
