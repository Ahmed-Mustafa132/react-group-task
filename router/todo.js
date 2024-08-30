const express = require("express");
const router = express.Router();
const {
  getAllTodos,
  getTodoById,
  postTodo,
  updataTodo,
  patchTodo,
  deleteTodo,
} = require("../controllers/todos");
// const router = Router();
router.get("/todo", getAllTodos);
// get todos by id
router.get("/todo/:id", getTodoById);
// post todo
router.post("/todo", postTodo);

// updata todo
router.put("/todo/:id", updataTodo);

router.patch("/todo/:id", patchTodo);
// delete todo
router.delete("/todo/:id", deleteTodo);
module.exports = router;
