const http = require("http");
const url = require("url");
const fs = require("fs");

const serverName = "localhost";
const PORT = 3000;

const server = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url, true);

  if (reqUrl.pathname === "/") {
    fs.readFile("index.html", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      res.statusCode = 404;
      res.setHeader("content-type", {
        "Content-Type": "text/html",
        "Content-Length": data.length,
      });
      res.write(data);
      res.end();
    });
  } else if (reqUrl.pathname === "/about") {
    fs.readFile("about.html", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      res.statusCode = 404;
      res.setHeader("content-type", {
        "Content-Type": "text/html",
        "Content-Length": data.length,
      });
      res.write(data);
      res.end();
    });
  } else if (reqUrl.pathname === "/contact-me") {
    fs.readFile("contact-me.html", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      res.statusCode = 404;
      res.setHeader("content-type", {
        "Content-Type": "text/html",
        "Content-Length": data.length,
      });
      res.write(data);
      res.end();
    });
  } else {
    fs.readFile("notFound.html", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      res.statusCode = 404;
      res.setHeader("content-type", {
        "Content-Type": "text/html",
        "Content-Length": data.length,
      });
      res.write(data);
      res.end();
    });
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://${serverName}:${PORT}`);
});
