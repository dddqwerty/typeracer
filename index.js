const express = require("express");
const app = express();
const { home } = require("./routes/app");

//ejs
app.set("view engine", "ejs");
app.use("/", express.static('public'));

//routes
app.get("/", home);

app.listen(8080);
