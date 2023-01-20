const dataCat = require("../data/cats.json");

exports.getHomePage = (req, res) => {
  const cats = dataCat.cats;
  const { search } = req.query;

  if (search) {
    let searchCat = cats.filter((c) =>
      c.name.toLowerCase().includes(search.toLowerCase())
    );
    res.render("home", { searchCat });
    return;
  }

  res.render("home", { cats });
};
