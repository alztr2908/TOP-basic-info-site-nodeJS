const express = require("express");
const app = express();
const path = require("path");
const serverName = "localhost";
const PORT = 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname + "/about.html"));
});

app.get("/contact-me", (req, res) => {
  res.sendFile(path.join(__dirname + "/contact-me.html"));
});

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname + "/notFound.html"));
});

app.listen(PORT, () => {
  console.log(`Server running at http://${serverName}:${PORT}`);
});
