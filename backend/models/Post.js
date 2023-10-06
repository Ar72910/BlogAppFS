const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
      unique: true,
    },
    photo: {
      type: String,
      require: false,
    },
    username: {
      type: String,
      require: false,
    },
    userId: {
      type: String,
      require: false,
    },

    categories:{
        type:Array,
      
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
