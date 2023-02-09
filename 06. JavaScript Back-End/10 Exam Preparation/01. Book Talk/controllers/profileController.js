const { getUserWishing } = require("../services/booksServices");

exports.userController = async (req, res) => {
  const wishings = await getUserWishing(req.user._id);
  console.log(wishings);

  res.render("profile", { wishings });
};
