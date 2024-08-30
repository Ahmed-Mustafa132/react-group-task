const express = require("express");
const app = express();
const mongoose = require("mongoose");
// const fs = require("fs");
const todoRouter = require("./router/todo");
const userRouter = require("./router/user");
mongoose
  .connect("mongodb://127.0.0.1:27017/todo")
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log(err);
  });
app.use(express.json());
app.use("/", todoRouter);
app.use("/", userRouter);
app.listen(3000, () => {
  console.log("hello the app listen in 3000");
});
