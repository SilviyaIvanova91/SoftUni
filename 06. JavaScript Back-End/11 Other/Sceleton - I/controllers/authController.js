const router = require("express").Router();

const authService = require("../services/authService");
const { isAuth } = require("../middlewares/authMiddlewares");
//const { getErrorMessage } = require("../utils/errorUtils");

router.get("/login", (req, res) => {
  res.render("auth/login");
});

// const errorResponse = (res, template, error, status = 400) => {
//   return res
//     .status(404)
//     .render("auth/register", { error: getErrorMessage(error) }); //with utils --> errorUtils
// };

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const token = await authService.login(email, password);

    res.cookie("auth", token);
    res.redirect("/");
  } catch (error) {
    // return res.status(404).render("auth/login", { error: error.message });
    return res
      .status(404)
      .render("auth/register", { error: getErrorMessage(error) }); //with utils --> errorUtils
    // return errorResponse(res, "auth/login", error, 404);  ---> other solution with Function before
  }
});

router.get("/register", (req, res) => {
  res.render("auth/register");
});

router.post("/register", async (req, res) => {
  const { username, email, password, repeatPassword } = req.body;

  try {
    const token = await authService.register(
      username,
      email,
      password,
      repeatPassword
    );

    // TODO login authomaticaly -> in authService + token here
    res.cookie("auth", token);
    res.redirect("/");
  } catch (error) {
    //  return res.status(404).render("auth/register", { error: error.message });
    return res
      .status(404)
      .render("auth/register", { error: getErrorMessage(error) }); //with utils --> errorUtils
  }

  res.redirect("/login");
});

router.get("/logout", isAuth, (req, res) => {
  res.clearCookie("auth");
  res.redirect("/");

  // req.session = null;
  // res.clearCookie("token");
  // res.clearCookie("token.sig");
  // return res.redirect("/");
});

module.exports = router;
