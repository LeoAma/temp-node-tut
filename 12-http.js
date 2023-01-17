const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to your homepage");
  }
  if (req.url === "/about") {
    res.end("here is your short history");
  }
  res.end(
    `<h1>ops</h1><p>we cant seem to find the page</p><a href="/">back home</a>`
  );
});

server.listen(5000);
