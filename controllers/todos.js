const todomodule = require("../modele/todo");

// Get All Todos
const getAllTodos = async (req, res) => {
  let todos = await todomodule.find({});
  res.status(200).send(todos);
};
// get todo by id
const getTodoById = async (req, res) => {
  const { id } = req.params;
  try {
    let todo = await todomodule.findById(id);
    if (!todo) {
      res.status(400).json({ message: "Todo Not Found!" });
    }
    res.status(200).json({ data: todo });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
// post todo
const postTodo = async (req, res) => {
  const newTodo = req.body;
  try {
    let insertTodo = await todomodule.create(newTodo);
    res
      .status(201)
      .json({ message: "Todo created successfully", data: insertTodo });
  } catch (err) {
    res.json({ message: err.message });
  }
};
// updata todo
const updataTodo = async (req, res) => {
  const { id } = req.params;
  const newTodo = req.body;
  let todo = await todomodule.findByIdAndUpdate(id, newTodo);
  if (!todo) {
    res.status(400).json({ message: "Todo Not Found!" });
    return;
  }
  res.status(200).json({ message: "Todo Updated successfully", data: todo });
};
const patchTodo = (req, res) => {
  console.log("patch");
  // const { id } = req.params;
  // const { title } = req.body;
  // let todos = JSON.parse(fs.readFileSync("./todos.json", "utf8"));
  // const findTodo = todos.find((t) => t.id == id);
  // if (findTodo === undefined) {
  //   res.status(404).send("Todo Not Found!");
  //   return;
  // }
  // todos[todos.indexOf(findTodo)].title = title;
  // fs.writeFileSync("./todos.json", JSON.stringify(todos));
  // res.status(200).send("Todos partially updated!");
};
const deleteTodo = async (req, res) => {
  // const { id } = req.params;
  // let todo = await todomodule.deleteOne(id);
  // try {
  //   if (!todo) {
  //     res.status(400).json({ message: "Todo Not Found!" });
  //   }
  //   res.status(200).json({ message: "Todo Deleted successfully", data: todo });
  // } catch (err) {
  //   res.status(400).json({ message: err.message });
  // }
};
module.exports = {
  getAllTodos,
  getTodoById,
  postTodo,
  updataTodo,
  patchTodo,
  deleteTodo,
};
