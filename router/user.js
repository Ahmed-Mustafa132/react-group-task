const express = require("express");
const router = express.Router();
const { getAllUsers, creatUser } = require("../controllers/user");

router.get("/user", getAllUsers);
router.post("/user", creatUser);
module.exports = router;
