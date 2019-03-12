//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const url = "https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD";

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req, res) {
  request(url, function(error, response, body) {
    console.log(response.statusCode);
  });
});

app.listen(3000, function() {
  console.log("Server is running on port 3000");
});
