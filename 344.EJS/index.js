const express = require("express");
const app = express();
const path = require("path");
const redditData = require("./data.json");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  const data = redditData[subreddit];
  if (data) {
    /*El ... (spread) simplemente es para poder utilizar los valores del .json sin tener que escribir data.objeto cada vez.
    Es decir, data.name lo podrias utilizar solo como name en el EJS
    */
    res.render("subreddit", { ...data });
  } else {
    res.render("notfound", { subreddit });
  }
});

app.get("/rand", (req, res) => {
  let oddEven = "";
  const num = Math.floor(Math.random() * 10) + 1;

  if (num % 2 === 0) {
    oddEven = "Even";
  } else {
    oddEven = "Odd";
  }

  res.render("random", { num, oddEven });
});

app.get("/cats", (req, res) => {
  const cats = ["Mika", "Oliver", "Cleo", "Soda"];
  res.render("cats", { cats });
});

app.listen(3000, () => {
  console.log("LISTENING ON PORT 3000");
});
