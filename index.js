const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Flavour Adventure Running");
});

app.listen(port, () => {
  console.log("port:500");
});
