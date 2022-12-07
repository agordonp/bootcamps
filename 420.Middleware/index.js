const express = require("express");
const app = express();
const morgan = require("morgan");
const AppError = require("./AppError");

app.use(morgan("tiny"));
app.use((req, res, next) => {
  req.requestTime = Date.now();
  console.log(req.method, req.path);
  next();
});

app.use("/dogs", (req, res, next) => {
  console.log("I LOVE DOGS");
  next();
});

const verifyPassword = (req, res, next) => {
  const { password } = req.query;
  if (password === "chickennugget") {
    next();
  }
  // res.send("Sorry, you need a password!");
  throw new AppError("Password required", 401);
  // throw new Error("Password required!");
};

// app.use((req, res, next) => {
//   console.log("THIS IS MY FIRST MIDDLEWARE!!!");
//   return next();
// });

// app.use((req, res, next) => {
//   console.log("THIS IS MY SECOND MIDDLEWARE!!!");
//   return next();
// });

app.get("/", (req, res) => {
  console.log(`REQUEST DATE: ${req.requestTime}`);
  res.send("HOME PAGE!");
});

app.get("/dogs", (req, res) => {
  console.log(`REQUEST DATE: ${req.requestTime}`);
  res.send("WOOF WOOF!");
});

app.get("/secret", verifyPassword, (req, res) => {
  res.send(
    "MY SECRET IS: Sometimes I wear headphones in public so I don't have to talk to anyone"
  );
});

app.get("/admin", (req, res) => {
  throw new AppError("You are not an Admin!", 403);
});

app.use((err, req, res, next) => {
  const { status, message } = err;
  res.status(status).send(message);
});

app.listen(3000, () => {
  console.log("SERVER RUNNING!");
});
