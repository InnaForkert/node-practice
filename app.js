const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  console.log("alsways");
  next();
});

app.use("/add-product", (req, res, next) => {
  res.send("<h1>Add!</h1>");
});
app.use("/", (req, res, next) => {
  res.send("<h1>Hello!</h1>");
});

app.listen(3000);
