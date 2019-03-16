//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
//const request = require("request");
const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


const app = express();
app.set("view engine", "ejs");


app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res){
  var today = new Date();
  var currentDay = today.getDay();
  var day = week[currentDay];

  // if (currentDay === 6 || currentDay === 0) {
  //   day = "Weekend";
  // } else {
  //   day = "Weenday";
  // }
  res.render("list", {kindOfDay: day});
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running on port 3000");
});
