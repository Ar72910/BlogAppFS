const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const Comment = require("../models/Comment");
const Post = require("../models/Post");
const  verifyToken  = require('../verifyToken');

// create
router.post("/create", verifyToken, async (req, res) => {
  try {
    const newPost = new Post(req.body);
    const savePost = await newPost.save();
    res.status(200).json(savePost);
  } catch (err) {
    res.status(500).json({
      message: "Error while creating post ",
      Error: err,
    });
  }
});

// update
router.put("/:id", verifyToken, async (req, res) => {
  try {
    const updatedUser = await Post.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({
      message: "Error in updating the user",
      error: err,
    });
  }
});

// delete route
router.delete("/:id", verifyToken , async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.status(200).json("Post has been deleted!...");
  } catch (err) {
    res.status(500).json({
      message: "Error in deleting the user",
      error: err,
    });
  }
});

// get Post details

router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({
      message: "Error in getting the post",
      error: err,
    });
  }
});

// get all Posts

router.get("/", async (req, res) => {
    const query = req.query

  try {
    const searchFilter = {
        title:{$regex:query.search,$options:"i"}
    }
    const posts = await Post.find(query.search?searchFilter:null);
    res.status(200).json(posts)
    
  } catch (err) {
    res.status(500).json({
      message: "Error in getting all the posts",
      error: err,
    });
  }
});

// get the Posts of a perticular user

router.get("/user/:userId", async (req, res) => {
  try {
    const posts = await Post.find({ userId: req.params.userId });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({
      message: "Error in getting all the posts",
      error: err,
    });
  }
});

// search post


module.exports = router;
