const router = require("express").Router();
const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const Post = require("../models/Post.model");

// update user
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      try {
        req.body.password = await bcrypt.hash(req.body.password, 10);
      } catch (err) {
        return res.status(500).json(err);
      }
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      return res.status(200).json(updatedUser);
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(401).json("You can update only your account");
  }
});

// delete user
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      try {
        await Post.deleteMany({ userName: user.userName });
        await User.findByIdAndDelete(req.params.id);
        return res.status(200).json("Account has been deleted Successfully.");
      } catch (err) {
        return res.status(400).json("User not found");
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(401).json("You can delete only your account");
  }
});

// get a single user by Id
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(400).json("User does not exist.");
    }
    const { password, createdAt, updatedAt, ...data } = user._doc;
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
