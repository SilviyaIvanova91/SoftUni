const { getMyPosts } = require("../services/myPostServices");

const router = require("express").Router();

router.get("/my-posts", async (req, res) => {
  const post = await getMyPosts(req.user._id);
  post.firstName = req.user.firstName;
  //sconsole.log(post.firstName);
  res.render("my-posts", { title: "My Posts", post });
});

module.exports = router;
