const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: [3, "name must be at least 3 characters"],
  },
});
const usermodule = mongoose.model("user", userSchema);
module.exports = usermodule;
