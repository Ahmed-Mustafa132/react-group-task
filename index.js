const express = require("express");
const app = express();
const todoRouter = require("./router/todo");
app.use(express.json());
app.use("/", todoRouter);
app.listen(3000, () => {
  console.log("hello the app listen in 3000");
});
