const { hasUser, isOwner } = require("../middleware/guards");
const {
  create,
  getById,
  bookHotel,
  edit,
  deleteHotel,
} = require("../services/hotelServices");

const router = require("express").Router();

router.get("/create", hasUser(), (req, res) => {
  res.render("hotel/create");
});

router.post("/create", hasUser(), async (req, res) => {
  const hotel = {
    name: req.body.name,
    city: req.body.city,
    rooms: req.body.rooms,
    imageUrl: req.body.imageUrl,
    owner: req.user._id,
  };

  await create(hotel);
  res.redirect("/");
});

router.get("/details/:id", async (req, res) => {
  let hotel = await getById(req.params.id);

  if (!hotel) {
    throw new Error("Hotel not found!");
  }

  //   if (!hotel.bookings) {
  //     hotel.bookings = [];
  //   }

  hotel.isOwner = req.user && hotel.owner == req.user._id ? true : false;
  hotel.isBooked =
    req.user &&
    hotel.bookings.map((c) => c.toString()).includes(req.user._id.toString())
      ? true
      : false;

  res.render("hotel/details", { hotel });
});

router.get("/book/:id", hasUser(), async (req, res) => {
  const hotel = await getById(req.params.id);

  try {
    if (hotel.owner == req.user._id) {
      hotel.isOwner = true;
      return res.render(`hotel/details`, {
        hotel,
        error: "Cannot book your own hotel",
      });
    }

    await bookHotel(req.params.id, req.user._id);
    res.redirect(`/hotel/details/${req.params.id}`);
  } catch (error) {
    return res.render(`hotel/details`, { hotel, error: error.message });
  }
});

router.get("/edit/:id", isOwner(), hasUser(), async (req, res) => {
  let hotel = await getById(req.params.id);

  res.render("hotel/edit", { hotel });
});

router.post("/edit/:id", isOwner(), hasUser(), async (req, res) => {
  const { name, city, rooms, imageUrl } = req.body;
  await edit(req.params.id, { name, city, rooms, imageUrl });

  res.redirect(`/hotel/details/${req.params.id}`);
});

router.get("/delete/:id", isOwner(), hasUser(), async (req, res) => {
  await deleteHotel(req.params.id);

  res.redirect("/");
});

module.exports = router;
