const router = require("express").Router();
const User = require("../models/User.model");
const bcrypt = require("bcrypt");

// user register
router.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = await User({
      userName: req.body.userName,
      email: req.body.email,
      password: hashedPassword,
      profilePicture: req.body.profilePicture,
    });
    const user = await newUser.save();
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//user login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).json("Incorrect Email Id");
    const validatedPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validatedPassword) return res.status(400).json("Incorrect Password.");
    const { password, createdAt, updatedAt, ...others } = user._doc;
    return res.status(200).json(others);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
