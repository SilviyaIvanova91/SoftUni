const app = require("express")();
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

const secret = "super secret stuff";

app.use(cookieParser());

app.use((req, res, next) => {
  const token = req.cookies.token;

  if (token) {
    try {
      const data = jwt.verify(token, secret);
      req.user = data;
    } catch (err) {
      res.cookie("token");
      res.redirect("/login");
    }
  }
  next();
});

app.get("/", (req, res) => {
  if (req.user) {
    res.send("Hello, " + req.user.username);
  } else {
    res.send("Hello, guest");
  }
});

app.get("/jwt", (req, res) => {
  const payload = {
    username: "Peter",
    roles: ["user", "admin"],
  };

  const token = jwt.sign(payload, secret);
  res.cookie("token", token);
  res.send("Token saved");
});

app.listen(3000);
