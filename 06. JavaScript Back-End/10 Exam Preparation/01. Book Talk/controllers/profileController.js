const { getByUserWishing } = require("../services/booksServices");

exports.prfileController = async (req, res) => {
  const wishings = await getByUserWishing(req.user._id);

  res.render("profile", {
    user: Object.assign({ wishings: wishings.map((b) => b.title) }, req.user),
  });
};
