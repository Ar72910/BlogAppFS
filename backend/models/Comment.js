const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
  {
    comment: {
      type: String,
      require: true,
    },
    author: {
      type: String,
      required: true,
    },
    postId: {
      type: String,
      require: true,
    },
    userId: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);
    
module.exports = mongoose.model("Comment", CommentSchema);
