const { getAllClosed } = require("../services/auctionServices");

const router = require("express").Router();

router.get("/closed", async (req, res) => {
  const closedAuctions = await getAllClosed();
  res.render("closed-auctions", {
    title: "Closed Actions Page",
    closedAuctions,
  });
});

module.exports = router;
