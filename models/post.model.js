const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },

    content: {
      type: String,
      required: [true, "Content is required"],
    },

    author: {
      name: {
        type: String,
        required: [true, "Author name is required"],
      },
      avatar: {
        type: String,
        required: false,
      },
    },

    image: {
      type: String,
      required: false,
    },

    date: {
      type: Date,
      default: Date.now,
    },
  },

  {
    timestamps: true,
  }
);

const Posts = mongoose.model("Post", postSchema);
module.exports = Posts;
