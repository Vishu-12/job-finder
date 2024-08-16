const express = require("express");
const router = express.Router();
const User = require("../../schemas/user");

router.post("/register", async (req, res) => {
  const { name, email, mobile, password } = req.body;
  console.log(req.body);
  const user = await User.findOne({ email });
  if (user) {
    return res.status(400).json({ message: "User Already Exist" });
  } else {
    const newUser = new User({ name, email, mobile, password });
    await newUser.save();
    res.status(200).json({ message: "User registered successfully" });
  }
});

module.exports = router;
