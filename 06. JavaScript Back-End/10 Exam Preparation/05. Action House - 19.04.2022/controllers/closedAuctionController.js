const { hasUser } = require("../middleware/guards");
const {
  getUserClosedAuction,
  getUserAuction,
} = require("../services/auctionServices");

const router = require("express").Router();

router.get("/closed", hasUser(), async (req, res) => {
  const closedAuction = await getUserClosedAuction(req.user._id);

  res.render("closed-auctions", {
    title: "Closed Auctions Page",
    closedAuction,
  });
});

module.exports = router;
