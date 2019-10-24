const app = require("express")();
const { db } = require("../util/admin");

app.set("view engine", "ejs");

exports.home = (req, res) => {
  let test;

  db.collection("data")
    .doc("test")
    .onSnapshot(doc => {
      test = doc.data().sms;    
    });
    
    res.render("home", { data: test });
};
