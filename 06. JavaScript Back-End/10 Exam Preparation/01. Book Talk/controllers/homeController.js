exports.getHomePage = async (req, res) => {
  res.render("home");
};

exports.getErrorPage = async (req, res) => {
  res.render("404");
};
