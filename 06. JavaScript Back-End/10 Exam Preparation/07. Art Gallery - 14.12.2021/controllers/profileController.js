const router = require("express").Router();
const { hasUser } = require("../middleware/guards");
const { getById } = require("../services/galleryServices");
const {
  getByUserId,
  getSharePost,
  getAuthorPublic,
} = require("../services/profileServices");

router.get("/profile", hasUser(), async (req, res) => {
  // const user = req.user._id;
  const user = await getByUserId(req.user._id);
  const adress = user.adress;

  const sharePublic = await getSharePost(req.user._id);
  const share = Object.assign(sharePublic.map((p) => p.title));

  const authorPublivation = await getAuthorPublic(req.user._id);
  const auth = Object.assign(authorPublivation.map((p) => p.title));

  res.render("profile", { title: "Profile", adress, share, auth });
});

module.exports = router;
