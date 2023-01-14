const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.send(
    '<form method="POST"><input name="name"><button>Send</button></form>'
  );
});

router.post("/", (req, res) => {
  console.log("Handling post request");
  res.redirect("/catalog");
});

module.exports = router;
