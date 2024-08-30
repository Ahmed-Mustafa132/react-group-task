const mongoose = require("mongoose");
const todosSchema = mongoose.Schema({
  title: {
    type: String,
    // required: [true, "title is required"],
    // uniquq: true,
    // minLength: 3,
    // maxLength: 20,
    // trim: true,
  },
  status: {
    type: String,
    default: "todo",
  },
});

const todomodule = mongoose.model("Todo", todosSchema);
module.exports = todomodule;
