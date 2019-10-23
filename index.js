const app = require("express")();

const { home } = require("./routes/app");

//ejs
app.set("view engine", "ejs");

//routes
app.get("/", home);

app.listen(8080);
