const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const shopRoutes = require("./routes/shop");
const adminRoutes = require("./routes/admin");
const errorController = require("./controllers/error");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
