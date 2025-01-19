const express = require("express"); // import express
const path = require("path");
const app = express(); // create app
const port = 80; // port run on 8000

// EXPRESS SPECIFIC STUFF
app.use(express.static("static")); // serve static files from "static" folder
app.use(express.urlencoded()); // parse urlencoded data

// PUG SPECIFIC STUFF
app.set("view engine", "pug"); // set the template engine as pug
app.set("views", path.join(__dirname, "views")); // set the views directory

// ENDPOINTS
app.get("/", (req, res) => {
  const params = {};
  res.status(200).render("home.pug", params);
});
app.get("/contact", (req, res) => {
  const params = {};
  res.status(200).render("contact.pug", params);
});

// START THE SERVER
app.listen(port, () => {
  console.log(`Server is running successfully on port :${port}`);
});
