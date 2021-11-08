const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/add", (req, res) => {
  // let v1 = req.query.v1;
  // let v2 = req.query.v2;

  let { v1, v2 } = req.query;

  let sum = parseInt(v1) + parseInt(v2);
  res.json(sum);
});

app.listen(3000, () => console.log("Server running on port 3000"));
