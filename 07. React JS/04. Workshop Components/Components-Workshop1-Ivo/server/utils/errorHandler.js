function createErrorMessage(error) {
  return error.message.includes('Path')
    ? 'Please fullfil all fields!'
    : Object.values(error.errors)[0]?.properties?.message;
}

function errorHandler(error, res, req) {
  let message = 'Something went wrong!';
  if (error.name === 'CustomValidationError') {
    message = error.message;
    res.status(error.code).json({ message });
  } else if (
    error instanceof TypeError ||
    error.name == 'MongoError' ||
    error.name == 'ObjectParameterError'
  ) {
    message = error?.message;
    res.status(500).json({ message });
  } else if (error.name === 'CastError') {
    message = error.message;
    res.status(500).json({ message });
  } else {
    message = createErrorMessage(error);
    res.status(400).json({ message });
  }
  console.error(`Error: ${req.method} >> ${req.baseUrl}: ${message}`);
}

module.exports = {
  errorHandler,
};
