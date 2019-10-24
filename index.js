const express = require("express");
const app = express();
const { home, play } = require("./routes/app");

//ejs
app.set("view engine", "ejs");
app.use("/", express.static("public"));

//routes
app.get("/", home);
app.get('/users', (req,res) => {

    
    res.send("helloworld");
})
app.post("/play", play);

app.listen(8080);
