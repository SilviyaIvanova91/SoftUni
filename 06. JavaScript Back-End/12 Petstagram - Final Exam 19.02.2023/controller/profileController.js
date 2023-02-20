const { getOwnerPhotos } = require("../services/profileServices");

const router = require("express").Router();

router.get("/profile", async (req, res) => {
  const photos = await getOwnerPhotos(req.user.username);

  res.render("profile", { title: "My Profile", photos });
});

module.exports = router;
