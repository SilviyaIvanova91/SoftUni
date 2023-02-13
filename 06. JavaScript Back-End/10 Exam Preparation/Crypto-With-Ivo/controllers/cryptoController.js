const router = require("express").Router();
const { paymentMethodMap } = require("../constants");
const { isAuth } = require("../middlewares/authMiddlewares");
const cryptoServices = require("../services/cryptoService");
const { getErrorMessage } = require("../utils/errorUtils");
const { gtePaymentMethodViewData } = require("../utils/viewDatautils");

router.get("/catalog", isAuth, async (req, res) => {
  const crypto = await cryptoServices.getAll().lean();
  res.render("crypto/catalog", { crypto });
});

router.get("/search", async (req, res) => {
  const { name, paymentMethods } = req.query;
  const crypto = await cryptoServices(name, paymentMethods);
  const paymentMethod = gtePaymentMethodViewData(paymentMethods);

  res.render("crypto/serach", { crypto, paymentMethod, name });
});

router.get("/create", isAuth, (req, res) => {
  res.render("crypto/create");
});

router.post("/create", isAuth, async (req, res) => {
  const cryptoData = req.body;

  try {
    await cryptoServices.create(req.user._id, cryptoData);
  } catch (error) {
    return res
      .status(400)
      .render("crypto/create", { error: getErrorMessage(error) });
  }

  res.redirect("/crypto/catalog");
});

router.get("/:cryptoId/details", async (req, res) => {
  const crypto = await cryptoServices.getOne(req.params.cryptoId);
  const isOwner = crypto.owner.toString() == req.user?._id;
  const isBuyer = crypto.buyers?.some((id) => id == req.user.Id);

  crypto.method = paymentMethodMap[crypto.method];
  res.render("crypto/details", { crypto, isOwner, isBuyer });
});

router.get("/:cryptoId/buy", isAuth, async (req, res) => {
  try {
    await cryptoServices.buy(req.user._id, req.params.cryptoId);
  } catch (error) {
    res.render("404", { error: getErrorMessage(error) });
  }

  res.redirect(`/crypto/${req.params.cryptoId}/details`);
});

router.get("/:cryptoId/edit", isAuth, async (req, res) => {
  const crypto = await cryptoServices.getOne(req.params.cryptoId);

  const paymentMethod = gtePaymentMethodViewData(crypto.method);

  res.render("crypto/edit", { crypto, paymentMethod });
});

router.post("/:cryptoId/edit", isAuth, async (req, res) => {
  const cryptoData = req.body;
  const crypto = await cryptoServices.edit(req.params.cryptoId, cryptoData);

  res.redirect(`/crypto/${req.params.cryptoId}/details`);
});

router.get("/:cryptoId/delete", isAuth, async (req, res) => {
  await cryptoServices.delete(req.params.cryptoId);
  res.redirect("/crypto/catalog");
});

module.exports = router;
