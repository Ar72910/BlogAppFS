const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const Comment = require("../models/Comment");
const Post = require("../models/Post");
const  verifyToken = require('../verifyToken');

// comment add
router.post("/create", verifyToken, async (req, res) => {
  try {
    const newComment = new Comment(req.body);
    const saveComment = await newComment.save();
    res.status(200).json(saveComment);
  } catch (err) {
    res.status(500).json({
      message: "Error while creating comment ",
      Error: err,
    });
  }
});

// update
router.put("/:id", verifyToken, async (req, res) => {
  try {
    const updatedComment = await Comment.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedComment);
  } catch (err) {
    res.status(500).json({
      message: "Error in updating the comment",
      error: err,
    });
  }
});

// delete route
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    await Comment.findByIdAndDelete(req.params.id);
    res.status(200).json("Comment has been deleted!...");
  } catch (err) {
    res.status(500).json({
      message: "Error in deleting the comment",
      error: err,
    });
  }
});


// get the Posts comments 

router.get("/post/:postId", async (req, res) => {
  try {
    const comments = await Comment.find({ postId: req.params.postId });
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json({
      message: "Error in getting all the commetn of perticular POST",
      error: err,
    });
  }
});

module.exports = router;
