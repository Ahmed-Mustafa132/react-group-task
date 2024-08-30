const usermodule = require("../modele/user");
const getAllUsers = async (req, res) => {
  let users = await usermodule.find({});
  res.status(200).json({ message: "All Users", data: users });
};
const creatUser = async (req, res) => {
  const newUser = req.body;
  try {
    let insertUser = await usermodule.create(newUser);
    res
      .status(201)
      .json({ message: "User created successfully", data: insertUser });
  } catch (err) {
    res.json({ message: err.message });
  }
};
module.exports = { getAllUsers, creatUser };
