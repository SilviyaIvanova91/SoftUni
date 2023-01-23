const express = require("express");
const session = require("express-session");
const { register, login, users } = require("./userService");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    cookie: { secure: false },
    resave: false,
    saveUninitialized: true,
    secret: "aadsfadsfansma",
  })
);

const homeTemplate = (user, users, isAdmin) => `<h1>Welcome, ${
  user || "guest"
}</h1>
${
  user == undefined
    ? '<p>Plase <a href="/login">login here</a> If you dont have an account, <a href="/register">please register</a></p>'
    : ""
}
${
  isAdmin
    ? `<ul>
${users
  .map(
    (u) =>
      `<li>${u.username} - ${u.failedAttempts} <a href="/reset?username=${u.username}">Reset</a></li>`
  )
  .join("\n")}
</ul>`
    : ""
}`;

app.get("/", (req, res) => {
  let user = {};
  if (req.session.user) {
    user = users.find(
      (u) => u.username.toLowerCase() == req.session.user.toLowerCase()
    );
  }

  console.log(">>> User: " + (user.username || "guest"));

  res.send(
    homeTemplate(user.username, users, (user.role || []).includes("admin"))
  );
});

app.get("/reset", (req, res) => {
  let user = {};
  if (req.session.user) {
    user = users.find(
      (u) => u.username.toLowerCase() == req.session.user.toLowerCase()
    );
  }

  if ((user.role || []).includes("admin") == false) {
    return res.status(403).send("403 Forbidden");
  }
  const target = users.find(
    (u) => u.username.toLowerCase() == req.query.username.toLowerCase()
  );
  target.failedAttempts = 0;
  res.redirect("/");
});

const registerTemplate = (error) => `<h1>Register</h1>
${error ? `<p>${error}</p>` : ""}
<form action="/register" method="post">
<label>Username: <input type="text" name="username"></label>
<label>Password: <input type="password" name="password"></label>
<label>Repeat: <input type="password" name="repass"></label>
<input type="submit" value="Sign up">
</form>
`;

app.get("/register", (req, res) => {
  res.send(registerTemplate());
});

app.post("/register", async (req, res) => {
  try {
    if (req.body.username == "" || req.body.password == "") {
      throw new Error("All fields are required!");
    } else if (req.body.password != req.body.repass) {
      throw new Error("Password dont match!");
    }

    await register(req.body.username, req.body.password);
    res.redirect("/");
  } catch (err) {
    res.send(registerTemplate(err.message));
  }
});

const loginTemplate = (error) => `<h1>Register</h1>
${error ? `<p>${error}</p>` : ""}
<form action="/login" method="post">
<label>Username: <input type="text" name="username"></label>
<label>Password: <input type="password" name="password"></label>
<input type="submit" value="Sign in">
</form>
`;

app.get("/login", (req, res) => {
  res.send(loginTemplate());
});

app.post("/login", async (req, res) => {
  console.log("Login attempt");
  console.log(req.body);

  try {
    const result = await login(req.body.username, req.body.password);
    req.session.user = result.username;
    res.redirect("/");
  } catch (err) {
    res.status(401).send(loginTemplate(err.message));
  }
});

app.get("/getAdmin", (req, res) => {
  const user = users.find(
    (u) => u.username.toLowerCase() == req.session.user.toLowerCase()
  );
  user.role.push("admin");
  res.redirect("/");
});

app.listen(3000);

////------First DEmo-----------
// //const crypto = require("crypto");
// const express = require("express");
// const session = require("express-session");

// const app = express();

// app.use(express.urlencoded({ extended: true }));
// app.use(
//   session({
//     cookie: { secure: false },
//     resave: false,
//     saveUninitialized: true,
//     secret: "aadsfadsfansma",
//   })
// );

// app.get("/", (req, res) => {
//   console.log(">>> User: " + (req.session.user || "guest"));

//   if (req.session.user) {
//     res.send(`<p>Hello, ${req.session.user}</p>`);
//   } else {
//     res.send('<p>Hello, guest</p><p>Plase <a href="/login">login here</a></p>');
//   }
// });

// app.get("/login", (req, res) => {
//   res.send(`<form action="/login" method="post">
// <label>Username: <input type="text" name="username"></label>
// <label>Password: <input type="password" name="password"></label>
// <input type="submit" value="Log in">
// </form>
// `);
// });

// const users = {
//   peter: "123456",
//   john: "qwerty",
// };

// app.post("/login", (req, res) => {
//   console.log("Login attempt");
//   if (
//     users[req.body.username] != undefined &&
//     users[req.body.username] === req.body.password
//   ) {
//     req.session.user = users[req.body.username];
//     res.redirect("/");
//   } else {
//     res.status(401).send("Incorrect username or password");
//   }
// });

// app.listen(3000);
