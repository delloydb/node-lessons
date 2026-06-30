const express = require("express");

// CREATING AN EXPRESS APP
const app = express();

// listening for requests
app.listen(3000);

app.get("/", (res, req) => {
  res.sendFile("./assets/index.html", { root: __dirname });
});

app.get("/", (res, req) => {
  res.sendFile("./assets/about.html", { root: __dirname });
});
//redirects

// error 404
