const express = require("express");
const app = express();

// app.use((req, res) => {
//   console.log("WE GOT A NEW REQUEST!!");
//   res.send("<h1>This is my webpage!</h1>");
// });

app.get("/", (req, res) => {
  res.send("This is the home page!!");
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params; //Esto
  //  Es lo mismo que const subreddit = req.params.subreddit;
  res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`);
});

app.get("/r/:subreddit/:postId", (req, res) => {
  const { subreddit, postId } = req.params;
  console.log(req.params);
  res.send(
    `<h1>Browsing the ${subreddit} subreddit with the id of: ${postId}</h1>`
  );
});

app.get("/cats", (req, res) => {
  res.send("MEOW!!😺");
});

app.get("/dogs", (req, res) => {
  res.send("WOOF!!🐶");
});

app.get("/search", (req, res) => {
  const { q } = req.query;
  res.send(`<h1>Search results for ${q}</h1>`);
  console.log(req.query);
});

app.get("*", (req, res) => {
  res.send("I don't know that path!");
});

app.listen(3000, () => {});
