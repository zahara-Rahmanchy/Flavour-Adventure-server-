const express = require("express");
const app = express();

const port = process.env.PORT || 5000;
const chefs = require("./Data/chefdata.json");
app.get("/", (req, res) => {
  res.send("Flavour Adventure Running");
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});
app.listen(port, () => {
  console.log("port:500");
});
