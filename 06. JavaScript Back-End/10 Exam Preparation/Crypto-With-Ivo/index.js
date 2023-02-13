const express = require("express");
const handlebars = require("express-handlebars");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const { authentication } = require("./middlewares/authMiddlewares");

const routes = require("./routes");

const app = express();

app.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs",
  })
);

app.set("view engine", "hbs");

app.use("/static", express.static("public")); // файловете от папка static ги прочети в public
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(authentication); // !!!!! да се използва СЛЕД cookieParser и преди ROUTES --> там е позицията на middleware
app.use(routes);

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost:27017/crypto", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

app.listen(3000, () => console.log(`Server are running on port 3000...`));
