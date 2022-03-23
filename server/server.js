const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/newEndpoint", (req, res) => res.send("This is my new endPoint"));

// Middleware
app.use(express.json());
app.use(morgan("dev"));

// Connect to DB
mongoose.connect(
  "mongodb://localhost:27017/menudb",
  () => console.log("Connected to the DB")
);

//Routes
app.use("/menu", require("./Routes/menuRouter.js"));

// Middleware and Next
app.use("/home", (req, res, next) => {
  console.log("Home Route");
  next();
});

app.get("/home", (req, res, next) => {
  console.log("get req received");
  res.send("Home Page");
});

// Error handler
app.use((err, req, res, next) => {
  console.log(err);
  return res.send({ errMsg: err.message });
});

// Server Listen
app.listen(9000, () => {
  console.log("Server is running on Port 9000");
});
