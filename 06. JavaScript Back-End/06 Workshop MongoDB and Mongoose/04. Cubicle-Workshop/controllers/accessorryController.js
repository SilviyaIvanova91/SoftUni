const { createAccessory } = require("../services/accessoryService");
const router = require("express").Router();

exports.getAccessory = (req, res) => {
  res.render("createAccessory");
};

exports.postAccessory = async (req, res) => {
  try {
    let result = await createAccessory(req.body);
    console.log(result);
    res.redirect("/");
  } catch (err) {
    console.log(err);
    res.render("404", {
      titlle: "Request Error",
      body: req.body,
    });
  }
};
