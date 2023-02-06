exports.isEmail = (input) => {
  return /^\w{3,20}@\w{2,10}\.\w{2,10}$/.test(input);
};
