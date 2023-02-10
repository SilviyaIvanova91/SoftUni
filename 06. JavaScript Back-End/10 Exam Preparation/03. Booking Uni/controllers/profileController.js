const { getUserBooking } = require("../services/hotelServices");

exports.profileController = async (req, res) => {
  const bookings = await getUserBooking(req.user._id);
  let booking = Object.assign({ bookings: bookings.map((b) => b.name) });
  res.render("profile", { booking });
};
