const express = require("express");
const app = express();
const request = require("request");
app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("search");
});

app.get("/results", function(req, res) {
  let search = req.query.search;
  let type = req.query.type;
  let year = req.query.year;
  let page = 1;
  let url = `http://omdbapi.com/?s=${search}&type=${type}&y=${year}&page=${page}&apikey=thewdb`;
  request(url, function(error, response, body) {
    let data = JSON.parse(body);
    res.render("results", {data:data});
  });
});

app.listen(3000, function() {
  console.log("server has started");
});