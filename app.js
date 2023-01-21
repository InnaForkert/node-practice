const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const shopRoutes = require("./routes/shop");
const adminData = require("./routes/admin");
// const expressHbs = require("express-handlebars");

const app = express();

// app.engine("hbs", expressHbs());
app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

app.listen(3000);
