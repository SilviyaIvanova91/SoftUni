import * as api from "./api.js";

const pageSize = 4;
const endpoints = {
  cars: `/data/cars?pageSize=${pageSize}&offset=`,
  size: "/data/cars?count",
  carById: "/data/cars/",
};

export async function getAllCars(search, page) {
  let dataUrl = endpoints.cars + (page - 1) * pageSize;
  let sizeUrl = endpoints.size;
  if (search != "") {
    const param = "&where=" + encodeURIComponent(`make LIKE "${search}"`);
    dataUrl += param;
    sizeUrl += param;
  }

  const [data, size] = await Promise.all([api.get(dataUrl), api.get(sizeUrl)]);
  return {
    data,
    pages: Math.ceil(size / pageSize),
  };
}

export async function getById(id) {
  return api.get(endpoints.carById + id);
}
