const Hotel = require("../models/Hotel");

exports.getAll = () => {
  return Hotel.find({}).lean();
};

exports.getById = (id) => {
  return Hotel.findById(id).lean();
};

exports.create = (hotelData) => {
  return Hotel.create(hotelData);
};

exports.bookHotel = async (hotelId, userId) => {
  const hotel = await Hotel.findById(hotelId);

  hotel.bookings.push(userId);
  hotel.save();
};

exports.edit = async (id, hotel) => {
  const existingHotel = await Hotel.findByIdAndUpdate(id, hotel);

  existingHotel.name = hotel.name;
  existingHotel.city = hotel.city;
  existingHotel.rooms = hotel.rooms;
  existingHotel.imageUrl = hotel.imageUrl;

  await existingHotel.save();
};

exports.deleteHotel = async (id) => {
  await Hotel.findByIdAndDelete(id);
};

exports.getUserBooking = async (userId) => {
  return Hotel.find({ bookings: userId });
};
