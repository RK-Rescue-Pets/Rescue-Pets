const express = require("express");
const path = require("path");
const dotenv = require("dotenv").config();
const app = express();
const port = 8080;

const controller = (req, res, next) => {
  res.send("test");
};

app.get("/",controller)

app.listen(port, () => {
  console.log(`This app is listening on port ${port}`);
});
