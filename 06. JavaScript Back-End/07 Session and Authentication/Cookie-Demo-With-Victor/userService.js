const fs = require("fs");
const bcrypt = require("bcrypt");

/*
{
    username: (string),
    hashedPassword: (string),
    failedAttempts: 0,
    role: 'user'|'admin',
}
*/
const users = JSON.parse(fs.readFileSync("./users.txt"));

async function register(username, password) {
  if (users.find((u) => u.username.toLowerCase() == username.toLowerCase())) {
    throw new Error("Username is taken");
  }

  const user = {
    username,
    hashedPassword: await bcrypt.hash(password, 10),
    failedAttempts: 0,
    role: ["user"],
  };
  users.push(user);

  await new Promise((res) =>
    fs.writeFile("./users.txt", JSON.stringify(users, null, 2), res)
  );
}

async function login(username, password) {
  const user = users.find(
    (u) => u.username.toLowerCase() == username.toLowerCase()
  );

  if (!user) {
    throw new Error("Incorrect username or password");
  } else {
    if (user.failedAttempts >= 3) {
      throw new Error("User profile is lockdown. Please contact admins");
    }
    const success = await bcrypt.compare(password, user.hashedPassword);
    if (success) {
      user.failedAttempts = 0;
      return user;
    } else {
      user.failedAttempts++;
      throw new Error("Incorrect username or password");
    }
  }
}

module.exports = {
  users,
  register,
  login,
};
