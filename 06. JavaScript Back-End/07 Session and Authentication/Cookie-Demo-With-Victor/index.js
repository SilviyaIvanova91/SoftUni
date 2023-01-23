const server = require("http")
  .createServer((req, res) => {
    if (req.url == "/") {
      action(req, res);
    } else {
      res.writeHead(404);
      res.end();
    }
  })
  .listen(3000);

function parseCookie(req) {
  if (req.headers.cookie) {
    const cookies = Object.fromEntries(req.headers.cookie)
      .split(";")
      .map((c) => c.trim())
      .map((c) => c.split("="));
    console.log(cookies);

    return cookies;
  }
  return {};
}

const sessions = {};

function action(req, res) {
  const cookies = parseCookie(req);
  const sessionId = cookies.sessionId || (Math.random() * 999999).toString(16);
  let session = sessions[sessionId] || {};

  session.visited = (session.visited || 0) + 1;

  sessions[sessionId] = session;

  //   res.writeHead(200, {
  //     "Set-Cookie": `sessionId=${sessionId}; httpOnly`,
  //   });
  res.writeHead(200, [
    "Set-Cookie",
    `sessionId=${sessionId}; httpOnly`,
    "Set-Cookie",
    "theme = dark",
  ]);
  res.write(
    `<p>Hello</p><p>You have visited this page ${session.visited} times</p>`
  );
  res.end();
}
