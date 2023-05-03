const express = require("express");
const app = express();
const cors = require("cors");

const port = process.env.PORT || 5000;
app.use(cors());

const chefs = require("./Data/chefdata.json");

app.get("/", (req, res) => {
  res.send("Flavour Adventure Running");
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});

app.get("/chefs/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const selectedRecipes = chefs.find(c => c.chef_id === id);
  res.send(selectedRecipes);
});
app.listen(port, () => {
  console.log("port:500");
});
