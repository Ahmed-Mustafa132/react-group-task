const fs = require("fs");
const express = require("express");
const router = express.Router();

// const router = Router();
router.get("/", (req, res) => {
  let todos = JSON.parse(fs.readFileSync("./todos.json", "utf8"));
  if (todos.length == 0) {
    res.status(404).send("No Todos Found!");
    return;
  }
  res.status(200).send(todos);
});
// get todos by id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  let todos = JSON.parse(fs.readFileSync("./todos.json", "utf8"));
  const findTodos = todos.find((t) => t.id === id);

  if (todos.length == 0 || findTodos == undefined) {
    res.status(404).send("No Todos Found!");
    return;
  }

  res.send(findTodos);
});
// post todo
router.post("/", (req, res) => {
  const newTodo = req.body;
  console.log(req.body);
  let todos = JSON.parse(fs.readFileSync("./todos.json", "utf8"));
  const findTodo = todos.find((t) => t.id == newTodo.id);

  if (findTodo) {
    res.status(400).send(`Todo already exists`);
    return;
  }
  todos.push(newTodo);
  fs.writeFileSync("./todos.json", JSON.stringify(todos));
  res.status(201).send(req.body);
});

// updata todo
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const newTodo = req.body;
  let todos = JSON.parse(fs.readFileSync("./todos.json", "utf8"));
  const findTodo = todos.find((t) => t.id == newTodo.id);

  if (todos.length == 0 || findTodo == undefined) {
    res.status(400).send(" Todo Not Found!");
    return;
  }

  todos[todos.indexOf(findTodo)] = { id, ...newTodo };
  fs.writeFileSync("./todos.json", JSON.stringify(todos));
  res.send(todos);
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  let todos = JSON.parse(fs.readFileSync("./todos.json", "utf8"));
  const findTodo = todos.find((t) => t.id == id);

  if (findTodo === undefined) {
    res.status(404).send("Todo Not Found!");
    return;
  }

  todos[todos.indexOf(findTodo)].title = title;
  fs.writeFileSync("./todos.json", JSON.stringify(todos));
  res.status(200).send("Todos partially updated!");
});
// delete todo
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  let todos = JSON.parse(fs.readFileSync("./todos.json", "utf8"));
  const findTodo = todos.find((t) => t.id == id);

  if (todos.length == 0 || findTodo == undefined) {
    res.status(400).send(" Todo Not Found!");
    return;
  }

  todos.splice(todos.indexOf(findTodo), 1);
  fs.writeFileSync("./todos.json", JSON.stringify(todos));
  res.status(200).send(" Todo is Deleted!!");
});
module.exports = router;
