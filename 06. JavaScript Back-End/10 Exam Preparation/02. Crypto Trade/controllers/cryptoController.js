const { hasUser, isOwner } = require("../middleware/guards");
const {
  getAll,
  create,
  getById,
  edit,
  deleteCrypto,
  buyCrypto,
  searchCrypto,
} = require("../services/cryptoServices");
const { generatePaymentOption } = require("../utils/cryptoUtils");

const router = require("express").Router();

router.get("/catalog", async (req, res) => {
  let crypto = await getAll();

  res.render("crypto/catalog", { crypto });
});

router.get("/create", hasUser(), (req, res) => {
  res.render("crypto/create");
});

router.post("/create", hasUser(), async (req, res) => {
  try {
    const crypto = {
      name: req.body.name,
      imageUrl: req.body.imageUrl,
      price: req.body.price,
      description: req.body.description,
      method: req.body.method,
      owner: req.user._id,
    };

    await create(crypto);
    res.redirect("/crypto/catalog");
  } catch (error) {
    console.log(error);
    return res.render("404", { error: error.message });
  }
});

router.get("/details/:id", async (req, res) => {
  let crypto = await getById(req.params.id);

  if (!crypto) {
    return res.redirect("/404", { error: "Crypto not found!" });
  }

  if (!crypto.byingCrypto) {
    crypto.byingCrypto = [];
  }

  crypto.isOwner = req.user && crypto.owner == req.user._id ? true : false;
  crypto.isBuy =
    req.user &&
    crypto.byingCrypto
      .map((c) => c.toString())
      .includes(req.user._id.toString())
      ? true
      : false;

  res.render("crypto/details", { crypto });
});

router.get("/edit/:id", isOwner(), hasUser(), async (req, res) => {
  let crypto = await getById(req.params.id);
  const paymentOptions = generatePaymentOption(crypto.method);

  res.render("crypto/edit", { crypto, paymentOptions });
});

router.post("/edit/:id", isOwner(), hasUser(), async (req, res) => {
  const { name, imageUrl, price, description, method } = req.body;
  await edit(req.params.id, { name, imageUrl, price, description, method });

  res.redirect(`/crypto/details/${req.params.id}`);
});

router.get("/delete/:id", isOwner(), hasUser(), async (req, res) => {
  await deleteCrypto(req.params.id);

  res.redirect("/crypto/catalog");
});

router.get("/buy/:id", hasUser(), async (req, res) => {
  const crypto = await getById(req.params.id);

  try {
    if (crypto.owner == req.user._id) {
      crypto.isOwner = true;
      return res.render(`crypto/details`, {
        crypto,
        error: "Cannot wish your own book",
      });
    }

    await buyCrypto(req.params.id, req.user._id);
    res.redirect(`/crypto/details/${req.params.id}`);
  } catch (error) {
    return res.render(`crypto/details`, { crypto, error: error.message });
  }
});

module.exports = router;
